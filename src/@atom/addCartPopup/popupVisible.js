import { atom } from 'recoil';

// 장바구니 담기 팝업창 닫기 및 열기 상태 관리

export const popupVisible = atom({
  key: 'popupVisible',
  default: false,
});
