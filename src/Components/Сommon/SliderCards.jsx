import React from "react";

const SliderCards = ({cardImage,cardName,releaseDate}) => {
    return (
            <div className="slider-card">
                <div className="slider-image">
                    <img src={cardImage} alt="Poster"/>
                </div>
                <h5>{cardName}</h5>
                <p>{releaseDate}</p>
            </div>
    )
}
export default SliderCards;