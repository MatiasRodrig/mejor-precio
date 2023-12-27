import './App.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Mercados from './Pages/Mercados';
import Colonias from './Pages/Colonias'
import Perfil from './Pages/Perfil';
import Precios from './Pages/Precios';
import Contacto from './Pages/Contacto';
import Info from './Pages/Info';



function App() {

  const router = createBrowserRouter([

    {
      label: 'Inicio', path: '*', element: <Inicio />
    },
    { label: 'Perfil', path: '/profile', element: <Perfil /> },
    { label: 'Mercados', path: '/mercados', element: <Mercados /> },
    { label: 'Colonias', path: '/colonias', element: <Colonias /> },
    { label: 'Precios', path: '/precios', element: <Precios /> },
    { label: 'Contacto', path: '/contact', element: <Contacto /> },
    { label: 'Acerca de', path: '/about', element: <Info /> },
  ])


  return (
    <>
      
      <RouterProvider router={router} />
  
    </>
  );
}

export default App;