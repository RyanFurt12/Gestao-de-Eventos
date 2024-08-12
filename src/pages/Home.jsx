import Carousel from '../components/Carousel'
import EventCard from '../components/EventCard'
import MyAdressDrop from '../components/MyAdressDrop'
import './Home.css'

function Home() {
	return (
		<>
			<MyAdressDrop />
			<div className="home-container">
				<div className="my-next-events">
					<h2>Seus Proxímos Eventos</h2>
					<Carousel>
						<EventCard
							name="Japão Music Fest"
							color="#810000"
							date="Quarta - 17/08 as 09:30"
						/>
						<EventCard
							name="Japão Music Fest"
							color="#1b702c"
							date="Quarta - 17/08 as 09:30"
						/>
						<EventCard
							name="Japão Music Fest"
							color="#0F4D67"
							date="Quarta - 17/08 as 09:30"
						/>
					</Carousel>
				</div>

				<div className="sugestion-events">
					<h2>Sugestões de eventos</h2>
					<div className="scroll-container">
						<EventCard
							name="Japão Music Fest"
							color="#810000"
							date="Quarta - 17/08 as 09:30"
						/>
						<EventCard
							name="Japão Music Fest"
							color="#0F4D67"
							date="Quarta - 17/08 as 09:30"
						/>
						<EventCard
							name="Japão Music Fest"
							color="#1b702c"
							date="Quarta - 17/08 as 09:30"
						/>
						<EventCard
							name="Japão Music Fest"
							color="#0F4D67"
							date="Quarta - 17/08 as 09:30"
						/>
						<EventCard
							name="Japão Music Fest"
							color="#1b702c"
							date="Quarta - 17/08 as 09:30"
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home