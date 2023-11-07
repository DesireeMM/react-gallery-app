import { useState, useEffect } from 'react'
import axios from 'axios';
import {Route, Routes, Navigate} from 'react-router-dom';
import apiKey from './config';
import './App.css'

// import Components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList'
import NotFound from './components/NotFound';

const App = () => {
  // declare hooks
  const [query, setQuery] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    let activeFetch = true;
    // only run when there is a query
    if (!query) {
      return;
    } else {
      fetchData(query)
    }

    return () => {activeFetch = false}
  }, [query])

  // function to make API call
  const fetchData = (searchQuery) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&per_page=24&format=json&nojsoncallback=1`)
      .then((response) => {
        setPhotos(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log("An error occurred", error);
      })
  };

  // function to update query state
  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  }

  return (
    <>
      <Search changeQuery={handleQueryChange}/>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />}/>
        <Route path="/cats" element={<PhotoList 
          data={photos} 
          title={"cats"} 
          loading={loading} 
          changeQuery={handleQueryChange} />} 
        />
        <Route path="dogs" element={<PhotoList 
          data={photos} 
          title={"dogs"} 
          loading={loading} 
          changeQuery={handleQueryChange} />}
        />
        <Route path="bears" element={<PhotoList 
          data={photos} 
          title={"bears"} 
          loading={loading} 
          changeQuery={handleQueryChange} />}
        />
        <Route path="search/:query" element={<PhotoList
          data={photos} 
          title={query} 
          loading={loading} 
          changeQuery={handleQueryChange} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
