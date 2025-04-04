
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { toast } from '@/components/ui/sonner';

interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

interface UserContextType {
  user: User | null;
  isAuthenticated: boolean;
  bookmarks: number[];
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleBookmark: (cafeId: number) => void;
  isBookmarked: (cafeId: number) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<number[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('cafeCompassUser');
    const storedBookmarks = localStorage.getItem('cafeCompassBookmarks');
    
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    
    if (storedBookmarks) {
      setBookmarks(JSON.parse(storedBookmarks));
    }
  }, []);

  useEffect(() => {
    if (bookmarks.length > 0) {
      localStorage.setItem('cafeCompassBookmarks', JSON.stringify(bookmarks));
    }
  }, [bookmarks]);

  const login = async (email: string, password: string) => {
    try {
      if (email && password) {
        const mockUser = {
          id: 1,
          name: email.split('@')[0],
          email: email,
          avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('cafeCompassUser', JSON.stringify(mockUser));
        toast.success("Successfully logged in!");
      } else {
        throw new Error('Please provide email and password');
      }
    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      if (name && email && password) {
        const mockUser = {
          id: 1,
          name: name,
          email: email,
          avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
        };
        
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('cafeCompassUser', JSON.stringify(mockUser));
        toast.success("Successfully registered and logged in!");
      } else {
        throw new Error('Please fill all required fields');
      }
    } catch (error) {
      toast.error("Registration failed. Please try again.");
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('cafeCompassUser');
    toast.success("Logged out successfully");
  };

  const toggleBookmark = (cafeId: number) => {
    if (isBookmarked(cafeId)) {
      setBookmarks(bookmarks.filter(id => id !== cafeId));
      toast.success("Removed from your bookmarks");
    } else {
      setBookmarks([...bookmarks, cafeId]);
      toast.success("Added to your bookmarks");
    }
  };

  const isBookmarked = (cafeId: number) => {
    return bookmarks.includes(cafeId);
  };

  return (
    <UserContext.Provider value={{
      user,
      isAuthenticated,
      bookmarks,
      login,
      register,
      logout,
      toggleBookmark,
      isBookmarked
    }}>
      {children}
    </UserContext.Provider>
  );
};
