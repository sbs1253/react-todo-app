import React from 'react';

export default function Lists({ setTodoData, todoData }) {
  const btnstyle = {
    float: 'right',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 10px',
    color: '#fff',
    cursor: 'pointer',
  };
  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };

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
        <div style={getStyle(data.completed)} key={data.id}>
          <p>
            <input
              type='checkbox'
              defaultChecked={false}
              onChange={() => handleComplete(data.id)}
            />
            {data.title}
            <button style={btnstyle} onClick={() => handleClick(data.id)}>
              X
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}
