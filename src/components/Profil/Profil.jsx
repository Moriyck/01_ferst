import React from 'react'
import classes from './Profil.module.css'
import Profilinfo from './Profilinfo/Profilinfo'
import Maypost from './Maypost/Maypost'

const Profil = (props) => {
  //debugger
  return (
    <div className={classes.profil}>
      <div>
        <Profilinfo profil={props.profilePage.profil}
        />
      </div>
      <div>
        <Maypost
          profilePage={props.profilePage}
          addPost={props.addPost}
          updateNewPostText={props.updateNewPostText}
        />
      </div>
    </div>
  )
}

export default Profil;