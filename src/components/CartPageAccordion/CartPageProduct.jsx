import { useEffect, useRef, useState } from 'react';
import checkBtnOn from '@/../public/ProductListImage/Check_on.svg';
import checkBtnOff from '@/../public/ProductListImage/Check_off.svg';
import cancleBtn from '@/../public/icons/web-icons/Cancel.svg';
import styles from './CartPageAccordion.module.scss';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { cartTotalSeletState } from '@/@atom/cartPage/cartTotalSeletState';
import { selectTotalPriceState } from '@/@atom/cartPage/selectTotalPriceState';
import { selectInfoState } from '@/@atom/cartPage/selectInfoState';

export function CartPageProduct({ data }) {
  // console.log(data);
  const [productCount, setProductCount] = useState(data.localCount);
  const minusBtn = useRef();
  const plusBtn = useRef();

  // 버튼 토글 상태
  const [selectBtnTogle, setSelectBtnTogle] = useState(true);
  const [totalSelectState, setTotalSelectState] =
    useRecoilState(cartTotalSeletState);

  const [selectTotalPrice, setSelectTotalPrice] = useRecoilState(
    selectTotalPriceState
  );

  const [selectInfo, setSelectInfo] = useRecoilState(selectInfoState);

  const handleDecrease = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const handleIncrease = () => {
    if (productCount < data.stock) {
      setProductCount(productCount + 1);
    }
  };

  const productPrice = data.salePrice * productCount;
  useEffect(() => {
    if (productCount <= 1) {
      minusBtn.current.style.backgroundPosition = '-8px -46px';
      plusBtn.current.style.backgroundPosition = '-8px -8px';
      minusBtn.current.style.cursor = 'default';
      plusBtn.current.style.cursor = 'pointer';
    } else if (productCount > 1 && productCount < data.stock) {
      minusBtn.current.style.backgroundPosition = '-8px -8px';
      plusBtn.current.style.backgroundPosition = '-8px -8px';
      minusBtn.current.style.cursor = 'pointer';
      plusBtn.current.style.cursor = 'pointer';
    } else {
      minusBtn.current.style.backgroundPosition = '-8px -8px';
      plusBtn.current.style.backgroundPosition = '-8px -46px';
      minusBtn.current.style.cursor = 'pointer';
      plusBtn.current.style.cursor = 'default';
    }
  }, [productCount]);

  // 처음에 전체 선택이기 때문에 처음에 한번만 선택 배열에 전체 값을 넣어준다.
  useEffect(() => {
    setTotalSelectState((prev) => [...prev, data.name]);
    setSelectInfo((prev) => [
      ...prev,
      { name: data.name, price: productPrice },
    ]);
  }, []);

  useEffect(() => {
    console.log(totalSelectState);
  }, [totalSelectState]);

  useEffect(() => {
    // console.log('aa');
    if (totalSelectState.includes(data.name)) {
      const newItem = { name: data.name, price: productPrice };
      const updateData = selectInfo.map((item) => {
        if (item.name === newItem.name) return newItem;
        else return item;
      });

      if (
        updateData.filter((item) => item.name === newItem.name).length === 0
      ) {
        updateData.push(newItem);
      }
      // console.log(updateData);
      setSelectInfo(updateData);
    }
  }, [productPrice, totalSelectState]);

  const handleChecked = () => {
    if (!selectBtnTogle) {
      setTotalSelectState((prev) => [...prev, data.name]);
      // setSelectTotalPrice((prev) => [...prev, productPrice]);
      if (totalSelectState.includes(data.name)) {
        const newItem = { name: data.name, price: productPrice };
        const updateData = selectInfo.map((item) => {
          if (item.name === newItem.name) return newItem;
          else return item;
        });

        if (
          updateData.filter((item) => item.name === newItem.name).length === 0
        ) {
          updateData.push(newItem);
        }
        // console.log(updateData);
        setSelectInfo(updateData);
      }
    } else {
      setTotalSelectState(totalSelectState.filter((el) => el !== data.name));
      // setSelectTotalPrice(selectTotalPrice.filter((el) => el !== productPrice));
      if (totalSelectState.includes(data.name)) {
        const newItem = { name: data.name, price: 0 };
        const updateData = selectInfo.map((item) => {
          if (item.name === newItem.name) return newItem;
          else return item;
        });

        if (
          updateData.filter((item) => item.name === newItem.name).length === 0
        ) {
          updateData.push(newItem);
        }
        // console.log(updateData);
        setSelectInfo(updateData);
      }
    }

    setSelectBtnTogle(!selectBtnTogle);
  };

  return (
    <li className={styles.cartPageProduct}>
      <button
        type="button"
        className={styles.cartPageProductCheckBtn}
        onClick={handleChecked}
      >
        <img
          alt="상품 선택 체크 버튼"
          src={totalSelectState.includes(data.name) ? checkBtnOn : checkBtnOff}
        />
      </button>
      <a className={`.willRouter ${styles.cartPageProductImg}`} href="#">
        <div className={styles.cartPageProductImgTest}></div>
      </a>
      <div className={styles.cartPageProductName}>
        <a className={`.willRouter`} href="#">
          <p
            className={styles.cartPageProductNameDetail}
          >{`[${data.brand}] ${data.name} (${data.storingWay})`}</p>
        </a>
      </div>
      <div className={styles.cartPageProductCountBtn}>
        <button
          ref={minusBtn}
          aria-label="수량내리기"
          className={styles.cartPageProductCountBtnDecreaseBtn}
          type="button"
          onClick={handleDecrease}
        ></button>
        <div className={styles.cartPageProductCountBtnCount}>
          {productCount}
        </div>
        <button
          ref={plusBtn}
          aria-label="수량올리기"
          className={styles.cartPageProductCountBtnIncreaseBtn}
          type="button"
          onClick={handleIncrease}
        ></button>
      </div>
      <div className={styles.cartPageProductPrice}>
        <span className={styles.cartPageProductPriceText}>
          {productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
        </span>
      </div>
      <button className={styles.cartPageProductCancleBtn} type="button">
        <img alt="장바구니에 담긴 상품 취소 버튼" src={cancleBtn} />
      </button>
    </li>
  );
}