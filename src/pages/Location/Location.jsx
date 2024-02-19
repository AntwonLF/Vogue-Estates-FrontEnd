import './Location.css';


const Location = () => {
    return (
      <div>
        <div className="container__inner"></div>
      <div style={{ borderTop: "2px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
        <div className="location-container">
        <h2 className="location-title">As you visit our office, we invite you to leisurely explore and acquaint yourself with the vibrant neighborhood awaiting your discovery.</h2>
        <br></br>
        <br></br>
          <div className="image-wrapper">
          <iframe  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=3101%20NE%207th%20Ave,%20Miami,%20FL%2033137+(Vogue%20Estates)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

          <br></br>
          <br></br>
          <br></br>

          </div>
        </div>
      </div>
    );
  };
  
  export default Location;