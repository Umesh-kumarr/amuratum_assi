import React from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="h-screen flex flex-col bg-[#f6f6f5]">
      <div className="w-full shadow-md bg-white">
        <Topbar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-col justify-end">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <Dashboard />
        </div>
      </div>

    </div>
  );
}

export default App;
