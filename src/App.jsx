import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layout.jsx";
import EditNoteSet from "./pages/EditNoteSet.jsx";
import TypeNotes from "./pages/TypeNotes.jsx";
import Login from "./pages/Login.jsx";
import { AuthProvider } from "./state/AuthContext.jsx";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Router basename="">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/edit/*" element={<EditNoteSet />} />
            <Route path="/type/*" element={<TypeNotes />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </Layout>
    </AuthProvider>
  );
}

export default App;
