import MovieDetail from "./pages/MovieDetail";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return ( 
  <Router>
    <Switch>
      <Route path="/movie/:id">
        <MovieDetail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
}
export default App;
