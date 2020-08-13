import React from 'react'
import Post from './Post/Post'
import classes from './Maypost.module.css'

const Maypost = React.memo((props) => {

  let postElements =
    [...props.posts]
      .reverse()
      .map(p => <Post
        key={p.id}
        avatar={props.profil.avatar}
        message={p.doc.message}
        likesCount={p.doc.likesCount}
      />);
  return (
    <div>
      <div className={classes.item}>
        {postElements}
      </div>
    </div>
  )
}
)

export default Maypost