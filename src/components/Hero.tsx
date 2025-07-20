import styled, { keyframes } from 'styled-components';
import { FaMusic, FaYoutube } from 'react-icons/fa';
import React from 'react';

// Definición de tipos para las props
type GlamButtonProps = {
  $primary?: boolean;
  href: string;
  children: React.ReactNode;
};

// Animaciones
const neonGlow = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 10px rgba(255, 0, 255, 0.7));
    transform: scale(1);
  }
  50% { 
    filter: drop-shadow(0 0 20px rgba(255, 0, 255, 0.9));
    transform: scale(1.02);
  }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Estilos glam
const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  background: 
    linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)),
    url('/1.png') center/cover no-repeat fixed;
  background-attachment: fixed;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      transparent 0%,
      rgba(255, 0, 255, 0.1) 40%,
      rgba(0, 0, 0, 0.9) 100%
    );
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    background-position: center top;
    background-size: cover;
  }

  @media (max-width: 480px) {
    min-height: 100vh;
  }
`;

const LogoContainer = styled.div`
  width: min(90%, 500px);
  margin-bottom: 3rem;
  animation: ${float} 4s ease-in-out infinite;
  z-index: 2;
`;

const BandLogo = styled.img`
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(255, 0, 255, 0.7));

  @media (max-width: 480px) {
    max-height: 30vh;
  }
`;

const MainTitle = styled.h1`
  font-size: clamp(2rem, 7vw, 5rem);
  font-family: 'Bebas Neue', sans-serif;
  text-transform: uppercase;
  letter-spacing: 8px;
  margin: 1rem 0;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.7);
  background: linear-gradient(to right, #fff, #ff00ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  z-index: 2;

  @media (max-width: 768px) {
    letter-spacing: 4px;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #f0f0f0;
  font-family: 'Orbitron', sans-serif;
  margin-top: -1rem;
  z-index: 2;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 2;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const GlamButton = styled.a.attrs<GlamButtonProps>(props => ({
  href: props.href
}))<GlamButtonProps>`
  padding: 1rem 2.5rem;
  background: ${({ $primary }) => ($primary ? 'linear-gradient(45deg, #ff00ff, #e60073)' : 'transparent')};
  color: white;
  border: 2px solid #ff00ff;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  animation: ${neonGlow} 3s infinite;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(255, 0, 255, 0.4);
    animation: none;
  }

  svg {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

const Hero = () => {
  const spotifyLink = "https://open.spotify.com/intl-es/artist/3L7AF0f57EByjqvZmi8PbR?si=DyN4cuhIQDihmYQbEIUgDw";

  return (
    <HeroSection id="hero">
      <LogoContainer>
        <BandLogo 
          src="/WhatsApp_Image_2025-07-19_at_17.56.29-removebg-preview.png" 
          alt="STIXXY"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = '/logo-removebg-preview.png';
          }}
        />
      </LogoContainer>

      <MainTitle>LA REVOLUCIÓN GLAM</MainTitle>
      <SubTitle>STIXXY - SONIDO, ESTILO Y ACTITUD</SubTitle>

      <ActionButtons>
        <GlamButton $primary={true} href={spotifyLink} target="_blank" rel="noopener noreferrer">
          <FaMusic /> ESCUCHA AHORA
        </GlamButton>
        <GlamButton href={spotifyLink} target="_blank" rel="noopener noreferrer">
          <FaYoutube /> SHOWS ANTERIORES
        </GlamButton>
      </ActionButtons>
    </HeroSection>
  );
};

export default Hero;
