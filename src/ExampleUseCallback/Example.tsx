import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import { ExampleType } from '../types';
import { CAR_LIST, CarPropsType, ICar, ICarProps } from './common';


//useCallback  этих случаях работать не будет
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

const CarFragmented: FC<CarPropsType> = memo(({img, model, id, onCarClick, setCount, changeModel}) => {
  console.log(model, 'render CarFragmented');
  const onClick = () => {
    onCarClick(model, id);
    setCount(prev => prev + 1);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeModel(id, e.target.value);
  };
  return (
    <div className='card car'>
      <img src={img} alt={model} width='150px' height='110px' />
      <input type='text' value={model} onChange={onChange} maxLength={10} />
      <button onClick={onClick} className='btn b-1'>{model}</button>
    </div>

  );
});
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
  })
;
// Не забываем про стоимость и когда useCallback необходим : https://habr.com/ru/post/529950/comments/#comment_22379830
//Без мемо смысла в useCallback не будет  , так же как и в мемо без useCallback в этой ситуации

//Так же , если нету зависимости на пропсы можно вынести функцию onCarClick из компонента Car и тогда не нужно будет оборачивать это в useCallback
// const  onCarClick = (car: ICar) => {
//   console.log(car.model);
// }
const Cars = () => {
  //setState уже мемоизирована из коробки, ее оборачивать не во что не нужно
  const [count, setCount] = useState(0);
  const [carList, setCarList] = useState<ICar[]>(CAR_LIST);
  const onCarClick1 = useCallback((car: string | ICar, id: string) => {
    // setCarList((prevState => prevState.filter(car => car.id !== id)));

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

  console.log('carList: ', carList);

  const changeWholeModel = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.getAttribute('data-parent'));
    console.log(e.target.value);
    const payloadId = e.target.getAttribute('data-parent');
    const value = e.target.value;
    setCarList((prevState => prevState.map(car => {
      if (car.id === payloadId) {
        car.model = value;
      }
      return car;
    })));

  }, []);


  const onChangeTitle = (id = '1', value: string) => {
    setCarList((prevState => prevState.map(car => {
      if (car.id === id) {
        car.model = value;
      }
      return car;
    })));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeTitle('1', e.target.value);
  };

  return (
    <div className='cars_wrapper'>
      <div>{count}- количество кликов</div>
      Меняет модель только у первого элемента
      <input type={'text'} onChange={onChange} />
      Car
      <div className='hi_load_wrapper'>
        {carList.map((car => <Car key={car.id}
                                  {...{car, onCarClick: onCarClick1, setCount, changeModel, changeWholeModel}}
        />))}
      </div>
      CarFragmented
      <div className='hi_load_wrapper'>
        {carList.map(car => <CarFragmented key={car.id}
                                           model={car.model}
                                           id={car.id}
                                           hp={car.hp}
                                           img={car.img}
                                           {...{onCarClick: onCarClick1, setCount, changeModel}}
        />)
        }
      </div>
    </div>
  );
};


const ExampleUseCallback = () => {
  return (
    <>
      <Test title='Hello' />
      <TestCallback title='Hello' />
      <Cars />
    </>
  );


};
export default ExampleUseCallback;
