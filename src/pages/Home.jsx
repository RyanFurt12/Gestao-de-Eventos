import React, { useState, useEffect } from 'react';

import Carousel from '../components/Carousel'
import MyAdressDrop from '../components/MyAdressDrop'
import fetchNextEvents from '../services/fetchNextEvents';

import './Home.css'

function Home() {
	const [nextEvents, setnextEvents] = useState(null);

  useEffect(() => {
			const loadEvents = async () => {
					const events = await fetchNextEvents();
					setnextEvents(events);
			};

			loadEvents();
	}, []);

	return (
		<>
			<MyAdressDrop />
			<div className="home-container">
				<div className="my-next-events">
					<h2>Seus Proxímos Eventos</h2>
					<Carousel>
						{nextEvents}
					</Carousel>
				</div>

				<div className="sugestion-events">
					<h2>Sugestões de eventos</h2>
					<div className="scroll-container">
						{nextEvents}
					</div>
				</div>
			</div>
		</>
	)
}

export default Home