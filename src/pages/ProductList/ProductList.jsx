// product-list 페이지

import { ProductListNav } from '@/components/ProductListNav/ProductListNav';
import styles from '@/pages/ProductList/ProductList.module.scss';

export function ProductList({ product }) {
  return (
    <div>
      <div className={styles.productList}>
        <ProductListNav product={product} />
      </div>
    </div>
  );
}
