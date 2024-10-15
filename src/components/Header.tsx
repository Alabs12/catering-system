import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Coffee } from 'lucide-react';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Coffee size={24} />
          <span className="text-xl font-bold">Meeting Catering</span>
        </Link>
        <nav>
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard" className="hover:underline">Dashboard</Link>
              <Link to="/order" className="hover:underline">Place Order</Link>
              {user.role === 'admin' && (
                <Link to="/admin" className="hover:underline">Admin Panel</Link>
              )}
              <button onClick={logout} className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/" className="hover:underline">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;