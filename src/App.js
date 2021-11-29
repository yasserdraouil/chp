import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <div styleClassName="border:solid 1px black;max-width:100vw">

           <h1 className="title red">Your name here</h1>

           <br/>

                 <img src="/imagelnSrc.jpg" alt=" myimg "/>

           <br/>

                  <img src="/imageLnPublic.jpg"alt="myimg2"/>

        </div>

        <video width="320" height="240" controls>

              <source src="myVideo.mp4" type="video/mp4"/>

        </video>
    </div>
  );
}

export default App;
