import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import '@/app/App.css';
import { isLoggedIn } from '@/@atom/Header/loginState';
import { currentUserState } from '@/@atom/user/currentUserState';
import classes from '@/components/Header/Header.module.scss';

import { Link } from 'react-router-dom';

import HeaderTopbanner from '@/components/Header/HeaderTopbanner';
import HeaderIcon from '@/components/Header/HeaderIcon';
import MiniHeader from '@/components/Header/MiniHeader';

import logo from '@/../public/Header/logo.svg';
import bobLion from '@/../public/Header/bobLion.svg';
import newLogo from '@/../public/Header/newLogo.svg';
import searchIcon from '@/../public/Header/searchIcon.svg';
import triangleIcon from '@/../public/Header/triangleIcon.svg';
import userNewLogo from '@/../public/Header/userNewLogo.svg';

function Header() {
  const [login, setLogin] = useRecoilState(isLoggedIn);

  const user = useRecoilValue(currentUserState);

  //로그인 상태 변수(했다 true , 안했다 false)
  //const isLoginFlag=true;
  //const isLoginFlag=false;

  const [topBannerBtn, setTopBannerBtn] = useState(true);
  const [hover, setHover] = useState(false);
  const [hoverUser, setHoverUser] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  const handleMouseOverUser = () => {
    setHoverUser(true);
  };
  const handleMouseOutUser = () => {
    setHoverUser(false);
  };

  return (
    <div className="App_Header">
      {topBannerBtn ? <HeaderTopbanner onClose={setTopBannerBtn} /> : null}
      <header className={classes.header}>
        <section className={classes.header__top}>
          {login ? (
            <ul className={classes.header__top__customer}>
              <li
                className={classes.header__top__customer_username}
                onMouseEnter={handleMouseOverUser}
                onMouseLeave={handleMouseOutUser}
              >
                <a href="#!">
                  <span>일반</span> {user.name} 님
                  <img
                    alt="새로운 유저 로고"
                    className={classes.header__top__customer_username__logo}
                    src={userNewLogo}
                  />
                  <img alt="삼각형 아이콘" src={triangleIcon} />
                </a>
                <ul
                  className={classes.header__top__customer_username__popup}
                  hidden={!hoverUser}
                >
                  <li>
                    <a href="#!">주문 내역</a>
                  </li>
                  <li>
                    <a href="#!">선물 내역</a>
                  </li>
                  <li>
                    <a href="#!">찜한 상품</a>
                  </li>
                  <li>
                    <a href="#!">배송지 관리</a>
                  </li>
                  <li>
                    <a href="#!">상품 후기</a>
                  </li>
                  <li>
                    <a href="#!">상품 문의</a>
                  </li>
                  <li>
                    <a href="#!">적립금</a>
                  </li>
                  <li>
                    <a href="#!">쿠폰</a>
                  </li>
                  <li>
                    <a href="#!">개인 정보 수정</a>
                  </li>
                  <li>
                    <a href="#!">
                      나의 컬리 스타일{' '}
                      <img
                        alt="New"
                        className={classes.header__top__customer_username__logo}
                        src={userNewLogo}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#!">로그아웃</a>
                  </li>
                </ul>
              </li>
              <li
                className={classes.header__top__customer_service}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <a href="#!">
                  고객센터 <img alt="고객센터" src={triangleIcon} />
                </a>
                <ul
                  className={classes.header__top__customer_service__popup}
                  hidden={!hover}
                >
                  <li>
                    <a href="#!">공지사항</a>
                  </li>
                  <li>
                    <a href="#!">자주하는 질문</a>
                  </li>
                  <li>
                    <a href="#!">1:1 문의</a>
                  </li>
                  <li>
                    <a href="#!">대량주문 문의</a>
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <ul className={classes.header__top__customer}>
              <li className={classes.header__top__customer_register}>
                <Link to={'/register'}>회원가입</Link>
              </li>
              <li className={classes.header__top__customer_login}>
                <Link to={'/logIn'}>로그인 </Link>
              </li>
              <li
                className={classes.header__top__customer_service}
                onMouseEnter={handleMouseOver}
                onMouseLeave={handleMouseOut}
              >
                <a href="#!">
                  고객센터 <img alt="고객센터" src={triangleIcon} />
                </a>
                <ul
                  className={classes.header__top__customer_service__popup}
                  hidden={!hover}
                >
                  <li>
                    <a href="#!">공지사항</a>
                  </li>
                  <li>
                    <a href="#!">자주하는 질문</a>
                  </li>
                  <li>
                    <a href="#!">1:1 문의</a>
                  </li>
                  <li>
                    <a href="#!">대량주문 문의</a>
                  </li>
                </ul>
              </li>
            </ul>
          )}

          <div className={classes.kurly_wrapper}>
            <ul className={classes.kurly}>
              <li>
                <h1 className={classes.kurly__logo}>
                  <Link to={'/'}>
                    <div className={classes.kurly__logo_container}>
                      <img
                        alt="kurly logo"
                        className={classes.kurly__logo_icon}
                        src={bobLion}
                      />
                    </div>
                    {/* <div className={classes.kurly__logo_icon}></div> */}
                  </Link>
                </h1>
              </li>
              <li>
                <Link to={'/'}>밥을사자</Link>
              </li>
              <li>
                <a className={classes.kurly__beauty} href="#!">
                  옷을사자
                </a>
                <img
                  alt="new logo"
                  className={classes.kurly__new_icon}
                  src={newLogo}
                />
              </li>
            </ul>
            <div className={classes.kurly_search}>
              <form className={classes.kurly_search__form} name="search form">
                <input
                  name="search input"
                  placeholder="검색어를 입력해주세요"
                  type="search"
                ></input>
                <button
                  className={classes.kurly_search__form_button}
                  type="submit"
                >
                  <img
                    alt="search button"
                    className={classes.kurly_search__form_button__img}
                    src={searchIcon}
                  />
                </button>
              </form>
            </div>
            <HeaderIcon login={login} user={user} />
          </div>
        </section>

        <MiniHeader login={login} user={user} />
      </header>
    </div>
  );
}
export default Header;
