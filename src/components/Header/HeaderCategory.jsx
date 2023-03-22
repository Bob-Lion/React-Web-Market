import classes from '@/components/Header/Header.module.scss';

import HeaderCategoryNav from '@/components/Header/HeaderCategoryNav';

import categoryIcon from '@/../public/Header/categoryIcon.svg';

function HeaderCategory({Fixed}){
  return(
    <>
      <button className={Fixed ? classes.mini_header_category__btn_fixed : classes.header_category__btn} type='button'>
        <img alt='category Icon' className={classes.header_category__btn_img} src={categoryIcon} />
        카테고리
      </button>
      <HeaderCategoryNav />
    </>
  );
}

export default HeaderCategory;