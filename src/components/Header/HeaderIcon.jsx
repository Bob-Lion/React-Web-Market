import { useState,useEffect,useRef } from 'react';

import classes from '@/components/Header/Header.module.scss';

import HeaderLoginPopup from '@/components/Header/HeaderLoginPopup';
import HeaderNoLoginPopup from '@/components/Header/HeaderNoLoginPopup';

import mapIcon from '@/../public/Header/mapIcon.svg';
import favoriteIcon from '@/../public/Header/favoriteIcon.svg';
import cartIcon from '@/../public/Header/cartIcon.svg';
import {Link} from 'react-router-dom';

function HeaderIcon ({Fixed,login,user}){
  //console.log(login);
  //로그인 상태 변수(했다 true , 안했다 false)
  //const isLoginFlag=false;
  //const isLoginFlag=true;

  const mapIconRef=useRef(null);

  const [mapIconHover,setMapIconHover]=useState(false);

  const handleMouseOver=()=>{
    setMapIconHover(true);
  }
  const handleMouseOut=()=>{
    setMapIconHover(false);
  }


  useEffect(()=>{

    if(!mapIconRef.current){
      return;
    }
    const mapIconRefInstance=mapIconRef.current;
    mapIconRefInstance.addEventListener('mouseover', handleMouseOver);
    mapIconRefInstance.addEventListener('mouseout', handleMouseOut);
    return()=>{
      mapIconRefInstance.removeEventListener('mouseover', handleMouseOver);
      mapIconRefInstance.removeEventListener('mouseout', handleMouseOut);
    }

  })

  return(
    <>
      <ul className={Fixed? classes.mini_headerIcon_wrapper : classes.headerIcon_wrapper}>
        <li className={classes.headerIcon_wrapper__map_icon} ref={mapIconRef}  >
          <a href='#!'><img alt='map Icon' src={mapIcon} /></a>
        {login ? <HeaderLoginPopup mapIconHover={mapIconHover} user={{...user}}/> : <HeaderNoLoginPopup mapIconHover={mapIconHover}  /> }
        </li>

        <li><a href='#!'><img alt='favorite Icon' src={favoriteIcon} /></a></li>
        <li><Link to={'/cart'}><img alt='cart Icon' src={cartIcon} /></Link></li>
      </ul>
    </>
  );
}
export default HeaderIcon;