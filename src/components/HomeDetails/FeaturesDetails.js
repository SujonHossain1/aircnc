import React from 'react';
import { FaCheckSquare, FaUser } from 'react-icons/fa';
import { GiCrystalShrine } from 'react-icons/gi';
import { HiHome } from 'react-icons/hi';

const FeaturesDetails = () => {
    return (
        <div className="features__details">
            <div className="features__details__item">
                <HiHome className="fetures__details__icon" />
                <div className="features__details__text">
                    <h6>Entire Home</h6>
                    <p className="text-secondary">You have the controimum to yourself</p>
                </div>
            </div>
            <div className="features__details__item">
                <FaCheckSquare className="fetures__details__icon" />
                <div className="features__details__text">
                    <h6>Self Check-in </h6>
                    <p className="text-secondary">You can check in with the doorman</p>
                </div>
            </div>
            <div className="features__details__item">
                <GiCrystalShrine className="fetures__details__icon" />
                <div className="features__details__text">
                    <h6>Sparking clean</h6>
                    <p className="text-secondary">10 recent guest said this place Sparking clean</p>
                </div>
            </div>
            <div className="features__details__item">
                <FaUser className="fetures__details__icon" />
                <div className="features__details__text">
                    <h6>Rowdra is a Superhost</h6>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis provident
                        enim expedita odit ut et at.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesDetails;
