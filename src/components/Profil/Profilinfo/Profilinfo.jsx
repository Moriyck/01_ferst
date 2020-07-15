import React from 'react'
import classes from './Profilinfo.module.css'

const Profilinfo = (props) => {
  
  return (
    <div className={classes.profilinfo}>
      <div >
        <img src='https://avatars.mds.yandex.net/get-pdb/216365/95f3b47e-11c4-4e31-a28f-9e2d67412b1b/s1200'></img>
      </div>
      <div className={classes.avatar}>
        <h3>
          Name: {props.profil.name}
        </h3>
        <div>
          <img src={props.profil.avatar}></img>
        </div>
        <div>
          {props.profil.description}
        </div>
      </div>
    </div>
  )
}

export default Profilinfo;