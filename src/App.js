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
  state = {
    todoData: [
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
    e.preventDafault();

    let newTodo = {
      id: Date.now(),
      title: this.state.value,
      completed: false,
    };
    console.log(newTodo);
    this.setState({ todoData: [...this.state.todoData, newTodo], value: '' });
  };
  render() {
    return (
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>

          {this.state.todoData.map((data) => (
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
