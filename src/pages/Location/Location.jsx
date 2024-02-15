import './Location.css';

const Location = () => {
    const url = 'https://i.imgur.com/UEx371k.png'
    return (
      <div className="location-container">
        <h1 className="location-title">We have numerous luxury homes that can be yours...now!</h1>
        <div className="image-wrapper">
          <img src={url} alt="Luxury homes" className="location-image" />
        </div>
      </div>
    );
  };
  
  export default Location;