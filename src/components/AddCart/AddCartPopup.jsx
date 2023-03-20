import { useState } from 'react';
import styles from './AddCartPopup.module.scss';

export function AddCartPopup({ data }) {
  const [productCount, setProductCount] = useState(1);
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
                <div>
                  <span className={styles.cartPopupInfoDetailPriceText}>
                    {data.salePrice}
                  </span>
                </div>
                <div className={styles.cartPopupInfoDetailPriceBtnBox}>
                  <button
                    type="button"
                    aria-label="수량내리기"
                    className={styles.cartPopupInfoDetailPriceBtnBoxDecreaseBtn}
                  ></button>
                  <div className={styles.cartPopupInfoDetailPriceBtnBoxCount}>
                    {productCount}
                  </div>
                  <button
                    type="button"
                    aria-label="수량올리기"
                    className={styles.cartPopupInfoDetailPriceBtnBoxIncreaseBtn}
                  ></button>
                </div>
              </div>
              <div className={styles.cartPopupInfoDetailPriceStock}>
                현재 재고 : {data.stock}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>합계</p>
                <div>
                  <span>{data.salePrice * productCount}</span>
                  <span>원</span>
                </div>
              </div>
              <div>
                <button type="button">
                  <span>취소</span>
                </button>
                <button type="button">
                  <span>장바구니 담기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
