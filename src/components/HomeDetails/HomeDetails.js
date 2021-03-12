import React from 'react';
import '../../assets/styles/home-details.scss';
import Features from './Features';
import Pricing from './Pricing';
import TopImages from './TopImages';

const HomeDetails = () => {
    return (
        <section className="home__details">
            <TopImages />
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-7">
                        <Features />
                    </div>
                    <div className="col-md-5">
                        <Pricing />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeDetails;
