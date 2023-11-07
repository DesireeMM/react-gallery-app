import React from 'react';
import {useParams} from 'react-router-dom';

import Photo from './Photo';

const PhotoList = (props) => {
    const {paramQuery} = useParams();

    const searchResults = props.data;
    let photos;
    if (searchResults.length > 0) {
        photos = searchResults.map(photo => {
            const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            return <Photo 
                key={photo.id}
                alt={photo.title}
                src={photoUrl} />
        })
    } else {
        photos = 'No results'
    }

    return (
        <div class="photo-container">
        <h2>{props.title} Results</h2>
        <ul>
            {photos}
        </ul>
        </div>
    )
};

export default PhotoList;