import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

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
      <DragDropContext>
        <Droppable droppableId='to-dos'>
          {(provided) => {
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id}
                      className={`${
                        snapshot ? 'selected' : 'not-selected'
                      }flex m-3 justify-between items-center p-3
                      border rounded bg-slate-50`}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        <input
                          type='checkbox'
                          defaultChecked={false}
                          onChange={() => handleComplete(data.id)}
                        />
                        <span
                          className={
                            (data.completed ? 'line-through' : 'none') + ' m-3'
                          }
                          // {`${data.completed && 'line-through'} m-3`} 이게 더 보기쉬운듯
                          // ** undefined나 null값 반환은 0 이될수있음 none같은 명확한 값이 좋음
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>;
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
