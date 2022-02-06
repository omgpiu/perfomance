// Для реакта важен порядок элементов в доме. Если мы добавляем какой-то узел, которого не было, мы получим перерисовку всего узла в дом.

import {useEffect} from 'react';
import {SuperCar} from "../assets";


const InnerComponent = ({title}: { title: string }) => {
    useEffect(() => {
        console.log(title, 'mount');
        return () => console.log(title, 'unmount');
    }, []);
    return (
        <div>
            <div>
                <div>
                    {<img src={SuperCar} alt='Logo' width='250px' height='200px'/>}
                </div>
            </div>
        </div>
    );
};
export default InnerComponent;
