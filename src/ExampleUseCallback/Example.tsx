import { FC, useCallback } from 'react';
import { ExampleType } from '../types';
import Cars from './Cars';
//Основная статья https://habr.com/ru/post/529950/

//useCallback  этих случаях работать не будет
const Test: FC<ExampleType> = ({title}) => {
  const someFunc = () => {
    console.log(title);
  };
  return (
    <button onClick={someFunc} className='btn b-1'>
      click me!
    </button>
  );
};

const TestCallback: FC<ExampleType> = ({title}) => {
  const someFunc = useCallback(() => {
    console.log(title);
  }, []);
  return (
    <button onClick={someFunc} className='btn b-1'>
      click me!
    </button>
  );
};


const ExampleUseCallback = () => {
  return (
    <>
      <Test title='Test без useCallback' />
      <TestCallback title='Test with useCallback' />
      <Cars />
    </>
  );


};
export default ExampleUseCallback;
