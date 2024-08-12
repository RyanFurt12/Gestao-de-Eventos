import { Link } from 'react-router-dom'
import './EventCard.css'

function EventCard({ name, color, date }) {
	return (
		<>
			<Link
				className="event-card"
				style={{ backgroundColor: color }}
			>
				<div className={"card-simbol type" + Math.ceil(Math.random() * 4)}></div>
				<h3>{name}</h3>
				<p>{date}</p>
			</Link>
		</>
	)
}

export default EventCard