import { useCallback, useMemo, useState } from 'react';
import { OUTSIDE_LIST, SOME_BIG_DATA } from '../common';
import Car from './Car';
import CarFragmented from './CarFragmented';
import MyButton from '../../Common/Button/MyButton';
import { ICar, ISomeBigData } from "../types";
import { CarContainer, CarsListContainer } from "./styles";

const Lists = () => {
    console.log('cars renders');
    const [, setCount] = useState(0);
    const [, forceUpdate] = useState({})
    //setState из коробки закеширована, поэтому нет смысла оборачивать в useCallback
    const [someBigData, setSomeBigData] = useState<ISomeBigData>(SOME_BIG_DATA);


    const onCarClick = useCallback((car: string | ICar, id: string) => {
        //Удаляем
        // setCarList((prevState => prevState.filter(car => car.id !== id)));
        //Добавляем  import SuperCar
        // setCarList((prevState => [...prevState, {id: String(new Date()), hp: 100, model: 'Бибика', img: SuperCar}]));
        if (typeof car === 'string') {
            return console.log(car, 'console log parent');
        }
        console.log(car.model, 'console log parent');
    }, []);

    //Уберем useCallback  и новая ссылка на функцию будет причиной ререндера ребенка
    const changeModel = useCallback((id: string, value: string) => {
        setSomeBigData((prevState => ({
            ...prevState, list: prevState.list.map(car => {
                if (car.id === id) {
                    return {...car, model: value};
                }
                return car;
            })
        })));
    }, []);

    //Функции, которые не передаем ниже по дереву нет смысла оборачивать в useCallback в этом кейсе useCallback не работает
    const forceUpdateHandler = () => {
        forceUpdate({})

    };


    const INNER_LIST = {inner_list_name: 'Моя мечта'};
    //Если в депенденси useMemo новую ссылку объект, useMemo работать не будет
    // Депенденси работают аналогично memo - примитивы по значению, не примитивы по ссылкам
    const MEMO_INNER_LIST = useMemo(() => INNER_LIST, []);

    return (
        <div className='full_content box-shadow'>
            <div className='box-shadow text-center'>
                <p>При нажатии я ререндерю всю страницу</p>
                <MyButton title='FORCE UPDATE'
                          onClick={forceUpdateHandler}/>
            </div>
            <CarsListContainer>
                <p>Пропсы через спред</p>
                <p>Пропсы полями</p>
                <p>А вот тут косячек</p>
            </CarsListContainer>
            <CarsListContainer>
                <CarContainer>
                    {someBigData.list.map((car => {
                        console.log('render render');
                        return (<Car
                            key={car.id}
                            {...{
                                title: 'Car Good props',
                                car,
                                onCarClick,
                                setCount,
                                changeModel,
                                nonPrimitive: OUTSIDE_LIST,
                                listName: INNER_LIST.inner_list_name
                            }}
                        />);
                    }))}
                </CarContainer>
                <CarContainer>
                    {someBigData.list.map(car => {
                        console.log('render Good');
                        return (<CarFragmented
                            key={car.id}
                            title='CarFragmented Good props'
                            nonPrimitive={MEMO_INNER_LIST}
                            model={car.model}
                            id={car.id}
                            hp={car.hp}
                            img={car.img}
                            listName={INNER_LIST.inner_list_name}
                            {...{onCarClick, setCount, changeModel}}
                        />);
                    })}
                </CarContainer>
                <CarContainer>
                    {someBigData.list.map((car => {
                        console.log('render Bad');
                        return (<Car
                            key={car.id}
                            {...{
                                car,
                                title: 'Car Bad props',
                                onCarClick,
                                setCount,
                                changeModel,
                                nonPrimitive: INNER_LIST,
                                listName: INNER_LIST
                            }}
                        />);
                    }))}
                </CarContainer>
            </CarsListContainer>
        </div>
    );
};

export default Lists;
