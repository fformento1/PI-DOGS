import "./App.css";
import DogCards from "./Components/DogsCards/DogsCards";
import DogDetail from "./Components/DogCardDetail/DogCardDetail";
import CreateDog from "./Components/Formulario/Formulario";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/home" component={DogCards} />
      <Route path="/detail/:id" component={DogDetail} />
      <Route path="/form" component={CreateDog} />
    </Switch>
  );
}

export default App;
