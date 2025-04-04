
import { Facebook, Twitter, Instagram, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-coffee-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-coffee-cream" />
              <span className="text-xl font-bold text-white">Le Café</span>
            </Link>
            <p className="text-coffee-cream mb-4">
              Discover the perfect café for every occasion, from quiet spots to work to lively meeting places.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-coffee-cream">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-coffee-cream">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-coffee-cream">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-coffee-cream hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/cafes" className="text-coffee-cream hover:text-white">All Cafés</Link>
              </li>
              <li>
                <Link to="/bookmarks" className="text-coffee-cream hover:text-white">Bookmarks</Link>
              </li>
              <li>
                <Link to="/profile" className="text-coffee-cream hover:text-white">Profile</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cafes?tag=Work-Friendly" className="text-coffee-cream hover:text-white">Work-Friendly</Link>
              </li>
              <li>
                <Link to="/cafes?tag=Pet-Friendly" className="text-coffee-cream hover:text-white">Pet-Friendly</Link>
              </li>
              <li>
                <Link to="/cafes?tag=Artisanal" className="text-coffee-cream hover:text-white">Artisanal</Link>
              </li>
              <li>
                <Link to="/cafes?tag=Quiet" className="text-coffee-cream hover:text-white">Quiet Spaces</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-coffee-cream mb-2">hello@cafecompass.com</p>
            <p className="text-coffee-cream mb-2">+1 (555) 123-4567</p>
            <p className="text-coffee-cream">123 Coffee Lane<br />Seattle, WA 98101</p>
          </div>
        </div>

        <div className="border-t border-coffee-medium mt-8 pt-8 text-center text-coffee-cream">
          <p>&copy; {currentYear} Le Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
