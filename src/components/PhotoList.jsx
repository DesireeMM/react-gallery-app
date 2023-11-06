import React from 'react';

const PhotoList = (props) => {
    const searchResults = props.data;
    let photos;
    if (searchResults.length > 0) {
        photos = results.map(photo => {
            const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
            return <Photo 
                key={photo.id}
                src={photoUrl} />
        })
    } else {
        photos = '<h3>No results</h3>'
    }

    return (
        <div class="photo-container">
        <h2>Results</h2>
        <ul>
            {photos}
        </ul>
        </div>
    )
};

export default PhotoList;