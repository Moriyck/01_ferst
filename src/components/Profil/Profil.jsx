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
        <Profilinfo
          profil={props.profil}
          updateStatus={props.updateStatus}
        />
      </div>
      <div className={classes.item}>
        <Newpost
          nameMy={props.nameMy}
          addPost={props.addPost}
          onSubmit={props.onSubmit}
        />
      </div>
      <div>
        <Maypost
          profil={props.profil}
          posts={props.profilePage.posts}
        />
      </div>
    </div>
  )
}

export default Profil;