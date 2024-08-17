import logo1 from "../assets/logo1.png"
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
      <>
        
        <div className="title">
          <img src={logo1} alt="" />
          <h1>Eventify</h1>
          <h3>Planeje e vivencie eventos inesquecíveis – tudo em um só lugar!</h3>
        </div>

        <div className="access">
          <input type="text" placeholder="Usuário"/>
          <input type="password" placeholder="Senha" />
        </div>


        <div className="access-button">
          <button>Esqueceu a Senha?</button>
          <Link to={"/"}>
            <button>Entrar</button>
          </Link>
        </div>

        <div className="ou"></div>

        <div className="access-by-google-insta">
          <button className="google">Google</button>
          <button className="insta">Instagran</button>
        </div>
        
        <div className="register">
          <Link to={"/register"}>
          <button>Não tem cadastro ainda? <span>Cadastra-se</span></button>
          </Link>
        </div>
      </>
    )
}
  
export default Login