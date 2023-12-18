import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from 'react-icons/fi';
import styled from 'styled-components';

const routes = [
  { label: 'Inicio', path: '/' },
  { label: 'Perfil', path: '/profile' },
  { label: 'Mercados', path: '/mercados' },
  { label: 'Colonias', path: '/colonias' },
  { label: 'Precios', path: '/precios' },
  { label: 'Contacto', path: '/contact' },
  { label: 'Información', path: '/about' },
];

const Nav = styled.nav`
  width: 25%;
  margin-left: 3px;
  margin-right: 2px;
`;



const Hamburger = styled.div`
color: rgba(242, 242, 242, 0.87);
font-size: 30px;
margin-left: 5px;
margin-top: 2px;
`;

const MenuLink = styled(Link)`
display: flex;
flex-direction: column;
list-style: none;
text-decoration: none;
color: rgba(242, 242, 242, 0.87);
font-size: 0.8rem;
padding: 8px 8px 10px 15px;
height: auto;
border-top: 1px solid #ffffff;
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <FiAlignJustify />
        </Hamburger>
        {isOpen && routes.map((route, index) => (
          <MenuLink key={index} to={route.path}>
            {route.label}
          </MenuLink>
        ))}
      </Nav>
    </>
  );
};

export default Navbar;