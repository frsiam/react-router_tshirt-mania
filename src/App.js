import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import OrderReview from './components/OrderReview/OrderReview';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='orderreview' element={<OrderReview></OrderReview>}></Route>
        <Route path='cart' element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
