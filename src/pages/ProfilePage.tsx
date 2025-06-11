import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, FileText, LogOut, ShoppingBag, Edit } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Update page title
    document.title = 'My Profile - TemplateForge';
    
    // Redirect if not logged in
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!user) {
    return null; // Don't render anything if not logged in (redirect handles this)
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden">
              <div className="p-6 text-center border-b border-gray-700">
                <div className="w-20 h-20 bg-indigo-600/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <User size={32} className="text-indigo-400" />
                </div>
                <h2 className="text-xl font-semibold text-white">{user.email}</h2>
                <p className="text-gray-400 text-sm mt-1">Member since {new Date().toLocaleDateString()}</p>
              </div>
              
              <nav className="p-4">
                <ul className="space-y-1">
                  <li>
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'overview'
                          ? 'bg-indigo-600/30 text-indigo-300'
                          : 'text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <User size={18} className="mr-3" />
                      Overview
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('purchases')}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'purchases'
                          ? 'bg-indigo-600/30 text-indigo-300'
                          : 'text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <ShoppingBag size={18} className="mr-3" />
                      My Purchases
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('requests')}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'requests'
                          ? 'bg-indigo-600/30 text-indigo-300'
                          : 'text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <FileText size={18} className="mr-3" />
                      My Requests
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setActiveTab('settings')}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center ${
                        activeTab === 'settings'
                          ? 'bg-indigo-600/30 text-indigo-300'
                          : 'text-gray-300 hover:bg-gray-700/50'
                      }`}
                    >
                      <Settings size={18} className="mr-3" />
                      Settings
                    </button>
                  </li>
                  <li className="pt-4 border-t border-gray-700 mt-4">
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 rounded-lg flex items-center text-gray-300 hover:bg-gray-700/50"
                    >
                      <LogOut size={18} className="mr-3" />
                      Sign Out
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/70 backdrop-blur-sm rounded-xl border border-gray-700 p-6">
              {activeTab === 'overview' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Account Overview</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-white">Personal Information</h3>
                          <p className="text-gray-400 text-sm mt-1">Your basic account details</p>
                        </div>
                        <button className="text-indigo-400 hover:text-indigo-300">
                          <Edit size={18} />
                        </button>
                      </div>
                      <div className="mt-4 space-y-3">
                        <div>
                          <p className="text-sm text-gray-400">Email</p>
                          <p className="text-white">{user.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">User ID</p>
                          <p className="text-white truncate">{user.id}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                      <h3 className="text-lg font-medium text-white">Account Status</h3>
                      <p className="text-gray-400 text-sm mt-1">Your subscription and plan details</p>
                      
                      <div className="mt-4">
                        <span className="inline-block px-2 py-1 bg-green-900/50 text-green-400 rounded text-sm">
                          Active
                        </span>
                        <p className="text-white mt-2">Free Plan</p>
                        <p className="text-gray-400 text-sm">Upgrade to access premium templates and features</p>
                        
                        <button className="mt-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded transition-colors text-sm">
                          Upgrade Plan
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-indigo-900/30 rounded-lg p-6 border border-indigo-800/50">
                    <h3 className="text-xl font-medium text-white mb-3">Get Started</h3>
                    <p className="text-gray-300 mb-4">
                      Browse our collection of premium templates or request custom development services.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={() => navigate('/templates')}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                      >
                        Browse Templates
                      </button>
                      <button 
                        onClick={() => setActiveTab('requests')}
                        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        Request Customization
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {activeTab === 'purchases' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">My Purchases</h2>
                  
                  <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 text-center">
                    <ShoppingBag size={48} className="mx-auto text-gray-500 mb-3" />
                    <h3 className="text-xl font-medium text-white mb-2">No purchases yet</h3>
                    <p className="text-gray-400 mb-4">
                      You haven't purchased any templates yet. Browse our collection to find the perfect template for your needs.
                    </p>
                    <button 
                      onClick={() => navigate('/templates')}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                    >
                      Browse Templates
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'requests' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Customization Requests</h2>
                  
                  <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 mb-6">
                    <h3 className="text-xl font-medium text-white mb-4">Submit a New Request</h3>
                    
                    <form>
                      <div className="mb-4">
                        <label htmlFor="requestType" className="block text-sm font-medium text-gray-300 mb-1">
                          Request Type
                        </label>
                        <select
                          id="requestType"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                        >
                          <option value="">Select request type</option>
                          <option value="template-customization">Template Customization</option>
                          <option value="custom-development">Custom Development</option>
                          <option value="data-analysis">Data Analysis</option>
                          <option value="python-application">Python Application</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="requestTitle" className="block text-sm font-medium text-gray-300 mb-1">
                          Request Title
                        </label>
                        <input
                          id="requestTitle"
                          type="text"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          placeholder="Brief title for your request"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="requestDescription" className="block text-sm font-medium text-gray-300 mb-1">
                          Description
                        </label>
                        <textarea
                          id="requestDescription"
                          rows={5}
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          placeholder="Describe your requirements in detail..."
                        ></textarea>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-1">
                          Estimated Budget (Optional)
                        </label>
                        <input
                          id="budget"
                          type="text"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          placeholder="Your budget range"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                      >
                        Submit Request
                      </button>
                    </form>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 text-center">
                    <FileText size={48} className="mx-auto text-gray-500 mb-3" />
                    <h3 className="text-xl font-medium text-white mb-2">No requests yet</h3>
                    <p className="text-gray-400">
                      You haven't submitted any customization requests yet. Use the form above to submit your first request.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Account Settings</h2>
                  
                  <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600 mb-6">
                    <h3 className="text-xl font-medium text-white mb-4">Personal Information</h3>
                    
                    <form>
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                          Full Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          value={user.email || ''}
                          disabled
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          Email address cannot be changed
                        </p>
                      </div>
                      
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                  
                  <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                    <h3 className="text-xl font-medium text-white mb-4">Change Password</h3>
                    
                    <form>
                      <div className="mb-4">
                        <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-300 mb-1">
                          Current Password
                        </label>
                        <input
                          id="currentPassword"
                          type="password"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-1">
                          New Password
                        </label>
                        <input
                          id="newPassword"
                          type="password"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-300 mb-1">
                          Confirm New Password
                        </label>
                        <input
                          id="confirmNewPassword"
                          type="password"
                          className="w-full px-4 py-2 bg-gray-600 border border-gray-500 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-white"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
                      >
                        Change Password
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;