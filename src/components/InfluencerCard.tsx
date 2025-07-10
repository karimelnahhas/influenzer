import React from 'react';
import { Star, Users, TrendingUp, CheckCircle, MessageCircle } from 'lucide-react';

interface Influencer {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  followers: number;
  engagement: number;
  category: string;
  verified: boolean;
  rating: number;
  price: string;
  bio: string;
}

interface InfluencerCardProps {
  influencer: Influencer;
}

export function InfluencerCard({ influencer }: InfluencerCardProps) {
  const formatFollowers = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };

  return (
    <div className="card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={influencer.avatar}
            alt={influencer.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          {influencer.verified && (
            <CheckCircle className="absolute -bottom-1 -right-1 w-5 h-5 text-primary-500 bg-white rounded-full" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-semibold text-gray-900 truncate">{influencer.name}</h3>
          </div>
          <p className="text-sm text-gray-500 mb-2">{influencer.handle}</p>
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
            {influencer.category}
          </span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{influencer.bio}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-900">
            {formatFollowers(influencer.followers)}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-gray-400" />
          <span className="text-sm font-medium text-gray-900">
            {influencer.engagement}%
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium text-gray-900">
            {influencer.rating}
          </span>
        </div>
        
        <div className="text-sm font-medium text-gray-900">
          {influencer.price}
        </div>
      </div>

      <div className="flex space-x-2">
        <button className="flex-1 btn-primary text-sm py-2">
          <MessageCircle className="w-4 h-4 inline mr-1" />
          Contact
        </button>
        <button className="btn-secondary text-sm py-2 px-4">
          View Profile
        </button>
      </div>
    </div>
  );
}