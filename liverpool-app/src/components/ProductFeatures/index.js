import React from 'react';

const Features = ( { dimensions } ) => (
    <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-3 product-title">
                <div>Tamaño: {dimensions}</div>
            </div>
        </div>
    </div>
)

export default Features;