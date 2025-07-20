// App.tsx
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import Header from './components/Header';
import Hero from './components/Hero';
import MediaSection from './components/Media';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;