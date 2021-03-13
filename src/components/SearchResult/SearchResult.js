import React from 'react';
import '../../assets/styles/search-result.scss';
import SearchResultItem from './SearchResultItem';
import SearchTag from './SearchTag';

const SearchResult = () => {
    return (
        <section className="search__result">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <SearchTag />
                        <SearchResultItem />
                        <SearchResultItem />
                        <SearchResultItem />
                        <SearchResultItem />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchResult;
