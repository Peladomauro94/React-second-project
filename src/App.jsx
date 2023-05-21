import { useState } from "react";
import Header from "./components/Header";
import "./index.css";
import  'bootstrap/dist/css/bootstrap.min.css' ;
import { useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("sun");
  useEffect(() => {
    (theme == "sun") ? document.body.classList.remove("moon-theme") : document.body.classList.add("moon-theme");
  }, [theme])

  return (
    <div className="all-content">
      <Header theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
