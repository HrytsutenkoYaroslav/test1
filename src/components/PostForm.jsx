import React, {useState} from 'react';
import MyButton from "./Ui/Button/MyButton.jsx"
import MyInput from "./Ui/input/MyInput.jsx"


const PostForm = ({create})  => {
  const addNewPost = (e) => {
    e.preventDefault()
  const newPost = {
    ...post, id: Date.now()
  }
  create(newPost)
    setPost ({title: '', body: ''})

      }
  const [post, setPost] = useState ({title: '', body: ''})

  return(

<form >
        <MyInput value = {post.title} onChange={e =>setPost({...post, title:e.target.value})} type="text" placeholder='title' />
        <MyInput value = {post.body} onChange={e =>setPost({...post, body:e.target.value})} type="text" placeholder='body' />
        <MyButton onClick={addNewPost}>Create post</MyButton>
      </form>

  );
};


export default PostForm
