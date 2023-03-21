import { AddCartAccordion } from '@/components/AddCartAccordion/AddCartAccordion';
import { AddCartCredit } from '@/components/AddCartCredit/AddCartCredit';
import { useEffect, useMemo } from 'react';
import { useReadData } from '@/firebase/firestore';

export function AddCart() {
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
    },
  ];

  return (
    <div>
      <h2>장바구니</h2>
      <div>
        <AddCartAccordion data={cartData} />
        <AddCartCredit data={cartData} />
      </div>
    </div>
  );
}
