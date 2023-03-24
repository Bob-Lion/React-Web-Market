import {
  getElementHeight,
  getElementWidth,
} from '../get_document_position/getElementStyle';

function getRelativeTop(targetElem) {
  // const target = getNode(targetName); // 요소의 id 값이 target이라 가정
  const target = targetElem; // 요소의 id 값이 target이라 가정
  const clientRect = target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
  const relativeTop = clientRect.top; // Viewport의 시작지점을 기준(지금 보이는 화면의 최상단)으로한 상대좌표 Y 값.

  return relativeTop;
}

function getRelativeLeft(targetElem) {
  // const target = getNode(targetName); // 요소의 id 값이 target이라 가정
  const target = targetElem; // 요소의 id 값이 target이라 가정
  const clientRect = target.getBoundingClientRect(); // DomRect 구하기 (각종 좌표값이 들어있는 객체)
  const relativeLeft = clientRect.left; // Viewport의 시작지점을 기준으로한 상대좌표 Y 값.

  return relativeLeft;
}

export function stickAgainstRelatedElement(
  selectedComp,
  relatedComp = null, // 이 값이 null이면 fixed 가 viewport 기준 위치
  stickyStyle,
  isFromTop,
  distanceFromRelatedComp
) {
  function stick() {
    if (isFromTop) {
      // 세로길이를 기준으로 위치 지정
      const relatedHeight = getElementHeight(relatedComp);
      let highestTop =
        getRelativeTop(relatedComp) + relatedHeight + distanceFromRelatedComp;
      // console.log('getRelativeTop(relatedComp)', getRelativeTop(relatedComp));
      // console.log('getRelativeTop(selectedComp)', getRelativeTop(selectedComp));
      // console.log('highestTop', highestTop);
      // console.log('relatedHeight', relatedHeight);

      // let windowTop = window.scrollY;
      // console.log('windowTop', windowTop);
      // console.log('getRelativeTop(selectedComp)', getRelativeTop(selectedComp));

      // selectedComp가 원하는 위치보다 아래에 있을때
      if (getRelativeTop(selectedComp) < distanceFromRelatedComp) {
        selectedComp.style.position = 'fixed';
      } else if (highestTop >= getRelativeTop(selectedComp)) {
        // position:unset 스타일 적용
        selectedComp.style.position = 'absolute';
        // selectedComp.style.top = highestTop;
        // console.log('unFixed', highestTop, getRelativeTop(selectedComp));
      }
    } else {
      const relatedLeft = getElementWidth(relatedComp);
      let mostFarFromLeft =
        getRelativeLeft(relatedComp) + relatedLeft + distanceFromRelatedComp;
      if (getRelativeLeft(selectedComp) < distanceFromRelatedComp) {
        selectedComp.style.position = 'fixed';
      } else if (mostFarFromLeft >= getRelativeLeft(selectedComp)) {
        selectedComp.style.position = 'absolute';
      }
    }
  }

  if (selectedComp) {
    stick();
    window.addEventListener('scroll', stick);
  }
}
