import {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import './styles';
import {CustomWrapper, Input, Label} from './styles';

interface IMyInput extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}


const MyInput = ({placeholder, ...props}: IMyInput) => {
    return (
        <CustomWrapper>
            <Input type='input'
                   placeholder={placeholder || 'Введите  цвет'}
                   name='name'
                   id='name'
                   {...props} />
            <Label>{placeholder || 'Введите цвет'}</Label>
        </CustomWrapper>
    );
};

export default MyInput;
