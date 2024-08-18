import { useNavigate } from "react-router-dom"
import "./Profile.css"
import { checkAuthState, logout } from "../services/firebaseAuth";
import { useEffect, useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => { checkAuthState(setUser) }, []);

  async function accountLogOut() {
    const resp = await logout();
    if (resp) navigate("/login")
    else console.error("Erro ao tentar deslogar")
  }

  return (
    <>
      <div className="profile-info">
        <div className="profile-img">
          <img src={user ? user.photoURL || "https://picsum.photos/200" : "https://picsum.photos/200"} alt="" />
        </div>
        <div className="profile-name">
          <h2>{user ? user.displayName : "Não conectado"}</h2>
        </div>
      </div>
      
      {user ?
        <>
          <button>Editar Perfil</button>
          <button>Alterar Senha</button>
          <div className="log-out">
            <button onClick={accountLogOut}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 17L21 12L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 12H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Sair da conta
            </button>
          </div>
        </>
        :
        <>
          <button onClick={()=>navigate('/login')} style={{fontSize:"25px"}}>Fazer Login</button>
        </>
      }
    </>
  )
}

export default Profile