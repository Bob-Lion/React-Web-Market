import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from '@/pages/Home/HomePage';
import { CartPage } from '@/pages/cartPage/CartPage';
import { ProductList } from '@/pages/ProductList/ProductList';
import ProductDetailPage from '@/pages/ProductDetail/ProductDetailPage';
import LoginPage from '@/pages/LoginPage/LoginPage';
import RegisterPage from '@/pages/Register/RegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact element={<HomePage />} path="/React-Web-Market/" />
        <Route exact element={<RegisterPage />} path="/register" />
        <Route exact element={<CartPage />} path="/cart" />
        <Route exact element={<LoginPage />} path="/logIn" />
        <Route exact element={<ProductList />} path="/productList" />
        <Route exact element={<ProductDetailPage />} path="/productDetail" />
      </Routes>
    </div>
  );
}

export default App;
