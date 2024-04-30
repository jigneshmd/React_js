import "./App.css";
import Heder from "./Heder";
import Footer from "./Footer";
import Api from "./Api";
import Contact from "./Contact";
import Product from "./Product";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Heder />
      <Routes>
        <Route path="/" element={<Api />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
