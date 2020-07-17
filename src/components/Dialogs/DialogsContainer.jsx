import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/Reduser/dialogsReduser'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    nameMy: state.authPage.name
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      let action = updateNewMessageBodyCreator(body)
      dispatch(action)
    },
    sendMessage: () => {
      let action = sendMessageCreator()
      dispatch(action)
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)



export default DialogsContainer