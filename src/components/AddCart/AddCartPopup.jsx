import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { popupVisible } from '@/@atom/addCartPopup/popupvisible';
import styles from './AddCartPopup.module.scss';

export function AddCartPopup({ data }) {
  const [productCount, setProductCount] = useState(1);
  const setCartPopupVisible = useSetRecoilState(popupVisible);

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

  const handlePoppupVisible = () => {
    setCartPopupVisible(false);
  };
  return (
    <div className={styles.cartPopupBackground}>
      <div className={styles.cartPopupWindow}>
        <div className={styles.cartPopup}>
          <div className={styles.cartPopupInfo}>
            <div className={styles.cartPopupInfoDetail}>
              <div className={styles.cartPopupInfoDetailName}>
                <span className={styles.cartPopupInfoDetailNameText}>
                  {data.name}
                </span>
              </div>
              <div className={styles.cartPopupInfoDetailPrice}>
                <div className={styles.cartPopupInfoDetailPriceText}>
                  <span>
                    {data.salePrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  </span>
                  <span>원</span>
                </div>
                <div className={styles.cartPopupInfoDetailPriceBtnBox}>
                  <button
                    aria-label="수량내리기"
                    className={styles.cartPopupInfoDetailPriceBtnBoxDecreaseBtn}
                    type="button"
                    onClick={handleDecrease}
                  ></button>
                  <div className={styles.cartPopupInfoDetailPriceBtnBoxCount}>
                    {productCount}
                  </div>
                  <button
                    aria-label="수량올리기"
                    className={styles.cartPopupInfoDetailPriceBtnBoxIncreaseBtn}
                    type="button"
                    onClick={handleIncrease}
                  ></button>
                </div>
              </div>
              <div className={styles.cartPopupInfoDetailPriceStock}>
                현재 재고 : {data.stock}
              </div>
            </div>
          </div>
          <div className={styles.cartPopupPrice}>
            <div className={styles.cartPopupPriceTotal}>
              <p className={styles.cartPopupPriceTotalText}>합계</p>
              <div>
                <span className={styles.cartPopupPriceTotalPrice}>
                  {(data.salePrice * productCount)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </span>
                <span className={styles.cartPopupPriceTotalWon}>원</span>
              </div>
            </div>
          </div>
          <div className={styles.cartPopupCtr}>
            <button
              className={styles.cartPopupCtrCancleBtn}
              type="button"
              onClick={handlePoppupVisible}
            >
              <span className={styles.cartPopupCtrCancleBtnText} type="button">
                취소
              </span>
            </button>
            <button className={styles.cartPopupCtrAddBtn} type="button">
              <span className={styles.cartPopupCtrAddBtnText}>
                장바구니 담기
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
