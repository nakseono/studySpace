import React from "react";
import Search from "./Search";

const Nav = ({ handleSearchInputChange, handleSettingButtonClick, user }) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearchInputChange={handleSearchInputChange} />
    </div>

    <span>{user.name}님이 로그인했습니다.</span>
    <button className="btn btn-light" onClick={handleSettingButtonClick}>
      Setting
    </button>
  </nav>
);

export default Nav;
