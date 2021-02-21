import './App.css';
import VideoCard from './VideoCard';


function App() {
  return (
    <div className="app">
      <div className="app__top">
        {/* image at top logo */}
        <img className="app__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
        alt="logo"
        />
        <h1>Reels</h1>
        {/* Reels text */}
      </div>
      <div className="app__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        
        {/* video container */}
      </div>
      
    </div>
  );
}

export default App;
