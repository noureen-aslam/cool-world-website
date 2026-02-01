import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `Hi Cool World, I'm ${formData.name}. I need ${formData.service} service on ${formData.date} at ${formData.time}. ${formData.message ? `Additional details: ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/919686029822?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/thank-you');
    }, 1000);
  };

  return (
    <div className="pt-24 pb-12 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-cyan-400">Touch</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Book your service or reach out to us for any cooling solution needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href="tel:+919686029822"
                  className="flex items-center space-x-4 text-white/80 hover:text-cyan-400 transition-colors"
                >
                  <div className="p-3 backdrop-blur-md bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Phone</div>
                    <div className="font-semibold">+91 9686029822</div>
                  </div>
                </a>
                <a
                  href="mailto:rawoof4073@gmail.com"
                  className="flex items-center space-x-4 text-white/80 hover:text-cyan-400 transition-colors"
                >
                  <div className="p-3 backdrop-blur-md bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <div className="font-semibold">rawoof4073@gmail.com</div>
                  </div>
                </a>
                <div className="flex items-start space-x-4 text-white/80">
                  <div className="p-3 backdrop-blur-md bg-cyan-500/20 border border-cyan-400/30 rounded-xl">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Address</div>
                    <div className="font-semibold">Neelasandra, Bangalore, Karnataka 560047</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-2 overflow-hidden h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9742584374766!2d77.59558731482176!3d12.912238990892768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1505e3df7b65%3A0x6c7f84f0d7f6f4e6!2sNeelasandra%2C%20Bengaluru%2C%20Karnataka%20560047!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Book Your Service</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Phone *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="+91 9876543210"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Service Type *</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                >
                  <option value="" className="bg-gray-900">Select a service</option>
                  <option value="AC Service" className="bg-gray-900">AC Service - ₹799</option>
                  <option value="AC Repair" className="bg-gray-900">AC Repair</option>
                  <option value="Gas Filling" className="bg-gray-900">Gas Filling - ₹1,799</option>
                  <option value="AC Installation" className="bg-gray-900">AC Installation</option>
                  <option value="Refrigerator Repair" className="bg-gray-900">Refrigerator Repair</option>
                  <option value="Deep Cleaning" className="bg-gray-900">Deep Cleaning - ₹799</option>
                  <option value="Commercial Freezer" className="bg-gray-900">Commercial Freezer</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Preferred Time *</label>
                  <input
                    type="time"
                    required
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/80 mb-2 text-sm font-medium">Additional Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  placeholder="Any specific requirements or details..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Submitting...' : 'Book Service'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
