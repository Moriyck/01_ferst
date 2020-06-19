import React from 'react'
import classes from './Friends.module.css'
import FriendsItem from './FriendsItem'

const Friends = (props) => {
  //debugger
  let pageesCount = Math.ceil(props.totalPageCount / props.pageSaze)
  let pages = []
  for (let i = 1; i <= pageesCount; i++) {
    pages.push(i)
  }

  let friendsElements = props.users.map(f => <FriendsItem
    status={f.doc.status}
    follow={f.doc.follow}
    avatar={f.doc.avatar}
    name={f.doc.name}
    id={f.id}
    country={f.doc.country}
    city={f.doc.city}
    changeToFollow={props.changeToFollow}
    changeToUnFollow={props.changeToUnFollow}
  />)

  return (
    <div>

      <div className={classes.friends}>
        {friendsElements}
      </div>

      <div>
        <button>Show more</button>
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

export default Friends