import { ChangeEvent, FC, memo, useEffect } from 'react';
import { listNameRender } from '../common';
import MyButton from '../../Common/Button/MyButton';
import { CarPropsType } from "../types";

const CarFragmented = memo(({
                                title,
                                img,
                                model,
                                id,
                                onCarClick,
                                setCount,
                                changeModel,
                                nonPrimitive,
                                listName
                            }: CarPropsType) => {
    console.log(model, title, 'render');

    useEffect(() => {
        console.log('CarFragmented mount');
        return console.log('CarFragmented unmount');
    }, []);
    const onClick = () => {
        onCarClick(model, id);
        setCount(prev => prev + 1);
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 1) return
        changeModel(id, e.target.value);
    };
    return (
        <div className='box-shadow car'>
            {listNameRender(listName)}
            <img src={img} alt={model} width='150px' height='110px'/>
            <input type='text' value={model} onChange={onChange} maxLength={10}/>
            <MyButton title={model} onClick={onClick}/>
        </div>

    );
});
export default CarFragmented;
