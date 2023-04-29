import React, {useState} from 'react';
import Counter from './Counter.jsx'
import ClassCounter from './ClassCounter.jsx';
import "../styles/App.css";
import Post from "./Post.jsx";


function App() {

  const [value, setValue] = useState('text')


  return (
    <div  className="App">
      <ClassCounter/>
      <Counter/>
      <Post/>
    </div>
  );
};


export default App;
