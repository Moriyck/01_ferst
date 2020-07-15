import React from 'react'
import classes from './Users.module.css'
import UsersItem from './UsersItem'

const Users = (props) => {
 
  let usersElements = props.users.map(f => <UsersItem

    nameMy={props.nameMy}
    id={f.id}
    follow={f.doc.follow}
    revFollow={f.doc.revFollow}
    nameMyFollow={f.doc.nameMy}
    rev={f.doc._rev}
    status={f.doc.status}
    avatar={f.doc.avatar}
    name={f.doc.name}
    country={f.doc.country}
    city={f.doc.city}
    doc={f.doc}
    changeToFollow={props.changeToFollow}
    changeToUnFollow={props.changeToUnFollow}
    followingInProgress={props.followingInProgress}
    totalIsFetchinProgress={props.totalIsFetchinProgress}
    followThunk={props.followThunk}
    followUnThunk={props.followUnThunk}
  />)

  let pageesCount = Math.ceil(props.totalPageCount / props.pageSaze)
  let pages = []
  for (let i = 1; i <= pageesCount; i++) {
    pages.push(i)
  }

  return (
    <div>

      <div className={classes.users}>
        {usersElements}
      </div>

      <div>
        {
          pages.map(p => {
            return <span className={props.currontPage === p && classes.selectedPage}
              onClick={(e) => { props.onPageChanged(p) }}> {p} |</span>
          })
        }
      </div>

    </div>
  )
}

export default Users