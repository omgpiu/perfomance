import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './common.css';

interface IMyInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}


const MyInput = ({placeholder, ...props}: IMyInput) => {
  return (
    <div className='form__group field'>
      <input type='input'
             className='form__field'
             placeholder={placeholder || 'Введите  цвет'}
             name='name'
             id='name'
             {...props} />
      <label className='form__label'>{placeholder || 'Введите цвет'}</label>
    </div>
  );
};

export default MyInput;
