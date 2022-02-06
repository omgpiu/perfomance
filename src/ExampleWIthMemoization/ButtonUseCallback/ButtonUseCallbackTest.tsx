import { FC, useCallback, useState } from 'react';
import { ExampleType } from '../../types';
import MyButton from '../../Common/Button/MyButton';
import { ButtonExampleCard } from "./styles";


const Test: FC<ExampleType> = ({title}) => {
    const [count, setCount] = useState(0)
    const someFunc = () => {
        console.log(title);
        setCount(count + 1)
    };
    return (
        <MyButton title={`Click me non-useCallback ${count}`} onClick={someFunc}/>
    );
};

const TestCallback: FC<ExampleType> = ({title}) => {
    const [count, setCount] = useState(0)
    const someFunc = useCallback(() => {
        console.log(title);
        setCount(prev => prev + 1)
    }, []);
    return (
        <MyButton title={`Click me useCallback ${count}`} onClick={someFunc}/>
    );
};


const ButtonUseCallbackTest = () => {
    return <ButtonExampleCard>
        <div className='block_margin_bottom'>
            <Test title='Test без useCallback'/>
            <TestCallback title='Test with useCallback'/>
        </div>
        <p>
            Кнопки - это два отдельных компонента, которые сами по себе и не прокидываю никуда пропсы.
            Давайте угадаем, какая из кнопок с useCallback и как это повлияет на нашу производительность?
        </p>
        <p><b>Какое поведением мы ожидаем?</b></p>
    </ButtonExampleCard>;
};
export default ButtonUseCallbackTest;
