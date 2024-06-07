import React from 'react'
import style from './styler.module.css'
import { Link } from 'react-router-dom'
export default function Card(props) {
  return (
    <div className={style.usercard}>
        <div className={style.userimage}>
            <img src={props.avatar}></img>
        </div>
        <div className={style.info}>
            <h3>{props.first_name+" "+props.last_name}</h3>
            <p>{props.email}</p>
            <Link className={style.button} to={`/${props.id}`}>Read more</Link>
        </div>
    </div>
  )
}
