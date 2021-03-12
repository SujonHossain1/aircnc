import React from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const Pricing = () => {
    return (
        <form className=" pricing__section p-4 rounded  shadow">
            <h4>
                $34/<span className="font-weight-lighter">Night</span>
            </h4>
            <p>
                <FaStar className="text-primary" />
                <span>4.9(220 reviews)</span>
            </p>
            <div className="d-flex align-items-center form-control mb-2 mb-md-3">
                <input name="arrival" type="date" />
                <FaArrowRight className="mx-4" />
                <input name="departure" className="text-right" type="date" />
            </div>
            <div className="mb-2 mb-md-3">
                <label htmlFor="guest" className="form-label ">
                    Guest
                </label>
                <select className="form-select" aria-label="Guest" id="guest">
                    <option defaultValue="1">1 guest</option>
                    <option defaultValue="2">2 guest</option>
                    <option defaultValue="3">3 guest</option>
                    <option defaultValue="4">4 guest</option>
                </select>
            </div>
            <ul className="pricing__list list-unstyled">
                <li>
                    <span>34 x 1 night</span>
                    <span>$136</span>
                </li>
                <li>
                    <span>Cleaning fee</span>
                    <span>$10</span>
                </li>
                <li>
                    <span>Service fee</span>
                    <span>$21</span>
                </li>
                <li className="total__price font-weight-bold">
                    <span>Total</span>
                    <span>$156</span>
                </li>
            </ul>
            <button type="submit" className="btn btn-primary btn-primary-hover w-100 mt-3">
                Reserve Hotel
            </button>
            <p className="text-secondary small mt-1 text-center">you won't be charged</p>
        </form>
    );
};

export default Pricing;
