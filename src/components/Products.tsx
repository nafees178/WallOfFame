import { useState } from 'react';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Product {
  id: number;
  title: string;
  thumbnail: string;
  fullImage: string;
  wallMockup: string;
  description: string;
  theme: string;
  inspiration: string;
}

const products: Product[] = [
  {
    id: 1,
    title: 'Urban Dreams',
    thumbnail: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=600',
    fullImage: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1200',
    wallMockup: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A stunning cityscape that captures the energy and ambition of modern urban life.',
    theme: 'Urban & Architecture',
    inspiration: 'Inspired by the golden hour views of metropolitan skylines.'
  },
  {
    id: 2,
    title: 'Serenity',
    thumbnail: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600',
    fullImage: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1200',
    wallMockup: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Find peace in nature with this calming landscape that brings tranquility to any space.',
    theme: 'Nature & Landscapes',
    inspiration: 'The quiet beauty of mountain lakes at dawn.'
  },
  {
    id: 3,
    title: 'Bold Expression',
    thumbnail: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=600',
    fullImage: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1200',
    wallMockup: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'A vibrant abstract piece that adds personality and creative energy to your walls.',
    theme: 'Abstract & Modern',
    inspiration: 'The intersection of color theory and emotional expression.'
  },
  {
    id: 4,
    title: 'Timeless Elegance',
    thumbnail: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=600',
    fullImage: 'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=1200',
    wallMockup: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Classic black and white photography that never goes out of style.',
    theme: 'Minimalist & Classic',
    inspiration: 'The enduring beauty of simplicity and contrast.'
  },
  {
    id: 5,
    title: 'Tropical Escape',
    thumbnail: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=600',
    fullImage: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=1200',
    wallMockup: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Bring vacation vibes home with lush tropical paradise imagery.',
    theme: 'Travel & Adventure',
    inspiration: 'The allure of exotic destinations and natural beauty.'
  },
  {
    id: 6,
    title: 'Cosmic Wonder',
    thumbnail: 'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=600',
    fullImage: 'https://images.pexels.com/photos/1146134/pexels-photo-1146134.jpeg?auto=compress&cs=tinysrgb&w=1200',
    wallMockup: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: 'Explore the universe from your living room with breathtaking space photography.',
    theme: 'Space & Science',
    inspiration: 'The infinite mysteries of the cosmos.'
  }
];

export default function Products() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showMockup, setShowMockup] = useState(false);

  return (
    <div className="py-24 bg-neutral-50 dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Discover posters that transform your space. Each piece is carefully curated to inspire and elevate your environment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer border border-neutral-200 dark:border-neutral-700"
              onClick={() => {
                setSelectedProduct(product);
                setShowMockup(false);
              }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-full p-3">
                    <ZoomIn className="text-neutral-900" size={24} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {product.theme}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-neutral-900 dark:bg-neutral-700 text-white rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-600 transition-colors"
          >
            <span>View All Posters</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <button
            onClick={() => setSelectedProduct(null)}
            className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100">
                  <img
                    src={showMockup ? selectedProduct.wallMockup : selectedProduct.fullImage}
                    alt={selectedProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button
                  onClick={() => setShowMockup(!showMockup)}
                  className="w-full py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors font-medium"
                >
                  {showMockup ? 'View Poster' : 'View on Wall'}
                </button>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                    {selectedProduct.title}
                  </h2>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                    {selectedProduct.theme}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Description
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Inspiration
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {selectedProduct.inspiration}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-200">
                    <h3 className="text-sm font-semibold text-neutral-900 mb-2">
                      Features
                    </h3>
                    <ul className="text-sm text-neutral-600 space-y-1">
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
