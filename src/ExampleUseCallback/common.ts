import Porsche from '../assets/Porsche.webp';
import Ford from '../assets/ford.webp';
import Kia from '../assets/Kia.webp';
import Volkswagen from '../assets/volkswagen.webp';
import React, { ChangeEvent } from 'react';

export interface ICar {
  id: string;
  model: string;
  hp: number;
  img: string,
}

export interface ICarProps {
  car: ICar;
  onCarClick: (car: ICar | string, id: string) => void;
  // state: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  // setCarList: React.Dispatch<React.SetStateAction<ICar[]>>;
  changeModel: (id: string, value: string) => void;
  changeWholeModel?:(e: ChangeEvent<HTMLInputElement>)=>void
}

export type CarPropsType = ICar & Omit<ICarProps, 'car'>

export type CarsType = {
  cars: ICar[]
}
export const CAR_LIST: ICar[] = [{
  id: '1',
  model: 'Porsche',
  hp: 300,
  img: Porsche,
},
  {
    id: '2',
    model: 'Ford',
    hp: 356,
    img: Ford,
  },
  {
    id: '3',
    model: 'Kia',
    hp: 105,
    img: Kia
  },
  {
    id: '4',
    model: 'Volkswagen',
    hp: 125,
    img: Volkswagen
  },
];
