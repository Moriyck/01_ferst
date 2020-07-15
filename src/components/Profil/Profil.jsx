import React from 'react'
import classes from './Profil.module.css'
import Profilinfo from './Profilinfo/Profilinfo'
import Maypost from './Maypost/Maypost'
import Preloader from '../../comon/preloader/preloader'
import Newpost from './Maypost/New_post/Newpost'

const Profil = (props) => {
  if (!props.profil) {
    return <Preloader />
  }
  return (
    <div className={classes.profil}>
      <div>
        <Profilinfo profil={props.profil}
        />
      </div>
      <div>
        <Maypost
          posts={props.profilePage.posts}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
      <div className={classes.item}>
        <Newpost
          newPostText={props.profilePage.newPostText}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  )
}

export default Profil;