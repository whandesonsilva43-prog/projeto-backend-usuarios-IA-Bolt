import { useAuth } from '../contexts/AuthContext';
import { LogOut, User, Mail, Calendar } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: 'home' | 'login' | 'register') => void;
}

export function Home({ onNavigate }: HomeProps) {
  const { user, profile, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    onNavigate('login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">User Management</span>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition font-medium"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-12 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
                <User className="w-10 h-10 text-blue-600" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome, {profile?.full_name || 'User'}!
              </h1>
              <p className="text-blue-100">
                Your account is active and ready to use
              </p>
            </div>

            <div className="p-8 space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile Information</h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Full Name</p>
                    <p className="text-base font-semibold text-gray-900 mt-1">
                      {profile?.full_name || 'Not set'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Email Address</p>
                    <p className="text-base font-semibold text-gray-900 mt-1">
                      {user?.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="bg-amber-100 p-2 rounded-lg">
                    <Calendar className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-500">Member Since</p>
                    <p className="text-base font-semibold text-gray-900 mt-1">
                      {profile?.created_at
                        ? new Date(profile.created_at).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })
                        : 'Unknown'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-medium text-blue-900">Account Status</p>
                    <p className="text-sm text-blue-600">Active and verified</p>
                  </div>
                  <div className="bg-blue-600 px-4 py-2 rounded-lg">
                    <span className="text-white font-semibold text-sm">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
