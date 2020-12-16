import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Person(props) {
  const { personId } = props.match.params;
  const url = `https://api.github.com/users/${personId}`
  const [person, setPerson] = useState({});

  useEffect(() => {
    axios.get(url).then(response => {
      setPerson(response.data)
    });
  }, [])

  const dataExists = Object.keys(person).length > 0;
  const showImage = dataExists && person.avatar_url;
  const showName = dataExists && person.name;
  const showLocation = dataExists && person.location;

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div class="header"><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>{'< Back'}</Link><p>Home</p><p></p></div>
      <div class="page" >
        <div class="card">
          <div>
            {showImage && <img src={person.avatar_url} alt="avatar" class='avatar' />}
          </div>
          <div class="data-container">
            {showName && <div style={{ fontWeight: 'bold' }}>{person.name}</div>}
            {showLocation && <div style={{ color: 'grey' }}>{person.location}</div>}
          </div>
        </div>
      </div>
    </div>
  )
}
