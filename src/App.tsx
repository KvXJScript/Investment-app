import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "src/components/layout";
import {
  Contact,
  About,
  Prices,
  Homepage,
  Team,
  Rewards,
  Products,
} from "src/pages";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/about" Component={About} />
          <Route path="/contact" Component={Contact} />
          <Route path="/prices" Component={Prices} />
          <Route path="/team" Component={Team} />
          <Route path="/rewards" Component={Rewards} />
          <Route path="/products" Component={Products} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
