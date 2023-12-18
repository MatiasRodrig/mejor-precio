import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Footer from '../Components/Footer'


const Section = styled.section`
    display: flex;
`

const Div = styled.div`
background-color: #242424;
color: rgba(242, 242, 242, 0.87);;
width: 100%;
height: 15%;
text-align: end;

@media screen and (max-width: 1300px) {
    padding: 10px;
    font-size: 1rem;
    padding-right: 15px;
}
`;

const NavBar = styled.div`
background-color: #242424;
`

const Grid = styled.section`
.grid-title {
    text-align: center;
}

.mejores-grid {
    display: flex;
  gap: 16px;
}

.productos-card {
    border: 1px solid black;
    padding: 25px;
    width: auto;
    height: auto;
}

`


function Mercados() {

    return (
        <>
            <Section>
                <NavBar className="navbar-in">
                    <Navbar />
                </NavBar>
                <Div>
                    <h3>Precios por mercado</h3>
                </Div>
            </Section>
            <Grid className='grid'>
                <div className="mejores-precios">
                    <h2 className='grid-title'>Ceferino Rodriguez.</h2>
                    <div className="mejores-grid">
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                    </div>
                </div>
            </Grid>

            <Grid className='grid'>
                <div className="mejores-precios">
                    <h2 className='grid-title'>El Toto.</h2>
                    <div className="mejores-grid">
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                    </div>
                </div>
            </Grid>

            <Grid className='grid'>
                <div className="mejores-precios">
                    <h2 className='grid-title'>Don Gustavo.</h2>
                    <div className="mejores-grid">
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                        <div className="productos-card"></div>
                    </div>
                </div>
            </Grid>
            <Footer />
        </>
    )
}

export default Mercados