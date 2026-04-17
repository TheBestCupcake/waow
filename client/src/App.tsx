import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RoutesProvider from "./utils/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <header id="Navbar">
          <Navbar />
        </header>

        <div id="Page">
          <RoutesProvider />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
