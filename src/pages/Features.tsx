
import React from 'react';
import { Check, X } from 'lucide-react';

const Features = () => {
  const features = [
    { name: 'Welcome Messages', free: true, premium: true },
    { name: 'Server Stats', free: true, premium: true },
    { name: 'Custom embeds with buttons and drop-down menus', free: true, premium: true },
    { name: 'Sticky Messages', free: true, premium: true },
    { name: 'LOA Requests', free: true, premium: true },
    { name: 'Question of the Day', free: true, premium: true },
    { name: 'Staff Feedback System', free: true, premium: true },
    { name: 'Give review command', free: true, premium: true },
    { name: '/promote and /infract commands', free: true, premium: true },
    { name: '/suggest and staff feedback commands', free: true, premium: true },
    { name: '/suggest Command with Voting', free: true, premium: true },
    { name: 'Logging system', free: true, premium: true },
    { name: 'Advanced Moderation & Server Management', free: true, premium: true },
    { name: 'Economy', free: true, premium: true },
    { name: 'Limited Support Ticket Functions', free: true, premium: true },
    { name: '/announce command', free: true, premium: true },
    { name: 'Spotify music bot & connect to shockwaves radio', free: true, premium: true },
    { name: 'Roblox Shift Logging', free: true, premium: true },
    { name: 'Giveaways', free: true, premium: true },
    { name: 'Roblox Member Counter Webhook', free: true, premium: true },
    { name: 'Roblox verification & Role Binding', free: true, premium: true },
    { name: 'Full Support Ticket Functions', free: false, premium: true },
    { name: 'Google Sheets integration', free: false, premium: true },
    { name: 'Order system', free: false, premium: true },
    { name: 'Shop integration with Roblox', free: false, premium: true },
    { name: 'Roblox & Discord Ban Appeals', free: false, premium: true },
    { name: 'AI Moderation', free: false, premium: true },
    { name: 'Roblox application centre integration', free: false, premium: true },
    { name: 'Jotform, Google Calendar & Google form integrations', free: false, premium: true },
    { name: 'ERLC Integrations', free: false, premium: true },
    { name: 'Custom Commands', free: false, premium: true },
  ];

  const pricingTiers = [
    {
      name: 'Monthly',
      price: '£3.99',
      period: '/month',
      description: 'Perfect for trying premium features',
    },
    {
      name: 'Yearly',
      price: '£31',
      period: '/year',
      description: '35% savings compared to monthly',
      popular: true,
    },
    {
      name: 'Lifetime',
      price: '£100',
      period: 'one-time',
      description: 'Pay once, use forever',
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            The Most Features in a Discord Bot
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Compare our free and premium features to see what Nexi can do for your Discord server.
          </p>
        </div>

        {/* Features Table */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden mb-16">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-white">FEATURE</th>
                  <th className="text-center py-4 px-6 font-semibold text-white">FREE</th>
                  <th className="text-center py-4 px-6 font-semibold text-orange-400">PREMIUM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {features.map((feature, index) => (
                  <tr key={index} className="hover:bg-gray-800/30 transition-colors duration-200">
                    <td className="py-4 px-6 text-gray-300">{feature.name}</td>
                    <td className="py-4 px-6 text-center">
                      {feature.free ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {feature.premium ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Best Features at the Best Prices
          </h2>
          <div className="bg-yellow-500/20 border border-yellow-500/50 rounded-lg p-4 max-w-md mx-auto mb-8">
            <p className="text-yellow-300 font-semibold">Nexi Premium Coming Soon!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 border rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
                tier.popular 
                  ? 'border-orange-500 ring-2 ring-orange-500/20' 
                  : 'border-gray-800 hover:border-orange-500/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-orange-400">{tier.price}</span>
                  <span className="text-gray-400">{tier.period}</span>
                  {tier.name === 'Yearly' && (
                    <div className="text-green-400 text-sm font-medium mt-1">Save 35%</div>
                  )}
                </div>
                <p className="text-gray-400 mb-6">{tier.description}</p>
                <button
                  disabled
                  className="w-full bg-gray-700 text-gray-400 px-6 py-3 rounded-lg font-semibold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
