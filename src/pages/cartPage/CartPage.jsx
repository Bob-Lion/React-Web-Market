import { CartPageAccordion } from '@/components/CartPageAccordion/CartPageAccordion';
import { CartPageCredit } from '@/components/CartPageCredit/CartPageCredit';
import { useEffect, useMemo } from 'react';
import { useReadData } from '@/firebase/firestore';
import { useRecoilState } from 'recoil';
import { cartTotalSeletState } from '@/@atom/cartPage/cartTotalSeletState';

export function CartPage() {
  const cartLocalData = JSON.parse(localStorage.getItem('addCart'));
  const localCount = cartLocalData;

  // 로컬스토리지에 있는 count 값 추가해 줘야댐
  const cartData = [
    {
      brand: '샘플 브랜드',
      category: '건강식품',
      description: 'description 샘플',
      detailImg: ['asd', 'dfg'],
      detailInfo: {
        productWeight: '500ml',
        producer: '주식회사 밥을사자',
        alergicInfo: '대두,밀,고등어 함유',
      },
      id: 'DnP8uh5EmasnRZalU112',
      isBobOnly: false,
      isLimited: true,
      key: ' DnP8uh5EmasnRZalU112',
      likeCount: 4,
      name: 'sampleProduct',
      price: 10000,
      reviewCount: 11,
      salePrice: 9000,
      saleRatio: 10,
      stock: 10,
      storingWay: '냉장',

      // 로컬스토리지에 있는 count 값 추가해 줘야댐
      localCount: 3,
    },
    {
      brand: '샘플 브랜드2',
      category: '채소',
      description: 'description 샘플2',
      detailImg: ['asd', 'dfg'],
      detailInfo: {
        productWeight: '500ml',
        producer: '주식회사 밥을사자',
        alergicInfo: '대두,밀,고등어 함유',
      },
      id: 'DnP8uh5EmasnRZalU112',
      isBobOnly: true,
      isLimited: true,
      key: ' DnP8uh5EmasnRZalU112',
      likeCount: 4,
      name: 'sampleProduct2',
      price: 20000,
      reviewCount: 14,
      salePrice: 10000,
      saleRatio: 50,
      stock: 8,
      storingWay: '냉동',

      // 로컬스토리지에 있는 count 값 추가해 줘야댐
      localCount: 5,
    },
  ];

  return (
    <div>
      <h2>장바구니</h2>
      <div>
        <CartPageAccordion data={cartData} />
        <CartPageCredit data={cartData} />
      </div>
    </div>
  );
}
