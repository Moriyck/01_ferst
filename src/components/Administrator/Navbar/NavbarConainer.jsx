import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { getMenu } from "../../../redux/Reduser/menuReduser"
import Navbar from './Navbar'
import classes from './Navbar.module.css'

class NavbarContainer extends React.Component {

  componentDidMount() {
    this.props.getMenu('saidebar')
  }

  render() {
    return (
      <nav className={classes.nav}>
        <Navbar
          {...this.props}
        />
      </nav>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    allMenu: state.allMenu
  }
}

export default compose(
  connect(mapStateToProps, {
    getMenu
  }),
  withRouter,
)(NavbarContainer)