import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IMyButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
}

const MyButton = ({title, ...rest}: IMyButton) => <button  {...rest}
                                                           className='btn b-1'>{title}</button>;
export default MyButton;
