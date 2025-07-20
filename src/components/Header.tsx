import { FaBars, FaTimes, FaMusic, FaYoutube } from 'react-icons/fa';
import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';

// Animaciones
const neonPulse = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 8px rgba(255, 0, 255, 0.7));
    transform: scale(1);
  }
  50% { 
    filter: drop-shadow(0 0 16px rgba(255, 0, 255, 0.9));
    transform: scale(1.03);
  }
`;

const textGlow = keyframes`
  0%, 100% { text-shadow: 0 0 8px #fff, 0 0 16px #ff00ff; }
  50% { text-shadow: 0 0 12px #fff, 0 0 24px #ff00ff; }
`;

// Estilos principales
const HeaderWrapper = styled.header<{ $scrolled: boolean }>`
  background: ${({ $scrolled }) =>
    $scrolled ? 'rgba(10, 10, 10, 0.98)' : 'rgba(20, 20, 20, 0.85)'};
  border-bottom: ${({ $scrolled }) =>
    $scrolled ? '1px solid rgba(255, 0, 255, 0.6)' : 'none'};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: all 0.4s ease;
  backdrop-filter: blur(${({ $scrolled }) => ($scrolled ? '12px' : '8px')});
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? '0 4px 30px rgba(255, 0, 255, 0.25)' : 'none'};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 10;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const LogoImage = styled.img`
  height: 70px;
  filter: drop-shadow(0 0 12px rgba(255, 0, 255, 0.8));
  animation: ${neonPulse} 3s infinite;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 2rem;
  cursor: pointer;
  text-shadow: 0 0 8px rgba(255, 0, 255, 0.7);
  transition: all 0.3s ease;
  z-index: 10;
  padding: 0.5rem;

  &:hover {
    color: #ff00ff;
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 25px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #eee;
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.4rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: #ff00ff;
    animation: ${textGlow} 2s infinite;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, #ff00ff, #e60073);
    transition: width 0.4s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(20px);
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
`;

const MobileNavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 2.2rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  padding: 1.5rem 0;
  margin: 0.5rem 0;
  transition: all 0.3s ease;
  position: relative;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);

  &:hover {
    color: #ff00ff;
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff00ff, #e60073);
    transition: width 0.4s ease;
  }

  &:hover::after {
    width: 80%;
  }
`;

const CloseMenuButton = styled.button`
  position: absolute;
  top: 25px;
  right: 30px;
  background: none;
  border: none;
  color: #fff;
  font-size: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);

  &:hover {
    color: #ff00ff;
    transform: scale(1.1);
  }
`;

const QuickActions = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 40px;

  @media (max-width: 768px) {
    margin-left: 20px;
    gap: 20px;
  }
`;

const ActionButton = styled.a`
  color: #ddd;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  position: relative;
  text-decoration: none;

  &:hover {
    color: #ff00ff;
    transform: scale(1.2);
  }

  &::before {
    content: attr(title);
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: #fff;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-family: sans-serif;
    opacity: 0;
    transition: opacity 0.3s ease;
    white-space: nowrap;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderWrapper $scrolled={scrolled}>
      <Container>
        <LogoLink href="#inicio">
          <LogoImage src="/logo-removebg-preview.png" alt="STIXXY Logo" />
        </LogoLink>

        <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <Nav>
          <NavLink href="#inicio">INICIO</NavLink>
          <NavLink href="#media">MÚSICA</NavLink>
          <NavLink href="#contacto">CONTACTO</NavLink>
        </Nav>

        <QuickActions>
          <ActionButton
            href="https://open.spotify.com/intl-es/artist/3L7AF0f57EByjqvZmi8PbR?si=k20n4_DkQ825S6wI5csyaA"
            target="_blank"
            rel="noopener noreferrer"
            title="Spotify"
          >
            <FaMusic />
          </ActionButton>
          <ActionButton
            href="https://www.youtube.com/channel/UCQaEIQhdnpFDuNSPLSlGBZw"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube />
          </ActionButton>
        </QuickActions>
      </Container>

      <MobileMenu $isOpen={isMenuOpen}>
        <CloseMenuButton onClick={() => setIsMenuOpen(false)}>
          <FaTimes />
        </CloseMenuButton>

        <MobileNavLink href="#inicio" onClick={() => setIsMenuOpen(false)}>INICIO</MobileNavLink>
        <MobileNavLink href="#media" onClick={() => setIsMenuOpen(false)}>MÚSICA</MobileNavLink>
        <MobileNavLink href="#contacto" onClick={() => setIsMenuOpen(false)}>CONTACTO</MobileNavLink>

        <QuickActions style={{ marginTop: '50px', gap: '40px' }}>
          <ActionButton
            href="https://open.spotify.com/intl-es/artist/3L7AF0f57EByjqvZmi8PbR?si=k20n4_DkQ825S6wI5csyaA"
            target="_blank"
            rel="noopener noreferrer"
            title="Spotify"
          >
            <FaMusic />
          </ActionButton>
          <ActionButton
            href="https://www.youtube.com/channel/UCQaEIQhdnpFDuNSPLSlGBZw"
            target="_blank"
            rel="noopener noreferrer"
            title="YouTube"
          >
            <FaYoutube />
          </ActionButton>
        </QuickActions>
      </MobileMenu>
    </HeaderWrapper>
  );
}
