import React from "react";

class Setting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: props.user ? props.user.name : ""
    };
  }

  handleChangeName(event) {
    this.setState({
      username: event.target.value
    });
  }

  handleSave() {
    this.props.handleUpdateSetting("currentUser", {
      name: this.state.username
    });
  }

  handleToggleDarkMode(event) {
    this.props.handleUpdateSetting("darkMode", event.target.checked);
  }

  render() {
    return (
      <div className={this.props.isOpen ? "mdl show" : "mdl"}>
        <div className="mdl-mask" onClick={this.props.handleClose}></div>
        <div className="sidebar">
          <h3>Setting</h3>
          <hr />

          <fieldset>
            <legend>사용자 설정</legend>
            <span className="small-margin-right">사용자 이름</span>
            <input
              type="text"
              className="small-margin-right"
              value={this.state.username}
              onChange={this.handleChangeName.bind(this)}
            />
            <button onClick={this.handleSave.bind(this)}>저장</button>
          </fieldset>

          <hr />
          <fieldset>
            <legend>일반</legend>
            <label>
              <input
                type="checkbox"
                className="small-margin-right"
                onChange={this.handleToggleDarkMode.bind(this)}
              ></input>
              <span>Dark Mode</span>
            </label>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Setting;
