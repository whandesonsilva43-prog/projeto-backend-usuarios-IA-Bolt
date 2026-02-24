import { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

type Page = 'home' | 'login' | 'register';

function AppContent() {
  const { user, loading } = useAuth();
  const [currentPage, setCurrentPage] = useState<Page>('login');

  useEffect(() => {
    if (!loading) {
      if (user) {
        setCurrentPage('home');
      } else {
        setCurrentPage('login');
      }
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <p className="mt-4 text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  if (currentPage === 'home' && user) {
    return <Home onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'register') {
    return <Register onNavigate={setCurrentPage} />;
  }

  return <Login onNavigate={setCurrentPage} />;
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
