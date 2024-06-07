import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './style.module.css'
export default function User(props) {
    const { id } = useParams() 
    const [user, setUser] = useState({})
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
        .then((res) => res.json())
        .then((res) => setUser(res.data));
    },[])
  return (
    <>
    <title>Profile | Users List</title>
    <div className={style.header}>
      <h1>User Profile</h1>
    </div>
    <div className={style.container}>
      <div className={style.image}>
        <img src={user.avatar}></img>
      </div>
      <div className={style.info}>
        <h3>{user.first_name +" "+user.last_name}</h3>
        <p>{user.email}</p>
        <Link className={style.returner} to={"../"}>Back to home</Link>
      </div>
    </div>
    </>
  )
}
