import "./Drawer.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import {useNavigate} from "react-router-dom";
import noInputImage from "../../assets/pictor_no_input.png";

function Drawer() {
    const image = document.createElement("img");
    async function createPainting(prompt) {
        const mainEl = document.getElementById("main");
        // if (mainEl.firstElementChild) {
        //     mainEl.removeChild(mainEl.firstElementChild);
        // }

        //create the image

        image.setAttribute("class", "resulted-image");
        image.style.maxWidth = "100%";
        image.style.height = "auto";
        //Call the api
        const apiBody = {
            //prettier-ignore
            "prompt": "Create " + prompt + " as if it were drawn with acrylics",
            //prettier-ignore
            "n": 1,
            //prettier-ignore
            "size": "256x256",
        };
        const fallbackImageUrl =
            "https://pusheen.com/wp-content/uploads/2019/02/Im-Busy.gif";
        if(prompt !== ""){
            await fetch("https://api.openai.com/v1/images/generations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    //prettier-ignore
                    "Authorization": "Bearer " + process.env.REACT_APP_OPENAI_API_KEY,
                },
                body: JSON.stringify(apiBody),
            })
                .then((data) => data.json())
                .then((response) => {
                    image.setAttribute("src", response.data[0].url);
                })
                .catch((err) => {
                    //Aici trebuie sa apara un div in locul imaginii in care sa scrie ceva de genul ca are o comanda foarte importanta de facut si nu a reusit sa iti faca si tie tablou
                    image.setAttribute("src", fallbackImageUrl);
                });
        }else{
            image.setAttribute("src", noInputImage);
        }

        //add it to the main section
        mainEl.appendChild(image);
    }

    let navigate = useNavigate();
    const handleBackToHome = () => {
        navigate("/");
    };

    return (
        <div className="painter-page-container">
            <Button onClick={handleBackToHome}/>
            <main className="main-section" id="main"></main>
            <Input
                handleResult={createPainting}
                message={"What do you want me to draw today?"}
            ></Input>
        </div>
    );
}

export default Drawer;
