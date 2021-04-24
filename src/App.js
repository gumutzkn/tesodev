import Home from "./pages/Home";
import ResultsPage from "./pages/ResultPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DataContextProvider from "./context/DataContext";
import RouteContextProvider from "./context/RouteContext";

function App() {
  return (
    <DataContextProvider>
      <RouteContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </RouteContextProvider>
    </DataContextProvider>
  );
}

export default App;
