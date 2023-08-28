import React from 'react';

const List = React.memo(
  ({ id, title, provided, snapshot, todoData, setTodoData, completed }) => {
    const handleClick = (id) => {
      const newTodoData = todoData.filter((data) => data.id !== id);
      setTodoData(newTodoData);
    };
    const handleComplete = (id) => {
      let newTodo = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodo);
    };
    return (
      <div
        key={id}
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={`${
          snapshot.isDragging ? 'bg-gray-400' : 'bg-slate-50'
        } flex m-3 justify-between items-center p-3
  border rounded bg-slate-50`}
      >
        <div>
          <input
            type='checkbox'
            defaultChecked={false}
            onChange={() => handleComplete(id)}
          />
          <span
            className={(completed ? 'line-through' : 'none') + ' m-3'}
            // {`${data.completed && 'line-through'} m-3`} 이게 더 보기쉬운듯
            // ** undefined나 null값 반환은 0 이될수있음 none같은 명확한 값이 좋음
          >
            {title}
          </span>
        </div>
        <div>
          <button
            onClick={() => handleClick(id)}
            className='border rounded px-2 bg-blue-50 text-blue-400'
          >
            X
          </button>
        </div>
      </div>
    );
  }
);

export default List;
