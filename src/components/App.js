import '../styles/App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await fetch("http://localhost:3333/api/pizza")
          .then((response) => response.json())
          .then((data) => setPizzas(data));
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch("http://localhost:3333/api/ingredient")
          .then((response) => response.json())
          .then((data) => setIngredients(data));
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="app">
        <header>
          <Header />
          <Navigation />
        </header>
        <main>
          <Page pizzas={pizzas} ingredients={ingredients} isLoading={isLoading} hasError={hasError} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
