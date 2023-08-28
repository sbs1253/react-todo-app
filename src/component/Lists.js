import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({ setTodoData, todoData }) => {
  const handleEnd = (result) => {
    // console.log(result);
    if (!result.destination) return;

    // 리액트 불변성
    const newTodoData = [...todoData];
    const [selecttItem] = newTodoData.splice(result.source.index, 1);
    // *error이유* selecttItem => [selecttItem]
    // 구조분해 할당으로 splice 아이템을 받아야했음
    // 안그러면 배열형태로 들어감

    newTodoData.splice(result.destination.index, 0, selecttItem);
    setTodoData(newTodoData);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='to-dos'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      // key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      provided={provided}
                      snapshot={snapshot}
                      todoData={todoData}
                      setTodoData={setTodoData}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
});
export default Lists;
