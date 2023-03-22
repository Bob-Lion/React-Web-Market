import { CartPageProduct } from './CartPageProduct';

export function CartPageSet({ data, productType }) {
  return (
    <div>
      <div>{productType} 상품</div>
      <ul>
        <CartPageProduct />
      </ul>
    </div>
  );
}
