import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home(props) {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(`${path}`);
    };

    return (
        <div className="home-page-container">
            <main className="main-content-container">
                <div
                    id="fortune-teller-page"
                    className="activity-container"
                    onClick={() => routeChange("/fortune-teller")}
                >
                    <img
                        src={require("../../assets/Fortune-teller-card.png")}
                        className="activity-cover-image"
                        alt="guessing-page"
                    />
                    <p className="image-caption">Smaranda Fortune Teller</p>
                </div>
                {/*  */}

                <div className="title-container">
                    <h1>Choose your activity!</h1>
                </div>
                {/*  */}
                <div
                    id="drawing-page"
                    className="activity-container"
                    onClick={() => routeChange("/drawer ")}
                >
                    <img
                        src={require("../../assets/Painter-card.png")}
                        className="activity-cover-image"
                        alt="drawing-page"
                    />
                    <p className="image-caption">DaVinci Little Painter</p>
                </div>
            </main>
        </div>
    );
}

export default Home;
