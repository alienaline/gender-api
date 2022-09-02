import React from 'react';
import './App.css';
import useRequest from './hooks/request';

const App: React.FC = () => {

  const { result, submitHandler, changeHandler } = useRequest();

  return (
    <div className="App">
      <form onSubmit={ submitHandler }>
        <input 
          onChange={changeHandler}
          className="input" 
          type="text" 
          placeholder="enter first name (eng only)"/>
        <button className="button">check</button>
      </form>
      <p className='result'>{ result }</p>
    </div>
  );
}

export default App;
