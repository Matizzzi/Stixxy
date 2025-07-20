// components/Media.tsx
import styled, { keyframes } from 'styled-components';
import { FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa';

// Definición de tipos
type PlatformLinkProps = {
  $platform: 'youtube' | 'spotify' | 'tiktok';
  href: string;
  target: string;
  rel: string;
  'aria-label': string;
  children: React.ReactNode;
};

type SocialLinkProps = {
  href: string;
  target: string;
  rel: string;
  children: React.ReactNode;
};

// Animaciones
const neonPulse = keyframes`
  0%, 100% { box-shadow: 0 0 5px rgba(255, 0, 255, 0.7); }
  50% { box-shadow: 0 0 20px rgba(255, 0, 255, 0.9); }
`;

const glow = keyframes`
  0% { text-shadow: 0 0 5px rgba(255, 0, 255, 0.5); }
  100% { text-shadow: 0 0 15px rgba(255, 0, 255, 0.9); }
`;

// Estilos responsivos
const Section = styled.section`
  padding: 4rem 1rem;
  background: 
    linear-gradient(to bottom, #000000, #1a0d1a),
    radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.15) 0%, transparent 30%),
    radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.15) 0%, transparent 30%);
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 6rem 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M30,30 Q50,10 70,30 T90,50 Q70,70 50,90 T30,70 Q10,50 30,30 Z" fill="none" stroke="rgba(255,0,255,0.03)" stroke-width="1"/></svg>');
    background-size: 200px 200px;
    opacity: 0.3;
    z-index: -1;
  }
`;

const Title = styled.h2`
  font-size: clamp(2rem, 8vw, 4rem);
  font-family: 'Bebas Neue', sans-serif;
  color: transparent;
  text-align: center;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(to right, #ff00ff, #ff8a00);
  -webkit-background-clip: text;
  background-clip: text;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
  animation: ${glow} 2s ease-in-out infinite alternate;

  &::before, &::after {
    content: '✧';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #ff00ff;
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  &::before {
    left: -0.5rem;
    @media (min-width: 768px) {
      left: -1rem;
    }
  }

  &::after {
    right: -0.5rem;
    @media (min-width: 768px) {
      right: -1rem;
    }
  }
`;

const AlbumInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  color: #ddd;
  font-size: 1rem;
  font-family: 'Arial', sans-serif;
  letter-spacing: 1px;
  position: relative;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 3rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, transparent, #ff00ff, transparent);

    @media (min-width: 768px) {
      width: 100px;
    }
  }

  strong {
    color: #ff8a00;
    font-weight: 600;
    text-shadow: 0 0 10px rgba(255, 138, 0, 0.5);
  }
