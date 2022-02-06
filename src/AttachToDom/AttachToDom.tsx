import { ReactNode, useState } from 'react';
import MyButton from '../Common/Button/MyButton';
import { AppendToDom, AppendToDomReversSpan } from './with-append';
import { NotAppendToDom, NotAppendToDomAmpersands, NotAppendWithKey } from './without-append';
import { AppendCard, AppendDomWrapper, ContentWrapper } from './styles';


const Wrapper = ({children}: { children: ReactNode }) => {
    return <AppendCard>
        {children}
    </AppendCard>;
};

//Как при условном рендеринге убрать лишние маунты и анмаунты компонент
//Мигающие ноды в девтулзах признак того, что происходит взаимодействие с дом
const ExampleAppendToDom = () => {
    const [isShowText, setIsShowText] = useState(false);
    const changeView = () => setIsShowText(!isShowText);

    return (
        <AppendDomWrapper>
            <ContentWrapper>
                <Wrapper>
                    <span>Первая бибика с ремаунтом картинки</span>
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
            </ContentWrapper>
            <ContentWrapper>
                <Wrapper>
                    <p>Пятая бибика без ремаунта картинки</p>
                    <NotAppendWithKey {...{isShowText}} />
                </Wrapper>
            </ContentWrapper>
            <MyButton title='Change view' className='w-300' onClick={changeView}/>
        </AppendDomWrapper>

    );
};


export default ExampleAppendToDom;
