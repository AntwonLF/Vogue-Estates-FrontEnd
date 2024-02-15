import React from 'react'
import '../Team/Team.css';
import wyattImage from '../../assets/Wyatt.jpg' 
import aldianaImage from '../../assets/Aldiana.jpg'
import lesleyImage from '../../assets/Lesley.jpg'
import antwonImage from '../../assets/antwon.jpg'

const Team = () => {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <img className="img"src={aldianaImage} alt="Aldiana" style={{ width: '50%', display: 'block', margin: 'auto' }} />
          <div className="container">
            <h2>Aldiana Vogue</h2>
            <p className="title">Founder/agent</p>
            <p>Made this company with their blood, sweat, and tears</p>
            <p>AldianaV@vogueestates.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img className="img" src={lesleyImage} alt="Lesley" style={{ width: '52%', display: 'block', margin: 'auto' }} />
          <div className="container">
            <h2>Lesley Rotonto</h2>
            <p className="title">CEO/agent</p>
            <p>Will find you the flashiest house in Miami no questions asked</p>
            <p>LesleyR@vogueestates.com</p>
            <p><button className="button">Contact</button></p>
          </div>
        </div>
      </div>

      <div className="column">
        <div className="card">
          <img className="img" src={antwonImage} alt="Antwon" style={{ width: '50%', display: 'block', margin: 'auto' }} />
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
          <img className="img" src={wyattImage} alt="Wyatt" style={{ width: '50%', display: 'block', margin: 'auto' }} />
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
