import React, { useEffect, useState } from "react";

const url = `https://api.github.com/users`;

const UseEffectBasics2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // try catch 사용하여 오류 방지 404Error 파일 찾지 못할시 발생하는 에러코드
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>UseEffect Fetch data example</h2>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user, index) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseEffectBasics2;
