import React, {useRef} from 'react';
import './App.css';
import useRequest from './hooks/request';

const App: React.FC = () => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const { message, submitHandler } = useRequest(inputRef);

  return (
    <div className="App">
      <form onSubmit={ submitHandler }>
        <input 
          ref={inputRef}
          className="input" 
          type="text" 
          placeholder="enter first name (eng only)"/>
        <button className="button">check</button>
      </form>
      <p className='result'>{ message }</p>
    </div>
  );
}

export default App;
