import React, { ReactNode, useState } from 'react';
import { CARD_TEXT, HiLoadComponent } from './common';
import MyInput from '../../Common/Input/MyInput';
import { Card } from '../../styles';


//https://stasonmars.ru/javascript/pogruzhaemsya-v-raboty-s-children-na-react/

const ColorPicker = ({children}: { children: ReactNode }) => {

    const [color, setColor] = useState('');
    return <Card>
        <p style={{color}}>Решение без мемо с children</p>
        <MyInput
            value={color}
            onChange={e => setColor(e.target.value)}/>
        {children}
        <p>{CARD_TEXT.children}</p>
    </Card>;
};
const SecondSolution = () => {
    return (
        <ColorPicker>
            <HiLoadComponent/>
        </ColorPicker>);
};
export default SecondSolution;
