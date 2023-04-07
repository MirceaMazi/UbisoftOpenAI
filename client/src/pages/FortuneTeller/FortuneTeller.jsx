import Input from "../../components/Input/Input";
import "./FortuneTeller.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";

function FortuneTeller() {
  async function createMessage(prompt) {
    const messageEl = document.getElementById("response-message");

    //Call the api
    ///////////////////////////////////////////////////////////////////////
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

    if (prompt !== "") {
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
          console.log(err);
          messageEl.textContent =
            "It's too hard to focus so I cannot tell you right now the answer to that question!";
        });
    } else {
      messageEl.textContent =
        "I can't guess what question you want to ask. You have to write it!";
    }
    //////////////////////////////////////////////////////////////////////
  }
  let navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <Button onClick={handleBackToHome} />
      <div className="message" id="response-message"></div>
      <Input
        handleResult={createMessage}
        message={"What do you want to know little travaler?"}
      ></Input>
    </div>
  );
}

export default FortuneTeller;
