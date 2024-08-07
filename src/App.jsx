import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';

function App() {

  return (
    <>
      <div className='content-container'>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <>
                  {!route.notShowHeader && <Header />}
                  <route.component />
                  {!route.notShowFooter && <Footer />}
                </>
              }
            />
          ))}
        </Routes>
      </div>
    </>
  )
}

export default App
