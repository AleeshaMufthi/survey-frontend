import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import AdminRoutes from './routes/AdminRoutes';
import SurveyForm from './pages/SurveyForm';

function App() {
  return (
    <div className="bg-white">
        <Routes> 
          <Route path="/" element={<SurveyForm />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
    </div>
  );
}

export default App;

