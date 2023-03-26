import { ProductList } from '@/pages/ProductList/ProductList';
import '@/app/App.scss';
import { AddCartPopup } from '@/components/AddCart/AddCartPopup';
import { useRecoilState } from 'recoil';
import { cartPopupVisibleState } from '@/@atom/addCartPopup/cartPopupVisibleState';
import { useReadData } from '@/firebase/firestore';
import { useEffect } from 'react';
import { CartPage } from '@/pages/CartPage/CartPage';

function App() {
  return <div className="App">{/* <CartPage /> */}</div>;
}

export default App;
