import resetButton from '@/../public/ProductListImage/resetButton.svg';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productCheckResetState } from '@/@atom/accordion/productCheckResetState';
import { productResetBtnState } from '@/@atom/accordion/productResetBtnState';
import styles from './ProductListNav.module.scss';

// 아코디언 필터 & 리셋 버튼

export function AccordionFillter({
  categorySelectData,
  setCategorySelectData,
}) {
  const checkReset = useRecoilValue(productCheckResetState);
  const resetBtn = useRef();
  const [resetBtnData, setResetBtnData] = useRecoilState(productResetBtnState);

  useEffect(() => {
    if (checkReset) {
      resetBtn.current.style.color = 'rgb(209, 122, 1)';
    } else {
      resetBtn.current.style.color = 'rgb(221, 221, 221)';
    }
  }, [checkReset]);

  const handleResetBtn = () => {
    setCategorySelectData(categorySelectData.splice(0));
    console.log(categorySelectData);
  };

  return (
    <div className={styles.accordionFillter}>
      <span className={styles.accordionFillterName}>필터</span>
      <button
        className={styles.accordionFillterButton}
        type="button"
        onClick={handleResetBtn}
      >
        <img alt="초기화 버튼 이미지" src={resetButton} />
        <span ref={resetBtn} className={styles.accordionFillterButtonText}>
          초기화
        </span>
      </button>
    </div>
  );
}
