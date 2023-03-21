import checkBtnOn from '@/../public/ProductListImage/Check_on.svg';
import checkBtnOff from '@/../public/ProductListImage/Check_off.svg';
import { useEffect, useState } from 'react';

export function ProductSelectCtrl({ cartData }) {
  // 선택된 상품 개수 관리
  const [checkCount, setCheckCount] = useState(0);
  return (
    <div className="selectContainer">
      <div className="selectCtrl">
        <div className="selectCtrlAll">
          <img alt="상품 선택 체크 버튼" src={checkBtnOn} />
          <span>전체 선택 {`(${checkCount}/${cartData.length})`}</span>
        </div>
        <span className="selectCtrlLine"></span>
        <button className="selectCtrlDelete" type="button"></button>
      </div>
    </div>
  );
}
