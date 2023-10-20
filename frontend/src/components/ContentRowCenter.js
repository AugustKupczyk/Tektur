import Carousel from './Carousel';
import React from 'react';
import Nosotros from './Nosotros';
import NuestrosPilares from './NuestrosPilares';
import TopBar from './TopBar';
import { Link } from 'react-router-dom';


function ContentRowCenter() {
    return (
        <React.Fragment>
            <TopBar />
            <section className='welcome-container'>
                <div className='offers'>
                    <p id="obras-mantenimiento"> Obras de Infraestructura</p> <p> - </p> <p id="obras-mantenimiento"> Mantenimiento Integral Edilicio </p>
                </div>
                <div className='big-heading'>
                    <h1 id="innovacion"> INNOVACION EN INGENIERIA DE OBRA </h1>
                    {/* Button to navigate to the projects page */}
                    <Link to="/proyectos">
                        <button>View more projects</button>
                    </Link>
                </div>
            </section>
            <Carousel />
            <Nosotros />
            <NuestrosPilares />
        </React.Fragment>
    );
}

export default ContentRowCenter;
