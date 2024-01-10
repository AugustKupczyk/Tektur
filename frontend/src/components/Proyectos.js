import React from 'react';
import TopBar from './TopBar';

function Proyectos() {
    return (
        <React.Fragment>
            <TopBar />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 my-4">
                        <div className="image-container text-center">
                            <img src="your_image_url_1.jpg" alt="Image 1" className="img-fluid" />
                            <div className="text-container">
                                <h2 className="title">Title 1</h2>
                                <p className="subtitle">Subtitle 1</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 my-4">
                        <div className="image-container text-center">
                            <img src="your_image_url_2.jpg" alt="Image 2" className="img-fluid" />
                            <div className="text-container">
                                <h2 className="title">Title 2</h2>
                                <p className="subtitle">Subtitle 2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Proyectos;