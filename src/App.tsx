import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Dashboard } from './components/Dashboard';
import { InfluencerCard } from './components/InfluencerCard';
import { SearchFilters } from './components/SearchFilters';
import { Users, TrendingUp, Star, MessageCircle } from 'lucide-react';

const mockInfluencers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    handle: '@sarahjohnson',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    followers: 125000,
    engagement: 4.2,
    category: 'Lifestyle',
    verified: true,
    rating: 4.8,
    price: '$500-1000',
    bio: 'Lifestyle content creator passionate about sustainable living and wellness.',
  },
  {
    id: 2,
    name: 'Alex Chen',
    handle: '@alexchen_tech',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    followers: 89000,
    engagement: 5.1,
    category: 'Technology',
    verified: true,
    rating: 4.9,
    price: '$750-1500',
    bio: 'Tech reviewer and gadget enthusiast. Helping people make informed tech decisions.',
  },
  {
    id: 3,
    name: 'Maya Rodriguez',
    handle: '@maya_fitness',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    followers: 203000,
    engagement: 3.8,
    category: 'Fitness',
    verified: true,
    rating: 4.7,
    price: '$400-800',
    bio: 'Certified personal trainer inspiring healthy lifestyles through fitness and nutrition.',
  },
  {
    id: 4,
    name: 'David Kim',
    handle: '@davidkim_food',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    followers: 156000,
    engagement: 4.5,
    category: 'Food',
    verified: false,
    rating: 4.6,
    price: '$300-600',
    bio: 'Food blogger exploring culinary adventures and sharing delicious recipes.',
  },
];

function App() {
  const [activeTab, setActiveTab] = useState<'discover' | 'dashboard'>('discover');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredInfluencers = mockInfluencers.filter(influencer => {
    const matchesSearch = influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         influencer.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         influencer.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || influencer.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { icon: Users, label: 'Total Influencers', value: '2,847', change: '+12%' },
    { icon: TrendingUp, label: 'Active Campaigns', value: '156', change: '+8%' },
    { icon: Star, label: 'Avg Rating', value: '4.7', change: '+0.2' },
    { icon: MessageCircle, label: 'Messages Sent', value: '1,234', change: '+23%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      {activeTab === 'discover' ? (
        <>
          <Hero />
          
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Discover Influencers
              </h2>
              <p className="text-gray-600">
                Find the perfect creators for your brand campaigns
              </p>
            </div>

            <SearchFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredInfluencers.map((influencer) => (
                <InfluencerCard key={influencer.id} influencer={influencer} />
              ))}
            </div>

            {filteredInfluencers.length === 0 && (
              <div className="text-center py-12">
                <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No influencers found
                </h3>
                <p className="text-gray-500">
                  Try adjusting your search criteria or filters
                </p>
              </div>
            )}
          </main>
        </>
      ) : (
        <Dashboard stats={stats} />
      )}
    </div>
  );
}

export default App;