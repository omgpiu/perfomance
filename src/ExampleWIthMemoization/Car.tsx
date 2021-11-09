import { ChangeEvent, FC, memo } from 'react';
import { ICarProps, listNameRender } from './common';
import MyButton from '../common/MyButton';


const Car: FC<ICarProps> = memo(({car, onCarClick, setCount, changeModel, nonPrimitive, listName}) => {
  console.log(car.model, 'render Car');
  const onClick = () => {
    onCarClick(car, car.id);
    setCount(prev => prev + 1);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeModel(car.id, e.target.value);
  };

  return (
    <div className='card car'>
      {listNameRender(listName)}
      <img src={car.img} alt={car.model} width='150px' height='110px' />
      <input type='text' value={car.model} data-parent={car.id} onChange={onChange} maxLength={10} />
      <MyButton title={car.model} onClick={onClick} />
    </div>

  );
});

export default Car;
