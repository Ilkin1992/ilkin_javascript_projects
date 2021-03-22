import React from 'react';
 

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = async () => {
        const selectedSong = song;
        await setCurrentSong(song);
        //Add active state
        const newSongs = songs.map((song) => {
            if(song.id === id) {
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
        if(isPlaying) audioRef.current.play(); 

    };
    return (
        <div onClick={songSelectHandler} className={`library_song ${song.active ? 'selected' : ""}`}>
            <img alt={song.name} src={song.cover} alt="" />
            <div className="song_description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    );
}

export default LibrarySong;