import React, { useEffect, useState } from "react";
import UserDetails from "../UserDetails/UserDetails";

const FetchData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  //   console.log(data);
  return (
    <div>
      {data.map((user) => (
        <UserDetails singleUser={user} key={user.id} />
      ))}
    </div>
  );
};

export default FetchData;
