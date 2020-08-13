import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import ConfigureServices from './ConfigureServices/ConfigureServices'
import ContactInformation from './ContactInformation/ContactInformation'
import MySpecialization from './MySpecialization/MySpecialization'
import PersonalInformation from './PersonalInformation/PersonalInformation'
import classes from './Settings.module.css'
import UserAccount from './UserAccount/UserAccount'
import { Route, NavLink } from 'react-router-dom'

const Settings = (props) => {

  let pathRoute = props.allMenu.settingMenu.map(sm =>
    <span key={sm.id}>
      <NavLink
        key={sm.id}
        to={sm.to}
        className={classes.button}
        activeClassName={classes.activelink}
      >
        {sm.name}
      </NavLink>
    </span>)
  return (
    <div >
      <div>
        <b>
          Settings
        </b>
        <p />
      </div>
      <div >
        {pathRoute}
        <p />
      </div>
      <div>
        <Route
          path='/Settings/ConfigureServices'
          render={() =>
            < ConfigureServices
              allSettings={props.allSettings}
              onChange={props.onChange}
            />}
        />
        <Route path='/Settings/UserAccount' render={() => < UserAccount />} />
        <Route path='/Settings/PersonalInformation' 
        render={() => 
        < PersonalInformation 
        onSubmit={props.updateProfile}
        />} />
        <Route path='/Settings/AboutMe' render={() => < AboutMe />} />
        <Route path='/Settings/MySpecialization' render={() => < MySpecialization />} />
        <Route path='/Settings/ContactInformation' render={() => < ContactInformation />} />
      </div>
    </div>
  )
}

export default Settings