import "./DetailsPage.scss";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import SupportContainer from "../../Components/Сommon/SupportContainer.jsx";
import React, {useEffect, useState} from "react";
import {GlobeHemisphereEast, StarHalf, UsersThree} from "@phosphor-icons/react";
import {useParams} from "react-router-dom";
import {getSingleData} from "../../MovieListAPI/getData.js";

const DetailsPage = () => {
    const [product,setProduct] = useState({})
        let {id}= useParams();
        getSingleData(id).then((res) => {
            setProduct(res)
        }).catch((err) => {
            console.log(err)
        });

    return (
        <div className="details-page-wrapper">
            <Header/>
            <main className="details-page-main">
                <section className="details-page-background">
                    <div className="details-page-background-content">
                        <div className="details-page-heading">
                            <div className="details-page-heading-item"><p>SYNOPSIS</p>
                            </div>
                        </div>
                        <div className="details-page-film-card">
                            <div className="details-image-block">
                                <img src="https://image.tmdb.org/t/p/w500/bkpPTZUdq31UGDovmszsg2CchiI.jpg"
                                     alt="Film Poster"/>
                            </div>
                            <div className="details-card-title">
                                <h1>Locked in</h1>
                                <h3>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                                    lectorum. Mirum
                                    est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit
                                    litterarum
                                    formas humanitatis per seacula quarta decima et quinta decima.</h3>
                                <h2>Released: 15 Nov, 2017</h2>
                                <div className="data-film-rating">
                                    <p><StarHalf size={20} weight="duotone" color="green"/>44</p>
                                    <p><UsersThree size={20} weight="duotone" color="#ec7532"/>10 Votes</p>
                                    <p><GlobeHemisphereEast size={20} weight="duotone" color="#ec7532"/>323</p>
                                </div>
                                <div className="film-language">
                                    <div className="language-box"><p>en</p></div>
                                    <div className="adult-box"><p>12+</p></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="site-section support-section">
                    <SupportContainer/>
                </section>

            </main>
            <footer className="site-footer">
                <Footer/>
            </footer>
        </div>
    )

}
export default DetailsPage;