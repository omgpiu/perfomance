import React from "react";

export interface ICar {
    id: string;
    model: string;
    hp: number;
    img: string,

}

export interface ISomeBigData {
    title: string;
    list: ICar[];
}

export type ListNameType = string | { inner_list_name: string }

export interface ICarProps {
    car: ICar;
    onCarClick: (car: ICar | string, id: string) => void;
    // state: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    // setCarList: React.Dispatch<React.SetStateAction<ICar[]>>;
    changeModel: (id: string, value: string) => void;
    nonPrimitive?: any[] | object;
    listName?: ListNameType;
    title: string;
}

export type CarPropsType = ICar & Omit<ICarProps, 'car'>