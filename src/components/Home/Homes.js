import React from 'react';
import SingleHome from '../Shared/SingleHome/SingleHome';
import Title from '../Shared/Title/Title';

const Homes = () => {
    return (
        <>
            <Title title="Homes" />
            <div className="row">
                <div className="col-md-4">
                    <SingleHome />
                </div>
            </div>
        </>
    );
};

export default Homes;
