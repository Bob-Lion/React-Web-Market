import { ProductList } from '@/pages/ProductList/ProductList';
import '@/app/App.module.scss';
import { AddCartPopup } from '@/components/AddCart/AddCartPopup';
import { useRecoilState } from 'recoil';
import { popupVisible } from '@/@atom/addCartPopup/popupvisible';
import { useReadData } from '@/firebase/firestore';
import { useEffect } from 'react';
// const data = {
//   id: 'product-aaa',
//   name: '[풀무원] 탱탱쫄면 (4개입)',
//   description: '튀기지 않아 부드럽고 매콤한',
//   price: '',
//   saleRatio: 0,
//   salePrice: 4980,
//   image: {
//     view: 'tangtang.webp',
//     banner: 'tangtang.webp',
//     info: 'tangtang.webp',
//     thumbnail: 'tangtang.webp',
//     alt: '풀무원 탱탱쫄면',
//   },
//   stock: 6,
//   limited: true,
//   category: '샐러드·간편식',
//   bobLionOnly: 'false',
//   brand: '풀무원',
//   qnas: [],
// };

function App() {
  const [a, setA] = useRecoilState(popupVisible);
  const hdPopupVisible = () => {
    setA(true);
  };
  const { readData, data, error: readError } = useReadData('products');

  async function handleReadData(e) {
    e.preventDefault();
    // 모든 데이터를 가져옵니다.
    await readData('DnP8uh5EmasnRZalU112');

    // 또는 특정 도큐멘트 데이터만 가져옵니다.
    // await readData('documentKey');
  }

  useEffect(() => {
    // const pdData = data;s
    console.log(data);
    // console.log(data.price);
  }, [data]);
  return (
    <div className="App">
      {/* <ProductList /> */}
      <button onClick={handleReadData}>데이터 나와라 얍~!</button>
      <button onClick={hdPopupVisible}>팝업창 나와라 얍~!</button>
      {a ? <AddCartPopup data={data} /> : null}
    </div>
  );
}

export default App;
