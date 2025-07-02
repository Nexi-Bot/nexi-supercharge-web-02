
import React, { useState } from 'react';
import { ArrowRight, Users, Code, BarChart, Heart, FileText, MessageSquare } from 'lucide-react';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState('');
  const [formData, setFormData] = useState({
    discordUsername: '',
    email: '',
    fullName: '',
    position: '',
    whyJoin: '',
    experience: '',
    uniqueSkills: '',
    hoursPerWeek: '',
    previousExperience: '',
    portfolio: '',
    privacyPolicy: false,
    contractAgreement: false,
  });

  const positions = [
    {
      id: 'moderator',
      title: 'Westgate Server Moderator',
      icon: Users,
      description: 'Ensure the community and roleplay standards are being upheld.',
    },
    {
      id: 'development',
      title: 'Development Team',
      icon: Code,
      description: 'Develop and maintain the bot or our website to enhance user experience and automate tasks within nexi.',
    },
    {
      id: 'analytics',
      title: 'Analytics Team',
      icon: BarChart,
      description: 'The Analytics Team analyzes data and collects customer feedback.',
    },
    {
      id: 'customer-experience',
      title: 'Customer Experience Team',
      icon: Heart,
      description: 'Provide excellent customer support and ensure smooth communication with our users.',
    },
    {
      id: 'legal',
      title: 'Legal Team',
      icon: FileText,
      description: 'Be responsible for documents, contracts, paperwork, companies house, finance etc.',
    },
    {
      id: 'marketing',
      title: 'Marketing Team',
      icon: MessageSquare,
      description: 'The Marketing Team promotes Nexi\'s brand, drives growth, and manages external communications.',
    },
    
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyPolicy || !formData.contractAgreement) {
      alert('Please agree to both the Privacy Policy and Contract terms to submit your application.');
      return;
    }

    try {
      const webhookData = {
        content: null,
        embeds: [{
          title: "New Career Application",
          color: 16776960, // Yellow color
          fields: [
            { name: "Discord Username", value: formData.discordUsername, inline: true },
            { name: "Email", value: formData.email, inline: true },
            { name: "Full Name", value: formData.fullName, inline: true },
            { name: "Position", value: formData.position, inline: true },
            { name: "Hours per Week", value: formData.hoursPerWeek, inline: true },
            { name: "Why Join", value: formData.whyJoin.substring(0, 1024), inline: false },
            { name: "Experience", value: formData.experience.substring(0, 1024), inline: false },
            { name: "Unique Skills", value: formData.uniqueSkills.substring(0, 1024), inline: false },
            { name: "Portfolio", value: formData.portfolio || "Not provided", inline: false },
          ],
          timestamp: new Date().toISOString()
        }]
      };

      const response = await fetch('https://discord.com/api/webhooks/1389607927983116370/GlPRFlYzMZLTgiF9eANM5QeGZ1PqP8_mB9XUk7kybxnEzht9oo5FsgIyMyRwwCkx6Vzl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookData)
      });

      if (response.ok) {
        alert('Thank you for your application! We will review it and get back to you soon.');
        // Reset form
        setFormData({
          discordUsername: '',
          email: '',
          fullName: '',
          position: '',
          whyJoin: '',
          experience: '',
          uniqueSkills: '',
          hoursPerWeek: '',
          previousExperience: '',
          portfolio: '',
          privacyPolicy: false,
          contractAgreement: false,
        });
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting application:', error);
      alert('There was an error submitting your application. Please try again.');
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
            We are in need of people to help within nexi. You will be able to work with a friendly and welcoming team to help make sure operations within nexi are running smoothly.
          </p>
          <p className="text-lg text-gray-300 font-medium">
            Find open positions and applications below.
          </p>
        </div>

        {/* Positions */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {positions.map((position) => (
            <div
              key={position.id}
              className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <position.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                  <p className="text-gray-400">{position.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="discordUsername" className="block text-sm font-medium text-gray-300 mb-2">
                  Discord Username *
                </label>
                <input
                  type="text"
                  id="discordUsername"
                  name="discordUsername"
                  required
                  value={formData.discordUsername}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="username#1234"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Your full name"
              />
            </div>

            <p className="text-gray-300 text-center mb-6">
              To apply for Westgate City Moderator, please use this link:{" "}
              <a
                href="https://forms.gle/1yfABJDdV5BQF4zd8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 underline"
              >
                Apply Here
              </a>
            </p>

            {/* Position Selection */}
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                Position *
              </label>
              <select
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
              >
                <option value="">Select a position</option>
                {positions
                  .filter((position) => position.id !== 'moderator')
                  .map((position) => (
                    <option key={position.id} value={position.id}>
                      {position.title}
                    </option>
                  ))}
              </select>
            </div>

            {/* Application Questions */}
            <div>
              <label htmlFor="whyJoin" className="block text-sm font-medium text-gray-300 mb-2">
                Why do you want to join this team? *
              </label>
              <textarea
                id="whyJoin"
                name="whyJoin"
                required
                rows={3}
                value={formData.whyJoin}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Tell us what motivates you to join this team..."
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                What is your relevant experience? *
              </label>
              <textarea
                id="experience"
                name="experience"
                required
                rows={3}
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Describe your relevant experience and background..."
              />
            </div>

            <div>
              <label htmlFor="uniqueSkills" className="block text-sm font-medium text-gray-300 mb-2">
                What unique skills or perspective would you bring to Nexi? *
              </label>
              <textarea
                id="uniqueSkills"
                name="uniqueSkills"
                required
                rows={3}
                value={formData.uniqueSkills}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="What makes you unique and valuable to our team..."
              />
            </div>

            <div>
              <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-gray-300 mb-2">
                How many hours per week can you commit? *
              </label>
              <input
                type="text"
                id="hoursPerWeek"
                name="hoursPerWeek"
                required
                value={formData.hoursPerWeek}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="e.g., 10-15 hours per week"
              />
            </div>

            <div>
              <label htmlFor="portfolio" className="block text-sm font-medium text-gray-300 mb-2">
                Portfolio/Previous Work Examples (Optional)
              </label>
              <input
                type="text"
                id="portfolio"
                name="portfolio"
                value={formData.portfolio}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"
                placeholder="Link to portfolio, GitHub, or examples of your work"
              />
            </div>

            {/* Agreement Checkboxes */}
            <div className="space-y-4 border-t border-gray-700 pt-6">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                />
                <label htmlFor="privacyPolicy" className="text-sm text-gray-300">
                  I agree to the <a href="/legal" target="_blank" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</a> *
                </label>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="contractAgreement"
                  name="contractAgreement"
                  checked={formData.contractAgreement}
                  onChange={handleInputChange}
                  required
                  className="mt-1 w-4 h-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                />
                <label htmlFor="contractAgreement" className="text-sm text-gray-300">
                  I agree to sign a contract for Nexi Bot LTD, disclosing my full name and date of birth *
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2"
              >
                Submit Application
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Careers;
