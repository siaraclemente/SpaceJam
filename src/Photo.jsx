import React from 'react';

const Photo = (props) => {
    return (
        <div className="child">
            <img style={{ width: 300, height: 300 }} src={props.url} />
        </div>
    )
}

export default Photo;