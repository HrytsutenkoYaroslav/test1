import React, {useState} from 'react';
import Counter from './Counter.jsx'
import ClassCounter from './ClassCounter.jsx';
import "../styles/App.css";
import PostItem from "./PostItem.jsx";
import PstList from "./PstList.jsx"

import PostForm from "./PostForm.jsx"
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

const createPost= (newPost) => {
setPosts ([...posts, newPost])
}

const removePost = (post) => {
setPosts(posts.filter(p => p.id !==post.id))
}

  return (
    <div  className="App">
      <ClassCounter/>
      <Counter/>
<PostForm create={createPost}/>
<div>
  <select name="" id="">
    <option value="value1">по названию </option>
    <option value="value2">по no названию </option>
  </select>
</div>
{posts.length !== 0
    ?<PstList remove={removePost} posts={posts} title="Список постов"/>
    : <div>Нет Постов</div>
}

<PstList posts={posts2} title="Список постов 2"/>
    </div>
  );
};


export default App;




//1-06
