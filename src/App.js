/* eslint-disable no-unused-vars */
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Channel from "./Components/ClientComponents/MessagesContent/Channel";
import LayOut from "./LayOut/LayOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <LayOut />
      </BrowserRouter>
    </>
  );
}

export default App;
