import { Link } from 'react-router-dom'
import "./MyEvents-Create.css"
import { useState } from 'react'


function MyEventsCreate() {
	const [title, setTitle] = useState("")
	const [desc, setDesc] = useState("")
	const [color, setColor] = useState("#e66465")
	const [date1, setDate1] = useState("")
	const [time1, setTime1] = useState("")
	// const [date2, setDate2] = useState("")
	// const [time2, setTime2] = useState("")
	
	return (
		<>
			<div className='titleCreate'>
				<h1>Crie seu Evento</h1>
			</div>

			<div className='description'>
				<input value={title} onChange={ e => setTitle(e.target.value) } type="title" placeholder='Digite o título do evento...' />
				<textarea value={desc} onChange={ e => setDesc(e.target.value) } type="description" placeholder='Descrição do evento...' />
			</div>

			<div className='grid-2'>
				<p>Selecione uma cor</p>
				<input type="color" value={color} onChange={ e => setColor(e.target.value) }/>
			</div>

			<p className='text'>Data e Hora de inicio</p>
			<div className='grid-2'>
				<input value={date1} onChange={ e => setDate1(e.target.value) } id="date" type="date" />
				<input value={time1} onChange={ e => setTime1(e.target.value) } id="time" type="time" />
			</div>

			{/* <p className='text'>Data e Hora de final</p>
			<div className='grid-2'>
				<input value={date2} onChange={ e => setDate2(e.target.value) } id="date" type="date" />
				<input value={time2} onChange={ e => setTime2(e.target.value) } id="time" type="time" />
			</div> */}

			<div>
				<Link to={"/my-events/Create/Success"}>
					<button>Criar o Evento</button>
				</Link>
			</div>



		</>
	)
}

export default MyEventsCreate