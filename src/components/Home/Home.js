import React from 'react';
import '../../assets/styles/home.scss';
import Experiences from './Experiences';
import Homes from './Homes';
import Search from './Search';

const Home = () => {
    console.log('home__section');
    return (
        <section className="home__section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4 className="mb-3 mt-2">Where do you want to go</h4>
                        <Search />
                    </div>
                    <div className="col-md-8">
                        <Experiences />
                        <Homes />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
