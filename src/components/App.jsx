import React, {useState} from 'react';
import Counter from './Counter.jsx'
import ClassCounter from './ClassCounter.jsx';
import "../styles/App.css";



function App() {

  const [value, setValue] = useState('text')


  return (
    <div  className="App">
      <ClassCounter/>
      <Counter/>
      <div className='post'>
        <div className='post__content'>
          <strong>javaScript</strong>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus ratione sed libero, quibusdam hic explicabo nemo optio ullam repellendus velit possimus incidunt vel magnam, recusandae repellat dolorem? Numquam, doloribus adipisci!</div>
        </div>
        <div className='post__btns'>
          <button>delete</button>
        </div>
      </div>
    </div>
  );
};


export default App;
