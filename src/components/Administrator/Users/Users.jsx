import React from 'react'
import classes from './Users.module.css'
import UsersItem from './UsersItem'

const Users = (props) => {

  let usersElements = props.users.map(f => <UsersItem
    key={f.id}
    nameMy={props.nameMy}
    id={f.id}
    follow={f.doc.follow}
    idFollow={f.doc.idFollow}
    revFollow={f.doc.revFollow}
    nameMyFollow={f.doc.nameMy}
    rev={f.doc._rev}
    status={f.doc.status}
    avatar={f.doc.avatar}
    name={f.doc.name}
    country={f.doc.country}
    city={f.doc.city}
    changeToFollow={props.changeToFollow}
    changeToUnFollow={props.changeToUnFollow}
    followingInProgress={props.followingInProgress}
    totalIsFetchinProgress={props.totalIsFetchinProgress}
    followThunk={props.followThunk}
    followUnThunk={props.followUnThunk}
  />)

  let pagesCount = Math.ceil(props.totalPageCount / props.pageSaze)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let pagesRest = pagesCount - props.currontPage - 2
  let pagesCentralOnCount = pagesRest > 0 ? pagesCount - pagesRest : pagesCount
  let pagesCentral = []
  for (let i = props.currontPage; i <= pagesCentralOnCount; i++) {
    pagesCentral.push(i)
  }

  return (
    <div key='101' >

      <div key='102' className={classes.users}>
        {usersElements}
      </div>

      <div className={classes.threeColumns}>
        <div>
          <span className={classes.activeButton}
            onClick={(e) => { props.onPageChanged() }}
          >Backward</span>
        </div>
        <div key='103'>
          {
            pages.map(p => {
              return (
                <span key={p} className={props.currontPage === p && classes.activeButton || classes.button}
                  onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
              )
            })
          }
        </div>
        <div key='104'>
          {
            pagesCentral.map(p => {
              return (
                <span key={p} className={props.currontPage === p && classes.activeButton || classes.button}
                  onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
              )
            })
          }
        </div>
        <div>
          <span className={classes.activeButton} >Forward</span>
        </div>
      </div>

    </div >
  )
}

export default Users