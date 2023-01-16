import * as C from './styles';
import {Item} from '../../types/Item';
// import { useState } from 'react';

type Props = {
    item: Item,
    onChange: (id: number, done: boolean) => void
}

export const ListItem = ({item, onChange}: Props) => {
    // o useState foi usado para verificar se o checked estava sendo validado antes de usar as props
    // const [isChecked, setIsChecked] = useState(item.done);
    
    return (
        <C.Container done={item.done}>
            <input 
            type='checkbox' 
            // checked={isChecked}
            // onChange={e => setIsChecked(e.target.checked)}
            checked={item.done}
            onChange={e => onChange(item.id, e.target.checked)}
            />
            {/* foi passado esse trecho dentro do label junto com o item.name para ver se alterava o estado do checked */}
            {/* {item.done.toString()} */}
            <label>{item.name}</label>
        </C.Container>
    )
}