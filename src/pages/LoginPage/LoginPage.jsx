import classes from '@/pages/LoginPage/LoginPage.module.scss';

import { useState } from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

function LoginPage (){

  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');

  const saveUserId = (e) => {
    setId(e.target.value);
    // console.log(event.target.value);
  };

  const saveUserPw = (e) => {
    setPw(e.target.value);
    // console.log(event.target.value);
  };

  return(
    <div >
      <Header />
        <section className={classes.loginpage}>
          <div className={classes.loginpage__wrapper}>
            <p>로그인</p>
            <form className={classes.loginpage__wrapper__form}>
              <input placeholder="아이디를 입력해주세요" type="text" value={idValue} onChange={saveUserId} ></input>
              <input placeholder="비밀번호를 입력해주세요" type="password" value={pwValue} onChange={saveUserPw} ></input>
              <div className={classes.loginpage__wrapper__form__find}>
                <span><a href='#!'>아이디 찾기</a></span><span><a href='#!'>비밀번호 찾기</a></span>
              </div>
              <button className={classes.loginpage__wrapper__form__login_btn} type="submit">로그인</button>
              <button className={classes.loginpage__wrapper__form__register_btn}type="submit">회원가입</button>
            </form>
          </div>
        </section>
      <Footer />
    </div>
  )
}
export default LoginPage