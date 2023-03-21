import { AddCartProduct } from './AddCartProduct';

export function AddCartSet({ data, productType }) {
  return (
    <div>
      <div>{productType} 상품</div>
      <ul>
        <AddCartProduct />
      </ul>
    </div>
  );
}
