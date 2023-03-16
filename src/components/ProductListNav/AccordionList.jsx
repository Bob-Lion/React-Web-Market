import click_check_on from '@/../public/ProductListImage/Check_on.svg';
import click_check_off from '@/../public/ProductListImage/Check_off.svg';
import styles from './ProductListNav.module.scss';
import { useState, useRef, useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { selectList } from '../../@atom/accordion/selectList';
import { productListCheckReset } from '../../@atom/accordion/productListCheckReset';
import { productListResetBtn } from '../../@atom/accordion/productListResetBtn';

//아코디언 목록의 리스트
export function AccordionList({ name, count, selectData, listName }) {
  let listData = [];
  const [btnToggle, setBtnToggle] = useState(false);
  const hoverSpan = useRef();
  const [resetBtnData, setResetBtnData] = useRecoilState(productListResetBtn);
  const handleEnter = () => {
    hoverSpan.current.style.color = 'rgb(209, 122, 1)';
  };
  const handleLeave = () => {
    hoverSpan.current.style.color = 'rgb(51, 51, 51)';
  };

  const listCheckReset = useSetRecoilState(productListCheckReset);
  const setSelectListData = useSetRecoilState(selectList);
  const selectListData = useRecoilValue(selectList);

  const handleClickCheck = () => {
    // 체크 버튼이 활성화 될때 값이 배열에 없으면 추가하고 체크버튼이 비활성화 될때 해당 값을 삭제해 준다.
    if (!btnToggle && !selectData.current.includes(name)) {
      selectData.current.push(name);
    } else if (btnToggle && selectData.current.includes(name)) {
      const index = selectData.current.indexOf(name);
      selectData.current.splice(index, 1);
    }

    listData = [listName, selectData.current];

    console.log(listData);

    // 리셋 버튼 활성화 상태 설정
    if (selectData.current.length > 0) {
      listCheckReset(true);
    } else {
      listCheckReset(false);
    }

    setBtnToggle(!btnToggle);
  };

  return (
    <li className={styles.accordionList}>
      <a
        className={`.willRouter ${styles.accordionListItem}`}
        href="#"
        onClick={handleClickCheck}
      >
        <button className={styles.accordionListItemcheckButton} type="button">
          <img
            alt="해당 리스트 체크하는 버튼"
            src={
              selectData.current.includes(name)
                ? click_check_on
                : click_check_off
            }
          ></img>
        </button>
        <span
          ref={hoverSpan}
          className={styles.accordionListItemName}
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
