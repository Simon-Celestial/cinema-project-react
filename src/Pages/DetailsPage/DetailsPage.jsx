import "./DetailsPage.scss";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SupportContainer from "../../Components/Сommon/SupportContainer.jsx";
import React, {useEffect, useMemo, useState} from "react";
import {GlobeHemisphereEast, StarHalf, UsersThree} from "@phosphor-icons/react";
import {useParams} from "react-router-dom";
import {getSingleData} from "../../MovieListAPI/getData.js";

const useMovieData = (id) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const result = await getSingleData(id).catch((err) => {
                console.log(err)
            });
            setMovie(result);
            setLoading(false);
        })();
    }, [id]);


    return {
        loading,
        movie,
    };
}
const DetailsPage = () => {
    let {id} = useParams();

    const {
        loading: movieLoading,
        movie,
    } = useMovieData(id);
    console.log(movie);
    const imageUrl = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;
    const ratingColor = movie?.vote_average < 5 ? "red" : (movie?.vote_average < 7 ? "#ec7532" : "green");


    return (
        <div className="details-page-wrapper">
            <Header/>
            <main className="details-page-main">
                <section className="details-page-background">
                    <div className="details-page-background-content">
                        <div className="details-page-heading">
                            <div className="details-page-heading-item"><p>SYNOPSIS</p>
                            </div>
                        </div>
                        <div className="details-page-film-card">
                            <div className="duration-block">
                                Duration: {movie?.runtime} MINS
                            </div>

                            <div className="details-image-block" style={{
                                transition: "all 0.5s ease",
                                filter: movieLoading ? "blur(5px)" : "none",
                            }}>
                                <img src={imageUrl}
                                     alt="Film Poster"/>
                            </div>
                            <div className="details-card-title" style={{
                                transition: "all 0.5s ease",
                                filter: movieLoading ? "blur(5px)" : "none",
                            }}>
                                <h1>{movie?.original_title || ""}</h1>
                                <h3>{movie?.overview || ""}</h3>
                                <h2>{movie?.release_date || ""}</h2>
                                <div className="data-film-rating">
                                    <p><StarHalf size={20} weight="duotone" color={ratingColor}/>{movie?.vote_average}</p>
                                    <p><UsersThree size={20} weight="duotone" color="#ec7532"/>{movie?.vote_count} Votes
                                    </p>
                                    <p><GlobeHemisphereEast size={20} weight="duotone"
                                                            color="#ec7532"/>{movie?.popularity}</p>
                                </div>
                                <div className="film-language">
                                    <div className="language-box"><p>{movie?.original_language}</p></div>
                                    {movie?.adult ?
                                        <div className="adult-box" style={{background: "red"}}><p>18+</p></div> :
                                        <div className="adult-box" style={{background: "green"}}><p>12+</p></div>}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="site-section support-section">
                    <SupportContainer/>
                </section>

            </main>
            <footer className="site-footer">
                <Footer/>
            </footer>
        </div>
    )

}
export default DetailsPage;
