import "./Main.scss";
import BackgroundContainer from "../Сommon/BackgroundContainer.jsx";

const Main = () => {
    return (
        <section className="site-section cinema-section">
            <BackgroundContainer />
            <div className="background-changer-block">
                <div className="changer-circle"></div>
                <div className="changer-circle"></div>
                <div className="changer-circle"></div>
            </div>
        </section>
    )
}
export default Main;