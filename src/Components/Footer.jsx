import React from 'react'
import { AiTwotoneTags } from "react-icons/ai";
import styled from 'styled-components';



const Foot = styled.footer`
.footer-container {
  font-family: 'Roboto';
  text-align: center;
}

.info-content {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
}

.right-info{
    text-align: justify;
}

.info-tite {
  font-size: 1rem;
  color: #333;
}

.info-list{
    list-style: none;
}

.icono {
    font-size: 80px;
}
`

function Footer() {
    return (
        <Foot>
            <footer className='footer-container'>
                <h3 className='info-title'>Creado por Matias Omar Rodriguez</h3>
                <div className="info-content">
                    <div className="left-info">
                        <a href="/">
                            <AiTwotoneTags className='icono' />
                        </a>
                    </div>
                    <div className="right-info">
                        <h3>Contacto</h3>
                        <ul className='info-list'>
                            <li>Numero de Contacto: +54 3755-206484</li>
                            <li>Correo Electronico: tm_mor@hotmail.com</li>
                            <li><a href="/contact">Página de Contacto</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </Foot>
    )
}

export default Footer
