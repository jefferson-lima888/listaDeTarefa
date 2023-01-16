import React, { useState } from 'react';
// esse tipo de import pega todos os components e quando chama ele só adicionar o C + o component desejado
import * as C from './App.styles';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/ListItem/AddArea';
import { Item } from './types/Item';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name: 'Comprar pão', done: false},
    {id: 2, name: 'Comprar um bolo', done: true},
  ]);

  const handleAddTask = (taskName: string) => {
    // efetuado um clone da lista para adicionar uma nova tarefa com o push
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList);
  }

  const handleTaskChange = (id: number, done: boolean) => {
    // fazer com que o done seja alterado seu estado
    let newList = [...list];
    for(let i in newList) {
      if(newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);  
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTask}/>
        {list.map((item, index) => (
          // <div>{item.name}</div>
          <ListItem 
          key={index} 
          item={item}
          onChange={handleTaskChange}
          />
        ))}
      </C.Area>
    </C.Container>
  )
}

export default App;
