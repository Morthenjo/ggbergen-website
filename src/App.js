import { Suspense } from "react";
import "./App.css";
import { Hidden } from "./AppStyles";
import Loading from "./Components/Loading";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hidden>
          <div className="bgImg" />
        </Hidden>
      </Suspense>
    </>
  );
}

export default App;
