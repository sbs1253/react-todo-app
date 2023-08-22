import React from 'react';

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <input
        type='text'
        name='value'
        style={{ flex: 10, padding: '10px' }}
        placeholder='해야 할 일 입력'
        value={value}
        onChange={handleChange}
      />
      <input type='submit' className='btn' style={{ flex: 1 }} value='전송' />
    </form>
  );
}
