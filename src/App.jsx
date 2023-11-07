import { useState, useEffect } from 'react'
import axios from 'axios';
import {Route, Routes, Navigate, useLocation} from 'react-router-dom';
import apiKey from './config';
import './App.css'

// import Components
import Search from './components/Search';
import Nav from './components/Nav';
import PhotoList from './components/PhotoList'
import NotFound from './components/NotFound';

const App = () => {
  // declare hooks
  const [query, setQuery] = useState("cats");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("");


  useEffect(() => {
    setLoading(true)
    let activeFetch = true;

    fetchData(query)

    return () => {activeFetch = false}
  }, [query, location])

  // function to make API call
  const fetchData = (query) => {
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
  const handleQueryChange = (query) => {
    setQuery(query);
  }

  // function to update location
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation)
  }

  return (
    <>
      <Search changeQuery={handleQueryChange}/>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />}/>
        <Route path="/cats" element={<PhotoList 
          data={photos} 
          title={query} 
          loading={loading} 
          changeQuery={handleQueryChange}
          changeLocation={handleLocationChange} />} 
        />
        <Route path="dogs" element={<PhotoList 
          data={photos} 
          title={query} 
          loading={loading} 
          changeQuery={handleQueryChange}
          changeLocation={handleLocationChange} />}
        />
        <Route path="computers" element={<PhotoList 
          data={photos} 
          title={query} 
          loading={loading} 
          changeQuery={handleQueryChange}
          changeLocation={handleLocationChange} />}
        />
        <Route path="search/:query" element={<PhotoList
          data={photos} 
          title={query} 
          loading={loading} 
          changeQuery={handleQueryChange}
          changeLocation={handleLocationChange} />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
