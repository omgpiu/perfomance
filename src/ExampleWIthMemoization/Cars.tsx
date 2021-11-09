import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { CAR_LIST, ICar, OUTSIDE_LIST } from './common';
import Car from './Car';
import CarFragmented from './CarFragmented';

//добавить пример с депенденси memo
// Не забываем про стоимость и когда useCallback необходим : https://habr.com/ru/post/529950/comments/#comment_22379830
// Без мемо смысла в useCallback не будет  , так же как и в мемо без useCallback в этой ситуации
//Для правильного понимания работы с мемо, нужно развить понимание, присылаем ли мы новую ссылку на не примитив или туже самую
// Передавая в  копонент с мемо , пропсы  начинает сравнивать их по  shallowEqual. Если ссылка в памяти не изменилась, все ок, если другая -> ререндер

// Так же , если нету зависимости на пропсы можно вынести функцию onCarClick из компонента Cars и тогда не нужно будет оборачивать это в useCallback
// const  onCarClick = (car: ICar) => {
//    console.log(car.model);
//  }

const Cars = () => {
  //setState уже мемоизирована из коробки, ее оборачивать не во что не нужно
  const [count, setCount] = useState(0);
  const [carList, setCarList] = useState<ICar[]>(CAR_LIST);
  //Уберем useCallback  - новая ссылка на функцию будет причиной ререндера ребенка
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
  //Уберем useCallback  и новая ссылка на функцию будет причиной ререндера ребенка
  const changeModel = useCallback((id: string, value: string) => {
    setCarList((prevState => prevState.map(car => {
      if (car.id === id) {
        return {...car, model: value};
      }
      return car;
    })));
  }, []);

  //Функции, которые не передаем ниже по дереву нет смысла оборачивать в useCallback в этом кейсе useCallback не работает
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

  const INNER_LIST = {inner_list_name: 'Какое то значение'};
  //Если в депенденси useMemo передать не кешированный объект или примитив, useMemo будет создавать новую ссылку заного на каждый рендер
  //что аннулирует весь смысл в юзмемо
  // Депенденси работают аналогично memo - примитивы по значению, не примитивы по ссылкам
  const MEMO_INNER_LIST = useMemo(() => INNER_LIST, []);

  return (
    <div className='cars_wrapper'>
      <div>{count}- количество кликов</div>
      Меняет модель только у первого элемента
      <input type={'text'} onChange={onChange} />
      Car
      {/*//Даже если вы не принимаете в компоненте пропсы, но передаете их с родителя и они каждый раз новые, ребенок будет ререндерится.*/}
      <div className='flex-wrapper'>
        {carList.map((car => <Car key={car.id}
                                  {...{
                                    car,
                                    onCarClick,
                                    setCount,
                                    changeModel,
                                    nonPrimitive: OUTSIDE_LIST,
                                    listName: INNER_LIST.inner_list_name
                                  }}
        />))}
      </div>
      CarFragmented
      <div className='flex-wrapper'>
        {carList.map(car => <CarFragmented key={car.id}
                                           nonPrimitive={MEMO_INNER_LIST}
                                           model={car.model}
                                           id={car.id}
                                           hp={car.hp}
                                           img={car.img}
                                           listName={INNER_LIST.inner_list_name}
                                           {...{onCarClick, setCount, changeModel}}
        />)}

      </div>
      Car with rerenders
      <div className='flex-wrapper'>
        {carList.map((car => <Car key={car.id}
                                  {...{
                                    car,
                                    onCarClick,
                                    setCount,
                                    changeModel,
                                    nonPrimitive: INNER_LIST,
                                    listName: INNER_LIST
                                  }}
        />))}
      </div>
    </div>
  );
};

export default Cars;
