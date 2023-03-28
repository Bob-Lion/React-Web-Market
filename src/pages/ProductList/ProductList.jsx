// product-list 페이지

import { ProductListNav } from '@/components/ProductListNav/ProductListNav';
import styles from '@/pages/ProductList/ProductList.module.scss';
import ProductGroup from '@/components/ProductGroup/ProductGroup';
import { useEffect } from 'react';
import { useReadData } from '@/firebase/firestore';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export function ProductList() {
  const { readData, data = null, error: readError } = useReadData(`products`);
  useEffect(() => {
    readData();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.productList}>
        <ProductListNav data={data} />
        <ProductGroup data={data} />
      </div>
      <Footer />
    </div>
  );
}
