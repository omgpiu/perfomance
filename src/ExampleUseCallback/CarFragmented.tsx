import { ChangeEvent, FC, memo } from 'react';
import { CarPropsType } from './common';

const CarFragmented: FC<CarPropsType> = memo(({
                                                img,
                                                model,
                                                id,
                                                onCarClick,
                                                setCount,
                                                changeModel,
                                                nonPrimitive
                                              }) => {
  console.log(model, 'render CarFragmented');

  const onClick = () => {
    onCarClick(model, id);
    setCount(prev => prev + 1);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeModel(id, e.target.value);
  };
  return (
    <div className='card car'>
      <img src={img} alt={model} width='150px' height='110px' />
      <input type='text' value={model} onChange={onChange} maxLength={10} />
      <button onClick={onClick} className='btn b-1'>{model}</button>
    </div>

  );
});
export default CarFragmented;
