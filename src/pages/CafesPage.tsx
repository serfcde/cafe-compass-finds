
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Filter, MapPin, DollarSign, X } from 'lucide-react';
import { cafes, Cafe } from '@/data/cafes';
import CafeCard from '@/components/CafeCard';
import SearchBar from '@/components/SearchBar';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from '@/components/ui/checkbox';

const CafesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredCafes, setFilteredCafes] = useState<Cafe[]>(cafes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([1, 3]);
  const [minRating, setMinRating] = useState(0);
  
  const allTags = Array.from(
    new Set(
      cafes.flatMap(cafe => cafe.tags)
    )
  ).sort();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    const tagParam = params.get('tag');
    
    if (searchParam) {
      setSearchTerm(searchParam);
    }
    
    if (tagParam) {
      setSelectedTags([tagParam]);
    }
    
    applyFilters();
  }, [location.search]);

  const applyFilters = () => {
    let results = cafes;
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(cafe => 
        cafe.name.toLowerCase().includes(term) || 
        cafe.description.toLowerCase().includes(term) ||
        cafe.city.toLowerCase().includes(term) ||
        cafe.tags.some(tag => tag.toLowerCase().includes(term))
      );
    }
    
    if (selectedTags.length > 0) {
      results = results.filter(cafe =>
        selectedTags.some(tag => cafe.tags.includes(tag))
      );
    }
    
    results = results.filter(cafe => 
      cafe.priceLevel >= priceRange[0] && cafe.priceLevel <= priceRange[1]
    );
    
    results = results.filter(cafe => cafe.rating >= minRating);
    
    setFilteredCafes(results);
  };

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setPriceRange([1, 3]);
    setMinRating(0);
    navigate('/cafes');
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedTags, priceRange, minRating]);

  return (
    <div className="min-h-screen bg-coffee-light py-12 px-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-coffee-dark mb-2">Find Your Perfect Café</h1>
          <p className="text-coffee-medium mb-6">Browse our collection of handpicked cafés</p>
          
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="w-full md:w-2/3">
              <SearchBar />
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 border-coffee-medium">
                  <Filter className="h-4 w-4" />
                  <span>Filters</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Filter Options</SheetTitle>
                  <SheetDescription>
                    Refine your café search with these filters
                  </SheetDescription>
                </SheetHeader>
                
                <div className="py-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Price Range</h3>
                    <Slider
                      min={1}
                      max={3}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-coffee-medium">
                      <span>Budget</span>
                      <span>Mid-range</span>
                      <span>Premium</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">Minimum Rating</h3>
                    <Slider
                      min={0}
                      max={5}
                      step={0.5}
                      value={[minRating]}
                      onValueChange={(value) => setMinRating(value[0])}
                      className="mb-2"
                    />
                    <div className="flex justify-between text-sm text-coffee-medium">
                      <span>Any</span>
                      <span>5 ★</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Categories</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {allTags.map(tag => (
                        <div key={tag} className="flex items-center space-x-2">
                          <Checkbox 
                            id={`tag-${tag}`} 
                            checked={selectedTags.includes(tag)}
                            onCheckedChange={() => toggleTag(tag)}
                          />
                          <label
                            htmlFor={`tag-${tag}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {tag}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-6"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          {}
          {(selectedTags.length > 0 || searchTerm || minRating > 0 || priceRange[0] > 1 || priceRange[1] < 3) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedTags.map(tag => (
                <div key={tag} className="bg-coffee-cream text-coffee-dark px-3 py-1 rounded-full text-sm flex items-center">
                  {tag}
                  <button 
                    className="ml-2" 
                    onClick={() => toggleTag(tag)}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              
              {searchTerm && (
                <div className="bg-coffee-cream text-coffee-dark px-3 py-1 rounded-full text-sm flex items-center">
                  Search: {searchTerm}
                  <button 
                    className="ml-2" 
                    onClick={() => {
                      setSearchTerm('');
                      navigate('/cafes');
                    }}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              
              {minRating > 0 && (
                <div className="bg-coffee-cream text-coffee-dark px-3 py-1 rounded-full text-sm flex items-center">
                  {minRating}+ Stars
                  <button 
                    className="ml-2" 
                    onClick={() => setMinRating(0)}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              
              {(priceRange[0] > 1 || priceRange[1] < 3) && (
                <div className="bg-coffee-cream text-coffee-dark px-3 py-1 rounded-full text-sm flex items-center">
                  Price: {Array(priceRange[0]).fill('$').join('')} - {Array(priceRange[1]).fill('$').join('')}
                  <button 
                    className="ml-2" 
                    onClick={() => setPriceRange([1, 3])}
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              
              <button 
                className="text-coffee-brown hover:text-coffee-dark text-sm underline"
                onClick={clearFilters}
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {filteredCafes.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-coffee-dark mb-4">No cafés match your search</h3>
            <p className="text-coffee-medium mb-6">Try adjusting your filters or search terms</p>
            <Button onClick={clearFilters} className="bg-coffee-brown hover:bg-coffee-dark text-white">
              Clear All Filters
            </Button>
          </div>
        ) : (
          <>
            <p className="text-coffee-medium mb-6">{filteredCafes.length} café{filteredCafes.length !== 1 ? 's' : ''} found</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCafes.map(cafe => (
                <CafeCard key={cafe.id} cafe={cafe} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CafesPage;
