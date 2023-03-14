import click_check_on from '@/../public/ProductListImage/Check_on.svg';
import click_check_off from '@/../public/ProductListImage/Check_off.svg';
import styles from './ProductListNav.module.scss';
import { useState, useRef } from 'react';

//아코디언 목록의 리스트
export function AccordionList({ name, count }) {
  // const [over, setOver] = useState(true);
  const hoverSpan = useRef();
  const handleEnter = () => {
    hoverSpan.current.style.color = 'rgb(209, 122, 1)';
  };
  const handleLeave = () => {
    hoverSpan.current.style.color = 'rgb(51, 51, 51)';
  };
  return (
    <li className={styles.accordionList}>
      <a className={`.willRouter ${styles.accordionListItem}`} href="./">
        <button className={styles.accordionListItemcheckButton}>
          <img src={click_check_off} alt="해당 리스트 체크하는 버튼"></img>
        </button>
        <span
          className={styles.accordionListItemName}
          ref={hoverSpan}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          {name}
        </span>
        <span className={styles.accordionListItemCount}>{count}</span>
      </a>
    </li>
  );
}
