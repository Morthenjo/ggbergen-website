import "./App.css";
import { Hidden } from "./AppStyles";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hidden>
        <div className="bgImg" />
      </Hidden>
    </>
  );
}

export default App;
