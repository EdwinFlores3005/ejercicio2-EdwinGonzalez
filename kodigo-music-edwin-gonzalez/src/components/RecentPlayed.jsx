export default function RecentPlayed({ recent }) {
  return (
    <div>
      <h3>Recently Played</h3>
      {recent.length === 0 && <p>No recent songs yet</p>}
      {recent.map((song) => (
        <div key={song.trackId}>
          <img src={song.artworkUrl100} alt={song.trackName} width={50} />
          <p>{song.trackName}</p>
        </div>
      ))}
    </div>
  )
}