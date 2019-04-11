import React from 'react';
import Photo from './Photo';

const PhotoList = (props) => {
    const photosArray = props.photos.map((photoURL) => {
        return <Photo url={photoURL} />
    })

    return (
        <div className="containter">
            {photosArray}
        </div>
    )
}

export default PhotoList;