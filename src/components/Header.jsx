import { Link } from 'react-router-dom'
import './header.css';
import homeIcon from '../assets/iconHome.svg'
import searchIcon from '../assets/iconSearch.svg'
import eventIcon from '../assets/iconEvents.svg'
import profileIcon from '../assets/iconProfile.svg'

const navPages = [
  {
    name: 'INÍCIO',
    icon: homeIcon,
    linkPath: '/'
  },
  {
    name: 'BUSCAR',
    icon: searchIcon,
    linkPath: '/search'
  },
  {
    name: 'EVENTOS',
    icon: eventIcon,
    linkPath: '/my-events'
  },
  {
    name: 'PERFIL',
    icon: profileIcon,
    linkPath: '/profile'
  }
]

function Header() {
  return (
    <>
      <nav className='main-nav'>
        {
          navPages.map(ni => {
            const isActive = ni.linkPath === '/'
              ? window.location.pathname === '/'
              : window.location.pathname.startsWith(ni.linkPath);

            return (
              <Link
                key={ni.linkPath}
                to={ni.linkPath}
                className={'navbar-item' + (isActive ? ' navbar-active' : '')}
              >
                <img src={ni.icon} alt="" />
                {ni.name}
              </Link>
            )
          })
        }
      </nav>
    </>
  )
}

export default Header