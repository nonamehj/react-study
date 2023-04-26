import React from "react";
import useFetch from "./useFetch";

const url = `https://api.github.com/users/QuincyLarson`;

const FetchData = () => {
  const { isError, isLoading, data: user } = useFetch(url);
  if (isLoading) {
    return <h2>Loading..</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      <img
        src={avatar_url}
        style={{ width: "100px", borderRadius: "25px" }}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default FetchData;
