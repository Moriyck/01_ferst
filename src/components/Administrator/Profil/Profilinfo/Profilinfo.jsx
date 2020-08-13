import React from 'react'
import fonPhoto from '../../../../assets/img/fon_header.png'
import userPhoto from '../../../../assets/img/user.png'
import classes from './Profilinfo.module.css'
import ProfilStatus from './ProfilStatus/ProfilStatus'
import { NavLink } from 'react-router-dom'

const Profilinfo = (props) => {
  let errorMessage = `Name: ${props.profilePage.error} go to profile <NavLink to="Settings/UserAccount">settings</NavLink>`
  let name = `Name: ${props.profil.name}`
  if (props.profil.name === undefined) {
    errorMessage = 'Name: the name is not specified, go to profile'
    name = <span> {errorMessage} <NavLink to="Settings/PersonalInformation">settings</NavLink></span>
  }
  debugger
  return (
    <div className={classes.profilinfo}>
      <div >
        <img alt="" src={props.profil.headerBackground || fonPhoto} />
      </div>
      <div className={classes.avatar}>
        <h3>
          {name}
        </h3>

        <div>
          <img alt="" src={props.profil.avatar || userPhoto} />
        </div>

        <div>
          Description: {props.profil.description}
        </div>

        <div>
          <ProfilStatus
            status={props.profil.status}
            updateStatus={props.updateStatus}
          />
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