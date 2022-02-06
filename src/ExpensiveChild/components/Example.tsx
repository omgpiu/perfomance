import React, { FC, useState } from 'react';
import { CARD_TEXT, HiLoadComponent } from './common';
import { ExampleType } from '../../types';
import MyInput from '../../Common/Input/MyInput';
import { Card } from '../../styles';


const Example: FC<ExampleType> = ({title, memo}) => {
    const [color, setColor] = useState('');
    return <Card>
        <p style={{color}}>{title}</p>
        <MyInput
            value={color}
            onChange={e => setColor(e.target.value)}/>
        <HiLoadComponent memo={memo}/>
        {memo
            ? <p>{CARD_TEXT.memo}</p>
            : <p>{CARD_TEXT.freeze}</p>}
    </Card>;
};

export default Example;
