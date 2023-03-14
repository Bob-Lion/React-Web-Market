import resetButton from '@/../public/ProductListImage/resetButton.svg';
import styles from './ProductListNav.module.scss';

// 아코디언 필터 & 리셋 버튼
export function AccordionFillter({ reset, setReset }) {
  const resetBtn = () => {
    setReset(!reset);
    console.log(!reset);
  };
  return (
    <div className={styles.accordionFillter}>
      <span className={styles.accordionFillterName}>필터</span>
      <button className={styles.accordionFillterButton} onClick={resetBtn}>
        <img src={resetButton} alt="초기화 버튼 이미지" />
        <span className={styles.accordionFillterButtonText}>초기화</span>
      </button>
    </div>
  );
}
