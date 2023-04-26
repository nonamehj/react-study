import React from "react";
import { useState, useEffect } from "react";

const url = `https://api.github.com/users/QuincyLarson`;

const UseEffectBasics5 = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await resp.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, []);
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>There was an error...</h3>;
  }
  const { avatar_url, name, company, bio } = users;
  return (
    <div>
      <h2>UseEffect MultipleReturns FetchData</h2>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h3>{name}</h3>
      <h4>work at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};

export default UseEffectBasics5;
