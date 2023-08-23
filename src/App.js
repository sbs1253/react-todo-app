import React, { useState } from 'react';
import './App.css';
import List from './component/List';
import Form from './component/Form';
export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // submit 시 리로드 방지
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };
    console.log(newTodo);
    setTodoData((prev) => [...prev, newTodo]);
    setValue('');
  };

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-blue-100'>
      <div className='w-full p-6 m-4 rounded shadow bg-white md:w-3/4 md:max-w-lg lg:w-3/4 lg:max-w-3xl'>
        <div className='flex justify-between mb-4 font-bold'>
          <h1>할 일 목록</h1>
        </div>
        <List todoData={todoData} setTodoData={setTodoData} />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}
