import click_check_on from '@/../public/ProductListImage/Check_on.svg';
import click_check_off from '@/../public/ProductListImage/Check_off.svg';
import styles from './ProductListNav.module.scss';
import { useState, useRef } from 'react';

//아코디언 목록의 리스트
export function AccordionList({ name, count }) {
  const [btnToggle, setBtnToggle] = useState(true);
  const hoverSpan = useRef();
  const handleEnter = () => {
    hoverSpan.current.style.color = 'rgb(209, 122, 1)';
  };
  const handleLeave = () => {
    hoverSpan.current.style.color = 'rgb(51, 51, 51)';
  };

  const handleClickCheck = () => {
    // console.log(name);
    setBtnToggle(!btnToggle);
  };
  // 체크버튼 클릭시, 브랜드 정렬방법 선택시 데이터 관리하는거 상태관리 다시 해야댐
  /* const btnToggleMemo = useMemo(() => {
    return btnToggle ? click_check_off : click_check_on;
  }, [btnToggle]);

  const handleClickCheck = () => {
    // console.log(name);
    setBtnToggle(!btnToggle);
  };

  useEffect(() => {
    // return setBtnToggle(!btnToggle);
  }, [btnToggleMemo]); */

  return (
    <li className={styles.accordionList}>
      <a
        className={`.willRouter ${styles.accordionListItem}`}
        href="#"
        onClick={handleClickCheck}
      >
        <button className={styles.accordionListItemcheckButton}>
          <img
            src={btnToggle ? click_check_off : click_check_on}
            alt="해당 리스트 체크하는 버튼"
          ></img>
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
