import { Link } from 'react-router-dom'
import './EventCard.css'
import { useEffect, useState } from 'react';

function EventCard({ name, color, date }) {
	const [type, setType] = useState(1);

	useEffect(() => { setType(Math.ceil(Math.random() * 4)) }, []);

	return (
		<>
			<Link
				className="event-card"
				style={{ backgroundColor: color }}
			>
				<div className={"card-simbol type" + type}></div>
				<h3>{name}</h3>
				<p>{date}</p>
			</Link>
		</>
	)
}

export default EventCard