import React from 'react'
import classes from './Newpost.module.css'

const Newpost = (props) => {

  let newPostElement = React.createRef()
  

  return (
    <div className={classes.newpost}>
      <div>
        <h3>
          My post
        </h3>
      </div>
      <div>
        <div>
          <textarea onChange={props.onPostCnage} ref={newPostElement} value={props.newPostText} placeholder="Write a new post" />
        </div>
        <div>
          <button onClick={props.addPost}>Add post</button>
        </div>
      </div>
      <div>
        New post
      </div>
    </div>
  )
}

export default Newpost;