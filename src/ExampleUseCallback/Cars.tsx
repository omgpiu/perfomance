import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { CAR_LIST, ICar, OUTSIDE_LIST } from './common';
import Car from './Car';
import CarFragmented from './CarFragmented';


// Не забываем про стоимость и когда useCallback необходим : https://habr.com/ru/post/529950/comments/#comment_22379830
// Без мемо смысла в useCallback не будет  , так же как и в мемо без useCallback в этой ситуации
// Так же , если нету зависимости на пропсы можно вынести функцию onCarClick из компонента Cars и тогда не нужно будет оборачивать это в useCallback

// const  onCarClick = (car: ICar) => {
//    console.log(car.model);
//  }
//Для правильного понимания работы с мемо, нужно развить понимание, присылаем ли мы новую ссылку на не примитив или туже самую
// Передавая в  копонент с мемо , пропсы  начинает сравнивать их по  shallowEqual. Если ссылка в памяти не изменилась, все ок, если другая -> ререндер

const Cars = () => {
  //setState уже мемоизирована из коробки, ее оборачивать не во что не нужно
  const [count, setCount] = useState(0);
  const [carList, setCarList] = useState<ICar[]>(CAR_LIST);
  const onCarClick = useCallback((car: string | ICar, id: string) => {
    //Удаляем
    // setCarList((prevState => prevState.filter(car => car.id !== id)));
    //Добавляем  import Logo from '../assets/placeholder.jpg';
    // setCarList((prevState => [...prevState, {id: String(new Date()), hp: 100, model: 'Бибика', img: Logo}]));
    if (typeof car !== 'string') {
      return console.log(car.model);
    }
    console.log(car);
  }, []);

  const changeModel = useCallback((id: string, value: string) => {
    setCarList((prevState => prevState.map(car => {
      if (car.id === id) {
        return {...car, model: value};
      }
      return car;
    })));
  }, []);


  const onChangeTitle = (id = '1', value: string) => {
    setCarList((prevState => prevState.map(car => {
      if (car.id === id) {
        return {...car, model: value};
      }
      return car;
    })));

  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeTitle('1', e.target.value);
  };
  const INNER_LIST = [{bla: 'bla'}];
  const MEMO_INNER_LIST = useMemo(() => INNER_LIST, []);

  return (
    <div className='cars_wrapper'>
      <div>{count}- количество кликов</div>
      Меняет модель только у первого элемента
      <input type={'text'} onChange={onChange} />
      Car
      <div className='hi_load_wrapper'>
        {carList.map((car => <Car key={car.id}
                                  {...{car, onCarClick, setCount, changeModel, nonPrimitive: OUTSIDE_LIST}}
        />))}
      </div>
      CarFragmented
      <div className='hi_load_wrapper'>
        {carList.map(car => <CarFragmented key={car.id}
                                           nonPrimitive={MEMO_INNER_LIST}
                                           model={car.model}
                                           id={car.id}
                                           hp={car.hp}
                                           img={car.img}
                                           {...{onCarClick, setCount, changeModel}}
        />)}

      </div>
      Car with rerenders
      <div className='hi_load_wrapper'>
        {carList.map((car => <Car key={car.id}
                                  {...{car, onCarClick, setCount, changeModel, nonPrimitive: INNER_LIST}}
        />))}
      </div>
    </div>
  );
};

export default Cars;
