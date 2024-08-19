import { Link } from 'react-router-dom'
import './EventCard.css'
import { useEffect, useState } from 'react';

import { isColorLight } from '../services/utils'

function EventCard({ id, name, color, date }) {
	const [type, setType] = useState(1);

	useEffect(() => { setType(Math.ceil(Math.random() * 4)) }, []);
	const textColor = isColorLight(color)? 'black' : 'white';

	return (
		<>
			<Link
				to={"/event/" + id}
				className="event-card"
				style={{ backgroundColor: color, color: textColor}}
			>
				<div className={"card-simbol type" + type}></div>
				<h3>{name}</h3>
				<p>{date}</p>
			</Link>
		</>
	)
}

export default EventCard