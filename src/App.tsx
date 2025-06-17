// import Groups from "./pages/groups";
import { useState } from "react";
import Groups from "./pages/groups";
import Totals from "./pages/totals";
import './styles/App.css';


function App() {
  const [page, setPage] = useState<string>("groups");

  return (
    <>
        <header className="header">
                <h1 className="main-title-heading">GoSplit</h1>
                <nav className="nav-bar">
                  <button
                    className={`nav-link${page === "groups" ? " active" : ""}`}
                    onClick={() => setPage("groups")}
                  >
                    Groups
                  </button>
                  <button
                    className={`nav-link${page === "totals" ? " active" : ""}`}
                    onClick={() => setPage("totals")}
                  >
                    Totals
                  </button>
                </nav>
        </header>
        {page === "groups" && (<Groups/>)}
        {page === "totals" && (<Totals a = {page}/>)}
    </>
  )
}

export default App
