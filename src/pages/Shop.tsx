import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, X, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Category } from '../types';
import { cn } from '../lib/utils';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = !categoryParam || p.category === categoryParam;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured
    });
  }, [categoryParam, searchQuery, sortBy]);

  const categories: { label: string; value: Category | null }[] = [
    { label: 'All Products', value: null },
    { label: 'Bakery', value: 'bakery' },
    { label: 'Toys', value: 'toys' },
  ];

  return (
    <div className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-display font-bold">
            {categoryParam ? (categoryParam === 'bakery' ? 'Our Bakery' : 'Toy Collection') : 'The Full Store'}
          </h1>
          <p className="text-ink/60 max-w-xl">
            Discover our curated selection of sweet treats and playful toys. Every item is chosen with love for your family.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-black/5 rounded-xl focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={cn(
              "btn btn-outline w-full sm:w-auto",
              isFilterOpen && "bg-primary text-white border-primary"
            )}
          >
            <Filter size={18} /> Filters
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="lg:w-64 space-y-8"
            >
              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg">Categories</h3>
                <div className="flex flex-col gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.label}
                      onClick={() => setSearchParams(cat.value ? { category: cat.value } : {})}
                      className={cn(
                        "text-left px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                        (categoryParam === cat.value) ? "bg-primary/10 text-primary" : "hover:bg-black/5 text-ink/60"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-display font-bold text-lg">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-2 bg-white border border-black/5 rounded-lg text-sm focus:outline-none focus:border-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>

              {categoryParam === 'toys' && (
                <div className="space-y-4">
                  <h3 className="font-display font-bold text-lg">Age Group</h3>
                  <div className="flex flex-wrap gap-2">
                    {['0-3', '4-7', '8+'].map(age => (
                      <button key={age} className="px-3 py-1 border border-black/5 rounded-full text-xs hover:border-primary hover:text-primary transition-colors">
                        {age} years
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-ink/40 font-medium">
              Showing <span className="text-ink font-bold">{filteredProducts.length}</span> products
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={cn("p-2 rounded-lg transition-colors", viewMode === 'grid' ? "bg-primary/10 text-primary" : "text-ink/40 hover:bg-black/5")}
              >
                <LayoutGrid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={cn("p-2 rounded-lg transition-colors", viewMode === 'list' ? "bg-primary/10 text-primary" : "text-ink/40 hover:bg-black/5")}
              >
                <List size={20} />
              </button>
            </div>
          </div>

          <div className={cn(
            "grid gap-8",
            viewMode === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          )}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className={viewMode === 'list' ? "flex-row gap-8 items-center" : ""}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 space-y-6">
              <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto text-ink/20">
                <Search size={40} />
              </div>
              <h3 className="text-2xl font-display font-bold">No products found</h3>
              <p className="text-ink/40">Try adjusting your filters or search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSearchParams({}); }}
                className="btn btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
