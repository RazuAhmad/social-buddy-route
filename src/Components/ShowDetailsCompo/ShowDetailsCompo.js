import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ShowDetailsCompo = (props) => {
  const { detailsId } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${detailsId}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);
  const { id, title, body } = details;
  return (
    <div>
      <h2>This is show details component of {detailsId}.</h2>
      <h3>Title: {title}</h3>
      <h3>Body: {body}</h3>
    </div>
  );
};

export default ShowDetailsCompo;
