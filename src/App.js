import React from 'react'
import { ThemeProvider } from '@emotion/react';
import Navbar from './components/Navbar';
import theme from './utils/theme';
import { Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import About from "./components/About";

const App = () => {

  return (

    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hello User" />} />
        <Route path="item/:id" element={<ItemDetailContainer />} />
        <Route path="about" element={<About />} />
      </Routes>
    </ThemeProvider>

  )
}

export default App
