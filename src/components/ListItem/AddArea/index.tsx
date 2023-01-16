import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('');

    // console.log(inputText)

    const handleKeyUp = (e: KeyboardEvent) => {
        // esse console é para ver qual a tecla está sendo monitorada pelo code
        // console.log(e.code)

        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
        }
    }
    
    return (
        <C.Container>
            <div className='image'>➕</div>
            <input
            type='text'
            placeholder='Adicione uma tarefa'
            value={inputText}
            onChange={e=> setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}