import checkBtnOn from '@/../public/ProductListImage/Check_on.svg';
import checkBtnOff from '@/../public/ProductListImage/Check_off.svg';
import styles from './CartPageAccordion.module.scss';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { cartTotalSeletState } from '@/@atom/addCart/cartTotalSeletState';

export function ProductSelectCtrl({ cartData }) {
  const [totalSelectState, setTotalSelectState] =
    useRecoilState(cartTotalSeletState);
  const [selectBtnTogle, setSelectBtnTogle] = useState(true);

  const handleAllSelect = () => {
    if (!selectBtnTogle) {
      const nameArr = [];
      cartData.forEach((el) => nameArr.push(el.name));
      setTotalSelectState(nameArr);
    } else {
      setTotalSelectState([]);
    }

    setSelectBtnTogle(!selectBtnTogle);
  };

  return (
    <div className={styles.selectCtrlContainer}>
      <div className={styles.selectCtrl}>
        <div className={styles.selectCtrlAll}>
          <button
            className={styles.selectCtrlAllBtn}
            type="button"
            onClick={handleAllSelect}
          >
            <img
              alt="상품 선택 체크 버튼"
              src={
                totalSelectState.length === cartData.length
                  ? checkBtnOn
                  : checkBtnOff
              }
            />
            <span className={styles.selectCtrlAllText}>
              전체 선택 {`(${totalSelectState.length}/${cartData.length})`}
            </span>
          </button>
        </div>
        <span className={styles.selectCtrlLine}></span>
        <button className={styles.selectCtrlDelete} type="button">
          선택삭제
        </button>
      </div>
    </div>
  );
}
