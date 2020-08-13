import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  let navLinks = props.allMenu.elementsLinks.map(n => <p key={n.id}><NavLink key={n.id} to={n.to} activeClassName={classes.activelink}>{n.name}</NavLink></p>);
  let usersLink = props.allMenu.usersLink.map(f => <p key={f.id}><NavLink key={f.id} to={f.to} activeClassName={classes.activelink}>{f.name}</NavLink></p>);
  let settingsLinks = props.allMenu.settingsLinks.map(s => <p key={s.id}><NavLink key={s.id} to={s.to} activeClassName={classes.activelink}>{s.name}</NavLink></p>);

  return (
    <div>
      <div className={classes.item}>
        {navLinks}
      </div>
      My services
      <div className={classes.item}>
        {usersLink}
      </div>
      Settings
      <div className={classes.item}>
        {settingsLinks}
      </div>
    </div>
  )
}

export default Navbar;