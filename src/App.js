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
        <VideoCard 
        channel="kayzmann"
        avatar="https://avatars.githubusercontent.com/u/61081369?s=60&v=4"
        song="Test song - kayzmann"
        url="http://techslides.com/demos/sample-videos/small.ogv"
        likes={800}
        shares={95}
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        
        {/* video container */}
      </div>
      
    </div>
  );
}

export default App;
