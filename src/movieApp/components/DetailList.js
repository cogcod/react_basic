import React from 'react';

function DetailList({title, description_full, medium_cover_image}) {
    const src = "https://www.naver.com/";

    const onClick = () => {
        window.location.href = `${src}`
    }
    return (
        <div>
            <h2>{title}</h2>
            <img src={medium_cover_image} alt={title} />
            <p>{description_full}</p>
            <button onClick={onClick}>새 페이지 이동 연습</button>
        </div>
    );
}

export default DetailList;