import React from 'react';

export default function Lists({ setTodoData, todoData }) {
  const handleClick = (id) => {
    const newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };
  const handleComplete = (id) => {
    let newTodo = todoData.map((data) => {
      if (data.id === id) {
        console.log(id);
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodo);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div
          key={data.id}
          className='flex m-3 justify-between items-center p-3 border rounded bg-slate-50'
        >
          <div>
            <input
              type='checkbox'
              defaultChecked={false}
              onChange={() => handleComplete(data.id)}
            />
            <span
              className={(data.completed ? 'line-through' : undefined, 'm-3')}
            >
              {data.title}
            </span>
          </div>
          <div>
            <button
              onClick={() => handleClick(data.id)}
              className='border rounded px-2 bg-blue-50 text-blue-400'
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
