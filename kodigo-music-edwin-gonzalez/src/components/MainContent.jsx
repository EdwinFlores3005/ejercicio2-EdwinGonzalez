import { useEffect, useState } from "react";
import './components.css'

export default function MainContent() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const url = "https://itunes.apple.com/search?term=taylor+swift&entity=song&limit=50";
      const response = await fetch(url);
      const data = await response.json();
      setSongs(data.results);
    };

    fetchSongs();
  }, []); // empty dependency array → runs once on mount

  return (
    <>
    <div className="container">
      <h2 className="mb-4">Kodigo Music</h2>
      <div className="row">
        {songs.map((song) => (
          <div className="d-flex col-6" key={song.trackId}>
            <div className="song-card">
              <img
                src={song.artworkUrl100}
                alt={song.trackName}
                className="song-card-img"
              />
              </div>
              <div className="song-card">
              <p>{song.trackName}</p>
              <p>{song.collectionName}</p>
              <audio controls src={song.previewUrl}></audio>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}