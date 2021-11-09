import { memo, useContext, useState } from 'react';
import AccessContext from '../../common/AccessContext';
import MyButton from '../../common/MyButton';

const LastComponent = () => {
  console.log('render LastComponent');
  const count = useContext(AccessContext);
  return <div className='child'>
    Ребенок LastComponent - {count}

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
const WithProviderPrimitive = () => {
  console.log('render WithProviderPrimitive');
  const [count, setCount] = useState(0);
  const changeCount = () => setCount(count + 1);
  return (
    <div className='with-border text-center car box-shadow'>
      state-{count} - в родителе
      <MyButton title='Click me!' onClick={changeCount} />
      <AccessContext.Provider value={count}>
        <ComponentWrapper />
      </AccessContext.Provider>
    </div>
  );
};
export default WithProviderPrimitive;
