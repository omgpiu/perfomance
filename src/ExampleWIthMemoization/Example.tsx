import { FC, useCallback } from 'react';
import { ExampleType } from '../types';
import Cars from './Cars';
import MyButton from '../common/MyButton';
//Основная статья https://habr.com/ru/post/529950/
//Дополнительная статья https://alexsidorenko.com/blog/react-render-usecallback/
//Дополнительная статья  https://alexsidorenko.com/blog/react-list-rerender/
//Дополнительная статья https://alexsidorenko.com/blog/react-render-props/

//useCallback  этих случаях работать не будет
const Test: FC<ExampleType> = ({title}) => {
  const someFunc = () => {
    console.log(title);
  };
  return (
    <MyButton title=' click me!' onClick={someFunc} />

  );
};

const TestCallback: FC<ExampleType> = ({title}) => {
  const someFunc = useCallback(() => {
    console.log(title);
  }, []);
  return (
    <MyButton title=' click me!' onClick={someFunc} />
  );
};


const ExampleWithMemoization = () => {
  return (
    <>
      <Test title='Test без useCallback' />
      <TestCallback title='Test with useCallback' />
      <Cars />
    </>
  );


};
export default ExampleWithMemoization;
