import { useState } from 'react';
import MyButton from '../common/MyButton';
import { AppendToDom, AppendToDomReversSpan } from './with-append';
import { NotAppendToDom, NotAppendToDomAmpersands, NotAppendWithKey } from './without-append';


//основной видос https://www.youtube.com/watch?v=A0W2n2azH5s


const ExampleAppendToDom = () => {
  const [isShowText, setIsShowText] = useState(false);
  const changeView = () => setIsShowText(!isShowText);

  return (
    <div className='flex-wrapper width-center'>
      <div className='card car'>
        Ре-маунт
        <AppendToDom {...{isShowText}} />
        <MyButton title='Change view' onClick={changeView} />
      </div>
      <div className='card car'>
        Ре-маунт
        <AppendToDomReversSpan {...{isShowText}} />
        <MyButton title='Change view' onClick={changeView} />
      </div>
      <div className='card car'>
        Нет ре-маунта
        <NotAppendToDomAmpersands {...{isShowText}} />
        <MyButton title='Change view' onClick={changeView} />
      </div>
      <div className='card car'>
        Нет ре-маунта
        <NotAppendToDom {...{isShowText}} />
        <MyButton title='Change view' onClick={changeView} />
      </div>
      <div className='card car'>
        Нет ре-маунта
        <NotAppendWithKey {...{isShowText}} />
        <MyButton title='Change view' onClick={changeView} />
      </div>
    </div>


  );
};


export default ExampleAppendToDom;
