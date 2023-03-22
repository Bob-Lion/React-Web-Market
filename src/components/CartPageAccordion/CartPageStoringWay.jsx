import accordionArrow from '../../../public/icons/web-icons/Arrow-black.svg';
import styles from './CartPageAccordion.module.scss';

export function CartPageStoringWay({ productType, storingWayImg }) {
  return (
    <div className={styles.storingWay}>
      <div className={styles.storingWayName}>
        <img
          alt="상품 저장 방법별 이미지"
          className={styles.storingWayNameImg}
          src={storingWayImg}
        />
        <span>{productType} 상품</span>
      </div>
      <button type="button" className={styles.storingWayArrow}>
        <img
          alt="아코디언 펼치고 닫을때 누르는 화살표 버튼 이미지"
          className={styles.storingWayArrow}
          src={accordionArrow}
        />
      </button>
    </div>
  );
}
