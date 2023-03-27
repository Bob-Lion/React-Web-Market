import click_check_on from '@/../public/ProductListImage/Check_on.svg';
import click_check_off from '@/../public/ProductListImage/Check_off.svg';
import styles from './ProductListNav.module.scss';
import { useState, useRef, useEffect } from 'react';

import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productCheckResetState } from '../../@atom/accordion/productCheckResetState';
import { accordionModalState } from '@/@atom/accordion/accordionModalState';

//아코디언 목록의 리스트
export function AccordionList({
  name,
  count,
  selectData,
  setSelectData,
  modalStyle,
}) {
  const [btnToggle, setBtnToggle] = useState(false);
  const hoverSpan = useRef();
  const listCheckReset = useSetRecoilState(productCheckResetState);

  const [accordionModal, setAccordionModal] =
    useRecoilState(accordionModalState);

  const handleEnter = () => {
    hoverSpan.current.style.color = 'rgb(161, 95, 4)';
  };
  const handleLeave = () => {
    hoverSpan.current.style.color = 'rgb(51, 51, 51)';
  };
  const handleClickCheck = () => {
    // 체크 버튼이 활성화 될때 값이 배열에 없으면 추가하고 체크버튼이 비활성화 될때 해당 값을 삭제해 준다.
    if (!selectData.includes(name)) {
      selectData.push(name);
      // setSelectData((prev) => [...prev, name]);
    } else {
      const index = selectData.indexOf(name);
      selectData.splice(index, 1);
      // setSelectData((prev) => {
      //   return prev.filter((item) => {
      //     if (item !== name) {
      //       console.log(selectData);
      //       return item;
      //     }
      //   });
      // });
    }

    console.log(selectData);
    // setSelectData(selectData);

    // 리셋 버튼 활성화 상태 설정
    if (selectData.length > 0) {
      listCheckReset(true);
    } else {
      listCheckReset(false);
    }
    // setAccordionModal(!accordionModal);

    setBtnToggle(!btnToggle);
  };

  useEffect(() => {
    console.log(selectData);
  }, [selectData]);

  return (
    <li className={`${styles.accordionList} ${modalStyle}`}>
      <a
        className={`.willRouter ${styles.accordionListItem}`}
        href="#"
        onClick={handleClickCheck}
      >
        <button className={styles.accordionListItemcheckButton} type="button">
          <img
            alt="해당 리스트 체크하는 버튼"
            src={selectData.includes(name) ? click_check_on : click_check_off}
            // src={check}s
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
