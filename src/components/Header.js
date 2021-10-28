import React from "react";
import UserInfoComponent from "./UserInfoComponent";

const Header = (props) => {
  return (
    <div
      style={{
        backgroundColor: "#bebeff",
        width: "100%",
        padding: "16px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>Logo</div>
      <div>
        <UserInfoComponent />
      </div>
    </div>
  );
};

export default Header;
