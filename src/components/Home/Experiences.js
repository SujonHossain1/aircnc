import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import SingleHome from '../Shared/SingleHome/SingleHome';

const Experiences = () => {
    return (
        <div className="row g-1">
            <div className="title">
                <h5>Experiences</h5>
                <Link to="/" className="title__link">
                    See All <BiChevronRight className="title__link__icon" />
                </Link>
            </div>
            <div className="col-md-3">
                <SingleHome />
            </div>
        </div>
    );
};

export default Experiences;
