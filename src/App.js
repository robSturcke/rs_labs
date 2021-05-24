import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about';

function App() {
  return (
    <Router>
      <header className="App-header">RSLabs Dashboard</header>
      <Link to="/about">About</Link>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
