import React from "react";

export default function User(props) {
  return (
    <h1
      onClick={() => {
        console.log(props);
      }}
    >
      User
    </h1>
  );
}
