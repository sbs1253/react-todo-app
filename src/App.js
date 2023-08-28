import React, { useState } from 'react';
import './App.css';
import Form from './component/Form';
import Lists from './component/Lists';
export default function App() {
  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: '하이요',
      completed: false,
    },
    {
      id: 2,
      title: '고마워요',
      completed: false,
    },
  ]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // submit 시 리로드 방지
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 rounded shadow bg-white md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-3xl'>
        <div className='flex justify-between mb-4 font-bold'>
          <h1>할 일 목록</h1>
        </div>
        <Lists todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
