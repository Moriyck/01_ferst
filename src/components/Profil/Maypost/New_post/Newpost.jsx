import React from 'react'
import classes from './Newpost.module.css'

const Newpost = (props) => {
  
  let newPostElement = React.createRef()
  let addPost = () => {
    props.addPost()
  }

  let onPostCnage = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }

  return (
    <div className={classes.newpost}>
      <div>
        <h3>
          My post
        </h3>
      </div>
      <div>
        <div>
          <textarea onChange={onPostCnage} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>
        New post
      </div>
    </div>
  )
}

export default Newpost;