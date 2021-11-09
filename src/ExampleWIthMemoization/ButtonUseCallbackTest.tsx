//useCallback  этих случаях работать не будет
import { FC, useCallback } from 'react';
import { ExampleType } from '../types';
import MyButton from '../common/MyButton';

const Test: FC<ExampleType> = ({title}) => {
  const someFunc = () => {
    console.log(title);
  };
  return (
    <MyButton title='Click me one!' onClick={someFunc} />
  );
};

const TestCallback: FC<ExampleType> = ({title}) => {
  const someFunc = useCallback(() => {
    console.log(title);
  }, []);
  return (
    <MyButton title='Click me two!' onClick={someFunc} />
  );
};
const ButtonUseCallbackTest = () => {
  return <div className='card card_button card_padding'>
    <div className='block_margin_bottom'>
      <Test title='Test без useCallback' />
      <TestCallback title='Test with useCallback' />
    </div>
    <p>
      Кнопки - это два отдельных компонента, которые сами по себе и не прокидываю никуда пропсы.
      Давайте угадаем, какая из кнопок с useCallback и как это повлияет на нашу производительность?
    </p>
  </div>;
};
export default ButtonUseCallbackTest;
