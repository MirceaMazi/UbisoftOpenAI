import Home from "./pages/Home/Home";
import FortuneTeller from "./pages/FortuneTeller/FortuneTeller";
import Painter from "./pages/Painter/Painter";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/fortune-teller"} element={<FortuneTeller />} />
            <Route path={"/painter"} element={<Painter />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
