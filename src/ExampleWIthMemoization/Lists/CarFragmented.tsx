import { ChangeEvent, FC, memo, useEffect } from 'react';
import { CarPropsType, listNameRender } from '../common';
import MyButton from '../../common/MyButton';

const CarFragmented: FC<CarPropsType> = memo(({
                                                title,
                                                img,
                                                model,
                                                id,
                                                onCarClick,
                                                setCount,
                                                changeModel,
                                                nonPrimitive,
                                                listName
                                              }) => {
  console.log(model, title, 'render');

  useEffect(() => {
    console.log('CarFragmented mount');
    return console.log('CarFragmented unmount');
  }, []);
  const onClick = () => {
    onCarClick(model, id);
    setCount(prev => prev + 1);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeModel(id, e.target.value);
  };
  return (
    <div className='box-shadow car'>
      {listNameRender(listName)}
      <img src={img} alt={model} width='150px' height='110px' />
      <input type='text' value={model} onChange={onChange} maxLength={10} />
      <MyButton title={model} onClick={onClick} />
    </div>

  );
});
export default CarFragmented;
