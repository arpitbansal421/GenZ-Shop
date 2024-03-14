
import './App.css';
import Navbar1 from './components/Navbar1';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Shop from './pages/shop/Shop1'
import Cart from './pages/cart/Cart1'
import ShopcontextProvider from './context/Shopcontext';

function App() {
  return (
    <div className="App">
      <ShopcontextProvider>


     <Router>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<Shop></Shop>}/>
        <Route path='/cart' element={<Cart></Cart>}>

        </Route>

      </Routes>
     </Router>
      </ShopcontextProvider>

    </div>
  );
}

export default App;
