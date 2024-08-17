import logo1 from "../assets/logo1.png"
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
    return (
      <>
        <div className="register-title">
          <img src={logo1} alt="" />
          <h1>Eventify</h1>
        </div>

        <div className="register"> 

          <p>Nome Completo</p>
          <input type="name" placeholder="Digite seu nome..."/>

          <p>Nome de Usuário</p>
          <input type="user" placeholder="Digite seu usuário..."/>
          
          <p>E-mail</p>
          <input type="email" placeholder="Digite seu e-mail..."/>

          <p>Senha</p>
          <input type="password" placeholder="Digite sua senha..."/>
        </div>

        <div>
          <Link to={"/"}>
          <button>Continuar</button>
          </Link>
        </div>
      </>
    )
}
  
export default Register