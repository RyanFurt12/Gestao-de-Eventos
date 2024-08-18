import { useEffect, useState } from "react";
import logo1 from "../assets/logo1.png"
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { checkAuthState, login } from "../services/firebaseAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [onError, setOnError] = useState(false);
  
  const navigate = useNavigate();

  async function tryLogin(){
    setOnError(false)
    login(email, senha).then((resp) => {
      if (resp){
        navigate('/')
      }
      else{
        setOnError(true)
      }
    });
  }

  useEffect(() => {
    checkAuthState((user)=>{if(user){navigate('/')}})
  }, []);

  return (
    <>
      <div className="title">
        <img src={logo1} alt="" />
        <h1>Eventify</h1>
        <h3>Planeje e vivencie eventos inesquecíveis – tudo em um só lugar!</h3>
      </div>

      <form onKeyUp={(e)=>{if(e.key == "Enter"){tryLogin()}}} className="access">
        <input onChange={ e => setEmail(e.target.value) } value={email} type="email" placeholder="E-mail" />
        <input onChange={ e => setSenha(e.target.value) } value={senha} type="password" placeholder="Senha" />
        {onError? <p style={{textAlign:"center", color:"red"}}>O Email ou senha estão incorretos!</p>:""}
      </form>


      <div className="access-button">
        <button>Esqueceu a Senha?</button>
        <button onClick={tryLogin}>Entrar</button>
      </div>

      <div className="ou"></div>

      <div className="access-by-google-insta">
        <button className="google">
          Google
        </button>
        <button className="insta">
          Instagram
        </button>
      </div>

      <div className="register">
        <button onClick={()=>navigate('/register')}>Não tem cadastro ainda? <span>Cadastra-se</span></button>
      </div>
    </>
  )
}

export default Login