import { useEffect, useRef, useState } from 'react';
import { CartPageProduct } from './CartPageProduct';
import { CartPageStoringWay } from './CartPageStoringWay';
import styles from './CartPageAccordion.module.scss';
import accordionArrow from '../../../public/icons/web-icons/Arrow-black.svg';

export function CartPageSet({ data, productType, storingWayImg }) {
  const storingWayData = data.map((data) => {
    return <CartPageProduct key={data.name} data={data} />;
  });

  const accordionVisible = useRef();
  const arrowReverse = useRef();
  const [opacityToggle, setOpacityToggle] = useState(false);

  useEffect(() => {
    if (opacityToggle) {
      accordionVisible.current.style.opacity = '0';
      accordionVisible.current.style.maxHeight = '0px';
      arrowReverse.current.style.transform = 'rotate(0deg)';
    } else {
      accordionVisible.current.style.opacity = '1';
      accordionVisible.current.style.maxHeight = '100vh';
      arrowReverse.current.style.transform = 'rotate(-180deg)';
      arrowReverse.current.style.transition =
        'all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s';
    }
  });

  const handleAccordion = () => {
    if (opacityToggle) {
      accordionVisible.current.style.opacity = '0';
      accordionVisible.current.style.maxHeight = '0px';
      arrowReverse.current.style.transform = 'rotate(0deg)';
    } else {
      accordionVisible.current.style.opacity = '1';
      accordionVisible.current.style.maxHeight = '100vh';
      arrowReverse.current.style.transform = 'rotate(-180deg)';
      arrowReverse.current.style.transition =
        'all 250ms cubic-bezier(0.83, 0, 0.17, 1) 0s';
    }
    setOpacityToggle(!opacityToggle);
  };

  return (
    <div>
      <div className={styles.storingWay}>
        <div className={styles.storingWayName}>
          <img
            alt="상품 저장 방법 별 이미지"
            className={styles.storingWayNameImg}
            src={storingWayImg}
          />
          <span>{productType} 상품</span>
        </div>
        <button
          className={styles.storingWayArrow}
          onClick={handleAccordion}
          type="button"
        >
          <img
            alt="아코디언 펼치고 닫을때 누르는 화살표 버튼 이미지"
            className={styles.storingWayArrow}
            src={accordionArrow}
            ref={arrowReverse}
          />
        </button>
      </div>
      <ul ref={accordionVisible} className={styles.accordionBody}>
        {storingWayData}
      </ul>
    </div>
  );
}
