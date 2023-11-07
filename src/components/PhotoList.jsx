import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

// import components
import Photo from './Photo';

const PhotoList = (props) => {
    // declare hooks
    const {query} = useParams()

    useEffect(() => {
        if (query) {
            props.changeQuery(query);
        } else {
            props.changeQuery(props.title);
        }
    }, [query, props.title]);

    // get search results from props
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
        return (
            <div className="photo-container">
                <h2>No Results Found</h2>
                <p>Sorry, your search did not yield any results.</p>
            </div>
        )
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