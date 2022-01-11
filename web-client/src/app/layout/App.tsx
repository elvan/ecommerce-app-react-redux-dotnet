import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Route } from 'react-router';
import AboutPage from '../../features/about/AboutPage';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/Contact';
import HomePage from '../../features/home/HomePage';
import Header from './Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eee' : '#333',
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route path='/' component={HomePage} exact />
        <Route path='/catalog' component={Catalog} exact />
        <Route path='/catalog/:id' component={ProductDetails} exact />
        <Route path='/about' component={AboutPage} exact />
        <Route path='/contact' component={ContactPage} exact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
