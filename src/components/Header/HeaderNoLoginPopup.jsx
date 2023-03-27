import classes from '@/components/Header/Header.module.scss';

//import DaumLocationModalButton from '@components/DaumLocationModalButton/DaumLocationModalButton';

import popupPointer from '@/../public/Header/popupPointer.svg';
import mapIconPopupSearchIcon from '@/../public/Header/mapIconPopupSearchIcon.svg';

/* 로그인 안했을 때 location hover팝업 */
function HeaderNoLoginPopup ({mapIconHover}){

  return(
    <>
    <div className={classes.headerIcon_wrapper__map_icon__nologin_popup} hidden={!mapIconHover} >
      <img alt=' ' className={classes.headerIcon_wrapper__map_icon__nologin_popup__img} src={popupPointer}  />
      <p><span>배송지를 등록</span>하고</p>
      <p>구매 가능한 상품을 확인하세요! </p>
      <button className={classes.headerIcon_wrapper__map_icon__nologin_popup__login_btn} type='button' >로그인</button>
      <button className={classes.headerIcon_wrapper__map_icon__nologin_popup__location_search_btn} type='button'>
        <img alt='로케이션 팝업 주소 검색 아이콘' className={classes.headerIcon_wrapper__map_icon__nologin_popup__location_search_icon} src={mapIconPopupSearchIcon} />
        주소 검색
        {/*  <DaumLocationModalButton
            getDataCallback={(address) => {
              setLocation(address);
              console.log(address);
            }}  />  */}
        </button>
    </div>
    </>
  );
}
export default HeaderNoLoginPopup