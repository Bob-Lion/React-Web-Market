import {useState,useEffect, useRef} from 'react';

import classes from '@/components/Header/Header.module.scss';

import HeaderCategory from '@/components/Header/HeaderCategory';
import HeaderNav from '@/components/Header/HeaderNav';
import HeaderIcon from '@/components/Header/HeaderIcon';

import miniHeaderSearchIcon from '@/../public/Header/miniHeaderSearchIcon.svg';

function MiniHeader ({login,user}) {
  const miniHeaderRef=useRef();
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [miniHeaderState,setMiniHeaderState]=useState(false);

  const handleScroll= ()=>{
    if(windowScrollY > 145 ){
      setWindowScrollY(window.pageYOffset)
      console.log(windowScrollY)
      setMiniHeaderState(true);
      } 
      else {
        setWindowScrollY(window.pageYOffset)
        setMiniHeaderState(false);
      } 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return(
    <>
      <div className={miniHeaderState ? classes.mini_header__fixed : classes.mini_header} ref={miniHeaderRef}>
        <section className={miniHeaderState ? classes.mini_header__bottome__fixed : classes.header__bottome}>

          <HeaderCategory />

          {miniHeaderState ? <HeaderNav Fixed={miniHeaderState} /> : <HeaderNav /> }

          {miniHeaderState ? null : <button className= {classes.header_delivery__btn} type='button'><span>샛별 · 택배</span> 배송안내</button>}

          {miniHeaderState ? 
            <div className={classes.mini_header__search}>
              <form className={classes.mini_header__search__form} name='search form'>
                <input name='search input' placeholder="검색어를 입력해주세요" type='search'></input>
                <button className={classes.mini_header__search__form_button} type='submit'>
                    <img alt='search button' className={classes.mini_header__search__form_button__img}  src={miniHeaderSearchIcon} />
                </button>
              </form>
            </div> : null}

          {miniHeaderState ? <HeaderIcon Fixed={miniHeaderState} login={login} user={{...user}}/> : null }

        </section>
      </div>
    </>
  );
}
export default MiniHeader

