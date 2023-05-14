
import React, {useMemo, useState} from 'react';
import Counter from './Counter.jsx'
import ClassCounter from './ClassCounter.jsx';
import "../styles/App.css";
// eslint-disable-next-line no-unused-vars
import PostItem from "./PostItem.jsx";
import PstList from "./PstList.jsx"
import MySelect from "./Ui/Select/MySelect.jsx";
import PostForm from "./PostForm.jsx"


function App() {

  const [posts, setPosts] = useState([
    {id:1, title: 'javaScript', body: 'lorem20'},
    {id:11, title: 'javaScript', body: 'lorem20'},
    {id:111, title: 'javaScript', body: 'lorem20'},
    {id:1111, title: 'javaScript', body: 'lorem20'},
    {id:11111, title: 'javaScript', body: 'lorem20'},

  ])


  // eslint-disable-next-line no-unused-vars
  const [posts2, setPosts2] = useState([
    {id:1, title: 'javaScript', body: 'lorem20'},
    {id:11, title: 'javaScript', body: 'lorem20'},
    {id:111, title: 'javaScript', body: 'lorem20'},
    {id:1111, title: 'javaScript', body: 'lorem20'},
    {id:11111, title: 'javaScript', body: 'lorem20'},

  ])

const [selectedSort, setSelectedSort] = useState(" ")
const [searchQuery, setSearchQuery] = useState(" ")
const sortedPosts = useMemo ( ()=> {if(selectedSort) {
  return [...posts.sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))]
}
 return posts;

}, [selectedSort, posts])


const createPost= (newPost) => {
setPosts ([...posts, newPost])
}


const removePost = (post) => {
setPosts(posts.filter(p => p.id !==post.id))
}
const sortPosts = (sort) => {
  setSelectedSort(sort);
};
  return (
    <div  className="App">
      <ClassCounter/>
      <Counter/>
<PostForm create={createPost}/>
<hr style={{margin: '20px'}}/>
<div>
<input type="text" />
  <MySelect value = {selectedSort} onChange = {sortPosts} defaultValue="cортировка "
            options={[{value: "title", name: "gj yfpdfybz02"},
                      {value: "body", name: "gj yfpdfybz01"},
]}/>
</div>
{posts.length !== 0
    ?<PstList remove={removePost} posts={sortedPosts} title="Список постов"/>
    : <div>Нет Постов</div>
}

<PstList posts={posts2} title="Список постов 2"/>
    </div>
  );
};


export default App;





1/18/07 время
