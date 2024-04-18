import {Outlet} from "react-router-dom";
import "../App.css";
import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";

function App() {
  return (
    <div className="wrapper w-full">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
