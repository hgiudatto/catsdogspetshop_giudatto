import React from 'react'
import { ThemeProvider } from '@emotion/react';
import Navbar from './components/Navbar/Navbar';
import theme from './utils/theme';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  )
}

export default App
