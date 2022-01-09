import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="content-box photo-box">
        <h1>Rachel & Ryan</h1>
        <p className="subtitle">(are getting married)</p>
        <p className="detail">July 9, 2022</p>
        <p className="detail">Seattle, Washington</p>
      </div>
      <div className="content-box info-box">
        <h2>Information & RSVP</h2>
        <hr className="section-divider" />
        <p style={{maxWidth: '500px', margin: 'auto', padding: '10px'}}>
          We're excited for you to join us for our small (but mighty!) wedding in Seattle. We hope this site gives you all the info you need! Please let us know if you can make it by <b>March 1st, 2022</b>.
        </p>
        <p style={{marginTop: 0, marginBottom: '30px'}}><i>—Rachel & Ryan</i></p>
        <a className="rsvp-button"
          href="https://forms.gle/qVkxDgTE9G9YCZN89"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to RSVP
        </a>
        <div className="info-details">
          <h3>What you need to know</h3>
          <p><b>When:</b> July 9th, 2022, at 4pm</p>
          <p><b>Venue:</b> Dunn Gardens (<a href="https://goo.gl/maps/ZXWKUBVEZFrzbVe59" target="_blank" rel="noopener noreferrer">open in Google Maps</a>)</p>
          <div style={{display: 'flex', flexWrap: 'wrap-reverse'}}>
            <div style={{flex: 1}}>
              <img 
                src="https://user-images.githubusercontent.com/10540084/148698686-01c7011c-e766-40c0-9228-b4f54706ceb7.jpeg"
                style={{objectFit: 'contain', width: '100%', height: 'auto', minWidth: '250px'}}
              />
            </div>
            <div style={{flex: 1, minWidth: '300px', padding: '0 15px' }}>
              <p style={{marginTop: 0}}>Both the ceremony and reception will be held at Dunn Gardens, a historic garden 10 miles north of downtown Seattle.</p>
              <p>
                <i>Parking:</i> there is only a small (8 car) parking lot inside the Gardens. However, 
                street parking is available in the neighborhood outside the entrance.
              </p>
            </div>
          </div>
          <p><b>Refreshments:</b> Dinner & Drinks</p>
          <div style={{padding: '0 15px'}}>
            <p>It's pizza night, baby! Veraci Pizza will be on-site, cooking pizzas in a woodfired oven.</p>
            <p>Beer & wine will also be served.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
