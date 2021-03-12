import React from 'react';
import image2 from '../../assets/images/photo-1522708323590-d24dbb6b0267.jpeg';
// import image1 from '../../assets/images/photo-1560347876-aeef00ee58a1.jpeg';

const TopImages = () => {
    return (
        <div className="container-fluid">
            <div className="row g-0">
                <div className="col-lg-6">
                    <img src={image2} alt="" className="img-fluid" />
                </div>
                <div className="col-lg-6">
                    <img src={image2} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default TopImages;
