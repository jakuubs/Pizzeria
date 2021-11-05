import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';

const App = () => {
  return (
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
  );
}

export default App;
