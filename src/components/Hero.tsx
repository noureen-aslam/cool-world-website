import { Link } from 'react-router-dom';
import { Phone, Wrench, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 md:p-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Zero Hassle Cooling at Your <span className="text-cyan-400">Doorstep</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
            Premium AC repair, installation, and cooling solutions trusted by Bangalore's finest restaurants and businesses
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/services"
              className="group flex items-center space-x-2 px-8 py-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all transform hover:scale-105 shadow-lg"
            >
              <Wrench className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>View Services</span>
            </Link>
            <Link
              to="/contact"
              className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </Link>
            <a
              href="tel:+919686029822"
              className="group flex items-center space-x-2 px-8 py-4 backdrop-blur-md bg-cyan-500/30 border border-cyan-400/50 rounded-full text-white font-semibold hover:bg-cyan-500/40 transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Call Now</span>
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-white/80">Happy Customers</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-white/80">Emergency Service</div>
          </div>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6 hover:bg-white/20 transition-all">
            <div className="text-4xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-white/80">Satisfaction Guaranteed</div>
          </div>
        </div>
      </div>
    </div>
  );
}
