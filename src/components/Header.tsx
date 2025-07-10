import React from 'react';
import { Search, Bell, User, BarChart3 } from 'lucide-react';

interface HeaderProps {
  activeTab: 'discover' | 'dashboard';
  onTabChange: (tab: 'discover' | 'dashboard') => void;
}

export function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">I</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Influenzer</span>
            </div>
            
            <nav className="flex space-x-6">
              <button
                onClick={() => onTabChange('discover')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'discover'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Search className="w-4 h-4 inline mr-2" />
                Discover
              </button>
              <button
                onClick={() => onTabChange('dashboard')}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeTab === 'dashboard'
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <BarChart3 className="w-4 h-4 inline mr-2" />
                Dashboard
              </button>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 p-2 text-gray-700 hover:text-gray-900 transition-colors">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}