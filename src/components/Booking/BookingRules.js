import React from 'react';

const BookingRules = () => {
    return (
        <div className="booking__rules">
            <div className="house-rules">
                <h3>Review House rules</h3>
                <h5>3 night in Dhaka</h5>
                <div className="my-5 row">
                    <div className="col-md-6 d-flex">
                        <div className="date">
                            <h6>APR</h6>
                            <p className="m-0  pb-1">13</p>
                        </div>
                        <div>
                            <p className="small m-0 text-secondary">Monday check-in</p>
                            <p className="small m-0 text-secondary">After 12:00 PM</p>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex">
                        <div className="date">
                            <h6>APR</h6>
                            <p className="m-0 pb-1">13</p>
                        </div>
                        <div>
                            <p className="small m-0 text-secondary">Thrusday check-out</p>
                            <p className="small m-0 text-secondary">After 12:00 PM</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <p className="py-5 border-bottom">Self check-in with building staff</p>
                    </div>
                    {/* <Col md={12} className="rules">
                    <h5>Things to keep in mind</h5>
                    <ul className="list-unstyled my-5">
                        {
                            rules.map(rule => <li>
                                <img src={rule.image} alt=""/>
                                {rule.Condition}
                                </li>)
                        }
                    </ul>
                    <Button onClick={() => stepHandler({})}>Agree and Continue</Button>
                </Col> */}
                </div>
            </div>
        </div>
    );
};

export default BookingRules;
