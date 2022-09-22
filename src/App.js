import "./App.css";
import { Hidden } from "./AppStyles";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hidden>
        <div className="bgImg" />
      </Hidden>
      <Footer />
    </>
  );
}

export default App;
