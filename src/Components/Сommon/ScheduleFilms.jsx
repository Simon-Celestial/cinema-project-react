import ScheduleFilmsItems from "./ScheduleFilmsItems.jsx";

const ScheduleFilms = () => {
    const filmCards = [
        {
            id: 1,
            image: 'https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb2-270x340.jpg',
            filmName: "Locked in",
            timeOne: "2:00 pm",
            timeTwo: "4:45 pm",
            timeThree: "8:30pm",
            duration: "110 MINS",
            age: "18",
        },
        {
            id: 2,
            image: 'https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/thumb1-270x340.jpg',
            filmName: "The end of days",
            timeOne: "12:45 pm",
            timeTwo: "3:00 pm",
            timeThree: "5:50pm",
            duration: "105 MINS",
            age: "18",
        },
        {
            id: 3,
            image: 'https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/07/movie-7-270x340.jpg',
            filmName: "Daylight",
            timeOne: "7:00 pm",
            timeTwo: "9:00 pm",
            timeThree: "11:00 pm",
            duration: "130 MINS",
            age: "15",
        },
    ];

    return (
        <>
            {filmCards.map((item) => (
                <ScheduleFilmsItems
                    key={item.id}
                    image={item.image}
                    filmName={item.filmName}
                    timeOne={item.timeOne}
                    timeTwo={item.timeTwo}
                    timeThree={item.timeThree}
                    duration={item.duration}
                    age={item.age}
                />
            ))}
        </>
    );
};

export default ScheduleFilms;
