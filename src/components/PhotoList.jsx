import React from 'react';
import {useParams, useLocation} from 'react-router-dom';

import Photo from './Photo';

const PhotoList = (props) => {
    const currentLocation = useLocation();
    const currentPath = currentLocation.pathname;
    const {paramQuery} = useParams();

    if (!currentPath.includes("/search")) {
        props.changeQuery(paramQuery);
    }

    const searchResults = props.data;
    let photos;
    if (searchResults.length > 0 && !props.loading) {
        photos = searchResults.map(photo => {
            const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            return <Photo 
                key={photo.id}
                alt={photo.title}
                src={photoUrl} />
        })
    } else if (props.loading) {
        photos = 'Loading...'
    } else {
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