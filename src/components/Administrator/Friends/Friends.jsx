import React from 'react'
import classes from './Friends.module.css'
import FriendsItem from './FriendsItem'

const Friends = (props) => {

  let pageesCount = Math.ceil(props.totalPageCount / props.pageSaze)
  let pages = []
  for (let i = 1; i <= pageesCount; i++) {
    pages.push(i)
  }

  let friendsElements = props.users.map(f => <FriendsItem
  
    id={f.id}
    follow={f.value.follow}
    nameMy={f.value.nameMy}
    revFollow={f.value._rev}
    rev={f.doc._rev}
    status={f.doc.status}
    avatar={f.doc.avatar}
    name={f.doc.name}
    country={f.doc.country}
    city={f.doc.city}
    doc={f.doc}
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