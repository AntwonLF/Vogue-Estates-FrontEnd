import './Location.css';
import miamiImage from '../../assets/Miami.png'

const Location = () => {
    
    return (
      <div className="location-container">
        <h1 className="location-title">What sets Vogue Estateś apart is the size of the homes, unique luxury tropical villas that are designed with the space, details, and amenities!</h1>
        <div className="image-wrapper">
          <img src={miamiImage} alt="Luxury homes" className="location-image" />
        </div>
      </div>
    );
  };
  
  export default Location;