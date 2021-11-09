import { useEffect } from 'react';
import InnerComponent from './common';

export const NotAppendToDomAmpersands = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('Третья бибика effect mount');
    return () => console.log('Третья бибика effect unmount');
  }, []);
//А тут все отрабатывает правильно, {} рассматривается как один и тот же блок
  return (
    <div className='div-1'>
      {isShowText && <span>Какая крутая машина</span>}
      <InnerComponent title='InnerComponent Третья бибика' />
    </div>
  );
};
//порядок не компонент не поменялся - не пе аппендим
export const NotAppendToDom = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('Четвертая бибика effect mount');
    return () => console.log('Четвертая бибика effect unmount');
  }, []);
  if (isShowText) {
    return (
      <div className='div-1'>
        <InnerComponent title='InnerComponent Четвертая бибика' />
        <span>Какая крутая машина</span>
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='InnerComponent Четвертая бибика' />
    </div>
  );
};

//У InnerComponent есть ключь, поэтому размаунта и маунта компонента не происходит
export const NotAppendWithKey = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('Пятая бибика effect mount');
    return () => console.log('Пятая бибика effect unmount');
  }, []);
  //так как у нас span и InnerComponent поменялись местами, происходит маунт-анмаунт
  if (isShowText) {
    return (
      <div className='div-1'>
        <span>Какая крутая машина</span>
        <InnerComponent key='InnerComponent' title='InnerComponent Пятая бибика' />
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent key='InnerComponent' title='Пятая бибика' />
    </div>
  );
};
