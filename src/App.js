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
  getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    };
  };
  state = {
    todoData: [
      {
        id: '1',
        title: '공부하기',
        completed: false,
      },
      {
        id: '2',
        title: '복습하기',
        completed: false,
      },
    ],
    value: '',
  };
  handleClick = (id) => {
    const newTodoData = this.state.todoData.filter((data) => data.id !== id);
    console.log('newTodoData:', newTodoData);
    this.setState({ todoData: newTodoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    // console.log(e.target.value, this.state.value);
  };
  handleSubmit = (e) => {
    // submit 시 리로드 방지
    e.preventDefault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    console.log(newTodo);
    this.setState({ todoData: [...this.state.todoData, newTodo], value: '' });
  };
  handleComplete = (id) => {
    let newTodo = this.state.todoData.map((data) => {
      if (data.id === id) {
        console.log(id);
        data.completed = !data.completed;
      }
      return data;
    });
    this.setState({ todoData: newTodo });
  };

  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <p>
                <input
                  type='checkbox'
                  defaultChecked={false}
                  onChange={() => this.handleComplete(data.id)}
                />
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
          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type='text'
              name='value'
              style={{ flex: 10, padding: '10px' }}
              placeholder='해야 할 일 입력'
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type='submit'
              className='btn'
              style={{ flex: 1 }}
              value='전송'
            />
          </form>
        </div>
      </div>
    );
  }
}
