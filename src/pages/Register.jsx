import logo1 from "../assets/logo1.png"
import { useNavigate } from 'react-router-dom'
import './Register.css'
import { useEffect, useState } from "react";
import { checkAuthState, signup } from "../services/firebaseAuth";

function Register() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    checkAuthState((user) => { if (user) { navigate('/') } })
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleRegister = async () => {
    if (!displayName || !email || !password || !password2) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (password !== password2) {
      setError('As senhas não correspondem.');
      return;
    }

    const resp = await signup(email, password, displayName)
    if(resp) navigate('/');
    else setError('Algo deu errado, tente novamente'); 
  };

  return (
    <>
      <div className="register-title">
        <img src={logo1} alt="" />
        <h1>Eventify</h1>
      </div>

      <form className="register">
        <p>Nome Completo</p>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <p>E-mail</p>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Senha</p>
        <input
          type="password"
          placeholder="Digite sua senha..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <p>Confirmação de senha</p>
        <input
          type="password"
          placeholder="Digite sua senha..."
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        {error ? <p style={{ textAlign: 'center', color: 'red' }}>{error}</p> : ""}
      </form>
      <button onClick={handleRegister}>Confirmar</button>

    </>
  )
}

export default Register