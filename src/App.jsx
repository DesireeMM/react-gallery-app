import { useState } from 'react'
import {Route, Routes, Navigate} from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList'

const App = () => {

  return (
    <>
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />}/>
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </>
  )
}

export default App
