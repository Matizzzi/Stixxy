// components/Footer.tsx
import styled from 'styled-components';
import { FaInstagram, FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: linear-gradient(to top, #000000, #1a0d1a);
  padding: 3rem 2rem;
  text-align: center;
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
      radial-gradient(circle at 20% 80%, rgba(255, 0, 255, 0.05) 0%, transparent 40%);
    pointer-events: none;
  }
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: #bbb;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #ff00ff;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  color: #888;
  font-size: 0.9rem;
  margin: 0;
  letter-spacing: 1px;

  strong {
    color: #ff00ff;
    font-weight: 600;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const LegalLink = styled.a`
  color: #666;
  font-size: 0.8rem;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    color: #ff00ff;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Content>
        <SocialLinks>
          <SocialLink href="https://www.instagram.com/stixxy.glam/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </SocialLink>
          <SocialLink href="https://youtube.com/channel/UCQaEIQhdnpFDuNSPLSlGBZw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube />
          </SocialLink>
          <SocialLink href="https://open.spotify.com/intl-es/artist/3L7AF0f57EByjqvZmi8PbR" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <FaSpotify />
          </SocialLink>
          <SocialLink href="https://tiktok.com/@stixxy.glam" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok />
          </SocialLink>
        </SocialLinks>

        <Copyright>
          © 2025 <strong>STIXXY</strong> - Todos los derechos reservados
        </Copyright>

        <LegalLinks>
          <LegalLink href="/politica-privacidad">Política de Privacidad</LegalLink>
          <LegalLink href="/terminos-servicio">Términos de Servicio</LegalLink>
          <LegalLink href="/contacto">Contacto</LegalLink>
        </LegalLinks>
      </Content>
    </FooterWrapper>
  );
}