import logo from './logo.svg';
import img2 from './marwa.jpg';
import './App.css';
import FullName from './Components/FullName';
import Adress from './Components/Adress';

function App() {
  return (
<section>
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="card profile-card-1">
          <img src="https://images.pexels.com/photos/946351/pexels-photo-946351.jpeg?w=500&h=650&auto=compress&cs=tinysrgb" alt="profile-sample1" className="background" />
          <img src={img2} alt="profile-image" className="profile" />
          <div className="card-content">
            <h2><FullName/></h2>
            <h2><Adress/></h2>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

  );
}

export default App;
