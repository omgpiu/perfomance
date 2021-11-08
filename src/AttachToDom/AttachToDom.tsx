import { useEffect, useState } from 'react';
import Logo from '../assets/placeholder.jpg';


//основной видос https://www.youtube.com/watch?v=A0W2n2azH5s
// Для реакта важен порядок элементов в доме. Если мы добавляем какой-то узел, которого не было, мы получим перерисовку всего узла в дом.

const InnerComponent = ({title}: { title: string }) => {
  useEffect(() => {
    console.log(title, 'mount');
    return () => console.log(title, 'unmount');
  }, []);
  return (
    <div>
      <div>
        <div>
          {<img src={Logo} alt='Logo' width='180px' height='130px' />}
        </div>
      </div>
    </div>
  );
};

const NotAppendToDom = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('Avatar NotAppendToDom mount');
    return () => console.log('Avatar NotAppendToDom unmount');
  }, []);
  if (isShowText) {
    return (
      <div className='div-1'>
        <InnerComponent title='InnerComponent NotAppendToDom' />
        <span>Какая крутая машина</span>
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='NotAppendToDom' />
    </div>
  );
};
const AppendToDom = ({isShowText}: { isShowText: boolean }) => {
  useEffect(() => {
    console.log('Avatar AppendToDom mount');
    return () => console.log('Avatar AppendToDom unmount');
  }, []);
  //лишняя обертка перед InnerComponent заставит размаунтить и замаунтить весь узер div-2 и все что внутри
  //в компоненте NotAppendToDom такого не произойдет
  if (isShowText) {
    return (
      <div className='div-1'>
        <div className='div-2'>
          <InnerComponent title='InnerComponent AppendToDom' />
          <span>Какая крутая машина</span>
        </div>
      </div>
    );
  }
  return (
    <div className='div-1'>
      <InnerComponent title='AppendToDom' />
    </div>
  );
};

const ExampleAppendToDom = () => {
  const [isShowText, setIsShowText] = useState(false);
  const changeView = () => setIsShowText(!isShowText);

  return (
    <div className='hi_load_wrapper width-center'>
      <div className='card car'>
        <NotAppendToDom {...{isShowText}} />
        <button className='btn b-1' onClick={changeView}>Change view</button>
      </div>
      <div className='card car'>
        <AppendToDom {...{isShowText}} />
        <button className='btn b-1' onClick={changeView}>Change counter</button>
      </div>

    </div>


  );
};


export default ExampleAppendToDom;
