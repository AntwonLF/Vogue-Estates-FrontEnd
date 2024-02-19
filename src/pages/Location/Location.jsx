import './Location.css';


const Location = () => {
    return (
      <div>
        <div className="container__inner"></div>
      <div style={{ borderTop: "2px solid #000000 ", marginLeft: 20, marginRight: 20 }}></div>
        <div className="location-container">
          <h1 className="location-title">While you visit our office take a stroll and get to know your new neighborhood</h1>
          <div className="image-wrapper">
          <iframe  width="520" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=3101%20NE%207th%20Ave,%20Miami,%20FL%2033137+(Vogue%20Estates)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>

          </div>
        </div>
      </div>
    );
  };
  
  export default Location;