import React from 'react'
import classes from './Profilinfo.module.css'

const Profilinfo = (props) => {

  return (
    <div className={classes.profilinfo}>
      <div >
        <img src={props.profil.headerBackground}></img>
      </div>
      <div className={classes.avatar}>
        <h3>
          Name: {props.profil.name}
        </h3>

        <div>
          <img src={props.profil.avatar}></img>
        </div>

        <div>
          Description: {props.profil.description}
        </div>

        <div>
          Status: {props.profil.status}
        </div>

        <div>
          Country: {props.profil.country}
        </div>

        <div>
          City: {props.profil.city}
        </div>

      </div>
    </div>
  )
}

export default Profilinfo;