import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { useState } from 'react';
import { Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Catalog from '../../features/catalog/Catalog';
import ProductDetails from '../../features/catalog/ProductDetails';
import ContactPage from '../../features/contact/Contact';
import HomePage from '../../features/home/HomePage';
import SandboxPage from '../../features/sandbox/SandboxPage';
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
      <ToastContainer position='bottom-right' theme='colored' hideProgressBar />
      <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
      <Container>
        <Route path='/' component={HomePage} exact />
        <Route path='/catalog' component={Catalog} exact />
        <Route path='/catalog/:id' component={ProductDetails} exact />
        <Route path='/sandbox' component={SandboxPage} exact />
        <Route path='/contact' component={ContactPage} exact />
      </Container>
    </ThemeProvider>
  );
}

export default App;
