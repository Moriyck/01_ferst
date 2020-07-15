import React from 'react'
import Post from './Post/Post'
import classes from './Maypost.module.css'

const Maypost = (props) => {

  let postElements = props.posts.map(p => <Post key={p.id} avatar={p.avatar} message={p.message} likesCount={p.likesCount} />);
  return (
    <div>
      <div className={classes.item}>
        {postElements}
      </div>
    </div>
  )
}

export default Maypost