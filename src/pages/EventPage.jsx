import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase'
import './EventPage.css'
import { isColorLight } from "../services/utils";

function EventPage() {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [textColor, setTextColor] = useState('white');

  const navigate = useNavigate()

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventDoc = await getDoc(doc(db, 'events', id));
        if (eventDoc.exists()) {
          setEventData(eventDoc.data());
          setTextColor(isColorLight(eventDoc.data().cor)? 'black' : 'white')
        } else {
          navigate('/404')
        }
      } catch (error) {
        navigate('/404')
      }
    };
    
    fetchEventData();
  }, [id]);

  return (
    <>
      <div style={{color:textColor, backgroundColor:eventData?.cor}} className="event-header">
        <h2>{eventData?.nome || "Nome de Exemplo"}</h2>
        <p>{new Date(eventData?.dataInicio.seconds * 1000).toLocaleString()}</p>
      </div>
      <div className="event-info">
        <div className="event-description">
          <img src="https://picsum.photos/350/500" alt="" />
          <div className="description-text">
            <h3>Descrição</h3>
            <p>{eventData?.descricao ||"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis placeat accusamus qui at ad ipsum quod ex eligendi quisquam deleniti, beatae minima nesciunt atque officia totam culpa nihil? Distinctio!"}</p>
          </div>
        </div>
        <div className="event-photos">
          <img src="https://picsum.photos/351/500" alt="" />
          <img src="https://picsum.photos/352/500" alt="" />
          <img src="https://picsum.photos/353/500" alt="" />
        </div>
      </div>
    </>
  )
}

export default EventPage