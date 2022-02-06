import Porsche from '../assets/Porsche.webp';
import Ford from '../assets/ford.webp';
import { ICar, ListNameType } from "./types";


export const listNameRender = (listName: ListNameType | any) => {
    if (typeof listName === 'string') {
        return listName;
    }
    return listName.inner_list_name;
};

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

];
export const SOME_BIG_DATA = {
    title: 'SOME_BIG_DATA',
    list: CAR_LIST
};

export const OUTSIDE_LIST = [{id: 10}];
