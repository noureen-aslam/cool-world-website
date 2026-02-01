import { CheckCircle, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-2xl mx-auto text-center">
        <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 backdrop-blur-md bg-green-500/20 border border-green-400/50 rounded-full">
              <CheckCircle className="w-16 h-16 text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Thank You for <span className="text-cyan-400">Booking!</span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            We've received your service request and will get back to you soon. Our team will contact you to confirm your appointment.
          </p>
          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6 mb-8">
            <p className="text-white/70 mb-2">For urgent assistance, call us at:</p>
            <a href="tel:+919686029822" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
              +91 9686029822
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 px-8 py-4 backdrop-blur-md bg-white/20 border border-white/30 rounded-full text-white font-semibold hover:bg-white/30 transition-all"
            >
              <Home className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <a
              href="tel:+919686029822"
              className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
