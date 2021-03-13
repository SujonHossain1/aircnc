import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import hotel from '../../assets/images/hotel.jpg';

const SearchResultItem = () => {
    return (
        <div className="row search__item">
            <div className="col-lg-5">
                <img src={hotel} alt="" className="img-fluid search__item__img" />
            </div>
            <div className="col-lg-7">
                <h5>Discover the city's party scene</h5>
                <div className="features__beds">
                    <span className="text-secondary small me-2"> 4 Guest</span>
                    <span className="text-secondary small me-2"> 2 Bedrooms</span>
                    <span className="text-secondary small me-2"> 2 Beds</span>
                    <span className="text-secondary small me-2"> 2 Bath</span>
                </div>
                <p className="text-secondary">Wifi Airr Conditioning Kitches</p>
                <div className="search__item__review">
                    <div className="search__item__review__left">
                        <AiFillStar className="single__home__star" />
                        <span> 4.9 (20) </span>
                    </div>
                    <div>
                        <p className="mb-0">
                            <strong>$20/</strong>
                            <span className="small">Night</span>
                        </p>
                        <p className="small text-secondary">$152 total</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultItem;
