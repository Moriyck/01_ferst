import React from 'react'

class ProfilStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusCnage = (ref) => {
        this.setState({
            status: ref.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status)
            this.setState({
                status: this.props.status
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
                        <span onDoubleClick={this.activateEditMode}>{this.state.status || '-Add your status-'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input
                            onChange={this.onStatusCnage}
                            autoFocus={true}
                            size="100"
                            onBlur={this.deActivateEditMode}
                            value={this.state.status}
                            placeholder={this.props.status}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfilStatus