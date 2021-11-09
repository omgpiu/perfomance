import Cars from './Cars';
import ButtonsUseCallbackTest from './ButtonUseCallbackTest';
//Основная статья https://habr.com/ru/post/529950/
//Дополнительная статья https://alexsidorenko.com/blog/react-render-usecallback/
//Дополнительная статья  https://alexsidorenko.com/blog/react-list-rerender/
//Дополнительная статья https://alexsidorenko.com/blog/react-render-props/


const ExampleWithMemoization = () => {
  return (
    <div className='block_margin_bottom'>
      <div className='block_margin_bottom'>
        <ButtonsUseCallbackTest />
      </div>
      <Cars />
    </div>
  );


};
export default ExampleWithMemoization;
