import about_me from "./components/about-me";
import follow_the_card from "./components/follow_the_card/follow_the_card";
import LogIn from "./components/follow_the_card/component/LogIn";
import indexPage from "./components/indexPage";
import infinite_slider from "./components/infinite_slider/infinite_slider";
import WordPress_Page from "./components/WordPress/WordPress_Page";
import ContactPage from "./components/contact/ContactPage";
import Memory from "./components/memory/Memory";

import {Navigate, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/index" replace />} />
      <Route path="/index" element={indexPage()} /> 
      <Route path="/about" element={about_me()} />
      <Route path="/followTheCard" element={follow_the_card()} /> 
      <Route path="/login" element={LogIn()} />
      <Route path="/infinite_slider" element={infinite_slider()} /> 
      <Route path="/word-press" element={WordPress_Page()} />
      <Route path="/download-and-contact" element={ContactPage()} />
      <Route path="/memory" element={Memory()}/>
    </Routes>
  );
}

export default App;
