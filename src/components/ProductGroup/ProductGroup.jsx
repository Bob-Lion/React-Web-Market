import { useState, useEffect, useRef } from 'react';
import classes from './ProductGroup.module.scss';
import './ProductGroup.scss';
import { useRecoilValue, useRecoilState } from 'recoil';
// import { useReadData } from '@/firebase/firestore';
import { currentProductState } from '@/@atom/currentProductState';
import ProductCard from '@/components/ProductCard/ProductCard';
import ProductGroupFilter from './ProductGroupFilter';

// import PaginationPost from './../Pagination/PaginationPost';
import Pagination from 'react-js-pagination';
import { categorySelectState } from '@/@atom/accordion/categorySelectState';
import { brandSelectState } from '@/@atom/accordion/brandSelectState';
import { allDataFilterSelect } from '@/utils/product_list/allDataFilterSelect';
import { accordionModalState } from '@/@atom/accordion/accordionModalState';
import { modalVisibleState } from '@/@atom/accordion/modalVisibleState';

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
  const zIndexCtrl = useRef();

  const [accordionModal, setAccordionModal] =
    useRecoilState(accordionModalState);

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

  const [categorySelectData, setCategorySelectData] =
    useRecoilState(categorySelectState);
  const [brandSelectData, setBrandSelectData] =
    useRecoilState(brandSelectState);

  const [modalVisibleCtrlState, setModalVisibleCtrlState] =
    useRecoilState(modalVisibleState);

  // const { readData, data = null, error: readError } = useReadData(`products`);
  // useEffect(() => {
  //   readData();
  // }, []);
  let selectSortData = [];
  let selectCategorySortData = [];
  let selectBrandSortData = [];

  useEffect(() => {
    console.log('카테고리 데이터는 :', categorySelectData);
    console.log('브랜드 데이터는 :', brandSelectData);
  }, [categorySelectData, brandSelectData]);

  if (data) {
    selectCategorySortData = allDataFilterSelect(
      data,
      categorySelectData,
      'category'
    );
    selectBrandSortData = allDataFilterSelect(data, brandSelectData, 'brand');
    if (selectCategorySortData.length < 1 && selectBrandSortData.length < 1) {
      selectSortData = data;
    } else if (
      selectCategorySortData.length > 0 &&
      selectBrandSortData.length < 1
    ) {
      selectSortData = selectCategorySortData;
    } else if (
      selectCategorySortData.length < 1 &&
      selectBrandSortData.length > 0
    ) {
      selectSortData = selectBrandSortData;
    } else if (
      selectCategorySortData.length > 0 &&
      selectBrandSortData.length > 0
    ) {
      selectSortData = allDataFilterSelect(
        selectCategorySortData,
        selectBrandSortData.map((a) => a.brand),
        'brand'
      );
    }
  }

  useEffect(() => {
    console.log(modalVisibleCtrlState);
  }, [modalVisibleCtrlState]);

  useEffect(() => {
    if (zIndexCtrl.current) {
      if (!modalVisibleCtrlState) {
        zIndexCtrl.current.style.zIndex = 1;
      } else {
        zIndexCtrl.current.style.zIndex = -1;
      }
    }
  }, [data, modalVisibleCtrlState]);

  if (!data) {
    console.log('no Data yet');
    return <div className={classes.ProductGroup}>no data yet</div>;
  } else {
    console.log('렌더링 되어지는 데이터 : ', selectCategorySortData);
    const productCardsArr = loadProductsCard(selectSortData, ProductCard);

    return (
      <div ref={zIndexCtrl} className="ProductGroup">
        <ProductGroupFilter data={selectSortData} />
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
