import { Suspense } from "react";
import "./App.css";
import { Hidden } from "./AppStyles";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Suspense fallback="...Loading">
        <Navbar />
        <Hidden>
          <div className="bgImg" />
        </Hidden>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
