import { Star } from 'lucide-react';

const clients = [
  { name: 'Kabab C', type: 'Restaurant' },
  { name: 'Tunda Kabab', type: 'Restaurant' },
  { name: 'Zaitoon', type: 'Fine Dining' },
  { name: 'Zaban', type: 'Restaurant' },
  { name: 'The Paul', type: 'Cafe & Bakery' },
  { name: 'Ching Luang', type: 'Asian Cuisine' },
];

export default function Clients() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted By <span className="text-cyan-400">Elite Brands</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Bangalore's finest restaurants and businesses trust us for their cooling needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{client.name}</h3>
              <p className="text-white/70">{client.type}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 p-12 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-white/90 mb-6 italic">
            "Cool World has been maintaining our restaurant's cooling systems for years. Their service is impeccable and always reliable."
          </blockquote>
          <p className="text-cyan-400 font-semibold">- Restaurant Partners</p>
        </div>
      </div>
    </section>
  );
}
