
import { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Bookmark, Coffee } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { cafes, Cafe } from '@/data/cafes';
import CafeCard from '@/components/CafeCard';

const BookmarksPage = () => {
  const { isAuthenticated, bookmarks } = useUser();
  const [bookmarkedCafes, setBookmarkedCafes] = useState<Cafe[]>([]);

  useEffect(() => {
    if (bookmarks.length > 0) {
      const filtered = cafes.filter(cafe => bookmarks.includes(cafe.id));
      setBookmarkedCafes(filtered);
    } else {
      setBookmarkedCafes([]);
    }
  }, [bookmarks]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen bg-coffee-light py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-coffee-dark mb-2">Your Bookmarked Cafés</h1>
        <p className="text-coffee-medium mb-8">Cafés you've saved for later</p>

        {bookmarkedCafes.length === 0 ? (
          <div className="bg-white rounded-lg p-12 text-center">
            <Bookmark className="w-16 h-16 text-coffee-medium mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-coffee-dark mb-2">No bookmarks yet</h2>
            <p className="text-coffee-medium mb-6">
              You haven't bookmarked any cafés. Explore our collection and save your favorites!
            </p>
            <Link 
              to="/cafes" 
              className="inline-block py-2 px-6 bg-coffee-brown hover:bg-coffee-dark text-white font-medium rounded-md transition-colors"
            >
              Explore Cafés
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookmarkedCafes.map(cafe => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;
