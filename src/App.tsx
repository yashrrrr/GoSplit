// import Groups from "./pages/groups";
import { useState } from "react";
import Groups from "./pages/groups";
import Totals from "./pages/totals";


function App() {
  const [page, setPage] = useState<string>("groups");

  return (
    <>
        <header className="header">
                <h1 className="main-title-heading">GoSplit</h1>
                <select
                    id="pages-dropdown"
                    value={page}
                    onChange={(e) => setPage(e.target.value==="" ? page : e.target.value)}
                >
                  <option value="">--choose--</option>
                  <option value="groups">Groups</option>
                  <option value="totals">Totals</option>
                </select>
        </header>
        {page === "groups" && (<Groups a = {page}/>)}
        {page === "totals" && (<Totals a = {page}/>)}
    </>
  )
}

export default App
