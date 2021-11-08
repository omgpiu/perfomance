import { ChangeEvent, FC, memo } from 'react';
import { ICarProps } from './common';

const Car: FC<ICarProps> = memo(({car, onCarClick, setCount, changeModel}) => {
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
      <img src={car.img} alt={car.model} width='150px' height='110px' />
      <input type='text' value={car.model} data-parent={car.id} onChange={onChange} maxLength={10} />
      <button onClick={onClick} className='btn b-1'>{car.model}</button>
    </div>

  );
});

export default Car
