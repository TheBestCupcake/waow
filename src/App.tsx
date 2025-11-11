import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>Bogos Binted</Alert>}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        Button Goes Binted.
      </Button>
    </div>
  );
}

export default App;
