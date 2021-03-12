import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import image from '../../../assets/images/kKa8jx6.jpg';
import '../../../assets/styles/single-home.scss';

const SingleHome = () => {
    return (
        <div className="single__home">
            <img src={image} alt="" className="img-fluid single__home__img" />
            <h6>NIGHTLIFE.NEW YORK</h6>
            <h3>Discover the city's party scene</h3>
            <span className="text-secondary small">$35 per person</span>
            <div className="single__home__reviews">
                <div className="single__home__stars">
                    <AiFillStar className="single__home__star" />
                    <AiFillStar className="single__home__star" />
                    <AiFillStar className="single__home__star" />
                    <AiFillStar className="single__home__star" />
                    <AiOutlineStar className="single__home__star" />
                </div>
                <span className="mx-2 text-secondary small"> 64 </span>
            </div>
        </div>
    );
};

export default SingleHome;
