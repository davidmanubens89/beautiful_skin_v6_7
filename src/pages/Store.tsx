import React, { useState } from 'react';
import { useWishlist } from '../contexts/WishlistContext';
import StoreProductCard from '../components/StoreProductCard';
import WishlistCard from '../components/WishlistCard';
import KeyFactsSection from '../components/KeyFactsSection';
import StoreFilters from '../components/StoreFilters';
import { productCategories } from '../data/productCategories';

export const Store: React.FC = () => {
  const { wishlist } = useWishlist();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    brand: [],
    priceRange: [0, 100],
    skinType: [],
    concerns: [],
  });

  const products = [
    // Cleansers
    { id: 1, name: "Gentle Foaming Cleanser", brand: "SkinScience", image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 24.99, category: "Cleansers" },
    { id: 2, name: "Hydrating Cream Cleanser", brand: "NaturalGlow", image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 22.99, category: "Cleansers" },
    { id: 3, name: "Clarifying Gel Cleanser", brand: "DermaFix", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80", price: 19.99, category: "Cleansers" },
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName === selectedCategory ? null : categoryName);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  const selectedCategoryData = selectedCategory 
    ? productCategories.find(cat => cat.name === selectedCategory)
    : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">SkinScience Store</h1>
      
      {/* Wishlist section - Always displayed */}
      {wishlist.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Wishlist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlist.map((productName, index) => (
              <WishlistCard key={index} productName={productName} />
            ))}
          </div>
        </section>
      )}
      
      {/* Categories section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skin Care Product Categories</h2>
        <div className="flex justify-between items-center px-8">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className={`cursor-pointer text-center ${selectedCategory === category.name ? 'scale-110' : ''}`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-2 mx-auto">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
              </div>
              <p className={`text-sm ${selectedCategory === category.name ? 'font-semibold text-indigo-600' : 'text-gray-600'}`}>
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Subcategories section */}
      {selectedCategoryData && (
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {selectedCategoryData.subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm"
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </section>
      )}

      {selectedCategory && <KeyFactsSection category={selectedCategory} />}
      
      <div className="flex flex-col md:flex-row">
        <aside className="w-full md:w-1/4 mb-8 md:mb-0 md:mr-8">
          <StoreFilters filters={filters} onFilterChange={handleFilterChange} />
        </aside>
        
        <section className="w-full md:w-3/4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {selectedCategory ? `${selectedCategory}` : 'All Products'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <StoreProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Store;