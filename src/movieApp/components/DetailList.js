import React from 'react';

function DetailList({title, description_full, medium_cover_image}) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={medium_cover_image} alt={title} />
            <p>{description_full}</p>
        </div>
    );
}

export default DetailList;