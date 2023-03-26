
import './App.css';
import RegisterPage from '@/pages/Register/RegisterPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from '@/pages/Home/HomePage';
import { CartPage } from '@/pages/cartPage/CartPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<HomePage />} path="/" />
        {/* <Route element={<RegisterPage />} path="/register" /> */}
        <Route element={<CartPage />} path="/cart" />
        {/* <Route element={<Page />} path="/logIn" />
          <Route element={<Page />} path="/productList" />
          <Route element={<Page />} path="/productDetail" /> */}
      </Routes>
    </div>
  );
}

export default App;
