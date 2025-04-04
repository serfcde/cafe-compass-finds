
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Coffee, ChevronsRight, Star } from 'lucide-react';
import { cafes } from '@/data/cafes';
import SearchBar from '@/components/SearchBar';
import CafeCard from '@/components/CafeCard';

const HomePage = () => {
  const [trendingCafes, setTrendingCafes] = useState(cafes.filter(cafe => cafe.trending));
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-section py-20 px-6 text-center text-white">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Perfect Café Experience</h1>
          <p className="text-xl mb-8">Discover amazing cafés for work, study, dates, or just a great cup of coffee</p>
          <div className="flex justify-center">
            <SearchBar />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-coffee-dark text-center mb-12">Why Le Café
            
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-coffee-light p-6 rounded-lg text-center">
              <div className="bg-coffee-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-coffee-brown" />
              </div>
              <h3 className="text-xl font-bold text-coffee-dark mb-2">Curated Selection</h3>
              <p className="text-coffee-medium">Discover hand-picked cafés that match your vibe and preferences.</p>
            </div>
            
            <div className="bg-coffee-light p-6 rounded-lg text-center">
              <div className="bg-coffee-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-coffee-brown" />
              </div>
              <h3 className="text-xl font-bold text-coffee-dark mb-2">Authentic Reviews</h3>
              <p className="text-coffee-medium">Read honest opinions from real coffee enthusiasts.</p>
            </div>
            
            <div className="bg-coffee-light p-6 rounded-lg text-center">
              <div className="bg-coffee-cream w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="h-8 w-8 text-coffee-brown" />
              </div>
              <h3 className="text-xl font-bold text-coffee-dark mb-2">Menu Comparisons</h3>
              <p className="text-coffee-medium">Compare prices and menus to find the best value for your taste.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Cafés Section */}
      <div className="py-16 px-6 bg-coffee-light">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-coffee-dark">Trending Cafés</h2>
            <Link to="/cafes" className="flex items-center text-coffee-brown hover:text-coffee-dark">
              <span className="mr-1">See all</span>
              <ChevronsRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCafes.map(cafe => (
              <CafeCard key={cafe.id} cafe={cafe} />
            ))}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-coffee-dark text-center mb-8">Explore by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/cafes?tag=Work-Friendly" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" 
                  alt="Work-Friendly" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">Work-Friendly</span>
                </div>
              </div>
            </Link>
            
            <Link to="/cafes?tag=Quiet" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBjYWZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Quiet Spaces" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">Quiet Spaces</span>
                </div>
              </div>
            </Link>
            
            <Link to="/cafes?tag=Artisanal" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3d4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJha2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Artisanal" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">Artisanal</span>
                </div>
              </div>
            </Link>
            
            <Link to="/cafes?tag=Pet-Friendly" className="group">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Pet-Friendly" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <span className="text-white font-medium">Pet-Friendly</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 bg-coffee-dark text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Ready to discover your next favorite café?</h2>
          <p className="text-coffee-cream mb-8">Join our community of coffee enthusiasts and café explorers.</p>
          <Link to="/register" className="inline-block py-3 px-8 bg-coffee-brown hover:bg-coffee-medium text-white font-medium rounded-md transition-colors">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
