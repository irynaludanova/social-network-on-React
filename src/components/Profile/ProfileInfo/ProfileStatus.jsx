import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: "WoW",
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
    this.state.editMode = true;
  };
  deActivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.state.editMode = true;
  };
  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}

        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={this.deActivateEditMode.bind(this)}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}
export default ProfileStatus;
