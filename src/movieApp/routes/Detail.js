import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import DetailList from "../components/DetailList";

// useParams를 사용하면 React Router가 변수의 값을 넘겨준다.

function Detail() {
    const [loading, setLoading] = useState(true)
    const [details, setDetails] = useState([])
    const { id } = useParams()

    const getDetails = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetails(json.data.movie)
        setLoading(false)
        console.log(json)
    }

    useEffect(()=> {
        getDetails()
    },[])

    return (
        <div>
            {loading ? <h1>Loading...</h1> :
                <div>
                    <DetailList
                        title={details.title}
                        description_full={details.description_full}
                        medium_cover_image={details.medium_cover_image}
                    />
                </div>
            }
        </div>
    );
}

export default Detail;