import ItemsList from "./components/ItemsList/ItemsList";
import "./styles/reset.css";
import "./styles/App.css";
import Pagination from "./components/Pagination/Pagination";
import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [offset, setOffset] = useState(1);
  const [pending, setPending] = useState(true);
  const [isFilter, setIsFilter] = useState(false);
  const [ids, setIds] = useState([]);

  return (
    <div className="App">
      <Sidebar
        setIds={setIds}
        setIsFilter={setIsFilter}
        setPending={setPending}
      />

      <div className="wrapper">
        {pending && (
          <div className="loader-wrapper">
            <Loader />
          </div>
        )}

        <ItemsList
          offset={offset}
          setPending={setPending}
          idsObject={{ ids, setIds }}
        />

        {!pending && !isFilter && (
          <div className="pagination-wrapper">
            <Pagination setOffset={setOffset} offset={offset} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
