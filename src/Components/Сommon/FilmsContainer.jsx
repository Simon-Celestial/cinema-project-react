import FilmItem from "./FilmItem.jsx";

const FilmsContainer = () => {
    const films = [
        {
            id: 1,
            image: 'https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb1-270x340.jpg',
            filmName: "The end of days",
            rating: "#fbbd61",
            releaseData: "Released: 14 April, 2017",
        },
        {
            id: 2,
            image: 'https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-7-270x340.jpg',
            filmName: "Daylight",
            rating: "#fbbd61",
            releaseData: "Released: 22 February, 2017",
        },
        {
            id: 3,
            image: 'https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb2-270x340.jpg',
            filmName: "Locked in",
            rating: "#fbbd61",
            releaseData: "Released: 10 August, 2017",
        },
    ]
    return (
        <div className="films-container">
            {films.map((item) => (
                <FilmItem key={item.id} image={item.image} filmName={item.filmName} rating={item.rating} releaseData={item.releaseData} />
            ))}

        </div>
    )
}
export default FilmsContainer;