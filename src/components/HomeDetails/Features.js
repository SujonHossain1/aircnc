import React from 'react';
import person from '../../assets/images/47498481-a-portrait-of-a-men-in-studio-gray-background.jpg';
import FeaturesDescription from './FeaturesDescription';
import FeaturesDetails from './FeaturesDetails';

const Features = () => {
    return (
        <div className="features">
            <div className="features__top">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Apartment in Lost Panorama </h2>
                    <figure className="mb-1 text-center">
                        <img src={person} alt="" className="img-fluid features__person" />
                        <figcaption className="text-center text-secondary small mt-1">
                            Sujon Hossain
                        </figcaption>
                    </figure>
                </div>
                <div className="text-secondary small py-2">Dhaka, Bangladesh</div>
                <div className="features__beds">
                    <span className="text-secondary small me-2"> 4 Guest</span>
                    <span className="text-secondary small me-2"> 2 Bedrooms</span>
                    <span className="text-secondary small me-2"> 2 Beds</span>
                    <span className="text-secondary small me-2"> 2 Bath</span>
                </div>
            </div>
            <FeaturesDetails />
            <FeaturesDescription />
        </div>
    );
};

export default Features;
