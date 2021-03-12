import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Title = ({ title }) => {
    return (
        <div className="title mt-5">
            <h5> {title} </h5>
            <Link to="/" className="title__link">
                See All <BiChevronRight className="title__link__icon" />
            </Link>
        </div>
    );
};

export default Title;
