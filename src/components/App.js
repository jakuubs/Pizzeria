import '../styles/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

const App = () => {

  return (
    <Router>
      <div className="app">
        <header>
          <Header />
          <Navigation />
        </header>
        <main>
          <Page />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
