import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap"

import Home from "./components/js/Home"
import NewGradient from "./components/js/NewGradient"
import EditGradient from "./components/js/EditGradient"
import Other from "./components/js/Other"

function App() {
  return (
    <Container>
      <Router>
        <Navbar variant="dark" >
          <Nav className="mr-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new">New</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new" component={NewGradient} />
          <Route path="/edit/:id" component={EditGradient} />
          <Route component={Other} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
