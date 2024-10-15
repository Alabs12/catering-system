import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      {user?.role === 'requester' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Your Orders</h3>
          {/* Add a list or table of user's orders here */}
        </div>
      )}
      {user?.role === 'cafeteria_staff' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Pending Orders</h3>
          {/* Add a list of pending orders for cafeteria staff to manage */}
        </div>
      )}
      {user?.role === 'admin' && (
        <div>
          <h3 className="text-xl font-semibold mb-4">System Overview</h3>
          {/* Add admin-specific dashboard content */}
        </div>
      )}
    </div>
  );
};

export default Dashboard;