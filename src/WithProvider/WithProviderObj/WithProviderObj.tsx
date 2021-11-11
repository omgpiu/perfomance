import { memo, useContext, useMemo, useState } from 'react';
import AccessContext from '../../common/AccessContext';
import MyButton from '../../common/MyButton';

const LastComponent = () => {
  console.log('render LastComponent');
  const {valueA, valueB, changeCount, changeCountPrev} = useContext(AccessContext);
  return <div className='child min-width-500'>
    <div>
      Ребенок LastComponent
      <div>
        <div>
          VALUE-A {valueA}
        </div>
        VALUE-B {valueB}
      </div>

    </div>
    <div>
      <MyButton title='Update counter!' onClick={changeCount} />
      <MyButton title='Update counter prev!' onClick={changeCountPrev} />
    </div>

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
//Хоть в реактдевтулз показывает ComponentWrapper рендерится, консоль лог говорит , что нет.Почему так?
//Всега нужно чекать Profiler. Так как AccessContext.Provider  это тоже компонент, то ререндерится он, а не ComponentWrapper,
//а в UI кажется что рендерится ComponentWrapper
const WithProviderObj = () => {
  console.log('render WithProviderObj');
  const [count, setCount] = useState(0);
  const [valueA, setValueA] = useState('sit');
  const [valueB, setValueB] = useState('down');

  const changeCount = () => setCount(count + 1);
  //так как мы в value провайдера передаем обьект с методами  changeCountPrev  и changeCount дополнительно оборачивать их в юзколбек не нужно

  const changeCountPrev = () => setCount(prev => prev + 1);

  const updateValueA = () => setValueA(prev => {
    if (prev === 'SIT') return 'STAND';
    return 'SIT';
  });
  const updateValueB = () => setValueB(prev => {
    if (prev === 'DOWN') return 'UP';
    return 'DOWN';
  });

  const memoValueToProvider = useMemo(() => {
    return {
      valueA,
      valueB,
      changeCount,
      changeCountPrev,
    };
  }, [valueA, valueB]);
  // const memoValueToProvider = {
  //   valueA,
  //   valueB,
  //   changeCount,
  //   changeCountPrev,
  // };


  return (
    <div className='with-border text-center'>
      <p className='margin-top'>ЗНАЧЕНИЯ СТЕЙТА В РОДИТЕЛЕ</p>
      <div className='flex-wrapper items-end justify-center'>

        <div className='flex-gap-10 flex-column text-center'>
          {count}
          <MyButton title='Update counter!' onClick={changeCount} />
        </div>
        <div className='flex-gap-10 flex-column text-center'>
          {valueA}
          <MyButton title='Update A' onClick={updateValueA} />
        </div>
        <div className='flex-gap-10 flex-column text-center'>
          {valueB}
          <MyButton title='Update B' onClick={updateValueB} />
        </div>
      </div>
      <AccessContext.Provider value={memoValueToProvider}>
        <ComponentWrapper />
      </AccessContext.Provider>
    </div>
  );
};
export default WithProviderObj;
