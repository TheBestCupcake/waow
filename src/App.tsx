import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["Bogos Binted", "Boat Goes Binted", "Bongos Binted", "Skibidi"];

  const handleSelection = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button color="secondary">Button Goes Binted.</Button>
    </div>
  );
}

export default App;
