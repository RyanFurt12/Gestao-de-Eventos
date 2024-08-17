import "./Profile.css"

function Profile() {
    return (
      <>
        <div className="profile-info">
          <div className="profile-img">
            <img src="https://s3.wasabisys.com/instax/74/instax/2023/03/fotos-fofas-para-perfil-1678633942-2048x1536.jpeg" alt="" />
          </div>
          <div className="profile-name">
            <h2>Ryan Furtado</h2>
            <h3>Ele / Dele</h3>
          </div>
        </div>
        <button>Editar Perfil</button>
        <button>Alterar Senha</button>
        <div className="log-out">
          <button>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17L21 12L16 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 12H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Sair da conta
          </button>
        </div>
      </>
    )
}
  
export default Profile