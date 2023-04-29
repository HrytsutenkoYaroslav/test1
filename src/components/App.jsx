import React, {useState} from 'react';
import Counter from './Counter.jsx'
import ClassCounter from './ClassCounter.jsx';
import "../styles/App.css";
import PostItem from "./PostItem.jsx";


function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'javaScript', body: 'lorem20'},
    {id:11, title: 'javaScript', body: 'lorem20'},
    {id:111, title: 'javaScript', body: 'lorem20'},
    {id:1111, title: 'javaScript', body: 'lorem20'},
    {id:11111, title: 'javaScript', body: 'lorem20'},
    {id:111111, title: 'javaScript', body: 'lorem20'},
    {id:1111111, title: 'javaScript', body: 'lorem20'},
    {id:11111111, title: 'javaScript', body: 'lorem20'},
    {id:111111111, title: 'javaScript', body: 'lorem20'},
  ])


  return (
    <div  className="App">
      <ClassCounter/>
      <Counter/>
      {posts.map(post =>

<PostItem post={post}/>
        )}

    </div>
  );
};


export default App;
