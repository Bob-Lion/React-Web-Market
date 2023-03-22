import checkBtnOn from '@/../public/ProductListImage/Check_on.svg';
import checkBtnOff from '@/../public/ProductListImage/Check_off.svg';
import styles from './CartPageAccordion.module.scss';

export function ProductSelectCtrl({ cartData, checkCount }) {
  return (
    <div className={styles.selectCtrlContainer}>
      <div className={styles.selectCtrl}>
        <div className={styles.selectCtrlAll}>
          <img alt="상품 선택 체크 버튼" src={checkBtnOn} />
          <span className={styles.selectCtrlAllText}>
            전체 선택 {`(${checkCount}/${cartData.length})`}
          </span>
        </div>
        <span className={styles.selectCtrlLine}></span>
        <button className={styles.selectCtrlDelete} type="button">
          선택삭제
        </button>
      </div>
    </div>
  );
}
