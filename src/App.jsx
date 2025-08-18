import React from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="flex">
      <div className="flex-1 bg-gray-50">
        <Topbar />
      </div>
    </div>
  );
}

export default App;
