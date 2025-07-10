import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
}

interface DashboardProps {
  stats: Stat[];
}

export function Dashboard({ stats }: DashboardProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Campaign Dashboard
        </h2>
        <p className="text-gray-600">
          Track your influencer marketing performance
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const isPositive = stat.change.startsWith('+');
          
          return (
            <div key={index} className="card">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <span className={`text-sm font-medium ${
                  isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Campaigns
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Summer Collection Launch', status: 'Active', influencers: 12 },
              { name: 'Tech Product Review', status: 'Completed', influencers: 8 },
              { name: 'Fitness Challenge', status: 'Planning', influencers: 15 },
            ].map((campaign, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{campaign.name}</h4>
                  <p className="text-sm text-gray-600">{campaign.influencers} influencers</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  campaign.status === 'Active' ? 'bg-green-100 text-green-700' :
                  campaign.status === 'Completed' ? 'bg-blue-100 text-blue-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {campaign.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Top Performing Influencers
          </h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', engagement: '4.2%', reach: '125K' },
              { name: 'Alex Chen', engagement: '5.1%', reach: '89K' },
              { name: 'Maya Rodriguez', engagement: '3.8%', reach: '203K' },
            ].map((influencer, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{influencer.name}</h4>
                  <p className="text-sm text-gray-600">Reach: {influencer.reach}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">{influencer.engagement}</p>
                  <p className="text-sm text-gray-600">Engagement</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}