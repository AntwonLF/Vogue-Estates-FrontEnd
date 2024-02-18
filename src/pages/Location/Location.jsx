import './Location.css';
import miamiImage from '../../assets/Miami.png'

const Location = () => {
    
    return (
      <div className="location-container">
        <h1 className="location-title">What sets Vogue Estateś apart is the size of the homes, unique luxury tropical villas that are designed with the space, details, and amenities!</h1>
        <div className="image-wrapper">
          <iframe 
          width="100%" 
          height="600" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight="0" 
          marginWidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3101%20NE%207th%20Ave,%20Miami,%20FL%2033137+(Vouge%20Estates)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps tracker sport</a>
        </iframe>

        </div>
      </div>
    );
  };
  
  export default Location;