import { useState, useEffect } from 'react';
import classes from './ProductGroup.module.scss';
import './ProductGroup.scss';
import { productData } from '@/@atom/productData';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useReadData } from '@/firebase/firestore';
import { currentProductState } from '@/@atom/currentProductState';
import ProductCard from '@/components/ProductCard/ProductCard';

function loadProductsCard(contentsArray, ContentElem) {
  let elementsArr = [];
  if (contentsArray) {
    /* todo --------------------------------------------------------------------- */
    // contentsArray 내용으로 elementsArr 채워야함
    contentsArray.forEach((content) => {
      elementsArr.push(<ContentElem key={content.id} content={content} />);
    });
  } else {
    // warning about empty arr
  }

  return elementsArr;
}

const ProductGroup = () => {
  const product = useRecoilValue(productData);

  const [currentProduct, setCurrentProduct] =
    useRecoilState(currentProductState);

  const { readData, data = null, error: readError } = useReadData(`products`);
  useEffect(() => {
    readData();
  }, []);

  if (!data) {
    console.log('no Data yet');
    return <div className={classes.ProductGroup}>no data yet</div>;
  } else {
    console.log(loadProductsCard(data, ProductCard));
    const productCardsArr = loadProductsCard(data, ProductCard);
    return (
      <div className="ProductGroup">
        {productCardsArr.map((card) => {
          return card;
        })}
      </div>
    );
  }
};

export default ProductGroup;
