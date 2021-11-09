import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './common.css';

interface IMyInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}


const MyInput = ({onChange, value, placeholder, ...rest}: IMyInput) => {
  return (
    <div className='form__group field'>
      <input type='input'
             value={value}
             className='form__field'
             placeholder={'Введите  цвет'}
             name='name'
             id='name'
             onChange={onChange}
             {...rest} />
      <label htmlFor='name' className='form__label'>Введите цвет</label>
    </div>
  );
};

export default MyInput;
