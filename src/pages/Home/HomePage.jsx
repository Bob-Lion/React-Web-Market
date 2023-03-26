import classes from './HomePage.module.scss';
import { AddCartPopup } from '@/components/AddCart/AddCartPopup';
import { useRecoilValue } from 'recoil';
import ProductCarousel from '@/components/ProductCarousel/ProductCarousel';
import RecentProductCarousel from '@/components/RecentProductCarousel/RecentProductCarousel';
import { currentProductState } from '@/@atom/currentProductState';
import Footer from '@/components/Footer/Footer';
import { cartPopupVisibleState } from '@/@atom/addCartPopup/cartPopupVisibleState';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header/Header';

function HomePage() {
  let currentProduct = useRecoilValue(currentProductState);
  let cpv = useRecoilValue(cartPopupVisibleState);
  // function handelGetCurProduct() {
  //   console.log('currentProduct', currentProduct);
  // }
  // console.log('Lendered', currentProduct);

  const navigate = useNavigate();

  function handleNavigateToRegisterPage(params) {
    navigate('/register');
  }

  return (
    <div className="HomePage">
      {/* <header
        style={{ height: '180px', width: '100%', backgroundColor: 'blue' }}
      ></header> */}
      <Header />
      <div style={{ position: 'relative' }}>
        <RecentProductCarousel title="최근 본 상품" />
        <ProductCarousel title="이 상품 어때요?" />
        <ProductCarousel title="놓치면 후회할 가격" />
        {currentProduct && cpv ? <AddCartPopup data={currentProduct} /> : null}
      </div>
      {/* <ProductList /> */}
      {/* <button type="button" onClick={handelGetCurProduct}>
        현재 선택된 상품 표시
      </button> */}
    </div>
  );
}

export default HomePage;
