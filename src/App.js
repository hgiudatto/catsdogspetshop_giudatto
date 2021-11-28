import React from 'react'
import { ThemeProvider } from '@emotion/react';
import Navbar from './components/Navbar';
import theme from './utils/theme';
import ItemListContainer from './components/ItemListContainer';

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <ItemListContainer greeting="Hello User" />
    </ThemeProvider>
  )
}

export default App
