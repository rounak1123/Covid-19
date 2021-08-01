import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import News from "./components/news";
import Beds from "./components/beds";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Refreshtotop from "./components/Refreshtotop";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Buttons from "./components/btn";
import Covid from "./components/covid-tracker";
import Guidelines from "./components/guidelines";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Hero />
        <Buttons />
        <Switch>
          <Route exact path="/">
            <Covid />
          </Route>
          <Route exact path="/news">
            <News />
          </Route>
          <Route exact path="/health">
            <Beds />
          </Route>

          <Route exact path="/guidelines">
            <Guidelines />
          </Route>
        </Switch>
        <Refreshtotop />
        <Form />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
