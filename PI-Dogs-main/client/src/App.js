import "./App.css";
import DogCards from "./Components/DogsCards/DogsCards";
import DogDetail from "./Components/DogCardDetail/DogCardDetail";
import CreateDog from "./Components/Formulario/Formulario";
import SearchBar from "./Components/SearchBar/SearchBar";
import DogDetailByName from "./Components/DogCardDetail/DogDetailByName";
import LandingPage from "./Components/LandingPage/LandingPage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Route
        path={["/home", "/detail/:id", "/form", "/detailByName"]}
        component={SearchBar}
      />
      <Route path="/home" component={DogCards} />
      <Route path="/detail/:id" component={DogDetail} />
      <Route path="/form" component={CreateDog} />
      <Route path="/detailByName" component={DogDetailByName} />
      <Route exact path="/" component={LandingPage} />
    </>
  );
}

export default App;
