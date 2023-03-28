import classes from '@/components/Header/Header.module.scss';
import { Link} from 'react-router-dom';

function HeaderNav({Fixed}){


  return(
    <>
      <ul className={Fixed ? classes.mini_header__nav : classes.header_nav}>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><Link to={'/productList'}>신상품</Link></li>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><Link to={'/productList'}>베스트</Link></li>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><Link to={'/productList'}>알뜰쇼핑</Link></li>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><Link to={'/productList'}>특가/혜택</Link></li>
      </ul>
    </>

  );
}
export default HeaderNav;
