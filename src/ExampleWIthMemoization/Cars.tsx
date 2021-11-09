import { useCallback, useMemo, useState } from 'react';
import { ICar, ISomeBigData, OUTSIDE_LIST, SOME_BIG_DATA } from './common';
import Car from './Car';
import CarFragmented from './CarFragmented';
import MyButton from '../common/MyButton';

const TEXT = {
  p1: 'В этом месте у нас по разному прокинуты пропсы, каждый компонент завернут в memo.\n' +
    '  По нажатию на любую кнопку, дергаем ререндер родителя из ребенка.',
  p2: '(1) Сделано все верно, со спредом пропсов, и передачей некотрых пропсов вне компонента',
  p3: '(2) Сравнивались варианты передачи пропсов - через спред оператор и разбирая объект передачи - как видим,\n' +
    '  все работает одинакого.',
  p4: '(3) Прокидываем в пропсах объект, который инициализирован в родителе. Каждый раз новая ссылка, новый ререндер.\n' +
    '  Почему не происходит ререндер детей в мемо, когда мы изменяем тайтл у родителя, хотя у нас все лежит в одном\n' +
    '  стейте и мы далем иммутабельную копию всего стейта? Ответ там ====>>',
  answer: 'Когда мы далем копию ...prev, в этот prev попадают то же самые ссылки , что и были. Мемо сравнивает их и\n' +
    '  ререндер не требуется.',
  p5: 'Даже если вы не принимаете в компоненте пропсы, но передаете их с родителя и они каждый раз новые, ребенок будет ререндерится.'

};

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
  console.log('cars renders');
  const [, setCount] = useState(0);
  const [someBigData, setSomeBigData] = useState<ISomeBigData>(SOME_BIG_DATA);
  //Уберем useCallback  - новая ссылка на функцию будет причиной ререндера ребенка
  const onCarClick = useCallback((car: string | ICar, id: string) => {
    //Удаляем
    // setCarList((prevState => prevState.filter(car => car.id !== id)));
    //Добавляем  import Logo from '../assets/placeholder.jpg';
    // setCarList((prevState => [...prevState, {id: String(new Date()), hp: 100, model: 'Бибика', img: Logo}]));
    if (typeof car === 'string') {
      return console.log(car, 'console log parent');
    }
    console.log(car.model, 'console log parent');
  }, []);
  //Уберем useCallback  и новая ссылка на функцию будет причиной ререндера ребенка
  const changeModel = useCallback((id: string, value: string) => {
    setSomeBigData((prevState => ({
      ...prevState, list: prevState.list.map(car => {
        if (car.id === id) {
          return {...car, model: value};
        }
        return car;
      })
    })));
  }, []);

  //Функции, которые не передаем ниже по дереву нет смысла оборачивать в useCallback в этом кейсе useCallback не работает
  //Так же тут setState , что не требует обертки useCallback
  const onChangeTitle = () => {
    setSomeBigData((prevState => ({...prevState, title: String(new Date())})));

  };
  const INNER_LIST = {inner_list_name: 'Какое то значение'};
  //Если в депенденси useMemo передать не кешированный объект или примитив, useMemo будет создавать новую ссылку заного на каждый рендер
  //что аннулирует весь смысл в юзмемо
  // Депенденси работают аналогично memo - примитивы по значению, не примитивы по ссылкам
  const MEMO_INNER_LIST = useMemo(() => INNER_LIST, []);

  return (
    <div className='full_content box-shadow'>

      <div className='box-shadow text-center'>{TEXT.p1} <MyButton title='Я меняю поле в стейте'
                                                                  onClick={onChangeTitle} />{someBigData.title}</div>
      <div className='flex-gap-10'>
        <p>{TEXT.p2}</p>
        <p>{TEXT.p3}</p>
        <p>{TEXT.p4}</p>
        <p className='hide_text'>{TEXT.answer}</p>
        <p>{TEXT.p5}</p>
      </div>

      <div className='cars_container text-center'>
        <div>Car - (1)</div>
        <div>CarFragmented - (2)</div>
        <div>Car with bad props - (3)</div>
      </div>
      <div className='cars_container'>
        <div className='car_container'>
          {someBigData.list.map((car => {
            console.log('render render');
            return (<Car
              key={car.id}
              {...{
                title: 'Car Good props',
                car,
                onCarClick,
                setCount,
                changeModel,
                nonPrimitive: OUTSIDE_LIST,
                listName: INNER_LIST.inner_list_name
              }}
            />);
          }))}
        </div>
        <div className='car_container'>
          {someBigData.list.map(car => {
            console.log('render Good');
            return (<CarFragmented
              key={car.id}
              title='CarFragmented Good props'
              nonPrimitive={MEMO_INNER_LIST}
              model={car.model}
              id={car.id}
              hp={car.hp}
              img={car.img}
              listName={INNER_LIST.inner_list_name}
              {...{onCarClick, setCount, changeModel}}
            />);
          })}
        </div>

        <div className='car_container'>
          {someBigData.list.map((car => {
            console.log('render Bad');
            return (<Car
              key={car.id}
              {...{
                car,
                title: 'Car Bad props',
                onCarClick,
                setCount,
                changeModel,
                nonPrimitive: INNER_LIST,
                listName: INNER_LIST
              }}
            />);
          }))}
        </div>
      </div>
    </div>
  );
};

export default Cars;
