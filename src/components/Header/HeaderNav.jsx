import classes from '@/components/Header/Header.module.scss';


function HeaderNav({Fixed}){
  return(
    <>
      <ul className={Fixed ? classes.mini_header__nav : classes.header_nav}>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><a href='#!'>신상품</a></li>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><a href='#!'>베스트</a></li>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><a href='#!'>알뜰쇼핑</a></li>
        <li className={Fixed ? classes.mini_header__nav__fixed : classes.header_nav__willrouter}><a href='#!'>특가/혜택</a></li>
      </ul>
    </>

  );
}
export default HeaderNav;