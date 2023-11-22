import {CaretRight,Clock} from "@phosphor-icons/react";
const ScheduleFilmsItems = ({image,filmName,timeOne,timeTwo,timeThree,duration,age}) => {
    return (
        <div className="film-card">
            <div className="film-card-image">
                <img src={image}
                     alt="Film Poster"/>
            </div>
            <div className="film-card-content">
                <p>THRILLER,HORROR</p>
                <h2>{filmName}</h2>
                <h3>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
                    notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas
                    humanitatis per seacula quarta decima et quinta decima.
                </h3>
                <a href="#">
                    FULL SYNOPSIS
                    <CaretRight size={14} weight="fill" color="#ec7532" />
                </a>
                <span>
                    <Clock size={14} color="black" />
                     VIEWING TIMES
                </span>
                <div className="films-time-row">
                    <div className="films-time-block">
                    <div className="time-block">
                        <p>{timeOne}</p>
                    </div>
                        <div className="time-block">
                            <p>{timeTwo}</p>
                        </div>
                        <div className="time-block">
                            <p>{timeThree}</p>
                        </div>
                    </div>
                    <div className="films-duration">
                        <div className="element-wrapper">
                        <p>{duration}</p>
                        <div className="age-circle">
                            <p>{age}</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleFilmsItems;