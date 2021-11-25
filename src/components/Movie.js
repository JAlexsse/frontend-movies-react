import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


export default function Movie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/v1/movie/" + id)
            .then(response => {
                return response.json();
            })
            .then(json => {
                console.log(json)
                if (json.error) {
                    let err = json.error.Message;
                    setMovie({});
                    setIsLoaded(false);
                    setError(err);
                } else {
                    setMovie(json.movie);
                    setIsLoaded(true);
                    setError(null)
                }                
            })
    }, [id, setMovie, setIsLoaded, setError]);

    if (error) {
        return <div>Error: {error} </div>
    } else if (!isLoaded) {
        return <p>Loading...</p>
    } else {
        if (movie.genres) {
            movie.genres = Object.values(movie.genres);
            console.log(movie.genres);
        } else {
            movie.genres = [];
        }

        return (
            <Fragment>
                <h1>{movie.title}</h1>
                <table className="table">
                    <thead className="thead-dark">
                    </thead>
                    <tbody>
                        <tr>
                            <td className="col-3"><strong>Description</strong></td>
                            <td>{movie.description}</td>
                        </tr>
                        <tr>
                            <td className="col-3"><strong>Year</strong></td>
                            <td>{movie.year}</td>
                        </tr>
                        <tr>
                            <td className="col-3"><strong>Runtime</strong></td>
                            <td>{movie.runtime}</td>
                        </tr>
                        <tr>
                            <td className="col-3"><strong>Realese Date</strong></td>
                            <td>{movie.realese_date}</td>
                        </tr>
                        <tr>
                            <td className="col-3"><strong>Rating</strong></td>
                            <td>{movie.rating}</td>
                        </tr>
                        <tr>
                            <td className="col-3"><strong>MPAA Rating</strong></td>
                            <td>{movie.mpaa_rating}</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        );
    }

}