import React, { useState, useEffect } from 'react'

const ProfilStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

useEffect( ()=>{
    setStatus(props.status)
}, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusCnage = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                Status:
            </div>
            {!editMode &&
                <div>
                    <span
                        onDoubleClick={activateEditMode}>{status || '-Add your status-'}
                    </span>
                </div>
            }
            {editMode &&
                <div>
                    <input
                        onChange={onStatusCnage}
                        autoFocus={true}
                        size="100"
                        onBlur={deActivateEditMode}
                        value={status}
                        placeholder={props.status}
                    />
                </div>
            }
        </div>
    )
}

export default ProfilStatus