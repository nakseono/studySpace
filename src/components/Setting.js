import React from "react";

class Setting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <div className={this.props.isOpen ? "mdl show" : "mdl"}>
        <div className="mdl-mask" onClick={this.props.handleClose}></div>
        <div className="sidebar">
          <h3>Setting</h3>

          <fieldset>
            <legend>사용자 설정</legend>
            <span>사용자 이름</span>
            <input type="text" value={this.props.user.name} />
          </fieldset>

          <fieldset>
            <legend>일반</legend>
            <label>
              <span>Dark Mode</span>
              <input type="checkbox"></input>
            </label>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Setting;
