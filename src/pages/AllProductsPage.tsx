import { useState } from 'react';
import { X, ZoomIn, ArrowLeft } from 'lucide-react';
import { generatePosters, type Poster } from '../utils/generatePosters';
import { useNavigate } from 'react-router-dom';

const allPosters = generatePosters(100);

export default function AllProductsPage() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Poster | null>(null);
  const [showMockup, setShowMockup] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>('All');

  const themes = ['All', ...Array.from(new Set(allPosters.map(p => p.theme)))];

  const filteredPosters = selectedTheme === 'All'
    ? allPosters
    : allPosters.filter(p => p.theme === selectedTheme);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </button>

          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Complete Collection
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Browse all {allPosters.length} posters in our collection
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {themes.map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTheme === theme
                  ? 'bg-neutral-900 dark:bg-amber-600 text-white'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {theme}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredPosters.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-neutral-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-200 dark:border-neutral-700"
              onClick={() => {
                setSelectedProduct(product);
                setShowMockup(false);
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200 dark:bg-neutral-700">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-neutral-900 rounded-full p-3">
                    <ZoomIn className="text-neutral-900 dark:text-white" size={20} />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-neutral-900 dark:text-white mb-1">
                  {product.title}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {product.theme}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 p-2 bg-white dark:bg-neutral-800 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Close"
          >
            <X size={24} className="dark:text-white" />
          </button>

          <div className="bg-white dark:bg-neutral-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-700">
                  <img
                    src={showMockup ? selectedProduct.wallMockup : selectedProduct.fullImage}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={() => setShowMockup(!showMockup)}
                  className="w-full py-3 bg-neutral-900 dark:bg-amber-600 text-white rounded-lg hover:bg-neutral-800 dark:hover:bg-amber-700 transition-colors font-medium"
                >
                  {showMockup ? 'View Poster' : 'View on Wall'}
                </button>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    {selectedProduct.title}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 rounded-full text-sm font-medium">
                    {selectedProduct.theme}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Description
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                      Inspiration
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {selectedProduct.inspiration}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                      Features
                    </h3>
                    <ul className="text-sm text-neutral-600 dark:text-neutral-400 space-y-1">
                      <li>• Premium quality print</li>
                      <li>• Museum-grade paper</li>
                      <li>• Available in multiple sizes</li>
                      <li>• Ready to frame</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
