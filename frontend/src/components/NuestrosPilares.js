import React from 'react';
import Box from './Box'; // Import the Box component

function NuestrosPilares() {
    return (
        <div id="nuestros-pilares" className="container" >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>NUESTROS PILARES</h2>
            <div className="d-flex justify-content-between flex-wrap">
                <div className="col-md-3 mb-4">
                    <Box
                        boxHeading="Arquitectura"
                        boxImage="image1.jpg"
                        boxAlt="Image 1"
                        boxText="Desarrollamos proyectos arquitectónicos de todo tipo, tamaño
                        y uso adaptándonos a las necesidades y alcance de nuestros
                        clientes, desde proyectos para obras nuevas como también
                        remodelaciones y ampliaciones."
                    />
                </div>
                <div className="col-md-3 mb-4">
                    <Box
                        boxHeading="Construcción"
                        boxImage="image2.jpg"
                        boxAlt="Image 2"
                        boxText="Llevamos a cabo todo tipo de obras, desde refacciones hasta
                        obras nuevas. Desarrollamos obras de viviendas familiares,
                        civiles, edificios de salud, ferroviarios, escolares y
                        gubernamentales entre otras."
                    />
                </div>
                <div className="col-md-3 mb-4">
                    <Box
                        boxHeading="Servicios"
                        boxImage="image3.jpg"
                        boxAlt="Image 3"
                        boxText="Nos dedicamos a realizar mantenimiento edilicio de todo tipo y
                        alcance. Elaboramos y llevamos a cabo planes de
                        mantenimiento preventivo y correctivo con rutinas
                        preestablecidas."
                    />
                </div>
                <div className="col-md-3 mb-4">
                    <Box
                        boxHeading="Innovación"
                        boxImage="image4.jpg"
                        boxAlt="Image 4"
                        boxText="Desarrollamos proyectos innovadores en diseño y materiales
                        constructivos que nos permiten estar a la vanguardia de las
                        últimas tendencias del mercado.Somos pioneros en la utilización de Hormigón Celular Curado
                        en Autoclave."
                    />
                </div>
            </div>
        </div>
    );
}

export default NuestrosPilares;