import {Outlet} from "react-router-dom";
import "../App.css";
import {Navigation} from "../components/Navigation";
import {Footer} from "../components/Footer";
import {useEffect, useState} from "react";

function App() {
  const [date, setDate] = useState(new Date());
  useEffect(() => setDate(date), []);

  return (
    <div className="wrapper w-full">
      <Navigation />
      <div className="w-full full-bleed">
        <Outlet />
      </div>
      <Footer date={date} />
    </div>
  );
}

export default App;
