import Input from "../../components/Input/Input";
import "./FortuneTeller.css";
import ChatPopUp from "../../components/ChatPopUp/ChatPopUp";

function FortuneTeller() {
  async function createPainting(prompt) {
    const messageEl = document.getElementById("response-message");

    const apiBody = {
      //prettier-ignore
      "model": "text-davinci-003",
      //prettier-ignore
      "prompt": "Respond to the next questiuns as if you were a fortune teller: " + prompt,
      //prettier-ignore
      "max_tokens": 100,
      //prettier-ignore
      "temperature": 0.7,
    };

    await fetch("https://api.openai.com/v1/completions", {
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
        messageEl.textContent = response.choices[0].text;
      })
      .catch((err) => {
        messageEl.textContent =
          "It's too hard to focus so I cannot tell you right now the answer to that question";
      });
  }
  return (
    <div className="container">
      <div className="message" id="response-message"></div>
      <Input
        handleResult={createPainting}
        message={"What do you want to know little travaler?"}
      ></Input>
      <footer>
        <ChatPopUp />
      </footer>
    </div>
  );
}

export default FortuneTeller;
