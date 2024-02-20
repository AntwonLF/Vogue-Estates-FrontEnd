import React from 'react';
import '../Team/Team.css';
import wyattImage from '../../assets/Wyatt.jpg';
import aldianaImage from '../../assets/Aldiana.jpg';
import lesleyImage from '../../assets/Lesley.jpg';
import antwonImage from '../../assets/antwon.jpg';

const Team = () => {
  return (
    <div className="team-container"> 
      <div className="row">
        <div className="column">
          <div className="card">
            <img className="img"src={aldianaImage} alt="Aldiana" style={{ width: '50%', display: 'block', margin: 'auto' }} />
            <div className="container">
              <h2>Aldiana Hot</h2>
              <p className="title">Founder/agent</p>
              <p>The visionary behind Vogue Estates, pioneering its inception and guiding its growth with unwavering passion and expertise. She is revered for her innovative approach to luxury real estate, setting the standard for elegance and excellence in the industry. </p>
              <p>AldianaH@vogueestates.com</p>
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
              <p>The backbone of the company, driving its success through her steadfast dedication and invaluable leadership. Without her unwavering commitment and strategic vision, the company would not have achieved its remarkable milestones. </p>
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
              <p className="title">Regional Manger</p>
              <p>Devoted to ensuring a seamless experience for agents, he tirelessly dedicates long hours to his role as Assistant to the Regional Manager. His commitment to efficiency and attention to detail are instrumental in maintaining the smooth operation of daily activities within the region.</p>
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
              <p>Despite being an intern, his contributions have been invaluable, actively assisting in various projects and tasks with enthusiasm and dedication. His eagerness to learn and willingness to take on challenges have significantly enriched the team dynamic</p>
              <p>WyattS@vogueestates.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
