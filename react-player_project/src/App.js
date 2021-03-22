import React, {useState, useRef} from 'react';
//Import Styles
import "./styles/app.scss";
import Library from './components/Library'

//Adding components
import Player from './components/Player';
import Song from './components/Song';
import Nav from './components/Nav';
//Import data
import data from "./data";


function App() {
  //State 
  const audioRef = useRef(null);
  const [songs,setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo,setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
});
const [libraryStatus, setLibraryStatus] = useState(false);


const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime: current, duration})
}
const endSongHandler = async () => {
  let currentIndex = songs.findIndex((song) => song.id === currentSong.id); 
  await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  if(isPlaying) audioRef.current.play();
}
  return (
    <div className={`App ${libraryStatus ? 'library_active' : ""}`}>
    <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
    <Song currentSong={currentSong}/>
    <Player 
    setSongInfo = {setSongInfo}
    songInfo = {songInfo}
    audioRef={audioRef}
    setIsPlaying={setIsPlaying}
    isPlaying = {isPlaying}
    currentSong={currentSong}
    songs={songs}
    setCurrentSong={setCurrentSong}
    setSongs={setSongs}
    />
    
    <Library 
    audioRef={audioRef} 
    songs={songs} 
    setCurrentSong={setCurrentSong} 
    isPlaying={isPlaying}
    setSongs={setSongs}
    libraryStatus={libraryStatus}
    />
    <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio} onEnded={endSongHandler}></audio>
    </div>
  );
}



// export default App;
export default App;


