
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Shield, Bell } from 'lucide-react';

const Home = () => {
  const stats = [
    { label: 'Active Servers', value: '9' },
    { label: 'Total Users', value: '50' },
    { label: 'Commands Processed', value: '200+' },
    { label: 'Uptime', value: '100%' },
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'Advanced Communication',
      description: 'Custom embeds, welcome messages, and announcement systems to keep your community engaged.',
    },
    {
      icon: Shield,
      title: 'Powerful Moderation',
      description: 'Comprehensive moderation tools with logging, auto-moderation, and staff management features.',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Keep your community informed with intelligent notification systems and server statistics.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(/lovable-uploads/20533282-c1e8-49e0-a3b6-ffb5dc6ea189.png)',
            backgroundSize: 'contain',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-orange-800/20 to-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-300 bg-clip-text text-transparent">
            Your Server, Supercharged
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your Discord server with Nexi's powerful automation, moderation, and engagement tools. 
            Join lots of communities already using Nexi to enhance their server experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/features"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Features
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://discord.com/invite/nexibot"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              Join Discord
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Why Choose Nexi?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the powerful features that make Nexi the perfect choice for Discord server management.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-black/50 border border-orange-500/20 rounded-xl p-6 hover:border-orange-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/20 to-orange-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals to help us build the future of Discord server management.
          </p>
          <Link
            to="/careers"
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
          >
            View Open Positions
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
