import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Accordion from './Accordion';

const Search = () => {
    const history = useHistory();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log('Click');

        history.push('/search-results');
    };
    return (
        <div className="search">
            <form className="search__form" onSubmit={handleSearch}>
                <div className="mb-2 mb-md-3 rounded shadow p-3">
                    <label htmlFor="location" className="form-label ">
                        <strong>Location</strong>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        name="city"
                        placeholder="Add city, landmark, area "
                    />
                </div>
                <div className="row g-1 g-sm-2">
                    <div className="col-lg-6">
                        <div className="mb-2 mb-md-3 rounded shadow p-3">
                            <label htmlFor="arrival" className="form-label text-secondary">
                                Arrival
                            </label>
                            <input
                                type="date"
                                className="form-control text-secondary"
                                id="arrival"
                                name="arrival"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mb-2 mb-md-3 rounded shadow p-3">
                            <label htmlFor="departure" className="form-label text-secondary">
                                Departure
                            </label>
                            <input
                                type="date"
                                className="form-control text-secondary"
                                id="departure"
                                name="departure"
                            />
                        </div>
                    </div>
                </div>
                <Accordion />
                <button type="submit" className="btn btn-primary btn-primary-hover w-100 mt-3">
                    <FaSearch className="me-1 mb-1" /> Search
                </button>
            </form>
        </div>
    );
};
export default Search;