`;

const TrackList = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const TrackItem = styled.div`
  background: rgba(20, 20, 20, 0.8);
  border-left: 3px solid #ff00ff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);
  border-radius: 0 8px 8px 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    padding: 1.5rem;
    border-left-width: 4px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:hover {
    background: rgba(30, 30, 30, 0.9);
    transform: translateX(3px);
    box-shadow: 0 8px 20px rgba(255, 0, 255, 0.2);

    @media (min-width: 768px) {
      transform: translateX(5px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent 65%, rgba(255, 0, 255, 0.05) 100%);
    pointer-events: none;
  }
`;

const TrackHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.8rem;

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }
`;

const TrackNumber = styled.span`
  color: #ff00ff;
  font-weight: bold;
  font-size: 1.2rem;
  min-width: 30px;
  text-shadow: 0 0 8px rgba(255, 0, 255, 0.7);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    min-width: 40px;
  }
`;

const TrackTitle = styled.h3`
  font-size: 1.3rem;
  color: white;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  flex-grow: 1;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
`;

const TrackPlays = styled.span`
  color: #ff8a00;
  font-size: 0.9rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  align-self: flex-start;

  @media (min-width: 480px) {
    align-self: center;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.3rem 0.8rem;
  }

  &::before {
    content: '▶';
    font-size: 0.7rem;
    color: #ff00ff;

    @media (min-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const PlayerContainer = styled.div`
  width: 100%;
  height: 80px;
  margin: 0.8rem 0;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    height: 100px;
    margin: 1rem 0;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }

  &:hover {
    box-shadow: 0 5px 15px rgba(255, 0, 255, 0.4);

    @media (min-width: 768px) {
      box-shadow: 0 8px 20px rgba(255, 0, 255, 0.4);
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const PlatformLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 0.8rem;

  @media (min-width: 768px) {
    gap: 1rem;
    margin-top: 1rem;
  }
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
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(30, 30, 30, 0.8);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    font-size: 1.5rem;
    width: 45px;
    height: 45px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ $platform }) => 
      $platform === 'youtube' ? 'rgba(255, 0, 0, 0.1)' : 
      $platform === 'spotify' ? 'rgba(29, 185, 84, 0.1)' :
      'rgba(0, 0, 0, 0.1)'};
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: scale(1.1);
    color: ${({ $platform }) => 
      $platform === 'youtube' ? '#FF0000' : 
      $platform === 'spotify' ? '#1DB954' :
      '#000000'};
    
    &::before {
      transform: scale(1);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 3rem;
  flex-wrap: wrap;

  @media (min-width: 480px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
    margin-top: 4rem;
  }
`;

const SocialLink = styled.a.attrs<SocialLinkProps>(props => ({
  href: props.href,
  target: props.target,
  rel: props.rel
}))<SocialLinkProps>`
  color: #bbb;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  background: rgba(30, 30, 30, 0.7);
  border: 1px solid rgba(255, 0, 255, 0.3);
  animation: ${neonPulse} 3s infinite;

  @media (min-width: 768px) {
    font-size: 1.8rem;
    gap: 0.8rem;
    padding: 0.8rem 1.5rem;
    border-radius: 30px;
  }

  &:hover {
    color: #fff;
    transform: translateY(-3px);
    background: rgba(255, 0, 255, 0.1);
    box-shadow: 0 3px 10px rgba(255, 0, 255, 0.3);
    animation: none;

    @media (min-width: 768px) {
      transform: translateY(-5px);
      box-shadow: 0 5px 15px rgba(255, 0, 255, 0.3);
    }
    
    span {
      color: ${(props) => {
        if (props.href.includes('youtube')) return '#FF0000';
        if (props.href.includes('spotify')) return '#1DB954';
        if (props.href.includes('tiktok')) return '#000000';
        return '#ff00ff';
      }};
    }
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    color: #ddd;
    transition: color 0.3s ease;

    @media (min-width: 768px) {
      font-size: 1.2rem;
      letter-spacing: 1px;
    }
  }
`;
const epTracks = [
  {
    number: '01',
    title: 'Got No Fear',
    plays: '734 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=0s',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/1mkRne5x8dJQWoVTuRwUwS',
    spotifyUrl: 'https://open.spotify.com/track/1mkRne5x8dJQWoVTuRwUwS',
  },
  {
    number: '02',
    title: 'Screaming',
    plays: '756 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=180s',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/0ISIxH3tFus14TnDTLyTrS',
    spotifyUrl: 'https://open.spotify.com/track/0ISIxH3tFus14TnDTLyTrS',
  },
  {
    number: '03',
    title: 'Hold on Tight to the Night',
    plays: '1.1 K reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=360s',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/3VXWa1W8lVTkSsm4wgfNfE',
    spotifyUrl: 'https://open.spotify.com/track/3VXWa1W8lVTkSsm4wgfNfE',
  },
  {
    number: '04',
    title: 'To the Top',
    plays: '716 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=540s',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/2Vvtqy8LfHqw2bvUIhoszi',
    spotifyUrl: 'https://open.spotify.com/track/2Vvtqy8LfHqw2bvUIhoszi',
  },
  {
    number: '05',
    title: 'Take You Tonight',
    plays: '661 reproducciones',
    youtubeUrl: 'https://music.youtube.com/playlist?list=OLAK5uy_mMFlgHKQdqUktyDJBbgumv78hztmezq7c&t=720s',
    spotifyEmbedUrl: 'https://open.spotify.com/embed/track/3kzOFEEpDDStCOjrPEds2a',
    spotifyUrl: 'https://open.spotify.com/track/3kzOFEEpDDStCOjrPEds2a',
  },
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
            <TrackHeader>
              <TrackNumber>{track.number}</TrackNumber>
              <TrackTitle>{track.title}</TrackTitle>
              <TrackPlays>{track.plays}</TrackPlays>
            </TrackHeader>
            
            <PlayerContainer>
              <iframe 
                src={track.spotifyEmbedUrl}
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                allowFullScreen 
                loading="lazy"
                title={`Spotify preview: ${track.title}`}
              />
            </PlayerContainer>
            
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