// components/Media.tsx
import styled from 'styled-components';
import { FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa';

// Definición de tipos para PlatformLink
type PlatformLinkProps = {
  $platform: 'youtube' | 'spotify' | 'tiktok';
  href: string;
  target: string;
  rel: string;
  'aria-label': string;
  children: React.ReactNode;
};

// Estilos glam-rock
const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(to bottom, #000000, #1a0d1a);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.1) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.1) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-family: 'Bebas Neue', sans-serif;
  color: #ff00ff;
  text-align: center;
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
`;

const AlbumInfo = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  color: #bbb;
  font-size: 1.2rem;

  strong {
    color: #ff00ff;
    font-weight: 600;
  }
`;

const TrackList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TrackItem = styled.div`
  background: rgba(30, 30, 30, 0.7);
  border-left: 4px solid #ff00ff;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);

  &:hover {
    background: rgba(50, 50, 50, 0.7);
    transform: translateX(10px);
    box-shadow: 0 0 20px rgba(255, 0, 255, 0.3);
  }
`;

const TrackNumber = styled.span`
  color: #ff00ff;
  font-weight: bold;
  margin-right: 1rem;
  min-width: 20px;
`;

const TrackInfo = styled.div`
  flex: 1;
`;

const TrackTitle = styled.h3`
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const TrackPlays = styled.p`
  color: #bbb;
  font-size: 0.9rem;
`;

const PlatformLinks = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const PlatformLink = styled.a.attrs<PlatformLinkProps>(props => ({
  href: props.href,
  target: props.target,
  rel: props.rel,
  'aria-label': props['aria-label']
}))<PlatformLinkProps>`
  color: #bbb;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    transform: scale(1.2);
    color: ${({ $platform }) => 
      $platform === 'youtube' ? '#FF0000' : 
      $platform === 'spotify' ? '#1DB954' :
      $platform === 'tiktok' ? '#000000' : '#fff'};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  color: #bbb;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;

  &:hover {
    color: #ff00ff;
    transform: scale(1.1);
  }

  span {
    font-size: 1rem;
  }
`;

// Datos del EP
const epTracks = [
  {
    number: '1',
    title: 'Got No Fear',
    plays: '734 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=0s',
    spotifyUrl: 'https://open.spotify.com/track/[ID_DEL_TRACK_EN_SPOTIFY]'
  },
  {
    number: '2',
    title: 'Screaming',
    plays: '756 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=180s',
    spotifyUrl: 'https://open.spotify.com/track/[ID_DEL_TRACK_EN_SPOTIFY]'
  },
  {
    number: '3',
    title: 'Hold on Tight to the Night',
    plays: '1.1 K reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=360s',
    spotifyUrl: 'https://open.spotify.com/track/[ID_DEL_TRACK_EN_SPOTIFY]'
  },
  {
    number: '4',
    title: 'To the Top',
    plays: '716 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=540s',
    spotifyUrl: 'https://open.spotify.com/track/[ID_DEL_TRACK_EN_SPOTIFY]'
  },
  {
    number: '5',
    title: 'Take You Tonight',
    plays: '661 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=720s',
    spotifyUrl: 'https://open.spotify.com/track/[ID_DEL_TRACK_EN_SPOTIFY]'
  }
];

export default function MediaSection() {
  return (
    <Section id="media">
      <Title>PURELY BLACK EP</Title>
      
      <AlbumInfo>
        <strong>STIXXY</strong> • 5 canciones • 19 minutos • 2024
      </AlbumInfo>

      <TrackList>
        {epTracks.map((track, index) => (
          <TrackItem key={index}>
            <TrackNumber>{track.number}</TrackNumber>
            <TrackInfo>
              <TrackTitle>{track.title}</TrackTitle>
              <TrackPlays>{track.plays}</TrackPlays>
            </TrackInfo>
            <PlatformLinks>
              <PlatformLink 
                href={track.youtubeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                $platform="youtube"
                aria-label={`Escuchar ${track.title} en YouTube`}
              >
                <FaYoutube />
              </PlatformLink>
              <PlatformLink 
                href={track.spotifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                $platform="spotify"
                aria-label={`Escuchar ${track.title} en Spotify`}
              >
                <FaSpotify />
              </PlatformLink>
            </PlatformLinks>
          </TrackItem>
        ))}
      </TrackList>

      <SocialLinks>
        <SocialLink 
          href="https://www.youtube.com/channel/UCQaEIQhdnpFDuNSPLSlGBZw" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaYoutube /> <span>YouTube</span>
        </SocialLink>
        <SocialLink 
          href="https://open.spotify.com/intl-es/artist/3L7AF0f57EByjqvZmi8PbR?si=h01aP9uYQniw7Q6_kM_vig" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaSpotify /> <span>Spotify</span>
        </SocialLink>
        <SocialLink 
          href="https://www.tiktok.com/@stixxy.glam" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTiktok /> <span>TikTok</span>
        </SocialLink>
      </SocialLinks>
    </Section>
  );
}