import { Link } from 'react-router-dom'

function MyEvents() {
    return (
      <>
        <div style={{height:"50px"}}></div>
        <Link to={"./Create"}>
        <button>Criar Evento</button>
        </Link>
        <button>Meus Eventos</button>
        <button>Eventos Favoritos</button>
        <button>Eventos Em Interesse</button>
      </>
    )
}
  
export default MyEvents