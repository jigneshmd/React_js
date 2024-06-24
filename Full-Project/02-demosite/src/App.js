import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Prddetails from "./Prddetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Prddetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
