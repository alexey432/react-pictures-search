import React from 'react';
import './ImageList.css';

// Components 
import ImageCard from './ImageCard';


const ImageList = (props) => {
    
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image}/>; //key only to root element!
    })
    
    return (
        <div className="image-list">{images}</div>
    )
};

export default ImageList;