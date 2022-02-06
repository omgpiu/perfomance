import Lists from './Lists/Lists';
import ButtonsUseCallbackTest from './ButtonUseCallback/ButtonUseCallbackTest';
import { WithProps } from "./index";

//Основная статья https://habr.com/ru/post/529950/
//Дополнительная статья https://alexsidorenko.com/blog/react-render-usecallback/
//Дополнительная статья  https://alexsidorenko.com/blog/react-list-rerender/
//Дополнительная статья https://alexsidorenko.com/blog/react-render-props/


const ExampleWithMemoization = () => {
    return (
        <div className='block_margin_bottom'>
            <div className='full_content flex-wrapper'>
                <ButtonsUseCallbackTest/>
                <WithProps/>
            </div>
            <Lists/>;
        </div>
    )
        ;


};
export default ExampleWithMemoization;
