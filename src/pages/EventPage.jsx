import { useParams } from "react-router-dom"

import './EventPage.css'

function EventPage() {
  const { id } = useParams();

  return (
    <>
      <div className="event-header">
        <h2>InovaTech Nipo-Brasil</h2>
        <p>12/05/25 e 13/05/25 das 07h as 18h</p>
      </div>
      <div className="event-description">
        <img src="https://picsum.photos/350/500" alt="" />
        <div className="description-text">
          <h3>Descrição</h3>
          <p>O InovaTech Nipo-Brasil é um evento pioneiro que celebra a união das culturas japonesa e brasileira através da inovação tecnológica e empresarial. Com o objetivo de promover a troca de conhecimentos, experiências e tecnologias entre os dois países, o evento reúne profissionais, empreendedores, estudantes e entusiastas de diversas áreas para explorar as mais recentes tendências em tecnologia, sustentabilidade, e negócios.</p>
        </div>
      </div>
      <div className="event-photos">
        <img src="https://picsum.photos/351/500" alt="" />
        <img src="https://picsum.photos/352/500" alt="" />
        <img src="https://picsum.photos/353/500" alt="" />
      </div>
    </>
  )
}

export default EventPage