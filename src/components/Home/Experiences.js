import React from 'react';
import SingleHome from '../Shared/SingleHome/SingleHome';
import Title from '../Shared/Title/Title';

const Experiences = () => {
    return (
        <>
            <Title title="Experiences" />
            <div className="row g-2">
                <div className="col-md-3">
                    <SingleHome />
                </div>
                <div className="col-md-3">
                    <SingleHome />
                </div>
                <div className="col-md-3">
                    <SingleHome />
                </div>
                <div className="col-md-3">
                    <SingleHome />
                </div>
            </div>
        </>
    );
};

export default Experiences;
