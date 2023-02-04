import { BrowserRouter as Router, Route } from 'react-router-dom';
import Questions from './Questions';
import Prompts from './Prompts';

function App() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/questions" component={Questions} />
      <Route path="/dailyprompt" component={Prompts} />
      <Route path="/menu" component={Menu} />
    </Router>
  );
}