import { useParams, Link } from "react-router-dom";

import { useEffect, useState } from "react";

function MovieDetail() {
    const [loading, setLoading] = useState(true);
    const [yt, setYt] = useState(false);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        {(()=> {
            if (movie.yt_trailer_code != "")
            return setYt(true) 
        })()}
    };

    useEffect(()=>{
        getMovie();      
    },[]);
    return ( 
    <div>
        {loading ? (
            <h2>Loading...</h2>
        ) : (
            <div>
                <img src={movie.medium_cover_image} alt="" />
                <h1>
                    {movie.title_long}
                </h1>
                <ul>
                    <li>
                        평점 : {movie.rating}
                    </li>
                    <li>
                        장르 : {movie.genres}
                    </li>
                    
                    {yt ? (<li> 
                        유튜브트레일러 
                    <a href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`}>
                            🎥보러가기
                    </a> </li>)
                    : (<li>
                    <a href={`https://www.youtube.com/results?search_query=${movie.title}`}>
                        유튜브 검색
                    </a>
                    </li>
                    )
                    }
                        
                    <li>
                        줄거리 : {movie.description_full}
                    </li>
                </ul>
            </div>
        )}
    </div>
    )
}
export default MovieDetail;