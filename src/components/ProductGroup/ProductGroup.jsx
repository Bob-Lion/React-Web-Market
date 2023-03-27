import { useState, useEffect } from 'react';
import classes from './ProductGroup.module.scss';
import './ProductGroup.scss';
import { useRecoilValue, useRecoilState } from 'recoil';
// import { useReadData } from '@/firebase/firestore';
import { currentProductState } from '@/@atom/currentProductState';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductGroupFilter from './ProductGroupFilter';
// import PaginationPost from './../Pagination/PaginationPost';
import Pagination from 'react-js-pagination';

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

const ProductGroup = ({ data }) => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(6);

  const [currentProduct, setCurrentProduct] =
    useRecoilState(currentProductState);

  const handlePageChange = (page) => {
    setPage(page); //page: index
    console.log(page);
  };
  const itemChange = (e) => {
    console.log(items);
    setItems(Number(e.target.value));
  };

  // const { readData, data = null, error: readError } = useReadData(`products`);
  // useEffect(() => {
  //   readData();
  // }, []);

  if (!data) {
    console.log('no Data yet');
    return <div className={classes.ProductGroup}>no data yet</div>;
  } else {
    const productCardsArr = loadProductsCard(data, ProductCard);

    return (
      <div className="ProductGroup">
        <ProductGroupFilter />
        {productCardsArr
          .slice(items * (page - 1), items * (page - 1) + items)
          .map((card) => {
            return card;
          })}
        <div className="PaginationBox">
          <Pagination
            activePage={page}
            itemsCountPerPage={items}
            pageRangeDisplayed={3}
            totalItemsCount={productCardsArr.length}
            onChange={handlePageChange}
          />
        </div>
      </div>
    );
  }
};

export default ProductGroup;
