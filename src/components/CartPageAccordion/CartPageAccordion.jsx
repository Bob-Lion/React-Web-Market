import { storingWaySort } from '@/utils/storingWay/storingWaySort';
import { useState } from 'react';
import { CartPageSet } from './CartPageSet';
import { ProductSelectCtrl } from './ProductSelectCtrl';
import refrigeratedImg from '../../../public/icons/web-icons/Refrigerated.svg';
import frozenImg from '../../../public/icons/web-icons/Frozen.svg';
import normalImg from '../../../public/icons/web-icons/Normal.svg';

export function CartPageAccordion({ data }) {
  // 냉장 식품 선별
  const refrigerated = storingWaySort(data, '냉장');
  // 냉동 식품 선별
  const frozen = storingWaySort(data, '냉동');
  // 상온 식품 선별
  const roomTemperature = storingWaySort(data, '상온');

  // 선택된 상품 개수 관리
  const [checkCount, setCheckCount] = useState(0);
  console.log(frozen);

  return (
    <div>
      <ProductSelectCtrl cartData={data} checkCount={checkCount} />
      {refrigerated.length > 0 ? (
        <CartPageSet
          data={refrigerated}
          productType={'냉장'}
          storingWayImg={refrigeratedImg}
        />
      ) : null}
      {frozen.length > 0 ? (
        <CartPageSet
          data={frozen}
          productType={'냉동'}
          storingWayImg={frozenImg}
        />
      ) : null}
      {roomTemperature.length > 0 ? (
        <CartPageSet
          data={roomTemperature}
          productType={'상온'}
          storingWayImg={normalImg}
        />
      ) : null}
      <ProductSelectCtrl cartData={data} checkCount={checkCount} />
    </div>
  );
}
