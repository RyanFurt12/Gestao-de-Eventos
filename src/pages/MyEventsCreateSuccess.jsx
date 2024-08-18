import { Link } from 'react-router-dom'
import check from '../assets/Check.svg'
import "./MyEventsCreateSuccess.css"

function MyEventsCreateSuccess() {
  return (
    <>
      <div className='create-success'>
        <h1>Evento Cadastrado</h1>
        <img src={check} alt="" />
        <Link to={'/search'}>
          <button>
            Buscar outros eventos
            <svg className="search-icon" width="18" height="17" viewBox="0 0 18 17" fill="none">
              <circle cx="6" cy="6" r="5.5" stroke="white" />
              <path d="M10.0487 10L17 16" stroke="white" />
            </svg>
          </button>
        </Link>
      </div>
    </>
  )
}
export default MyEventsCreateSuccess