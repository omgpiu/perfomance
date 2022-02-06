import React, { useState } from 'react';
import { CARD_TEXT, HiLoadComponent } from './common';
import MyInput from '../../Common/Input/MyInput';
import { Card } from '../../styles';


export const InputForm = () => {
    const [color, setColor] = useState('');
    return (
        <>
            <p style={{color}}>Решение без мемо</p>
            <MyInput
                value={color}
                onChange={e => setColor(e.target.value)}/>
            <p>{CARD_TEXT.no_memo}</p>
        </>
    );
};



const FirstSolution = () => {
    return (
        <Card>
            <InputForm/>
            <HiLoadComponent/>
        </Card>
    );
};


export default FirstSolution;
