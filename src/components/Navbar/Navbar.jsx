import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

  let navLinks = props.saidebar.elementsLinks.map(n => <p><NavLink key={n.id} to={n.to} activeClassName={classes.activelink}>{n.name}</NavLink></p>);
  let usersLink = props.saidebar.usersLink.map(f => <p><NavLink key={f.id} to={f.to} activeClassName={classes.activelink}>{f.name}</NavLink></p>);
  let settingsLinks = props.saidebar.settingsLinks.map(s => <p><NavLink key={s.id} to={s.to} activeClassName={classes.activelink}>{s.name}</NavLink></p>);

  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        {navLinks}
      </div>
      friends
      <div className={classes.item}>
        {usersLink}
      </div>
      Settings
      <div className={classes.item}>
        {settingsLinks}
      </div>
    </nav>
  )
}

export default Navbar;