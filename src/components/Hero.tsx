import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 via-amber-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(245,158,11,0.08),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-block mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 blur-lg opacity-30"></div>
            <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Sparkles className="text-white" size={18} />
                <span className="text-base font-bold text-white">Launching at Vandre'25</span>
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
          Wall of Fame
        </h1>

        <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Posters that Inspire
        </p>

        <p className="text-lg text-neutral-500 dark:text-neutral-400 mb-12 max-w-2xl mx-auto">
          Transform your space with curated posters that tell stories, spark conversations, and celebrate what matters most.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => scrollToSection('event')}
            className="group px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>Join us at Vandre'25</span>
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>

          <button
            onClick={() => scrollToSection('products')}
            className="px-8 py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white rounded-full font-medium hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-all shadow-md hover:shadow-lg border border-neutral-200 dark:border-neutral-600"
          >
            View Collection
          </button>
        </div>

        <div className="mt-24 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">100+</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Unique Designs</div>
          </div>
          <div className="text-center border-x border-neutral-200 dark:border-neutral-700">
            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Premium</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Quality Prints</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">2025</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Launch Year</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-neutral-400 rounded-full" />
        </div>
      </div>
    </div>
  );
}
