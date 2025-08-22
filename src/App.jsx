import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Pages/Dashboard';
import ReferralTool from './Pages/ReferralTool';
import EarningHistory from './Pages/EarningHistory';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col bg-[#f6f6f5]">
        <div className="w-full shadow-md bg-white">
          <Topbar />
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex flex-col">
            <Sidebar />
          </div>
          <div className="flex-1">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/referraltool" element={<ReferralTool/>} />
              <Route path="/earninghistory" element={<EarningHistory/>} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;