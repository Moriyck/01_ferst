import React from 'react'

class ProfilStatus extends React.Component {
    state = {
        editMode: false
    }
activateEditMode = () =>{
    this.setState ({
        editMode: true
    }) 
}
onActivateEditMode = () =>{
    this.setState ({
        editMode: false
    }) 
}
    render() {
        return (
            <div>
                <div>
                    Status:
                </div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.onActivateEditMode} size="100" value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfilStatus;