import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {

  return (

    <div className={classes.item}>
      <div>
        Avatar: <img alt="" src={props.avatar}></img>
      </div>
      <div>
        Post: {props.message}
      </div>
      <span>lake: {props.likesCount}</span>
      <p></p>
    </div>
  )
}

export default Post;