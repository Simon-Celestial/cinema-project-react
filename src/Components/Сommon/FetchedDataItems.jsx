import { GlobeHemisphereEast, StarHalf, UsersThree } from "@phosphor-icons/react";
import React from "react";

const FetchedDataItems = ({
                              original_language: language,
                              adult,
                              original_title: title,
                              popularity,
                              release_date: release,
                              overview,
                              vote_average: rating,
                              vote_count : votes,
                              poster_path: image
                          }) => {
    const imageUrl = `https://image.tmdb.org/t/p/w500${image}`;
    const ratingColor = rating < 5 ? "red" : (rating < 7 ? "#ec7532" : "green");



    return (
        <div className="data-wrapper">
            <div className="data-image-block">
                <img src={imageUrl} alt="Film Poster" />
            </div>
            <div className="data-title-block">
                <h1>{title}</h1>
                <p>{overview}</p>
                <span>Release date: <span>{release}</span></span>
                <div className="language-box">
                    <p>{language}</p>
                </div>
                {adult?<div className="adult-box"><p>18+</p></div>:<div className="adult-box" style={{background: "green"}}><p>12+</p></div> }
                <div className="data-film-rating">
                    <p><StarHalf size={20} weight="duotone" color={ratingColor} />{rating}</p>
                    <p><UsersThree size={20} weight="duotone" color="#ec7532" />{votes} Votes</p>
                    <p><GlobeHemisphereEast size={20} weight="duotone" color="#ec7532" />{popularity}</p>
                </div>
            </div>
        </div>
    );
};

export default FetchedDataItems;
