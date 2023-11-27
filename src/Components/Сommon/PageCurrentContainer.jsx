import React from "react";
import "./PageCurrentContainer.scss";

const PageCurrentContainer = ({ backgroundImageUrl, titleText, headingText }) => {
    return (
        <section className="current-page-section"
                 style={{backgroundImage: backgroundImageUrl}}>
            <div className="current-page-content">
                <p>{titleText}</p>
                <h1>{headingText}</h1>
            </div>
            <img src="https://xenothemes.co.uk/specto/wp-content/themes/specto/images/scroll-arrow.svg"
                 alt="Scroll down" className="scroll" />
        </section>
    );
}

export default PageCurrentContainer;
