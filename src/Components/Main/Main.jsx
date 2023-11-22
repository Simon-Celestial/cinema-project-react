import "./Main.scss";
import BackgroundContainer from "../Сommon/BackgroundContainer.jsx";
import FilmsContainer from "../Сommon/FilmsContainer.jsx";
import ScheduleFilms from "../Сommon/ScheduleFilms.jsx";

const Main = () => {
    return (
        <>
            {/*CINEMA SECTION*/}
                <section className="site-section cinema-section">
                    <BackgroundContainer/>
                    <div className="background-changer-block">
                        <div className="changer-circle"></div>
                        <div className="changer-circle"></div>
                        <div className="changer-circle"></div>
                    </div>
                    <div className="moving-block">
                        <img src="https://xenothemes.co.uk/specto/wp-content/themes/specto/images/scroll-arrow.svg"
                             alt="Moving arrow"/>
                    </div>
                </section>

            {/*NEW IN SECTION*/}
                <section className="site-section new-in-section">
                    <div className="new-in-content">
                        <div className="section-heading">
                            <div className="heading-item">
                                <p>NEW IN</p>
                            </div>
                        </div>
                        <div className="new-in-films-block">
                            <FilmsContainer/>
                        </div>
                    </div>
                </section>

            {/*FILMS SCHEDULE SECTION*/}
                <section className="site-section schedule-section">
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
                </section>
                {/*COMING SOON SECTION*/}
                <section className="coming-soon">
                    <div className="coming-soon-content">

                    </div>

                </section>
                {/*SUPPORT SECTION*/}
                <section className="site-section support-section">
                    <div className="support-content">
                        <p>Need help? Contact our support team on</p>
                        <h1>0330 123 4567</h1>
                    </div>
                </section>
        </>
    )
}
export default Main;