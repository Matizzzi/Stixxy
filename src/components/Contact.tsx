// components/Contact.tsx
import styled from 'styled-components';
import { FaPaperPlane, FaYoutube, FaSpotify, FaTiktok } from 'react-icons/fa';

// Estilos modernos con toque rockero
const Section = styled.section`
  padding: 6rem 2rem;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-family: 'Bebas Neue', sans-serif;
  color: #fff;
  text-align: center;
  margin-bottom: 4rem;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #ff00ff, #e60073);
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem;
  background: #111;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(255, 0, 255, 0.1);
  border: 1px solid #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 0.8rem;
  color: #ddd;
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  background: #1a1a1a;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ff00ff;
    background: #222;
  }

  &::placeholder {
    color: #555;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1.2rem;
  background: #1a1a1a;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 1rem;
  min-height: 180px;
  resize: none;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid #ff00ff;
    background: #222;
  }

  &::placeholder {
    color: #555;
  }
`;

const SubmitButton = styled.button`
  background: #000;
  color: #fff;
  border: 2px solid #ff00ff;
  padding: 1.3rem 2.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 0, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover {
    background: rgba(255, 0, 255, 0.1);
    letter-spacing: 3px;

    &::before {
      left: 100%;
    }
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-top: 4rem;
`;

const SocialLink = styled.a`
  color: #777;
  font-size: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  &:hover {
    color: #ff00ff;
    transform: translateY(-5px);
  }

  span {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    color: #aaa;
    font-weight: 300;
    letter-spacing: 1px;
  }

  &:hover span {
    color: #fff;
  }
`;

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica para enviar el formulario
    alert('Mensaje enviado! Gracias por contactar a STIXXY');
  };

  return (
    <Section id="contacto">
      <Title>Contáctanos</Title>
      
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLabel>Nombre</InputLabel>
            <Input type="text" placeholder="Tu nombre" required />
          </InputGroup>
          
          <InputGroup>
            <InputLabel>Email</InputLabel>
            <Input type="email" placeholder="tu@email.com" required />
          </InputGroup>
          
          <InputGroup>
            <InputLabel>Mensaje</InputLabel>
            <TextArea placeholder="¿Qué nos quieres decir?" required />
          </InputGroup>
          
          <SubmitButton type="submit">
            <FaPaperPlane /> Enviar
          </SubmitButton>
        </Form>
      </FormContainer>

      <SocialLinks>
        <SocialLink href="https://www.youtube.com/channel/UCQaEIQhdnpFDuNSPLSlGBZw" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
          <span>YouTube</span>
        </SocialLink>
        <SocialLink href="https://open.spotify.com/intl-es/artist/3L7AF0f57EByjqvZmi8PbR?si=h01aP9uYQniw7Q6_kM_vig" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
          <FaSpotify />
          <span>Spotify</span>
        </SocialLink>
        <SocialLink href="https://www.tiktok.com/@stixxy.glam" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
          <FaTiktok />
          <span>TikTok</span>
        </SocialLink>
      </SocialLinks>
    </Section>
  );
}