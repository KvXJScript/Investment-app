import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./layout/Layout.tsx";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>
      <Layout>
        Testing
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
      </Layout>
    </Router>
  );
}

export default App;
