import { Routes, Route, Navigate } from 'react-router-dom';
import EcobankForm from '../pages/EcobankForm';
import Settings from '../pages/Settings';
import Home from '../pages/Home';
import MyIssues from '../pages/MyIssues';
import History from '../pages/History';
import TeamsChannel from '../pages/TeamsChannel';
const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;