import "./Drawer.css";
import Input from "../../components/Input/Input";

function Drawer() {
  async function createPainting(prompt) {
    const mainEl = document.getElementById("main");
    if (mainEl.firstElementChild) {
      mainEl.removeChild(mainEl.firstElementChild);
    }

    //create the image
    const image = document.createElement("img");
    image.setAttribute("class", "resulted-image");

    //Call the api
    const apiBody = {
      //prettier-ignore
      "prompt": "Create " + prompt + " as if it were drawn with acrylics",
      //prettier-ignore
      "n": 1,
      //prettier-ignore
      "size": "256x256",
    };
    console.log(apiBody);
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
      });

    //add it to the main section
    mainEl.appendChild(image);
  }

  return (
    <div className="painter-page-container">
      <main className="main-section" id="main"></main>
      <Input
        handleResult={createPainting}
        message={"What do you want me to draw today?"}
      ></Input>
    </div>
  );
}

export default Drawer;
