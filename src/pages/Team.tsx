import React from 'react';
import { Crown, Star, Users, Code, BarChart, FileText, Heart, MessageSquare } from 'lucide-react';

const Team = () => {
  const owners = [
    {
      username: 'olliereaney',
      role: 'Managing Director',
      avatar: `/lovable-uploads/olllie.png`,
    },
    {
      username: 'benathongames',
      role: 'Managing Director',
      avatar: `/lovable-uploads/ben.png`,
    },
  ];

  const directors = [
    {
      username: 'jellybean_645',
      role: 'Director of Brand & Communications',
      avatar: `/lovable-uploads/paige.png`,
    },
    {
      username: 'ChukwumamDavid',
      role: 'Director of Technology',
      avatar: `/lovable-uploads/chukwumam.png`,
    },
    {
      username: 'swiftblade112',
      role: 'Director of Product & Insight',
      avatar: `/lovable-uploads/swift.png`,
    },
    {
      username: 'amidabest4',
      role: 'Director of Legal & Admin',
      avatar: `/lovable-uploads/amida.png`,
    },
  ];

  const teams = [
    {
      name: 'Development Team',
      icon: Code,
      count: 5,
      description: 'Building and maintaining our bot and web platform',
    },
    {
      name: 'Marketing Team',
      icon: MessageSquare,
      count: 1,
      description: 'Driving growth and managing brand communications',
    },
    {
      name: 'Legal Team',
      icon: FileText,
      count: 2,
      description: 'Handling contracts, compliance, and legal matters',
    },
    {
      name: 'Customer Experience Team',
      icon: Heart,
      count: 2,
      description: 'Providing excellent support to our community',
    },
    {
      name: 'Analytics Team',
      icon: BarChart,
      count: 0,
      description: 'Data analysis and customer insights',
      vacant: true,
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-orange-400 max-w-3xl mx-auto">
            Get to know the passionate individuals behind Nexi who work hard to make your Discord server experience exceptional.
          </p>
        </div>

        {/* Owners Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Crown className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-center text-orange-100">Nexi Owners</h2>
            <Crown className="w-6 h-6 text-orange-500" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {owners.map((owner, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-6 text-center">
                <img
                  src={owner.avatar}
                  alt={owner.username}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-orange-500"
                />
                <h3 className="text-xl font-semibold mb-2 text-orange-100">{owner.username}</h3>
                <p className="text-orange-400 font-medium">{owner.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-center text-orange-100">Directorship Team</h2>
            <Star className="w-6 h-6 text-orange-500" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directors.map((director, index) => (
              <div key={index} className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-xl p-6 text-center">
                <img
                  src={director.avatar}
                  alt={director.username}
                  className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-orange-500"
                />
                <h3 className="text-lg font-semibold mb-2 text-orange-100">{director.username}</h3>
                <p className="text-orange-400 text-sm font-medium">{director.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teams Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Users className="w-6 h-6 text-orange-500" />
            <h2 className="text-2xl font-bold text-center text-orange-100">Operational Teams</h2>
            <Users className="w-6 h-6 text-orange-500" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team, index) => (
              <div
                key={index}
                className={`border rounded-xl p-6 transition-all duration-300 ${
                  team.vacant
                    ? 'bg-red-500/10 border-red-500/30 hover:border-red-500/50'
                    : 'bg-gray-900/50 border-orange-800 hover:border-orange-500/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    team.vacant 
                      ? 'bg-red-500/20'
                      : 'bg-gradient-to-r from-orange-600 to-orange-700'
                  }`}>
                    <team.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-orange-100">{team.name}</h3>
                    <p className={`text-sm font-medium ${
                      team.vacant ? 'text-red-400' : 'text-orange-400'
                    }`}>
                      {team.vacant ? 'Currently Vacant' : `${team.count} Members`}
                    </p>
                  </div>
                </div>
                <p className="text-orange-400 text-sm mb-4">{team.description}</p>
                {team.vacant && (
                  <a
                    href="/careers"
                    className="text-red-400 hover:text-red-300 text-sm font-medium underline"
                  >
                    View Open Positions →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Join Us CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-xl border border-orange-500/20">
          <h3 className="text-2xl font-bold mb-4 text-orange-100">Want to Join Our Team?</h3>
          <p className="text-orange-400 mb-6">
            We're always looking for talented individuals to help us build the future of Discord server management.
          </p>
          <a
            href="/careers"
            className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
