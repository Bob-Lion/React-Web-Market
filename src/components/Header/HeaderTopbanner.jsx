import classes from '@/components/Header/Header.module.scss';
import topBannerCloseBtnIcon from '@/../public/Header/topBannerCloseBtnIcon.svg';


function HeaderTopbanner({onClose}){  

  return (
    <>
      <div className={classes.topbanner}>
        <div className={classes.topbanner__wrapper}>
          <div className={classes.topbanner__text}>
            지금 가입하고 인기상품 <strong>100원</strong>에 받아가세요!
          </div>
          <button className={classes.topbanner__close_btn} type='button' onClick={() => { onClose(false) } } >
            <img alt="상단 배너 닫기" src={topBannerCloseBtnIcon}  />
          </button>
          
        </div>
      </div>
    </>
  )
}
export default HeaderTopbanner;