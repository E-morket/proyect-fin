
import './App.css';
import Navbar from './components/portafolio/Navbar/Navbar';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute  from './components/protected-route/protected-route';
import Portafolio from './components/portafolio/Portafolio';
import Usuarios from './components/uSuarios/usuarios';
import TablaUsuarios from './components/tablaUsuarios/tablaUsuarios';
import Mensaje from './components/mensaje/mensaje';
import Administracion from './components/administracion/administracion';



import { useState } from 'react'






const App = () => {
  const [isAllowed, setIsAllowed] = useState()


  const functionToGetchildData = (validateRoutePortafolio) => {
    if (validateRoutePortafolio === '') {
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
    console.log('isAllowed', isAllowed)
  }

  return (

    <>
 <Navbar/>
 
      <HashRouter>

        <Routes>

          <Route element={<ProtectedRoute isAllowed={isAllowed} />}className='modal'>

            <Route >
              
            </Route>
            
          </Route>
          <Route  path='/src/components/uSuarios' element={<Usuarios />}/>
          <Route  path='/src/components/tablaUsuarios' element={<TablaUsuarios />}/>
          <Route path='/src/components/administracion/' element={<Administracion />} />
          <Route path='/src/components/mensaje' element={<Mensaje childToParentData={functionToGetchildData} />}/>
          <Route  path='/portafolio' element={<Portafolio/>}/>
          
        </Routes>
      </HashRouter>
      <Portafolio className='modal'>

      </Portafolio>


    </>

  );
}

export default App;