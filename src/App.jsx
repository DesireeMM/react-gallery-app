import { useState } from 'react'
import axios from 'axios';
import {Route, Routes, Navigate} from 'react-router-dom';
import apiKey from './config';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import Components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList'

const App = () => {
  const [photos, setPhotos] = useState([]);

  const fetchData = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        setPhotos(response.data)
        console.log(photos);
      })
  };

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

export default App;
