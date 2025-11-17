import { useLocation } from "react-router-dom";

function Games() {
  let location = useLocation();
  console.log(location);
  return (
    <>
      <h1>Bogos binted. {location.pathname}</h1>
    </>
  );
}

export default Games;
