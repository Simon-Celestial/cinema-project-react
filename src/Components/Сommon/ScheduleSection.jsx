import ScheduleFilms from "./ScheduleFilms.jsx";
import React from "react";

const ScheduleSection = () => {
    return (
        <div className="schedule-section-content">
            <div className="schedule-heading-days">
                <div className="days-block">
                    <div className="day">
                        <p>MON</p>
                    </div>
                    <div className="day">
                        <p>TUE</p>
                    </div>
                    <div className="day">
                        <p>TODAY</p>
                    </div>
                    <div className="day">
                        <p>THU</p>
                    </div>
                    <div className="day">
                        <p>FRI</p>
                    </div>
                    <div className="day">
                        <p>SAT</p>
                    </div>
                    <div className="day">
                        <p>SUN</p>
                    </div>
                </div>
                <div className="current-date">
                    <p>
                        WED, 22 NOVEMBER</p>
                </div>
            </div>
            <div className="schedule-films-container">
                <ScheduleFilms/>
            </div>
        </div>

    )
}

export default ScheduleSection;
