// product-list 페이지

import { ProductList_Nav } from '../../components/ProductList_Nav/ProductList_Nav';

export function ProductList({ product }) {
  return (
    <>
      <ProductList_Nav product={product} />
    </>
  );
}
