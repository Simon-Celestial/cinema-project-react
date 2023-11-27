import "./WhatsOnPage.scss";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import PageCurrentContainer from "../../Components/Сommon/PageCurrentContainer.jsx";
import ScheduleSection from "../../Components/Сommon/ScheduleSection.jsx";
import React from "react";
import SupportContainer from "../../Components/Сommon/SupportContainer.jsx";

const WhatsOnPage = () => {
    const backgroundImageUrl = "url(//xenothemes.co.uk/specto/wp-content/uploads/sites/2/2017/11/hero-whatson-1.png)";
    const titleText = "TAKE A LOOK AT";
    const headingText = "What's on this week";

    return (
        <div className="whatson-wrapper">
            <Header/>
            <main className="whatson-main">
                <PageCurrentContainer
                    backgroundImageUrl={backgroundImageUrl}
                    titleText={titleText}
                    headingText={headingText}
                />
                {/*FILMS SCHEDULE SECTION*/}
                <section className="site-section schedule-section">
                    <ScheduleSection />
                </section>
                {/*SUPPORT SECTION*/}
                <section className="site-section support-section">
                    <SupportContainer />
                </section>

            </main>
            <footer className="site-footer">
                <Footer />
            </footer>
        </div>
    )
}
export default WhatsOnPage;