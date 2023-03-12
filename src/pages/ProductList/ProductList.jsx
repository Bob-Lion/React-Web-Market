// product-list 페이지

import { ProductListNav } from '@/components/ProductListNav/ProductListNav';

export function ProductList({ product }) {
  return (
    <>
      <ProductListNav product={product} />
    </>
  );
}
