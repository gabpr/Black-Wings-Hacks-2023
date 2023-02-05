import { BrowserRouter as Router, Route } from "react-router-dom";
import Questions from "./Questions";
import Prompts from "./Prompts";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/questions" component={Questions} />
      <Route path="/dailyprompt" component={Prompts} />
      <Route path="/menu" component={Menu} />
      <Route path="/" element={Form} />
      <Route path="/home" element={Home} />
      <Route path="/signup" element={<CreateProfile />} />
      
    </Router>
  );
}