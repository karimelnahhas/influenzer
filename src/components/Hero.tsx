import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connect with Top
            <span className="block bg-gradient-to-r from-accent-300 to-white bg-clip-text text-transparent">
              Influencers
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover, connect, and collaborate with authentic creators who align with your brand values
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="btn-primary bg-white text-primary-600 hover:bg-gray-50">
              Start Discovering
            </button>
            <button className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <TrendingUp className="w-12 h-12 mb-4 text-accent-300" />
              <h3 className="text-lg font-semibold mb-2">High Engagement</h3>
              <p className="text-primary-100 text-center">
                Connect with influencers who have proven engagement rates
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Users className="w-12 h-12 mb-4 text-accent-300" />
              <h3 className="text-lg font-semibold mb-2">Verified Creators</h3>
              <p className="text-primary-100 text-center">
                All influencers are verified and vetted for authenticity
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
              <Zap className="w-12 h-12 mb-4 text-accent-300" />
              <h3 className="text-lg font-semibold mb-2">Quick Matching</h3>
              <p className="text-primary-100 text-center">
                AI-powered matching to find the perfect fit for your brand
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}