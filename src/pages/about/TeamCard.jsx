import React from 'react'
import './style.css'  


export const TeamCard = (props) => {
  return (
    <div className='card'>
        <div className='profile'>
            <img src={props.img} alt="" />
            <h4 className='name'>{props.name}</h4>
            <h4 className='role'>{props.role}</h4>
            <p>{props.info}</p>
        </div>
    </div>
  )
}
