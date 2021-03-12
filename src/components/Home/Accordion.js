import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Accordion = () => {
    const [collapse, setCollapse] = useState(false);
    return (
        <div className="accordion shadow rounded pb-3" id="accordion">
            <div
                className="collapsed p-3"
                type="button"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-search"
                aria-expanded="true"
                aria-controls="accordion-search"
                onClick={() => setCollapse(!collapse)}
                tabIndex="-1"
            >
                <span className="text-secondary small pb-2">Guest</span>
                <div className="d-flex justify-content-between">
                    <strong>1 Adults 0 Child</strong>
                    {collapse ? (
                        <HiChevronDown className="arrow__sign" />
                    ) : (
                        <HiChevronUp className="arrow__sign" />
                    )}
                </div>
            </div>
            <div
                id="accordion-search"
                className=" collapse show p-3"
                aria-labelledby="headingThree"
                data-bs-parent="#accordion"
            >
                <div className="collapse__item mb-2">
                    <strong className="text-uppercase">Adults</strong>
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-default btn-sm">
                            <FaMinus className="increase__btn" />
                        </button>
                        <strong className="mx-2">1</strong>
                        <button type="button" className="btn btn-default btn-sm">
                            <FaPlus className="increase__btn" />
                        </button>
                    </div>
                </div>
                <div className="collapse__item mb-3">
                    <div>
                        <strong className="text-uppercase">Childs</strong>
                        <br />
                        <span>age (2-12)</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-default btn-sm">
                            <FaMinus className="increase__btn" />
                        </button>
                        <strong className="mx-2">1</strong>
                        <button type="button" className="btn btn-default btn-sm">
                            <FaPlus className="increase__btn" />
                        </button>
                    </div>
                </div>
                <div className="collapse__item mb-3">
                    <div>
                        <strong className="text-uppercase">BABIES</strong>
                        <br />
                        <span>Younger than 2</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-default btn-sm">
                            <FaMinus className="increase__btn" />
                        </button>
                        <strong className="mx-2">1</strong>
                        <button type="button" className="btn btn-default btn-sm">
                            <FaPlus className="increase__btn" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Accordion;
