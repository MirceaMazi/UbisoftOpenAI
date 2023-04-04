import React from 'react';
import "./Home.css";
import {useNavigate} from "react-router-dom";
import ChatPopUp from "../../components/ChatPopUp/ChatPopUp";

function Home(props) {

    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(`${path}`)
    }

    return (

        <div className={"container"}>
            <header>
                <h1>Choose your activity!</h1>
            </header>
            <div className={"wrapper"}>
                <div className="fortune-teller-page">
                    <img
                        src={"https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-easy-drawings-for-beginners-to-draw-64.jpg"}
                        className={"grow-img"}
                        alt={"guessing-page"}
                        onClick={() => routeChange("/fortune-teller")}
                    />

                </div>
                <div className="drawing-page">
                    <img
                        src={"https://wonder-day.com/wp-content/uploads/2022/03/wonder-day-easy-drawings-for-beginners-to-draw-10.jpg"}
                        className={"grow-img"}
                        alt={"guessing-page"}
                        onClick={() => routeChange("/drawer ")}/>
                </div>
            </div>
            <footer>
                <ChatPopUp/>
            </footer>
        </div>
    );
}

export default Home;