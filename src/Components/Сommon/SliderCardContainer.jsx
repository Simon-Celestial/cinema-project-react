import React from "react";
import SliderCards from "./SliderCards.jsx";

const SliderCardContainer = () => {
    const cards = [
        {
            id: 1,
            cardImage: "//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-16.jpg",
            cardName: 'Lurking in the dark',
            releaseDate: "11 August, 2018",
        },
        {
            id: 2,
            cardImage: "//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-13.jpg",
            cardName: 'The lone soldier: Behind enemy lines',
            releaseDate: "30 July, 2020",
        },
        {
            id: 3,
            cardImage: "//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-3.jpg",
            cardName: 'The vendetta',
            releaseDate: "14 April, 2019",
        },
        {
            id: 4,
            cardImage: "//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-15.jpg",
            cardName: 'The executioner',
            releaseDate: "26 May, 2019",
        },
        {
            id: 5,
            cardImage: "//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-10.jpg",
            cardName: 'Sudden death',
            releaseDate: "8 March, 2019",
        },
        {
            id: 6,
            cardImage: "//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-14.jpg",
            cardName: 'Colliding planets',
            releaseDate: "2 October, 2019",
        },
    ]

    return (
        <div className="slider-content">
            {cards.map((item) => (
                <SliderCards key={item.id} cardImage={item.cardImage} cardName={item.cardName} releaseDate={item.releaseDate} />
            ))}


        </div>

    )
}
export default SliderCardContainer;