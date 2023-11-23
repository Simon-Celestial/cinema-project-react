import {GlobeHemisphereEast, StarHalf, UsersThree} from "@phosphor-icons/react";
import React from "react";

const FetchedDataItems = () => {
    return (
        <div className="data-wrapper">
            <div className="data-image-block">
                <img
                    src="https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-7-270x340.jpg"
                    alt="Film Poster"/>
            </div>
            <div className="data-title-block">
                <h1>The Creator</h1>
                <p>Amid a future war between the human race and the forces of artificial intelligence, a
                    hardened ex-special forces agent grieving the disappearance of his wife, is
                    recruited to hunt down and kill the Creator, the elusive architect of advanced AI
                    who has developed a mysterious weapon with the power to end the war—and mankind
                    itself.</p>
                <span>Release data: <span>2023-09-27</span></span>
                <div className="language-box">
                    <p>en</p>
                </div>
                <div className="adult-box">
                    <p>18+</p>
                </div>
                <div className="data-film-rating">
                    <p><StarHalf size={20} weight="duotone" color="#ec7532"/> 7</p>
                    <p><UsersThree size={20} weight="duotone" color="#ec7532" /> 10 Votes</p>
                    <p><GlobeHemisphereEast size={20} weight="duotone" color="#ec7532" />10 Popularity</p>
                </div>

            </div>
        </div>
    )
}
export default FetchedDataItems;