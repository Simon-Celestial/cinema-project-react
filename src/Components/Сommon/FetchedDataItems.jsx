// FetchedDataItems.jsx
import { GlobeHemisphereEast, StarHalf, UsersThree } from "@phosphor-icons/react";
import React from "react";

const FetchedDataItems = ({
                              original_language,
                              adult,
                              original_title,
                              popularity,
                              release_date,
                              overview,
                              vote_average,
                              vote_count,
                              poster_path
                          }) => {
    return (
        <div className="data-wrapper">
            <div className="data-image-block">
                <img src={poster_path} alt="Film Poster" />
            </div>
            <div className="data-title-block">
                <h1>{original_title}</h1>
                <p>{overview}</p>
                <span>Release date: <span>{release_date}</span></span>
                <div className="language-box">
                    <p>{original_language}</p>
                </div>
                {adult && <div className="adult-box"><p>18+</p></div>}
                <div className="data-film-rating">
                    <p><StarHalf size={20} weight="duotone" color="#ec7532" />{vote_average}</p>
                    <p><UsersThree size={20} weight="duotone" color="#ec7532" />{vote_count} Votes</p>
                    <p><GlobeHemisphereEast size={20} weight="duotone" color="#ec7532" />{popularity} Popularity</p>
                </div>
            </div>
        </div>
    );
};

export default FetchedDataItems;
