import React, { useCallback, useState } from 'react';
import './App.css';
import Form from './component/Form';
import Lists from './component/Lists';
const initialTodoDate = localStorage.getItem('todoData')
  ? JSON.parse(localStorage.getItem('todoData'))
  : [];
export default function App() {
  const [todoData, setTodoData] = useState(initialTodoDate);
  const [value, setValue] = useState('');

  const handleClick = useCallback(
    (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
      localStorage.setItem('todoData', JSON.stringify(newTodoData));
    },
    [todoData]
  );

  const handleSubmit = (e) => {
    // submit 시 리로드 방지
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
    setValue('');
  };

  const handleDelete = () => {
    setTodoData([]);
    localStorage.setItem('todoData', JSON.stringify([]));
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 rounded shadow bg-white md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-3xl'>
        <div className='flex justify-between mb-4 font-bold'>
          <h1>할 일 목록</h1>
          <button onClick={handleDelete}>Delete All</button>
        </div>
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          handleClick={handleClick}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
