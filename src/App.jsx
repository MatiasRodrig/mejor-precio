import './App.css'
import Navbar from './Components/Navbar';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Mercados from './Pages/Mercados';



function App() {

  const router = createBrowserRouter([

    {
      label: 'Inicio', path: '*', element: <Inicio/>
    },
    { label: 'Perfil', path: '/profile' },
    { label: 'Mercados', path: '/mercados', element: <Mercados/> },
    { label: 'Colonias', path: '/colonias' },
    { label: 'Precios', path: '/precios' },
    { label: 'Contacto', path: '/contact' },
    { label: 'Acerca de', path: '/about' },
  ])


  return (
    <>
      
      <RouterProvider router={router} />
  
    </>
  );
}

export default App;