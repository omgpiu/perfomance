import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface IMyButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  title: string;
}

const MyButton = ({title, onClick, ...rest}: IMyButton) => <button onClick={onClick} {...rest}
                                                                   className='btn b-1'>{title}</button>;
export default MyButton;
