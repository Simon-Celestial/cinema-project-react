import "./AllMoviesPage.scss";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import PageCurrentContainer from "../../Components/Сommon/PageCurrentContainer.jsx";
import FetchedData from "../../Components/Сommon/FetchedData.jsx";
import React from "react";

const AllMoviesPage = () => {
    const backgroundImageUrl = "url(//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/hero-search-1.png)";
    const titleText = "ALL CURRENT";
    const headingText = "Movies";

    return (
        <div className="all-movies-wrapper">
            <Header/>
            <main className="all-movies-main">
                <PageCurrentContainer
                    backgroundImageUrl={backgroundImageUrl}
                    titleText={titleText}
                    headingText={headingText}
                />
                <section className="site-section all-films-section">
                    <FetchedData />
                </section>
            </main>
            <footer className="site-footer">
                <Footer />
            </footer>
        </div>
    )
}
export default AllMoviesPage;