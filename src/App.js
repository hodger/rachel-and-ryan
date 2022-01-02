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
        <a className="rsvp-button"
          href="https://forms.gle/qVkxDgTE9G9YCZN89"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to RSVP
        </a>
        <div className="info-details">
          <h3>What you need to know</h3>
          <p>Venue: <a href="https://goo.gl/maps/ZXWKUBVEZFrzbVe59" target="_blank" rel="noopener noreferrer">Dunn Gardens</a></p>
          <p>When: July 9th, 2022, at 4pm</p>
          <div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.772259095498!2d-122.36495178455493!3d47.727669087600155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549016d2d6136c8f%3A0xf73beef725e46743!2sDunn%20Gardens!5e0!3m2!1sen!2sus!4v1641152300120!5m2!1sen!2sus"
              width="400" 
              height="300" 
              allowFullScreen=""
              loading="lazy"
              className="google-map">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
