import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Button } from './styles';


interface IMyButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string;
}

const MyButton = ({title, ...rest}: IMyButton) => <Button  {...rest}>{title}</Button>;
export default MyButton;
