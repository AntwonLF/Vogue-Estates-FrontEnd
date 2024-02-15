import React from 'react'
import '../Team/Team.css';

const Team = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img src="https://i.imgur.com/8n4aky6.jpg" alt="Aldiana" style={{ width: '50%', display: 'block', margin: 'auto' }} />
          <div className="container">
            <h2>Aldiana Hot</h2>
            <p className="title">Founder/agent</p>
            <p>Made this company with their blood, sweat, and tears</p>
            <p>AldianaH@vogueestates.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="https://i.imgur.com/0p6pZFY.jpg" alt="Lesley" style={{ width: '52%', display: 'block', margin: 'auto' }} />
          <div className="container">
            <h2>Lesley Rotanto</h2>
            <p className="title">CEO/agent</p>
            <p>Will find you the flashiest house in Miami no questions asked</p>
            <p>LesleyR@vogueestates.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="https://i.imgur.com/VNVKkmU.jpg" alt="Antwon" style={{ width: '50%', display: 'block', margin: 'auto' }} />
          <div className="container">
            <h2>Antwon Frager</h2>
            <p className="title">Assistant to the regional Manger</p>
            <p>Fact, will find you the best house you've seen in FL</p>
            <p>AntwonF@vogueestates.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img src="https://i.imgur.com/DIKevNg.jpg" alt="Wyatt" style={{ width: '50%', display: 'block', margin: 'auto' }} />
          <div className="container">
            <h2>Wyatt Smith</h2>
            <p className="title">Intern</p>
            <p>Is new here. BUT will do their best to get you an amazing home</p>
            <p>WyattS@vogueestates.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
