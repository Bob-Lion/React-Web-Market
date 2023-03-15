import axios from 'axios'
import {useState} from 'react'
import Pagination from 'react-js-pagination'
import classes from './Pagination.module.scss'

const PaginationPost = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(5);

  const getClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data))
  }
  const postClick = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts',{
      userId :11,
      id:101,
      body:'test body',
      title:'test title'
    })
      .then(res => console.log(res.data))
  }

  const handlePageChange = (page) => { setPage(page); };
  const itemChange = (e) => {
    setItems(Number(e.target.value))

  }

console.log(items*(page-1), items*(page-1)+items)

  return (
    <div>
      <h2>API 연습</h2>
      <div>
        <button onClick={getClick}>Get</button>
        <button onClick={postClick}>Post</button>
        <select name="items" onChange={itemChange}>
          <option value="5">5개</option>
          <option value="10">10개</option>
          <option value="15">15개</option>
          <option value="20">20개</option>
        </select>
      </div>
      {data.slice(
        items*(page-1),
        items*(page-1)+items
      ).map((v,i) => {
        return (
          <div key={i}>
            <h3>{v.title}</h3>
            <div>userId = {v.userId}, id = {v.id}</div>
            <div>{v.body}</div>
          </div>
        )
      })}
      <div className={classes.PaginationBox}>
        <Pagination
          activePage={page}
          className={classes.Pagination}
          itemsCountPerPage={items}
          pageRangeDisplayed={3}
          totalItemsCount={data.length-1}
          onChange={handlePageChange} />
      </div>
    </div>
  )
}

export default PaginationPost