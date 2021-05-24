import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Layout from './components/layout';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Layout>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
