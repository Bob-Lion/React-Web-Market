import { useState } from 'react';
import styles from './AddCartPopup.module.scss';

export function AddCartPopup({ data }) {
  const [productCount, setProductCount] = useState(1);
  return (
    <div className={styles.addCartBackground}>
      <div className={styles.addCartWindow}>
        <div className={styles.addCartPopup}>
          <div>
            <div>
              <div>
                <span>{data.name}</span>
              </div>
              <div>
                <div>
                  <span>{data.salePrice}</span>
                </div>
                <div>
                  <button type="button" aria-label="수량내리기"></button>
                  <div>{productCount}</div>
                  <button type="button" aria-label="수량올리기"></button>
                </div>
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
