import React from 'react'
import Post from './Post/Post'
import classes from './Maypost.module.css'

const Maypost = (props) => {

  let postElements = props.posts.map(p => <Post key={p.id} avatar={props.profil.avatar} message={p.doc.message} likesCount={p.doc.likesCount} />);
  return (
    <div>
      <div className={classes.item}>
        {postElements}
      </div>
    </div>
  )
}

export default Maypost