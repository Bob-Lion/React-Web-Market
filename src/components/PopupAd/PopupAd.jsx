import { useState, useEffect } from 'react';
import classes from '@/components/PopupAd/PopupAd.module.scss';

function PopupAd() {
  const [popup, setPopupActive] = useState(true);

  const closePopup = (expireDays) => {
    let expire = new Date();
    expire.setTime(expire.getTime() + expireDays * 24 * 60 * 60 * 1000);
    localStorage.setItem('popupNoShow', expire.getTime());
  };

  const checkPopupClose = () => {
    const expireDay = localStorage.getItem('popupNoShow');
    let today = new Date();

    if (today.getTime() > expireDay) {
      return false;
    } else {
      return true;
    }
  };

  const closePopupToday = () => {
    closePopup(1);
    setPopupActive(false);
  };

  useEffect(() => {
    checkPopupClose() ? setPopupActive(false) : setPopupActive(true);
  }, []);

  return (
    <>
      {popup && (
        <>
          <div className={classes.popup}>
            <div className={classes.popupWrap}>
              <a href="https://www.kurly.com/main/beauty">
                <img
                  alt=""
                  className={classes.popupImg}
                  src="img/PopupAd/popup-image.svg"
                />
              </a>
              <div className={classes.popupBtnArea}>
                <button
                  className={classes.btnCloseToday}
                  type="button"
                  onClick={closePopupToday}
                >
                  오늘 하루 안 보기
                </button>
                <button
                  className={classes.btnClose}
                  type="button"
                  onClick={() => setPopupActive(false)}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PopupAd;
