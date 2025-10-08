import { Calendar, MapPin, Clock, Users } from 'lucide-react';

export default function Event() {
  return (
    <div className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-amber-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(251,191,36,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-amber-500/20 backdrop-blur-sm rounded-full mb-6 border border-amber-500/30">
            <span className="text-amber-300 font-medium">Exclusive Launch Event</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Join Us at IIT Jodhpur 2025
          </h2>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Be part of the Wall of Fame showcase. Experience our collection, meet the team, and celebrate the art of storytelling through posters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <Calendar className="text-amber-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Date</h3>
                <p className="text-neutral-300">October 10-11, 2025</p>
                <p className="text-sm text-neutral-400 mt-1">Two days of art, inspiration, and connection</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <MapPin className="text-amber-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Venue</h3>
                <p className="text-neutral-300">IIT Jodhpur Campus</p>
                <p className="text-sm text-neutral-400 mt-1">Karwar, Rajasthan 342030</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <Clock className="text-amber-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Timings</h3>
                <p className="text-neutral-300">10:00 AM - 8:00 PM Daily</p>
                <p className="text-sm text-neutral-400 mt-1">Special evening sessions with artist talks</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="p-3 bg-amber-500/20 rounded-lg">
                <Users className="text-amber-400" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">What to Expect</h3>
                <p className="text-neutral-300">Meet our team, view exclusive designs</p>
                <p className="text-sm text-neutral-400 mt-1">Live demonstrations, networking, and special launch offers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-amber-500/20 to-transparent rounded-2xl p-8 border border-amber-500/20">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Why Attend?</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-neutral-300">
              <div>
                <span className="text-amber-400 font-bold">•</span> Exclusive first look at our full collection
              </div>
              <div>
                <span className="text-amber-400 font-bold">•</span> Meet the creative minds behind Wall of Fame
              </div>
              <div>
                <span className="text-amber-400 font-bold">•</span> Special launch discounts and offers
              </div>
              <div>
                <span className="text-amber-400 font-bold">•</span> Interactive design workshops and talks
              </div>
              <div>
                <span className="text-amber-400 font-bold">•</span> Network with fellow art enthusiasts
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
