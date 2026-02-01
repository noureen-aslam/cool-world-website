import { Link } from 'react-router-dom';

const services = [
  {
    image: '/images/ac-service.jpg',
    title: 'AC Service',
    price: '₹799',
    description: 'Complete filter cleaning, coolant top-up, and performance check',
  },
  {
    image: '/images/ac-repair.jpg',
    title: 'AC Repair',
    price: 'On Request',
    description: 'Professional on-site diagnosis and component repair',
  },
  {
    image: '/images/gas-filling.jpg',
    title: 'Gas Filling',
    price: '₹1,799',
    description: 'Leak detection, pressure check, and refrigerant refill',
  },
  {
    image: '/images/ac-install.jpeg',
    title: 'AC Installation',
    price: 'On Request',
    description: 'Expert setup and installation with warranty',
  },
  {
    image: '/images/refridge repair.jpeg',
    title: 'Refrigerator Repair',
    price: 'Varies',
    description: 'Thermostat, cooling issues, and compressor repair',
  },
  {
    image: '/images/deep clean.jpg',
    title: 'Deep Cleaning',
    price: '₹799',
    description: 'Coil disinfection, duct cleaning, and sanitization',
  },
  {
    image: '/images/cooling.jpeg',
    title: 'Commercial Freezer',
    price: 'On Request',
    description: 'Hotel and restaurant equipment maintenance',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Premium <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Comprehensive cooling solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              {/* Service image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />

              <div className="flex items-start justify-between mb-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <Link
                to="/contact"
                className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-sm font-semibold hover:from-orange-600 hover:to-orange-700 transition-all"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}