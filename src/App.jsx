import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import EditNoteSet from "./pages/EditNoteSet.jsx";
import TypeNotes from "./pages/TypeNotes.jsx";
import Login from "./pages/Login.jsx";
import { AuthProvider } from "./state/AuthContext.jsx";
import { BASE_PATH } from "../config.js";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/edit/:noteSetId" element={<EditNoteSet />} />
            <Route path="/type/:noteSetId" element={<TypeNotes />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Layout>
    </AuthProvider>
  );
}

export default App;
