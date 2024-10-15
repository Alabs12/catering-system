import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  role: 'admin' | 'cafeteria_staff' | 'requester';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // In a real application, you would make an API call to your backend here
    // For this example, we'll simulate a successful login
    const mockUser: User = {
      email,
      role: email.includes('admin') ? 'admin' : email.includes('staff') ? 'cafeteria_staff' : 'requester',
    };
    setUser(mockUser);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};