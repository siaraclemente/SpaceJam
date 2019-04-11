import React from 'react';
import Photo from './Photo';
import './PhotoList.css';

const PhotoList = ({photos}) => {
    photos.forEach((photo, idx) => {
        const arr = photo.url.split(".")
        let index = arr.indexOf("youtube")
        if (index > -1) {
            photos.splice(idx, 1)
        }
    })   

    const photosArray = photos.map((photo, index) => (
        photo.url && <Photo url={photo.url} key={index} /> 
        
        ))     
    
    return (
        <div className="container">
           {photosArray}
        </div>
    )
}

export default PhotoList;