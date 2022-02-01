import React from "react";
import { Link } from "react-router-dom";

const UserDetails = (props) => {
  const { title, body, id } = props.singleUser;
  console.log(title);
  return (
    <div
      style={{
        width: "320px",
        border: "3px solid red",
        borderRadius: "7px",
        marginBottom: "20px",
      }}
    >
      <h3>title: {title}</h3>
      <h4>Body: {body}</h4>
      <Link to={"/userDetails/" + id}>
        {" "}
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default UserDetails;
