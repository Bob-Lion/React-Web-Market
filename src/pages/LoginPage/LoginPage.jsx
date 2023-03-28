import classes from '@/pages/LoginPage/LoginPage.module.scss';

import { useEffect, useState } from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useSetRecoilState } from 'recoil';
import { currentUserState } from '@/@atom/user/currentUserState';
import { useReadData } from '@/firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '@/firebase/auth';
import { isLoggedInState } from '@/@atom/Header/loginState';

function LoginPage() {
  const [idValue, setId] = useState('');
  const [pwValue, setPw] = useState('');
  const setCurrentUser = useSetRecoilState(currentUserState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const { readData, data } = useReadData('users');

  const saveUserId = (e) => {
    setId(e.target.value);
    // console.log(event.target.value);
  };

  const saveUserPw = (e) => {
    setPw(e.target.value);
    // console.log(event.target.value);
  };

  const navigate = useNavigate();
  const { signIn, user } = useSignIn();

  function handleSignIn() {
    signIn(idValue + '@boblion.com', pwValue);
  }
  useEffect(() => {
    if (user) {
      // console.log(user.user.uid);
      readUserData(user.user.uid);
    }
  }, [user]);

  async function readUserData(userDocId) {
    await readData(userDocId);
  }

  useEffect(() => {
    if (data) {
      setCurrentUser(data);
      setIsLoggedIn(true);
      navigate('/');

      // console.log(data);
    }
  }, [data]);

  return (
    <div>
      <Header />
      <section className={classes.loginpage}>
        <div className={classes.loginpage__wrapper}>
          <p>로그인</p>
          <form className={classes.loginpage__wrapper__form}>
            <input
              placeholder="아이디를 입력해주세요"
              type="text"
              value={idValue}
              onChange={saveUserId}
            ></input>
            <input
              placeholder="비밀번호를 입력해주세요"
              type="password"
              value={pwValue}
              onChange={saveUserPw}
            ></input>
            <div className={classes.loginpage__wrapper__form__find}>
              <span>
                <a href="#!">아이디 찾기</a>
              </span>
              <span>
                <a href="#!">비밀번호 찾기</a>
              </span>
            </div>
            <button
              className={classes.loginpage__wrapper__form__login_btn}
              type="button"
              onClick={handleSignIn}
            >
              로그인
            </button>
            <button
              className={classes.loginpage__wrapper__form__register_btn}
              type="button"
            >
              회원가입
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default LoginPage;
