import { useEffect } from 'react';
import InnerComponent from './common';

export const NotAppendToDom = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('NotAppendToDom mount');
    return () => console.log('NotAppendToDom unmount');
  }, []);
  if (isShowText) {
    return (
      <div className='div-1'>
        <InnerComponent title='InnerComponent NotAppendToDom' />
        <span>Какая крутая машина</span>
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='NotAppendToDom' />
    </div>
  );
};
export const NotAppendToDomAmpersands = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('NotAppendToDomAmpersands mount');
    return () => console.log('NotAppendToDomAmpersands unmount');
  }, []);
//А тут все отрабатывает правильно, {} рассматривается как один и тот же блок
  return (
    <div className='div-1'>
      {isShowText && <span>Какая крутая машина</span>}
      <InnerComponent title='InnerComponent NotAppendToDomAmpersands' />
    </div>
  );


};

export const NotAppendWithKey = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('NotAppendWithKey mount');
    return () => console.log('NotAppendWithKey unmount');
  }, []);
  //так как у нас span и InnerComponent поменялись местами, происходит маунт-анмаунт
  if (isShowText) {
    return (
      <div className='div-1'>
        <span>Какая крутая машина</span>
        <InnerComponent key='InnerComponent' title='InnerComponent NotAppendWithKey' />
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent key='InnerComponent' title='AppendToDomReversSpan' />
    </div>
  );
};
