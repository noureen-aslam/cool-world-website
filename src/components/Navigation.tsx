import { Link, useLocation } from 'react-router-dom';
import { Snowflake } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Snowflake className="w-8 h-8 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-2xl font-bold text-white">Cool World</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-cyan-400' : 'text-white/90 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-colors ${
                isActive('/services') ? 'text-cyan-400' : 'text-white/90 hover:text-cyan-400'
              }`}
            >
              Services
            </Link>
            <Link
              to="/clients"
              className={`text-sm font-medium transition-colors ${
                isActive('/clients') ? 'text-cyan-400' : 'text-white/90 hover:text-cyan-400'
              }`}
            >
              Clients
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-cyan-400' : 'text-white/90 hover:text-cyan-400'
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Book Now
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>

        <div className="md:hidden pb-4 flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className={`text-sm font-medium ${
              isActive('/') ? 'text-cyan-400' : 'text-white/90'
            }`}
          >
            Home
          </Link>
          <Link
            to="/services"
            className={`text-sm font-medium ${
              isActive('/services') ? 'text-cyan-400' : 'text-white/90'
            }`}
          >
            Services
          </Link>
          <Link
            to="/clients"
            className={`text-sm font-medium ${
              isActive('/clients') ? 'text-cyan-400' : 'text-white/90'
            }`}
          >
            Clients
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium ${
              isActive('/contact') ? 'text-cyan-400' : 'text-white/90'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
