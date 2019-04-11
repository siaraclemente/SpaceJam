import React from 'react';

const Photo = (props) => {
    return (
        <div className="child">
            <img style={{ width: 300, height: 300 }} src={props.url} alt="APOD" />
        </div>
    )
}

export default Photo;