import { atom, useRecoilState } from 'recoil';

export const currentProductState = atom({
  key: 'currentProductState',
  default: null,
  // {
  //   id: '9MjWQLw5Kb36efL2rbkC',
  //   detailImg:
  //     "['https://firebasestorage.googleapis.com/v0/b/react-web-market.appspot.com/o/products%2F%EB%8B%B9%EB%8F%84%EC%84%A0%EB%B3%84%20%EC%B2%9C%ED%98%9C%ED%96%A5%201.2kg%20(5~7%EC%9E%85)%2FdetailImg1.jpeg?alt=media&token=ddda74f5-680b-4379-a665-514994b879e1', 'https://firebasestorage.googleapis.com/v0/b/react-web-market.appspot.com/o/products%2F%EB%8B%B9%EB%8F%84%EC%84%A0%EB%B3%84%20%EC%B2%9C%ED%98%9C%ED%96%A5%201.2kg%20(5~7%EC%9E%85)%2FdetailImg2.jpg?alt=media&token=56297abc-963a-4fe1-ae29-dd475c5a4696']",
  //   description: '빈틈없이 차오르는 상큼 달콤함',
  //   storingWay: '냉장',
  //   name: '당도선별 천혜향 1.2kg (5~7입)',
  //   reviewCount: 483,
  //   category: "['과일'·'견과'·'쌀']",
  //   saleRatio: 0,
  //   isBobOnly: false,
  //   brand: '달콤트리',
  //   mainImg:
  //     'https://firebasestorage.googleapis.com/v0/b/react-web-market.appspot.com/o/products%2F%EB%8B%B9%EB%8F%84%EC%84%A0%EB%B3%84%20%EC%B2%9C%ED%98%9C%ED%96%A5%201.2kg%20(5~7%EC%9E%85)%2FmainImg.jpeg?alt=media&token=9de637fb-4604-4d5b-99dc-5bfb44e8cf62',
  //   price: 11900,
  //   stock: 30,
  //   detailInfo: {
  //     alergicInfo: null,
  //     wrappingType: '냉장 (종이포장)',
  //     productWeight: '5~7입',
  //     salesUnit: '1팩',
  //     productOrigin: '국산',
  //     shippingWay: '샛별배송',
  //     producer: '주식회사 밥을사자',
  //   },
  //   likedCount: 0,
  //   salePrice: 11900,
  //   isLimited: false,
  //   key: '9MjWQLw5Kb36efL2rbkC',
  //   reviewList : []
  // },
});

// const [currentProduct,setCurrentProduct] = useRecoilState(currentProductState);
// export function setCurrentProductState(currentProduct,setCurrentProduct) {

// }
