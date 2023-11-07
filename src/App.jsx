import { useState, useEffect } from 'react'
import axios from 'axios';
import {Route, Routes, Navigate} from 'react-router-dom';
import apiKey from './config';
import './App.css'

// import Components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList'

const App = () => {
  const [query, setQuery] = useState("cats");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    let activeFetch = true;

    fetchData(query)

    return () => {activeFetch = false}
  }, [query])

  const fetchData = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        setPhotos(response.data.photos.photo);
      })
      .catch((error) => {
        console.log("An error occurred", error);
      })
  };

  const handleQueryChange = (query) => {
    setQuery(query);
  }

  return (
    <>
      <Search changeQuery={handleQueryChange}/>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />}/>
        <Route path="/search/:query" element={<PhotoList data={photos} title={query}/>} />
      </Routes>
    </>
  )
}

export default App;
