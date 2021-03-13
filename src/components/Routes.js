import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Booking from './Booking/Booking';
import Home from './Home/Home';
import HomeDetails from './HomeDetails/HomeDetails';
import SearchResult from './SearchResult/SearchResult';

const Routes = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/home-details/:slug">
            <HomeDetails />
        </Route>
        <Route path="/search-results">
            <SearchResult />
        </Route>
        <Route path="/booking">
            <Booking />
        </Route>
    </Switch>
);

export default Routes;
