import { CartPageProduct } from './CartPageProduct';
import { CartPageStoringWay } from './CartPageStoringWay';

export function CartPageSet({ data, productType, storingWayImg }) {
  return (
    <div>
      <CartPageStoringWay
        productType={productType}
        storingWayImg={storingWayImg}
      />
      <ul>
        <CartPageProduct />
      </ul>
    </div>
  );
}
