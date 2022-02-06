import { ChangeEvent, FC, memo, useEffect } from 'react';
import { listNameRender } from '../common';
import MyButton from '../../Common/Button/MyButton';
import { ICarProps } from "../types";


const Car = memo(({car, title, onCarClick, setCount, changeModel, nonPrimitive, listName}: ICarProps) => {
    console.log(car.model, title, 'render');
    const onClick = () => {
        onCarClick(car, car.id);
        setCount(prev => prev + 1);
    };
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 1) return
        changeModel(car.id, e.target.value);
    };

    useEffect(() => {
        console.log(title, car.model, 'mount');
        return console.log(title, car.model, 'unmount');
    }, []);
    return (
        <div className='box-shadow car'>
            {listNameRender(listName)}
            <img src={car.img} alt={car.model} width='150px' height='110px'/>
            <input type='text'
                   value={car.model}
                   data-parent={car.id}
                   minLength={1}
                   onChange={onChange}
                   maxLength={10}/>
            <MyButton title={car.model} onClick={onClick}/>
        </div>

    );
});

export default Car;
