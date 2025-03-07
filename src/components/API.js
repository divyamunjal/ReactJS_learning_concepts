import React, { useEffect, useState } from "react";

const API = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            setData(json)
        });
    };
    getData();
  }, []);
  return (
    <div className="container mt-5">
      <h1 className="text-primary">List Example</h1>
      <ul>
        {data.map((value, key) => {
          return <li key={key}>{value.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default API;
