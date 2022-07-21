import React from 'react';
import Avatar from './Avatar';

export default function Card(props) {
  return (
    <div>
        <div className="card">
            <div className="top">
                <h2 className="name">{props.name}</h2>
                <Avatar img={props.img} />
            </div>
            <div className="bottom">
                <p className="info">{props.consoles}</p>
            </div>
        </div>
    </div>
  )
}
