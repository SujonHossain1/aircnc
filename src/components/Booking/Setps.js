import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const Setps = () => {
    return (
        <ul className="list-inline">
            <li className="list-inline-item h6 mr-4">
                1. Review House Rule
                <FaAngleRight className="ml-2" />
            </li>
            <li className="list-inline-item h6 mr-4">
                2. Who is Coming
                <FaAngleRight className="ml-2" />
            </li>
            <li className="list-inline-item h6">
                3. Confirm and Pay
                <FaAngleRight className="ml-2" />
            </li>
        </ul>
    );
};

export default Setps;
