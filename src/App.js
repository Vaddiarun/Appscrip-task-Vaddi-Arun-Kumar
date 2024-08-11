
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Products from './Pages/Products/Products';
import Favourite from './Pages/Favourite/Favourite';

import Cart from './Pages/Cart/Cart.jsx'
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    
    <BrowserRouter>
      <Header />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favourite" element={<Favourite />} />
        {/* <Route path="/cart" element={<Cart/>}/> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
