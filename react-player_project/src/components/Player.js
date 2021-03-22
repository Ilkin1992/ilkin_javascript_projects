import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight, faPause,} from '@fortawesome/free-solid-svg-icons';



const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, songInfo, setSongInfo, songs, setCurrentSong, setSongs, }) => {
    //Use Effect    
    useEffect(() => {
        const newSongs = songs.map((song) => {
            if(song.id === currentSong.id) {
                return {
                    ...song, 
                    active: true,  
                }
            } else {
                return {
                    ...song,
                    active: false, 
                }
            }
        });
        setSongs(newSongs);
    },[currentSong])
    //Event handlers
    const playSongHandler = () => {
    if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(!isPlaying);
    } else {
        audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
    }
    //Time Update Function
    
    const getTime = (time) => {
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value});
    }

    const skipTrackHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id); 
    if (direction === 'skip_forward') {
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip_back') {
    if ((currentIndex - 1) % songs.length === -1) {
      await setCurrentSong(songs[songs.length - 1]);
        if(isPlaying) audioRef.current.play();
        return; 
    }
    await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if(isPlaying) audioRef.current.play();
    };
    
    //State

    return (
        <div className="player">
        <div className="time_control">
            <p>{getTime(songInfo.currentTime)}</p>
            <input onChange={dragHandler} min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range"/>
            <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
        </div>
        <div className="play_control">
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip_back')} className="skip_back" size="2x" icon={faAngleLeft}/>
            <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay}/>
            <FontAwesomeIcon onClick={() => skipTrackHandler('skip_forward')} className="skip_forward" size="2x" icon={faAngleRight}/>
        </div>
        </div>
    );
}

export default Player;