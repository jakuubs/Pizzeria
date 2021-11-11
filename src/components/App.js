import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import { useState } from 'react';

const App = () => {

  const [pizzas, setPizzas] = useState([]);
  const [sauces, setSauces] = useState([]);

  const addPizzaToCart = (id, name, quantity, price) => {
    setPizzas([...pizzas, {id: id, name: name, quantity: quantity, price: price}]);
  }

  const addSauceToCart = (id, name, quantity, price) => {
    setSauces([...sauces, {id: id, name: name, quantity: quantity, price: price}]);
  }

  return (
    <Router>
      <div className="app">
        <header>
          <Header pizzas={pizzas} sauces={sauces}/>
          <Navigation />
        </header>
        <main>
          <Page addPizzaToCart={addPizzaToCart} addSauceToCart={addSauceToCart}/>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
