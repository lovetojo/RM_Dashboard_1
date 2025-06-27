import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import EcobankForm from "./pages/EcobankForm";
import Settings from "./pages/Settings";
import MyIssues from "./pages/MyIssues";
import History from "./pages/History";
import TeamsChannel from "./pages/TeamsChannel";

function App() {
  return (
    <Router>
      <div className="app-container flex">
        <Sidebar />
        <div className="main-content flex-1 p-4">
          <Routes>
                <Route path="/ecobankform" element={
                    <EcobankForm />
                } />
                <Route path="/settings" element={
                    <Settings />
                } />
                <Route path="/" element={
                    <Home />
                } />
                <Route path="/myissues" element={
                    <MyIssues />
                } />
                <Route path="/history" element={
                    <History />
                } />
                <Route path="/teamschannel" element={
                    <TeamsChannel />
                } />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
