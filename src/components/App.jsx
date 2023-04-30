import React, {useState} from 'react';
import Counter from './Counter.jsx'
import ClassCounter from './ClassCounter.jsx';
import "../styles/App.css";
import PostItem from "./PostItem.jsx";
import PstList from "./PstList.jsx"
import MyButton from "./Ui/Button/MyButton.jsx"
import MyInput from "./Ui/input/MyInput.jsx"
function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'javaScript', body: 'lorem20'},
    {id:11, title: 'javaScript', body: 'lorem20'},
    {id:111, title: 'javaScript', body: 'lorem20'},
    {id:1111, title: 'javaScript', body: 'lorem20'},
    {id:11111, title: 'javaScript', body: 'lorem20'},

  ])

  const [posts2, setPosts2] = useState([
    {id:1, title: 'javaScript', body: 'lorem20'},
    {id:11, title: 'javaScript', body: 'lorem20'},
    {id:111, title: 'javaScript', body: 'lorem20'},
    {id:1111, title: 'javaScript', body: 'lorem20'},
    {id:11111, title: 'javaScript', body: 'lorem20'},

  ])

  return (
    <div  className="App">
      <ClassCounter/>
      <Counter/>

      <form action="">
        <MyInput type="text" placeholder='title' />
        <MyInput type="text" placeholder='body' />
        <MyButton >Create post</MyButton>
      </form>
<PstList posts={posts} title="Список постов"/>
<PstList posts={posts2} title="Список постов 2"/>
    </div>
  );
};


export default App;
