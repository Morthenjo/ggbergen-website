import "./App.css";
import { Hidden } from "./AppStyles";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";

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
