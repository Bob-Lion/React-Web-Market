import { CartPageAccordion } from '@/components/CartPageAccordion/CartPageAccordion';
import { CartPageCredit } from '@/components/CartPageCredit/CartPageCredit';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useReadData } from '@/firebase/firestore';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartTotalSeletState } from '@/@atom/cartPage/cartTotalSeletState';
import styles from './CartPage.module.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { cartPopupVisibleState } from '@/@atom/addCartPopup/cartPopupVisibleState';
import { async } from '@firebase/util';
import { filterByDocId } from '@/utils/filterDocId';

export function CartPage() {
  const cartLocalData = JSON.parse(localStorage.getItem('addCart'));
  // const localCount = cartLocalData;
  // const { readData, data = null, error: readError } = useReadData(`products`);

  // let cpv = useRecoilValue(cartPopupVisibleState);

  // useEffect(() => {
  //   readData();
  // }, []);

  // 로컬스토리지에 있는 count 값 추가해 줘야댐
  const cartData = [];

  // let cartData2 = useRef([]);

  // let cartData3 = useRef([]);

  /* useEffect(() => {
    cartLocalData.map((localData) => {
      const dataDocId = localData.docId;
      // const dataCount = localData.count;
      readData(dataDocId);
      console.log(data);
      // data.count = dataCount;
      // cartData2.push({ ...data });
    });
  }, []); */

  // useEffect(() => {
  //   if (data) {
  //     cartData2.current = cartLocalData.map((localData) => {
  //       const firebaseData = filterByDocId(data, localData.docId);
  //       return { ...firebaseData[0] };
  //     });

  //     // console.log(
  //     //   cartData2.current.map((item, index) => {
  //     //     item.count = cartLocalData[index].count;
  //     //     return item;
  //     //   })
  //     // );
  //     cartData3.current = cartData2.current.map((item, index) => {
  //       item.count = cartLocalData[index].count;
  //       return item;
  //     });
  //     console.log(cartData3.current);
  //   }
  // }, [data]);

  if (!cartData) {
    //
  } else {
    console.log(cartLocalData);
    // console.log('ajhsbajs', cartData3.current);
    // const cartData1 =

    // useEffect(() => {
    //   cartLocalData.map((data) => {
    //     const dataDocId = data.docId;
    //     const dataCount = data.count;
    //     const dbReadData = readData(dataDocId);
    //     dbReadData.count = dataCount;
    //     cartData2.push(dbReadData);
    //   });
    // }, [cartLocalData]);

    // useEffect(() => {}, [cpv]);
    // console.log(cartLocalData);
    // console.log(cartData2);
    // console.log('aaa', cartData2);

    return (
      <>
        <Header />
        {/* <button onClick={handleData}>asfafas</button> */}
        <div className={styles.cartPage}>
          <h2 className={styles.cartPageTitle}>장바구니</h2>
          <div className={styles.cartPageContainer}>
            <CartPageAccordion data={cartLocalData} />
            <CartPageCredit data={cartLocalData} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
