import React from 'react'
import Newpost from './New_post/Newpost'
import Post from './Post/Post'
import classes from './Maypost.module.css'

const Maypost = (props) => {

  let postElements = props.profilePage.posts.map(p => <Post key={p.id} avatar={p.avatar} message={p.message} likesCount={p.likesCount} />);
  return (
    <div>
      <div className={classes.item}>
        <Newpost
          newPostText={props.profilePage.newPostText}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
      <div className={classes.item}>
        {postElements}
      </div>
    </div>
  )
}

export default Maypost;