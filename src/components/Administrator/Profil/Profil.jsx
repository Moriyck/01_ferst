import React from 'react'
import Preloader from '../../../comon/preloader/preloader'
import Maypost from './Maypost/Maypost'
import Newpost from './Maypost/New_post/Newpost'
import classes from './Profil.module.css'
import Profilinfo from './Profilinfo/Profilinfo'

const Profil = (props) => {
  if (!props.profil) {
    return <Preloader />
  }

  return (
    <div className={classes.profil}>
      <div>
        <Profilinfo
          profilePage={props.profilePage}
          fileTheDownload={props.fileTheDownload}
          isOwner={props.isOwner}
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