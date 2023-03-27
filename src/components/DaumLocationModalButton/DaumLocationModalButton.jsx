import RegisterFormStyledButton from '@/components/RegisterForm/RegisterFormStyledButton';
import { useRef, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import ReactDaumPost from 'react-daumpost-hook';
import classes from './DaumLocationModalButton.module.scss';

export default function DaumLocationModalButton(props) {
  const { getDataCallback } = props;

  const postConfig = {
    onComplete: (data) => {
      // console.log(data);
      // console.log(data.address);
      if (getDataCallback) {
        getDataCallback(data.address);
      }
    },
  };
  const postCode = ReactDaumPost(postConfig);

  return (
    <div className="DaumLocationModalButton">
      <RegisterFormStyledButton
        // customStyle={{ width: '120px', height: '44px', marginLeft: '8px' }}
        handleOnClick={postCode}
        innerText={'주소 검색'}
      />
    </div>
  );
}

// 사용예시

// <DaumLocationModalButton
//   getDataCallback={(address) => {
//     setLocation(address);
//     console.log(address);
//   }}  />
