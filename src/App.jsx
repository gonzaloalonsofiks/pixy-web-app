import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import Cart  from './components/Cart/Cart';
import CartContextProvider from './contexts/cartContext';
import Footer from './components/Footer/Footer';
import './App.css';



function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path={'/'} element={[<HeroSection />, <ItemListContainer />]} />
                <Route path={'/categoria/:categoryID'} element={<ItemListContainer />} />
                <Route path={'/detalle/:detailID'} element={<ItemDetailContainer />} />
                <Route path={'/cart'} element={<Cart />} />

                <Route path='/*' element={<Navigate to='/' replace/> }/>

            </Routes>
            <Footer />
        </BrowserRouter>
      </CartContextProvider>

  );
}

export default App;
