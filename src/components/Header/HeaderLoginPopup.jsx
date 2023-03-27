import classes from '@/components/Header/Header.module.scss';

import popupPointer from '@/../public/Header/popupPointer.svg';

/* 로그인 했을 때 location hover팝업 */
function HeaderLoginPopup ({mapIconHover,user} ){

  //console.log(user);
  //console.log(user.adress);

  /* 배송지 등록 상태 변수(등록됨 true , 등록안됨 false) */
  //const inputAddress=false;
  //const inputAddress=true;

  return(
    <>
    { 
    user.adress ? 
    /* 배송지 등록 o */
    <div className={classes.headerIcon_wrapper__map_icon__login_popup}  hidden={!mapIconHover} >
      <img alt=' ' className={classes.headerIcon_wrapper__map_icon__login_popup__img} src={popupPointer}  />
      <p>{user.adress} </p>
      <p><span>샛별 배송</span></p>
      <button className={classes.headerIcon_wrapper__map_icon__login_popup__location_search_btn} type='button'>배송지 변경</button>
    </div>
    :     
    /*배송지 등록 x  */
    <div className={classes.headerIcon_wrapper__map_icon__login_popup__no_address}  hidden={!mapIconHover} >
      <img alt=' ' className={classes.headerIcon_wrapper__map_icon__login_popup__no_address__img} src={popupPointer}  />
      <p><span>배송지를 등록</span>하고</p>
      <p>구매 가능한 상품을 확인하세요! </p>
      <button className={classes.headerIcon_wrapper__map_icon__login_popup__no_address__location_search_btn} type='button'>주소검색</button>
    </div>
    }

    </>
  );
}
export default HeaderLoginPopup