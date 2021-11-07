import { FC, useCallback } from 'react';
import { ExampleType } from '../types';

interface ICar {
  id: string;
  car: any;
  model?: string;
}

interface ICarCar extends ICar {
  onClick: (car: ICar) => void;
}

type CarsType = {
  cars: ICar[]
}
const Test: FC<ExampleType> = ({title}) => {
  const someFunc = () => {
    console.log(title);
  };
  return (
    <button onClick={someFunc} className='btn b-1'>
      click me!
    </button>
  );
};
const TestCallback: FC<ExampleType> = ({title}) => {
  const someFunc = useCallback(() => {
    console.log(title);
  }, []);
  return (
    <button onClick={someFunc} className='btn b-1'>
      click me!
    </button>
  );
};
const Car = ({car, onClick}: ICarCar) => {
  const onCarClick = () => onClick(car);
  return (
    <button onClick={onCarClick}>{car.model}</button>
  );
};
const Cars = ({cars}: CarsType) => {
  const onCarClick = (car: ICar) => {
    console.log(car.model);
  };

  return cars.map(car => <Car id={car.id} car={car.car} onClick={onCarClick} />);
};


const ExampleUseCallback = () => {
  return (
    <>
      <Test title='Hello' />
      <TestCallback title='Hello' />
    </>
  );


};
export default ExampleUseCallback;
