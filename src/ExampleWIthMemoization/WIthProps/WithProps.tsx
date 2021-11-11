import { memo, useMemo, useState } from 'react';
import Logo from '../../assets/placeholder.jpg';
import MyButton from '../../common/MyButton';

type RoleType = 'director' | 'admin'
type NameType = 'Petr Mihailovich' | 'Vovan'

interface IUser {
  name: NameType;
  role: RoleType;
}

interface IChildWithProps {
  options: {
    showPicture: boolean
    title: string
    data?: number[]
    userName?: string
  };
}

interface ISecondChildWithProps {
  showPicture: boolean;
  title: string;
  data?: number[];
}

const ChildWithProps = memo(({options}: IChildWithProps) => {
  return <div>
    <p className='text-center'>{options.title
    }</p>
    <p className='text-center'>{options.userName}</p>
    {options.showPicture && <img src={Logo} alt='Logo' width='250px' height='200px' />}
  </div>;
});

const SecondChildWithProps = memo(({showPicture, title, data}: ISecondChildWithProps) => {
  return <div>
    <p className='text-center '>{title}</p>
    {showPicture && <img src={Logo} alt='Logo' width='250px' height='200px' />}
  </div>;
});
//имплементировать useMemo для data и options
const WithProps = () => {
  const [user, setUser] = useState<IUser>({name: 'Petr Mihailovich', role: 'director'});
  const changeRole = () => {
    if (user.role === 'admin') return setUser((prevState => ({...prevState, role: 'director'})));
    if (user.role === 'director') return setUser((prevState => ({...prevState, role: 'admin'})));
  };
  const changeName = () => {
    if (user.name === 'Vovan') return setUser((prevState => ({...prevState, name: 'Petr Mihailovich'})));
    if (user.name === 'Petr Mihailovich') return setUser((prevState => ({...prevState, name: 'Vovan'})));
  };
  // const data = Array.from(Array(100).keys());
  const data = undefined;

  const showPicture = user.role === 'director';

  const options = {
    showPicture,
    userName: user.name,
    title: 'Заголовок карточки',
    data
  };

  const opt2 = useMemo(() => ({...options}), [user]);
  const title = 'Заголовок карточки';
  return <div className='card_button card_padding flex-wrapper flex-column box-shadow'>
    <p>{user.name} {user.role}</p>
    <div className='flex-wrapper'>
      <div className='card card_button card_padding'>
        <MyButton title='Сменить роль пользователя' onClick={changeRole} />
        <MyButton title='Сменить имя пользователя' onClick={changeName} />
        <ChildWithProps options={opt2} />
      </div>
      <div className='card card_button card_padding'>
        <MyButton title='Сменить роль пользователя' onClick={changeRole} />
        <MyButton title='Сменить имя пользователя' onClick={changeName} />
        <SecondChildWithProps {...{title: options.title, data: options.data, showPicture: showPicture}} />
          </div>
          </div>

          </div>;
        };
        export default WithProps;;
