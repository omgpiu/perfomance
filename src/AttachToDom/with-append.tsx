import {useEffect} from 'react';
import InnerComponent from './common';

//лишняя обертка перед InnerComponent заставит размаунтить и замаунтить весь узер div-2 и все что внутри
export const AppendToDom = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('Первая бибика effect mount');
    return () => console.log('Первая бибика');
  }, []);

  if (isShowText) {
    return (
      <div className='div-1'>
        <div className='div-2'>
          <InnerComponent title='InnerComponent Первая бибика' />
          <span>Какая крутая машина</span>
        </div>
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='InnerComponent Первая бибика' />
    </div>
  );
};
//так как у нас span и InnerComponent поменялись местами, происходит маунт-анмаунт
export const AppendToDomReversSpan = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('Вторая бибика effect unmount');
    return () => console.log('Вторая бибика effect unmount');
  }, []);

  if (isShowText) {
    return (
      <div className='div-1'>
        <span>Какая крутая машина</span>
        <InnerComponent title='InnerComponent Вторая бибика' />
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='InnerComponent Вторая бибика' />
    </div>
  );
};
