import React from 'react';
import {useLocation} from 'react-router-dom';

// import components
import Photo from './Photo';

const PhotoList = (props) => {
    // declare hooks
    const currentLocation = useLocation();
    const currentPath = currentLocation.pathname;

    // if the url does not include search, update query to url param
    if (!currentPath.includes("search")) {
        props.changeQuery(currentPath);
    }

    const searchResults = props.data;
    let photos;
    if (searchResults.length > 0 && !props.loading) {
        // iterate over response data and create Photo array
        photos = searchResults.map(photo => {
            const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            return <Photo 
                key={photo.id}
                alt={photo.title}
                src={photoUrl} />
        })
    } else if (props.loading) {
        // display loading text while waiting for response
        photos = 'Loading...'
    } else {
        // display friendly message when there are no search results
        photos = 'No results found'
    }

    return (
        <div className="photo-container">
        <h2>{props.title} Results</h2>
        <ul>
            {photos}
        </ul>
        </div>
    )
};

export default PhotoList;