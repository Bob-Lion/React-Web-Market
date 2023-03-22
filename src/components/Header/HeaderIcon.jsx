import classes from '@/components/Header/Header.module.scss';

import mapIcon from '@/../public/Header/mapIcon.svg';
import favoriteIcon from '@/../public/Header/favoriteIcon.svg';
import cartIcon from '@/../public/Header/cartIcon.svg';

function HeaderIcon ({Fixed}){
  return(
    <>
      <ul className={Fixed? classes.mini_headerIcon_wrapper : classes.headerIcon_wrapper}>
        <li><a href='#!'><img alt='map Icon' src={mapIcon} /></a></li>
        <li><a href='#!'><img alt='favorite Icon' src={favoriteIcon} /></a></li>
        <li><a href='#!'><img alt='cart Icon' src={cartIcon} /></a></li>
      </ul>
    </>
  );
}
export default HeaderIcon;