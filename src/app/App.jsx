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
        <Route element={<HomePage />} path="/" />
        <Route element={<RegisterPage />} path="/register" />
        <Route element={<CartPage />} path="/cart" />
        <Route element={<LoginPage />} path="/logIn" />
        <Route element={<ProductList />} path="/productList" />
        <Route element={<ProductDetailPage />} path="/productDetail" />
      </Routes>
    </div>
  );
}

export default App;
