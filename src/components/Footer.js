import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../context/userContext";

const Footer = (props) => {
  const { userData } = useContext(userContext);

  return (
    <div
      style={{
        backgroundColor: "#bebeff",
        width: "100%",
        padding: "16px",
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      {userData && (
        <div>This is the footer and the user name is: {userData.name}</div>
      )}
    </div>
  );
};

export default Footer;
