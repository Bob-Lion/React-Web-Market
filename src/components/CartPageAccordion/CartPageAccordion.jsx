import { storingWaySort } from '@/utils/storingWay/storingWaySort';
import { CartPageSet } from './CartPageSet';
import { ProductSelectCtrl } from './ProductSelectCtrl';

export function CartPageAccordion({ data }) {
  // 냉장 식품 선별
  const refrigerated = storingWaySort(data, '냉장');
  // 냉동 식품 선별
  const frozen = storingWaySort(data, '냉동');
  // 상온 식품 선별
  const roomTemperature = storingWaySort(data, '상온');

  console.log(frozen);

  return (
    <div>
      <ProductSelectCtrl cartData={data} />
      {refrigerated.length > 0 ? (
        <CartPageSet data={refrigerated} productType={'냉장'} />
      ) : null}
      {frozen.length > 0 ? (
        <CartPageSet data={frozen} productType={'냉동'} />
      ) : null}
      {roomTemperature.length > 0 ? (
        <CartPageSet data={roomTemperature} productType={'상온'} />
      ) : null}
      <ProductSelectCtrl cartData={data} />
    </div>
  );
}
