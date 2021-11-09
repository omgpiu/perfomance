import { memo, useContext, useMemo, useState } from 'react';
import AccessContext from '../../common/AccessContext';
import MyButton from '../../common/MyButton';

const LastComponent = () => {
  console.log('render LastComponent');
  const {valueA, valueB, changeCount, changeCountPrev} = useContext(AccessContext);
  return <div className='child'>
    Наш ребенок LastComponent
    - value:A {valueA}
    -value:B {valueB}
    <MyButton title='Update counter!' onClick={changeCount} />
    <MyButton title='Update counter prev!' onClick={changeCountPrev} />
  </div>;
};
const SecondLevelComponent = () => {
  console.log('render SecondLevelComponent');
  return <div className='child'>
    А это еще более глубокая вложенность SecondLevelComponent
    <LastComponent />
  </div>;
};
const ComponentWrapper = memo(() => {
  console.log('render ComponentWrapper');
  return <div className='child'>
    Тут какой то компонент ComponentWrapper
    <SecondLevelComponent />
  </div>;
});


//Основная статья https://alexsidorenko.com/blog/react-render-context/
//Хоть в реактдевтулз показывает ComponentWrapper рендерится, консоль лог говорит , что нет.(???)
const WithProviderObj = () => {
  console.log('render WithProviderObj');
  const [count, setCount] = useState(0);
  const [valueA, setValueA] = useState('sit');
  const [valueB, setValueB] = useState('down');
  //так как функция будет в кеше, стейт обновлятся не будет
  const changeCount = () => setCount(count + 1);
  //так как стучимся к преву все будет рабоать, не рендеря ребенка
  const changeCountPrev = () => setCount(prev => prev + 1);

  const updateValueA = () => setValueA(prev => {
    if (prev === 'sit') return 'stand';
    return 'sit';
  });
  const updateValueB = () => setValueB(prev => {
    if (prev === 'down') return 'up';
    return 'down';
  });
  const memoValueToProvider = useMemo(() => {
    return {
      valueA,
      valueB,
      changeCount,
      changeCountPrev,
    };
  }, [valueA, valueB]);
  return (
    <div className='with-border'>
      state-{count} - в родителе
      <MyButton title='Update counter!' onClick={changeCount} />
      {valueA}
      <MyButton title='Update A' onClick={updateValueA} />
      {valueB}
      <MyButton title='Update B' onClick={updateValueB} />
      <AccessContext.Provider value={memoValueToProvider}>
        <ComponentWrapper />
      </AccessContext.Provider>
    </div>
  );
};
export default WithProviderObj;
