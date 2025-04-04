
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { User, Mail, Coffee } from 'lucide-react';
import { useUser } from '@/context/UserContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';

const ProfilePage = () => {
  const { user, isAuthenticated, logout } = useUser();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      toast.success("Profile updated successfully!");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-coffee-light py-12 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-coffee-dark mb-8">Your Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-coffee-brown py-12 px-6 flex flex-col items-center">
            <Avatar className="h-24 w-24 border-4 border-white">
              <AvatarImage src={user?.avatar} alt={user?.name} />
              <AvatarFallback className="bg-coffee-medium text-white text-2xl">
                {user?.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <h2 className="text-white text-2xl font-bold mt-4">{user?.name}</h2>
            <p className="text-coffee-cream">{user?.email}</p>
          </div>
          
          <Tabs defaultValue="account" className="p-6">
            <TabsList>
              <TabsTrigger value="account">Account Settings</TabsTrigger>
              <TabsTrigger value="preferences">Preferences</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account" className="mt-6">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-coffee-dark mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="pl-10"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-coffee-dark mb-1">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-coffee-medium" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="pl-10"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="bg-coffee-brown hover:bg-coffee-dark text-white"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving Changes..." : "Save Changes"}
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-coffee-cream">
                <h3 className="text-lg font-semibold text-coffee-dark mb-4">Account Actions</h3>
                <Button 
                  variant="outline" 
                  className="text-red-600 border-red-600 hover:bg-red-50 hover:text-red-700"
                  onClick={logout}
                >
                  Sign Out
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="preferences" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-coffee-dark mb-4">Café Preferences</h3>
                
                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-3">
                    Preferred Café Ambiance
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Quiet", "Lively", "Cozy", "Modern", "Work-Friendly", "Social"].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-coffee-medium text-coffee-brown focus:ring-coffee-brown"
                        />
                        <span className="text-coffee-dark">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-coffee-dark mb-3">
                    Coffee Preferences
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Espresso", "Pour-Over", "Cold Brew", "French Press", "Specialty Drinks", "Tea"].map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          className="rounded border-coffee-medium text-coffee-brown focus:ring-coffee-brown"
                        />
                        <span className="text-coffee-dark">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <Button className="bg-coffee-brown hover:bg-coffee-dark text-white">
                  Update Preferences
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
