import { db } from './firebase.jsx';
import { collection, query, orderBy, limit, getDocs, where } from 'firebase/firestore';
import EventCard from '../components/EventCard.jsx';

async function fetchNextEvents() {
    try {
        const eventsQuery = query(
            collection(db, 'events'),
            where('dataInicio', '>=', new Date()),
            orderBy('dataInicio', 'asc'),
            limit(5)
        );
        const querySnapshot = await getDocs(eventsQuery);
        const eventsList = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        if (eventsList.length === 0) {
            throw new Error('No upcoming events found');
        }

        return eventsList.map(event => (
            <EventCard
                key={event.id}
                name={event.nome}
                color={event.cor}
                date={new Date(event.dataInicio.seconds * 1000).toLocaleString()}
            />
        ));
    } catch (error) {
        console.error('Erro ao buscar eventos: ', error);

        const colors = ['#810000', "#1b702c", "#0F4D67"];
        return colors.map((color, id) => (
            <EventCard
                key={id}
                name="Japão Music Fest"
                color={color}
                date={new Date().toLocaleString()}
            />
        ));        
    }
}

export default fetchNextEvents;
