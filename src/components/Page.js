import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Menu from './Menu';
import About from './About';
import ErrorPage from './ErrorPage';
import '../styles/Page.css';

const Page = ({pizzas, ingredients, isLoading, hasError}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/menu" render={(props) => (<Menu {...props} pizzas={pizzas} ingredients={ingredients} isLoading={isLoading} hasError={hasError}/>) } />
                <Route path="/about" component={About} />
                <Route component={ErrorPage} />
            </Switch>
        </div>
    )
}

export default Page
