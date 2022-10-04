import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Finder from "./pages/Finder";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Subscribe from "./pages/Subscribe";
import Layout from "./shared/Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact={true}
          element={<Layout active="main" content={<Main />} />}
        />
        <Route
          path="/Signup"
          element={<Layout active="finder" content={<Signup />} />}
        />
        <Route
          path="/Subscribe"
          element={<Layout active="subscribe" content={<Subscribe />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
