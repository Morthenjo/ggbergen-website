import "./App.css";
import { BgImg } from "./AppStyles";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";

function App() {
  return (
    <>
      <BgImg>
        <Navbar />
        <Footer />
      </BgImg>
    </>
  );
}

export default App;
