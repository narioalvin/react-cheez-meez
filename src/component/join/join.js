import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/icons/login.svg';
import './join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="outer-container">
      {/* <a className="login-link" target="_blank" href="/react-cheez-meez">
        Clik here to try it and login with different name but same room.
      </a> */}
      <div className="inner-container">
       <center><img width="150" src={login} alt="login" /></center>

        <h1 className="heading">CheezMeez</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="mt-20">
          <select
            className="room-select"
            onChange={(event) => setRoom(event.target.value)}
          >
            <option default>Select Room</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
            <option value="React">React</option>
          </select>
        </div>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            JOIN ROOM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
