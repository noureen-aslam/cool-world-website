import { Phone, Mail, MapPin, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Snowflake className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">Cool World</span>
            </div>
            <p className="text-white/70 text-sm">
              Premium AC Repair & Cooling Services. Arctic cooling at your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-white/70 hover:text-cyan-400 text-sm transition-colors">
                Home
              </Link>
              <Link to="/services" className="block text-white/70 hover:text-cyan-400 text-sm transition-colors">
                Services
              </Link>
              <Link to="/clients" className="block text-white/70 hover:text-cyan-400 text-sm transition-colors">
                Clients
              </Link>
              <Link to="/contact" className="block text-white/70 hover:text-cyan-400 text-sm transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:+919686029822" className="flex items-center space-x-2 text-white/70 hover:text-cyan-400 text-sm transition-colors">
                <Phone className="w-4 h-4" />
                <span>+91 9686029822</span>
              </a>
              <a href="mailto:rawoof4073@gmail.com" className="flex items-center space-x-2 text-white/70 hover:text-cyan-400 text-sm transition-colors">
                <Mail className="w-4 h-4" />
                <span>rawoof4073@gmail.com</span>
              </a>
              <div className="flex items-start space-x-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Neelasandra, Bangalore, Karnataka 560047</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Cool World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
