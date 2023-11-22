import "./Main.scss";
import BackgroundContainer from "../Сommon/BackgroundContainer.jsx";
import FilmsContainer from "../Сommon/FilmsContainer.jsx";
import ScheduleFilms from "../Сommon/ScheduleFilms.jsx";
import {Star, Play, CalendarBlank,CaretRight} from "@phosphor-icons/react";
import React from "react";
import SliderCardContainer from "../Сommon/SliderCardContainer.jsx";


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
            <section className="site-section coming-soon-section">
                <div className="coming-soon-content">
                    <div className="coming-soon-heading">
                        <div className="heading-block">
                            <p>COMING SOON</p>
                        </div>
                    </div>
                    <div className="coming-soon-title">
                        <div className="coming-soon-left">
                            <p>FANTASY, SCI-FI, ACTION</p>
                            <h1>Colliding planets</h1>
                            <div className="coming-soon-rating">
                                <div className="stars-container">
                                    <Star size={12} weight="fill" color="#fbbd61"/>
                                    <Star size={12} weight="fill" color="#fbbd61"/>
                                    <Star size={12} weight="fill" color="#fbbd61"/>
                                    <Star size={12} weight="fill" color="#fbbd61"/>
                                    <Star size={12} weight="fill" color="#fbbd61"/>
                                </div>
                                <div className="release-date">
                                    <CalendarBlank size={18} weight="duotone"/>
                                    <p> 2 October, 2019</p>
                                </div>
                            </div>
                            <h2>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                                Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit
                                litterarum formas humanitatis per seacula quarta decima et quinta decima.</h2>
                            <a href="https://xenothemes.co.uk/specto/movies/colliding-planets/" target="blank">
                                MORE INFO
                                <CaretRight size={10} weight="bold" color="#ff6900" />
                            </a>

                        </div>
                        <div className="coming-soon-right">
                            <div className="coming-soon-image">
                                <a href="https://www.youtube.com/watch?v=d96cjJhvlMA&ab_channel=MarvelEntertainment"
                                   className="play-film-block" target="_blank">
                                    <Play size={20} weight="fill" color="white"/>
                                </a>
                                <img
                                    src="https://xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/trailer-1-555x335.png"
                                    alt="Colliding planets"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*SLIDER SECTION*/}
            <section className="slider-section site-section">
                <SliderCardContainer />
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