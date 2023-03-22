import {useState} from 'react';

import '@/app/App.module.scss'
import classes from '@/components/Header/Header.module.scss';

import HeaderTopbanner from '@/components/Header/HeaderTopbanner';
import HeaderIcon from '@/components/Header/HeaderIcon';
import MiniHeader from '@/components/Header/MiniHeader';

import logo from '@/../public/Header/logo.svg';
import newLogo from '@/../public/Header/newLogo.svg';
import searchIcon from '@/../public/Header/searchIcon.svg';
import customerServiceIcon from '@/../public/Header/customerServiceIcon.svg';

function Header () {
  const [topBannerBtn , setTopBannerBtn] =useState(true);

  return (
    <div className="App_Header">
      {topBannerBtn ? <HeaderTopbanner onClose={setTopBannerBtn} /> : null}
      <header className={classes.header}>
        <section className={classes.header__top}>
            <ul className={classes.header__top__customer}>
              <li className={classes.header__top__customer_register}><a href='#!'>회원가입</a></li>
              <li className={classes.header__top__customer_login}><a href='#!'>로그인 </a></li>
              <li className={classes.header__top__customer_service}><a href='#!'>고객센터 <img alt='고객센터' src={customerServiceIcon}/> </a></li>
            </ul>
    
          <div className={classes.kurly_wrapper}>
            <ul className={classes.kurly}>
                <li>
                  <h1 className={classes.kurly__logo}>
                    <a className={classes.kurly__logo__willrouter} href='#!' ><img alt='kurly logo' className={classes.kurly__logo_icon} src={logo} /></a>
                  </h1>
                </li>
                <li><a href='#!'>마켓컬리</a></li>
                <li><a className={classes.kurly__beauty} href='#!' >뷰티컬리</a><img alt='new logo' className={classes.kurly__new_icon} src={newLogo} /></li>
            </ul>
            <div className={classes.kurly_search}>
              <form className={classes.kurly_search__form} name='search form'>
                <input name='search input' placeholder="검색어를 입력해주세요" type='search' ></input>
                <button className={classes.kurly_search__form_button} type='submit'>
                    <img alt='search button' className={classes.kurly_search__form_button__img}  src={searchIcon}/>
                </button>
              </form>
            </div>
            <HeaderIcon />
          </div>
        </section>
        
      <MiniHeader />

      </header>
      <div className={classes.test1}>test1</div>
      <div className={classes.test2}>test2</div>
      <div className={classes.test3}>test3</div>
      <div className={classes.test4}>test4</div>
      <div className={classes.test5}>test5</div>
    </div>
  );
}
export default Header;





