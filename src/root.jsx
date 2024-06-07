import React, { useRef } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Label from "./components/Label/Label";

export default function Root() {
  const [page, setPage] =useState("1")
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res) => res.json())
      .then((res) => setUsers(res.data));
  }, [page]);
  return (
    <>
    <title>Home | Users List</title>
    <Label />
    <div className="users-page">
      {users.map((user, index) => (
        <Card
          avatar={user.avatar}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          id={user.id}
          key={index}
        />
      ))}
    </div>
    <div className="footer">
      <button className="btn1" onClick={() => setPage("1")}>1</button>
      <button className="btn2" onClick={() => setPage("2")}>2</button>
    </div>
    </>
  );
}
