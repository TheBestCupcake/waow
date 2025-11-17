import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesProvider from "./utils/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>

        <div>
          <RoutesProvider />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
