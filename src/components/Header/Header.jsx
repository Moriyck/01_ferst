import React from 'react';
import classes from './Header.module.css'

const Header = (props) => {

  const logAut = () => {
    props.logAut()
  }

  let button = <button onClick={logAut}>log out</button>

  return (
    <div className={classes.tooColomns}>
      <div>
        <div>
          <img src='https://c7.hotpng.com/preview/312/1018/419/logo-circle-technology-clip-art-circle.jpg'></img>
        </div>
        <div><h2>Large project</h2></div>
      </div>
      <div>
        Hello, {props.nameMy && ' '}
        {props.nameMy === null ? "log in or register" : button}
      </div>
    </div>
  )
}

export default Header;