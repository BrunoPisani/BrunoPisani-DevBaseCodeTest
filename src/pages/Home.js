import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const topFive = ["GrahamCampbell","fabpot","weierophinney","rkh","josh"];

    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
            <div class="header" ><p></p><p>Home</p><p></p></div>
            <div class="page">
                <h1 style={{width: '100%', backgroundColor:'white', color:'black', margin: '0rem 0rem 0.5rem 0rem'}}>Top 5 GitHub Users</h1>
                <p style={{width: '100%', backgroundColor:'white', color:'black', margin: '0rem 0rem 1rem 0rem'}}>Tap the username to see more information</p>
                <div class="buttons-container">
                    {
                        topFive.map((user, key)=>{
                            return (
                                <Link to={`/person/${user}`} key={key} class="button-link" onClick={()=>{console.log(user);}}>{user}</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}