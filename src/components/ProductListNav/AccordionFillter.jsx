import resetButton from '@/../public/ProductListImage/resetButton.svg';
import styles from './ProductListNav.module.scss';

// 아코디언 필터 & 리셋 버튼
export function AccordionFillter() {
  const resetBtn = () => {};
  return (
    <div className={styles.accordionFillter}>
      <span className={styles.accordionFillterName}>필터</span>
      <button
        className={styles.accordionFillterButton}
        type="button"
        onClick={resetBtn}
      >
        <img alt="초기화 버튼 이미지" src={resetButton} />
        <span className={styles.accordionFillterButtonText}>초기화</span>
      </button>
    </div>
  );
}
