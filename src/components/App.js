import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";
import { useState } from "react";

const App = () => {
  const [pizzas, setPizzas] = useState([]);
  const [sauces, setSauces] = useState([]);

  const addPizzaToCart = (id, name, quantity, price) => {
    const index = pizzas.findIndex((pizza) => pizza.id === id);
    if (index !== -1) {
      let updatedPizzas = [...pizzas];
      const updatedQuantity = updatedPizzas[index].quantity + quantity;
      updatedPizzas[index] = {
        ...updatedPizzas[index],
        quantity: updatedQuantity,
      };
      setPizzas(updatedPizzas);
    } else {
      setPizzas([
        ...pizzas,
        { id: id, name: name, quantity: quantity, price: price },
      ]);
    }
  };

  const addSauceToCart = (id, name, quantity, price) => {
    const index = sauces.findIndex((sauce) => sauce.id === id);
    if (index !== -1) {
      let updatedSauces = [...sauces];
      const updatedQuantity = updatedSauces[index].quantity + quantity;
      updatedSauces[index] = {
        ...updatedSauces[index],
        quantity: updatedQuantity,
      };
      setSauces(updatedSauces);
    } else {
      setSauces([
        ...sauces,
        { id: id, name: name, quantity: quantity, price: price },
      ]);
    }
  };

  const changeQuantity = (id, type, action) => {
    if (type === "pizza") {
      let pizzaList = [...pizzas];
      let index = pizzaList.findIndex((pizza) => pizza.id === id);
      if (action === "addition") {
        const updatedQuantity = pizzaList[index].quantity + 1;
        pizzaList[index] = { ...pizzaList[index], quantity: updatedQuantity };
      } else if (action === "subtraction") {
        const updatedQuantity = pizzaList[index].quantity - 1;
        if (updatedQuantity > 0)
          pizzaList[index] = { ...pizzaList[index], quantity: updatedQuantity };
        else {
          pizzaList.splice(index, 1);
        }
      } else {
        console.log("Invalid action!");
      }
      setPizzas(pizzaList);
    } else if (type === "sauce") {
      let sauceList = [...sauces];
      let index = sauceList.findIndex((sauce) => sauce.id === id);
      if (action === "addition") {
        const updatedQuantity = sauceList[index].quantity + 1;
        sauceList[index] = { ...sauceList[index], quantity: updatedQuantity };
      } else if (action === "subtraction") {
        const updatedQuantity = sauceList[index].quantity - 1;
        if (updatedQuantity > 0)
          sauceList[index] = { ...sauceList[index], quantity: updatedQuantity };
        else {
          sauceList.splice(index, 1);
        }
      } else {
        console.log("Invalid action!");
      }
      setSauces(sauceList);
    } else {
      console.log("Invalid item type!");
    }
  };

  const clearCart = () => {
    setPizzas([]);
    setSauces([]);
  }

  return (
    <Router>
      <div className="app">
        <header>
          <Header
            pizzas={pizzas}
            sauces={sauces}
            changeQuantity={changeQuantity}
            clearCart={clearCart}
          />
          <Navigation />
        </header>
        <main>
          <Page
            addPizzaToCart={addPizzaToCart}
            addSauceToCart={addSauceToCart}
          />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
};

export default App;
