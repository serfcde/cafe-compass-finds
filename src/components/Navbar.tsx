
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Coffee, User, Bookmark, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser } from '@/context/UserContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-coffee-cream py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-6 w-6 text-coffee-brown" />
          <span className="text-xl font-bold text-coffee-dark">Le Café</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-coffee-dark hover:text-coffee-brown font-medium">Home</Link>
          <Link to="/cafes" className="text-coffee-dark hover:text-coffee-brown font-medium">Cafés</Link>
          {isAuthenticated && (
            <Link to="/bookmarks" className="text-coffee-dark hover:text-coffee-brown font-medium">Bookmarks</Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-coffee-medium text-white">
                      {user?.name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to="/bookmarks">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Bookmarks
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={logout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-coffee-dark hover:text-coffee-brown">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-coffee-brown hover:bg-coffee-dark text-white">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-coffee-dark" />
          ) : (
            <Menu className="h-6 w-6 text-coffee-dark" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-coffee-cream p-4 shadow-lg z-40 animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-coffee-dark hover:text-coffee-brown font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/cafes" 
              className="text-coffee-dark hover:text-coffee-brown font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cafés
            </Link>
            {isAuthenticated && (
              <>
                <Link 
                  to="/bookmarks" 
                  className="text-coffee-dark hover:text-coffee-brown font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bookmarks
                </Link>
                <Link 
                  to="/profile" 
                  className="text-coffee-dark hover:text-coffee-brown font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
                <button 
                  className="text-left text-coffee-dark hover:text-coffee-brown font-medium py-2"
                  onClick={() => {
                    logout();
                    setIsMenuOpen(false);
                  }}
                >
                  Logout
                </button>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Link 
                  to="/login" 
                  className="text-coffee-dark hover:text-coffee-brown font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="text-coffee-dark hover:text-coffee-brown font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
