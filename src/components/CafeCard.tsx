
import { Link } from 'react-router-dom';
import { Star, Bookmark, BookmarkCheck, MapPin, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Cafe } from '@/data/cafes';
import { useUser } from '@/context/UserContext';

interface CafeCardProps {
  cafe: Cafe;
}

const CafeCard: React.FC<CafeCardProps> = ({ cafe }) => {
  const { isBookmarked, toggleBookmark, isAuthenticated } = useUser();
  
  const renderPriceLevel = (level: number) => {
    return Array(level)
      .fill(0)
      .map((_, index) => (
        <DollarSign key={index} className="h-4 w-4 inline-block text-coffee-medium" />
      ));
  };

  return (
    <div className="cafe-card bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={cafe.mainImage}
          alt={cafe.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          {isAuthenticated && (
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleBookmark(cafe.id);
              }}
              className="bg-white p-2 rounded-full shadow-md hover:bg-coffee-cream transition-colors"
            >
              {isBookmarked(cafe.id) ? (
                <BookmarkCheck className="h-5 w-5 text-coffee-brown" />
              ) : (
                <Bookmark className="h-5 w-5 text-coffee-dark" />
              )}
            </button>
          )}
        </div>
        {cafe.trending && (
          <div className="absolute top-2 left-2">
            <Badge className="bg-coffee-accent text-white">Trending</Badge>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-coffee-dark">{cafe.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{cafe.rating.toFixed(1)}</span>
          </div>
        </div>
        <p className="text-coffee-dark text-sm mb-3 line-clamp-2">{cafe.description}</p>
        <div className="flex items-center text-sm text-coffee-medium mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {cafe.city}
          <span className="mx-2">•</span>
          <span>{renderPriceLevel(cafe.priceLevel)}</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {cafe.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="cafe-badge">{tag}</span>
          ))}
        </div>
        <Link
          to={`/cafe/${cafe.id}`}
          className="block text-center py-2 bg-coffee-brown hover:bg-coffee-dark text-white font-medium rounded-md transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CafeCard;
