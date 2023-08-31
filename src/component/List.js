import React, { useState } from 'react';

const List = React.memo(
  ({
    id,
    title,
    provided,
    snapshot,
    todoData,
    setTodoData,
    completed,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleComplete = (id) => {
      let newTodo = todoData.map((data) => {
        if (data.id === id) {
          data.completed = !data.completed;
        }
        return data;
      });
      setTodoData(newTodo);
      localStorage.setItem('todoData', JSON.stringify(newTodo));
    };
    const setEditedChange = (e) => {
      setEditedTitle(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault();

      let newTodoData = todoData.map((data) => {
        console.log(editedTitle);
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem('todoData', JSON.stringify(newTodoData));

      setIsEditing(false);
    };
    if (isEditing) {
      return (
        <div
          className={`flex m-3 justify-between items-center p-3 border rounded bg-slate-50`}
        >
          <div>
            <form action=''>
              <input
                /* onSubmit={handleSubmit}*/
                className='w-full px-4 py-2 rounded'
                value={editedTitle}
                defaultChecked={false}
                onChange={setEditedChange}
                autoFocus
              />
            </form>
          </div>
          <div>
            <button
              onClick={() => setIsEditing(false)}
              className='border rounded px-2 my-2 bg-blue-50 text-blue-400'
            >
              X
            </button>
            <button
              onClick={handleSubmit}
              className='float-right px-4 py-2'
              type='submit'
            >
              save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? 'bg-gray-400' : 'bg-slate-50'
          } flex m-3 justify-between items-center p-3 border rounded bg-slate-50`}
        >
          <div>
            <input
              type='checkbox'
              defaultChecked={completed}
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
              className='border rounded px-2 my-2 bg-blue-50 text-blue-400'
            >
              X
            </button>
            <button
              className='float-right px-4 py-2'
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
