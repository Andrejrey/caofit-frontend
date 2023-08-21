import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Calculator from "./components/Calculator";
import Diary from "./components/Diary";
import Contact from "./components/Contact";
import ShopArticle from "./components/ShopArticle";
import Footer from "./components/Footer";
import DesktopNavbar from "./components/DesktopNavbar";
ShopArticle;

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ShopArticle />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
