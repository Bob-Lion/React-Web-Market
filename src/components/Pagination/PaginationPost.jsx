//import axios from 'axios'
import { useState } from 'react';
import Pagination from 'react-js-pagination';
import classes from '@/components/Pagination/Pagination.module.scss';
import { productData } from '@/@atom/productData';
import { useRecoilValue } from 'recoil';

const PaginationPost = () => {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);
  const product = useRecoilValue(productData);

  const handlePageChange = (page) => {
    setPage(page); //page: index
  };
  const itemChange = (e) => {
    console.log(items);
    setItems(Number(e.target.value));
  };

  return (
    <div>
      <div>
        {product
          .slice(items * (page - 1), items * (page - 1) + items)
          .map((v, i) => {
            return (
              <div key={i}>
                <h3>{v.name}</h3>
                <div>
                  {v.description}, id = {v.id}
                </div>
                <div>{v.price}원</div>
              </div>
            );
          })}
      </div>
      <div className={classes.PaginationBox}>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          pageRangeDisplayed={3}
          totalItemsCount={product.length - 1}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PaginationPost;
