import React, { useState } from 'react';

const AdminPanel: React.FC = () => {
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <div className="mb-6">
        <button
          onClick={() => setActiveTab('orders')}
          className={`mr-4 ${activeTab === 'orders' ? 'font-bold' : ''}`}
        >
          Order History
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={activeTab === 'logs' ? 'font-bold' : ''}
        >
          System Logs
        </button>
      </div>
      {activeTab === 'orders' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Order History</h3>
          {/* Add a table or list of all orders here */}
        </div>
      )}
      {activeTab === 'logs' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">System Logs</h3>
          {/* Add a list or table of system logs here */}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;