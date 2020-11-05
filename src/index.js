import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import table from "./components/table";
import countryStats from "./components/countryStats";


ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={App} />
            <Route  exact path='/countries' component={table} />
            <Route  path='/countries/:country' component={countryStats} />
        </div>
    </Router>,
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
