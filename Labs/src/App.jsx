import React from 'react';
import './App.css'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import BitcoinRates from './components/BitcoinRates'
import { EmojiProvider } from './context/EmojiContext';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
    <BrowserRouter>
      <EmojiProvider>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/bitcoin-rates" element={<BitcoinRates />} />
        </Routes>
      </EmojiProvider>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;