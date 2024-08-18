import { Link } from 'react-router-dom'
import "./MyEvents-Create.css"


function MyEventsCreate(){
    return (
        <>
        <div className='titleCreate'>
            <h1>Crie seu Evento</h1>
        </div>

        <div className='description'>
            <input type="title" placeholder='Digite o título do evento...' />

            <textarea type="description" placeholder='Descrição do evento...' />
            
            <input type="Location" placeholder='Localização...' />
            

        </div>
        
        <p className='text'>Data e Hora de inicio</p>
        <div className='DateTime'>
            <input id="date" type="date" />
            <input id="time" type="time" />
        </div>

        <p className='text'>Data e Hora de final</p>
        <div className='DateTime'>
            <input id="date" type="date" />
            <input id="time" type="time" />
        </div>

        <div>
            <Link to={"/my-events/Create/Success"}> 
            <button>Criar o Evento</button>
            </Link>
        </div>
        


        </>
    )
}

export default MyEventsCreate