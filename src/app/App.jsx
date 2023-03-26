import { ProductList } from '@/pages/ProductList/ProductList';
import '@/app/App.scss';
import { AddCartPopup } from '@/components/AddCart/AddCartPopup';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartPopupVisibleState } from '@/@atom/addCartPopup/cartPopupVisibleState';
import { useReadData } from '@/firebase/firestore';
import { useEffect } from 'react';
import { CartPage } from '@/pages/CartPage/CartPage';
import { currentProductState } from '@/@atom/currentProductState';
import ProductCarousel from '@/components/ProductCarousel/ProductCarousel';

function App() {
  return <div className="App"></div>;
}

export default App;
