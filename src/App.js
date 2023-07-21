import "./styles.css";

import Home from "./component/home";
import Residencies from "./component/Residencies";
import Ourvalue from "./component/ourvalue";
import Contact from "./component/Contact";
import Footer from "./component/footer";

export default function App() {
  return (
    <div>
      <Home />
      <Residencies />
      <Ourvalue />
      <Contact />
      <Footer />
    </div>
  );
}
