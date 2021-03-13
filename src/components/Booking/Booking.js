import React from 'react';
import '../../assets/styles/booking.scss';
import BookingRules from './BookingRules';
import Setps from './Setps';

const Booking = () => {
    return (
        <section className="booking__section">
            <div className="container">
                <Setps />
                <div className="row">
                    <BookingRules />
                </div>
            </div>
        </section>
    );
};

export default Booking;
