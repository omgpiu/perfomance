import { ReactNode, useState } from 'react';
import MyButton from '../Common/Button/MyButton';
import { AppendToDom, AppendToDomReversSpan } from './with-append';
import { NotAppendToDom, NotAppendToDomAmpersands, NotAppendWithKey } from './without-append';


//основной видос https://www.youtube.com/watch?v=A0W2n2azH5s
const Wrapper = ({children}: { children: ReactNode }) => {
  return <div className='card car'>
    {children}
  </div>;
};

const ExampleAppendToDom = () => {
  const [isShowText, setIsShowText] = useState(false);
  const changeView = () => setIsShowText(!isShowText);

  return (
    <div className='full_content box-shadow flex-gap-20 flex-column align-items-center justify-center block_margin_bottom'>
      <div className='flex-gap-20'>
        <Wrapper>
          <p>Первая бибика с ремаунтом картинки</p>
          <AppendToDom {...{isShowText}} />
        </Wrapper>
        <Wrapper>
          <p>Вторая бибика с ремаунтом картинки</p>
          <AppendToDomReversSpan {...{isShowText}} />
        </Wrapper>
        <Wrapper>
          <p>Третья бибика без ремаунта картинки</p>
          <NotAppendToDomAmpersands {...{isShowText}} />
        </Wrapper>
        <Wrapper>
          <p>Четвертая бибика без ремаунта картинки</p>
          <NotAppendToDom {...{isShowText}} />
        </Wrapper>
        <Wrapper>
          <p>Пятая бибика без ремаунта картинки</p>
          <NotAppendWithKey {...{isShowText}} />
        </Wrapper>
      </div>
      <MyButton title='Change view' onClick={changeView} />
    </div>

  );
};


export default ExampleAppendToDom;
