// components/TrackPlayer.tsx
type TrackPlayerProps = {
  spotifyId?: string;
  youtubeId?: string;
  youtubeStart?: number;
  youtubeEnd?: number;
};

export default function TrackPlayer({ spotifyId, youtubeId, youtubeStart, youtubeEnd }: TrackPlayerProps) {
  if (spotifyId) {
    return (
      <iframe
        src={`https://open.spotify.com/embed/track/${spotifyId}`}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ borderRadius: '10px', marginTop: '1rem' }}
      ></iframe>
    );
  }

  if (youtubeId) {
    return (
      <iframe
        width="100%"
        height="80"
        src={`https://www.youtube.com/embed/${youtubeId}?start=${youtubeStart}&end=${youtubeEnd}&autoplay=0&controls=1`}
        title="YouTube fragmento"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: '10px', marginTop: '1rem' }}
      ></iframe>
    );
  }

  return null;
}
