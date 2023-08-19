import React, { Component } from 'react';

export default class App extends Component {
  btnstyle = {
    float: 'right',
    border: 'none',
    borderRadius: '50%',
    padding: '5px 10px',
    color: '#fff',
    cursor: 'pointer',
  };
  getStyle = () => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: 'none',
    };
  };
  todoData = [
    {
      id: '1',
      title: '공부하기',
      completed: true,
    },
    {
      id: '2',
      title: '복습하기',
      completed: true,
    },
  ];

  handleClick = (id) => {
    const newTodoData = this.todoData.filter((data) => data.id !== id);
    console.log('newTodoData:', newTodoData);
  };
  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {this.todoData.map((data) => (
            <div style={this.getStyle()} key={data.id}>
              <p>
                <input type='checkbox' defaultChecked={false} />
                {data.title}
                <button
                  style={this.btnstyle}
                  onClick={() => this.handleClick(data.id)}
                >
                  X
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
