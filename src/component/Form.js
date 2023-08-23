import React from 'react';

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className='flex justify-between m-3'>
      <input
        type='text'
        name='value'
        placeholder='해야 할 일 입력'
        value={value}
        onChange={handleChange}
        className='border w-full p-3 mr-3 rounded shadow'
      />
      <input
        type='submit'
        value='전송'
        className='border-2 border-blue-200 text-blue-400 rounded p-3 hover:text-white hover:bg-blue-200'
      />
    </form>
  );
}
