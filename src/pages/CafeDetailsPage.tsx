
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Globe, 
  Star, 
  DollarSign,
  Bookmark,
  BookmarkCheck,
  ThumbsUp,
  ThumbsDown,
  Coffee
} from 'lucide-react';
import { cafes, Cafe } from '@/data/cafes';
import { useUser } from '@/context/UserContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/components/ui/sonner';

const CafeDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [cafe, setCafe] = useState<Cafe | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const { isAuthenticated, isBookmarked, toggleBookmark } = useUser();

  useEffect(() => {
    if (id) {
      const foundCafe = cafes.find(c => c.id === parseInt(id));
      if (foundCafe) {
        setCafe(foundCafe);
        setSelectedImage(foundCafe.mainImage);
      }
    }
  }, [id]);

  if (!cafe) {
    return (
      <div className="min-h-screen bg-coffee-light flex justify-center items-center">
        <div className="text-center">
          <Coffee className="h-12 w-12 text-coffee-medium mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-coffee-dark mb-2">Café Not Found</h2>
          <p className="text-coffee-medium mb-6">The café you're looking for doesn't exist or has been removed.</p>
          <Link to="/cafes" className="btn-primary">
            Browse All Cafés
          </Link>
        </div>
      </div>
    );
  }

  const renderPriceLevel = (level: number) => {
    return Array(level)
      .fill(0)
      .map((_, index) => (
        <DollarSign key={index} className="h-4 w-4 inline-block text-coffee-medium" />
      ));
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < Math.floor(rating) 
              ? 'text-yellow-400 fill-yellow-400' 
              : index < rating 
                ? 'text-yellow-400 fill-yellow-400 opacity-50' 
                : 'text-gray-300'
          }`}
        />
      ));
  };

  const handleLikeReview = (reviewId: number) => {
    if (!isAuthenticated) {
      toast.error("Please log in to like reviews");
      return;
    }
    toast.success("Review liked!");
  };

  const handleDislikeReview = (reviewId: number) => {
    if (!isAuthenticated) {
      toast.error("Please log in to dislike reviews");
      return;
    }
    toast.success("Review disliked!");
  };

  const handleAddReview = () => {
    if (!isAuthenticated) {
      toast.error("Please log in to leave a review");
      return;
    }
    toast.info("Review feature coming soon!");
  };

  return (
    <div className="min-h-screen bg-coffee-light pb-12">
      {/* Hero Section */}
      <div 
        className="relative h-64 md:h-96 bg-cover bg-center" 
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-end">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{cafe.name}</h1>
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {renderStars(cafe.rating)}
                </div>
                <span className="text-white">{cafe.rating.toFixed(1)} ({cafe.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{cafe.address}, {cafe.city}, {cafe.zipCode}</span>
                <span className="mx-2">•</span>
                <span>{renderPriceLevel(cafe.priceLevel)}</span>
              </div>
            </div>
            
            {isAuthenticated && (
              <Button 
                onClick={() => toggleBookmark(cafe.id)}
                className={`mt-4 md:mt-0 flex items-center gap-2 ${
                  isBookmarked(cafe.id) 
                    ? 'bg-coffee-cream text-coffee-dark' 
                    : 'bg-coffee-brown text-white'
                }`}
              >
                {isBookmarked(cafe.id) ? (
                  <>
                    <BookmarkCheck className="h-5 w-5" />
                    <span>Bookmarked</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="h-5 w-5" />
                    <span>Bookmark</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="about">
              <TabsList className="mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
              </TabsList>
              
              <TabsContent value="about" className="animate-fade-in">
                <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                  <h2 className="text-xl font-bold text-coffee-dark mb-4">About {cafe.name}</h2>
                  <p className="text-coffee-medium mb-6">{cafe.description}</p>
                  
                  <h3 className="text-lg font-semibold text-coffee-dark mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cafe.amenities.map((amenity, index) => (
                      <Badge key={index} variant="outline" className="bg-coffee-cream border-coffee-medium text-coffee-dark">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-coffee-dark mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {cafe.tags.map((tag, index) => (
                      <Link 
                        key={index} 
                        to={`/cafes?tag=${encodeURIComponent(tag)}`}
                        className="cafe-badge"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="menu" className="animate-fade-in">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-coffee-dark mb-6">Menu</h2>
                  
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-coffee-dark mb-4 flex items-center">
                      <Coffee className="h-5 w-5 mr-2" />
                      Drinks
                    </h3>
                    <div className="space-y-4">
                      {cafe.menu.drinks.map(item => (
                        <div key={item.id} className="border-b border-coffee-cream pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-coffee-dark flex items-center">
                                {item.name}
                                {item.popular && (
                                  <Badge className="ml-2 bg-coffee-brown text-white">Popular</Badge>
                                )}
                              </h4>
                              <p className="text-sm text-coffee-medium">{item.description}</p>
                            </div>
                            <span className="font-semibold text-coffee-dark">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-coffee-dark mb-4">Food</h3>
                    <div className="space-y-4">
                      {cafe.menu.food.map(item => (
                        <div key={item.id} className="border-b border-coffee-cream pb-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-medium text-coffee-dark flex items-center">
                                {item.name}
                                {item.popular && (
                                  <Badge className="ml-2 bg-coffee-brown text-white">Popular</Badge>
                                )}
                              </h4>
                              <p className="text-sm text-coffee-medium">{item.description}</p>
                            </div>
                            <span className="font-semibold text-coffee-dark">${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="animate-fade-in">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-coffee-dark">Reviews</h2>
                    <Button onClick={handleAddReview} className="bg-coffee-brown hover:bg-coffee-dark text-white">
                      Write a Review
                    </Button>
                  </div>
                  
                  {cafe.reviews.length === 0 ? (
                    <p className="text-coffee-medium">No reviews yet. Be the first to leave a review!</p>
                  ) : (
                    <div className="space-y-6">
                      {cafe.reviews.map(review => (
                        <div key={review.id} className="border-b border-coffee-cream pb-6">
                          <div className="flex items-start">
                            <img 
                              src={review.userAvatar} 
                              alt={review.userName} 
                              className="w-12 h-12 rounded-full mr-4 object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-coffee-dark">{review.userName}</h4>
                              <div className="flex items-center mb-2">
                                <div className="flex mr-2">
                                  {renderStars(review.rating)}
                                </div>
                                <span className="text-sm text-coffee-medium">{review.date}</span>
                              </div>
                              <p className="text-coffee-dark mb-3">{review.comment}</p>
                              <div className="flex items-center gap-4">
                                <button 
                                  onClick={() => handleLikeReview(review.id)}
                                  className="flex items-center gap-1 text-sm text-coffee-medium hover:text-coffee-brown"
                                >
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>{review.likes}</span>
                                </button>
                                <button 
                                  onClick={() => handleDislikeReview(review.id)}
                                  className="flex items-center gap-1 text-sm text-coffee-medium hover:text-coffee-brown"
                                >
                                  <ThumbsDown className="h-4 w-4" />
                                  <span>{review.dislikes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="photos" className="animate-fade-in">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-coffee-dark mb-6">Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {cafe.images.map(image => (
                      <div 
                        key={image.id} 
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(image.url)}
                      >
                        <img 
                          src={image.url} 
                          alt={image.alt} 
                          className={`w-full h-full object-cover transition-opacity ${
                            selectedImage === image.url ? 'ring-4 ring-coffee-brown' : ''
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6 sticky top-24">
              <h3 className="text-lg font-semibold text-coffee-dark mb-4">Contact & Hours</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-coffee-brown mr-3 mt-0.5" />
                  <div>
                    <span className="block text-coffee-dark">{cafe.address}</span>
                    <span className="block text-coffee-dark">{cafe.city}, {cafe.zipCode}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-coffee-brown mr-3" />
                  <a href={`tel:${cafe.phone}`} className="text-coffee-dark hover:text-coffee-brown">
                    {cafe.phone}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-coffee-brown mr-3" />
                  <a href={`mailto:${cafe.email}`} className="text-coffee-dark hover:text-coffee-brown">
                    {cafe.email}
                  </a>
                </div>
                
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-coffee-brown mr-3" />
                  <a 
                    href={`https://${cafe.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-coffee-dark hover:text-coffee-brown"
                  >
                    {cafe.website}
                  </a>
                </div>
              </div>
              
              <h4 className="flex items-center font-medium text-coffee-dark mb-3">
                <Clock className="h-5 w-5 text-coffee-brown mr-2" />
                Opening Hours
              </h4>
              
              <div className="space-y-2">
                {Object.entries(cafe.openingHours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="text-coffee-dark">{day}</span>
                    <span className="text-coffee-medium">{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeDetailsPage;
