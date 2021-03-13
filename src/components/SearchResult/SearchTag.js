import React from 'react';

const SearchTag = () => {
    return (
        <div className="search__tag">
            <span className="text-secondary small ">
                225 stays Apr 13-17 <span className="ms-2">3 guest</span>
            </span>
            <h4 className="mt-1">Stay in Dhaka</h4>
            <div className="display-flex my-2">
                <button type="button" className="btn border btn-rounded btn-sm ms-1 my-1">
                    Cancellation Flexibility
                </button>
                <button type="button" className="btn border btn-rounded btn-sm ms-1 my-1">
                    Type of Place
                </button>
                <button type="button" className="btn border btn-rounded btn-sm ms-1 my-1">
                    Price
                </button>
                <button type="button" className="btn border btn-rounded btn-sm ms-1 my-1">
                    Instant Book
                </button>
                <button type="button" className="btn border btn-rounded btn-sm ms-1 my-1">
                    More filter
                </button>
            </div>
        </div>
    );
};

export default SearchTag;
