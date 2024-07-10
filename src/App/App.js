import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../Pages/Home/Home";
import CheckList from "../Pages/Checklist/CheckList";
import Pier from "../Pages/Checklist/Pier";
import SandwichMenu from "../Components/Menu/SandwichMenu";
import { AppProvider } from "../Context/AppContext";

function App() {
  return (
    <Router>
      <SandwichMenu />

      <Container fluid>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/inicio" />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/checklist" element={<CheckList />} />
            <Route path="/checklist/Pier" element={<Pier />} />
          </Routes>
        </AppProvider>
      </Container>
    </Router>
  );
}

export default App;