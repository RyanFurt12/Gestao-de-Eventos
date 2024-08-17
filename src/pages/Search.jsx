import MyAdressDrop from "../components/MyAdressDrop"
import EventCard from '../components/EventCard.jsx';
import fetchNextEvents from "../services/fetchNextEvents.jsx";

import './Search.css'
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Search() {
  const [nextEvents, setnextEvents] = useState(null);
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    const loadEvents = async () => {
        const events = await fetchNextEvents();
        setnextEvents(events);
    };

    loadEvents();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    setSearchQuery(query);
  }, [location]);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <MyAdressDrop />
      <div style={{ height: "50px" }}></div>

      <label id="search-bar">
        <svg className="search-icon" width="18" height="17" viewBox="0 0 18 17" fill="none"
          onClick={handleSearch}
          style={{ cursor: query.trim() ? 'pointer' : 'default' }}
        >
          <circle cx="6" cy="6" r="5.5" stroke="black" />
          <path d="M10.0487 10L17 16" stroke="black" />
        </svg>
        <input type="text" placeholder="Busque por eventos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyUp}
        />
      </label>

      {!searchQuery ? (
        <>
          <h2>Categorias de Eventos</h2>
          <div className="grid-event-categorias">
            <EventCard
              name="Festivais de Cultura"
              color="#106122"
            />
            <EventCard
              name="Eventos de Integração"
              color="#A32822"
            />
            <EventCard
              name="Conferencias e Seminarios"
              color="#FF95D5"
            />
            <EventCard
              name="Workshops e Treinamentos"
              color="#FF7CAF"
            />
            <EventCard
              name="Feiras e Exposições"
              color="#45757C"
            />
            <EventCard
              name="Eventos Corporativos"
              color="#FFD542"
            />
            <EventCard
              name="Shows e Concertos"
              color="#C36725"
            />
            <EventCard
              name="Eventos Esportivos"
              color="#149885"
            />
            <EventCard
              name="Celebrações"
              color="#770505"
            />
            <EventCard
              name="Eventos Acadêmicos"
              color="#767676"
            />
            <EventCard
              name="Lançamentos e Inaugurações"
              color="#DAB73D"
            />
            <EventCard
              name="Eventos Virtuais"
              color="#427581"
            />
          </div>
        </>
      ) : (
        <>
          <h2>Resultados da pesquisa para "{searchQuery}"</h2>
          <div className="search-results">
            {nextEvents}
          </div>
        </>
      )}

    </>
  )
}

export default Search