import React from 'react'
import classes from './Profil.module.css'
import Profilinfo from './Profilinfo/Profilinfo'
import Maypost from './Maypost/Maypost'
import Preloader from '../../comon/preloader/preloader'
import Newpost from './Maypost/New_post/Newpost'
import { Redirect } from 'react-router-dom'

const Profil = (props) => {
  if (!props.profil) {
    return <Preloader />
  }
  if (!props.nameMy) { return <Redirect to={'AuthContainer'} />
  }
  return (
    <div className={classes.profil}>
      <div>
        <Profilinfo profil={props.profil}
        />
      </div>
      <div>
        <Maypost
          profil={props.profil}
          posts={props.profilePage.posts}
          
        />
      </div>
      <div className={classes.item}>
        <Newpost
          newPostText={props.profilePage.newPostText}
          nameMy={props.nameMy}
          addPost={props.addPost}
          onPostCnage={props.onPostCnage}
        />
      </div>
    </div>
  )
}

export default Profil;