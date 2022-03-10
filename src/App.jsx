import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';
import './App.css';

function App() {
  return (
    <section>
      <NavBar />
      <HeroSection />
      <ItemListContainer />
      <ItemDetailContainer />
    </section>
  );
}

export default App;
