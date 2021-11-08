import { useEffect } from 'react';
import InnerComponent from './common';

export const AppendToDomReversSpan = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('AppendToDomReversSpan mount');
    return () => console.log('AppendToDomReversSpan unmount');
  }, []);
  //так как у нас span и InnerComponent поменялись местами, происходит маунт-анмаунт
  if (isShowText) {
    return (
      <div className='div-1'>
        <span>Какая крутая машина</span>
        <InnerComponent title='InnerComponent AppendToDomReversSpan' />
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='AppendToDomReversSpan' />
    </div>
  );
};
export const AppendToDom = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('AppendToDom mount');
    return () => console.log('AppendToDom unmount');
  }, []);
  //лишняя обертка перед InnerComponent заставит размаунтить и замаунтить весь узер div-2 и все что внутри
  //в компоненте NotAppendToDom такого не произойдет
  if (isShowText) {
    return (
      <div className='div-1'>
        <div className='div-2'>
          <InnerComponent title='InnerComponent AppendToDom' />
          <span>Какая крутая машина</span>
        </div>
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='AppendToDom' />
    </div>
  );
};
