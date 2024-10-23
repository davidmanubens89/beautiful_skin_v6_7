import React from 'react';
import { X } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { productCategories } from '../data/productCategories';

interface WishlistCardProps {
  productName: string;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ productName }) => {
  const { removeFromWishlist } = useWishlist();
  
  // Parse category and subcategory from product name
  const [category, subcategory] = productName.split(' - ');
  
  // Find category and subcategory details
  const categoryData = productCategories.find(cat => cat.name === category);
  const subcategoryData = categoryData?.subcategories.find(sub => sub.name === subcategory);

  return (
    <div className="bg-white shadow-sm rounded-lg p-3 flex items-center">
      <img 
        src={categoryData?.image || 'https://via.placeholder.com/50'} 
        alt={category}
        className="w-12 h-12 rounded-md object-cover mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-sm font-medium text-gray-900">{category}</h3>
        <p className="text-xs text-gray-500">{subcategory}</p>
      </div>
      <button
        onClick={() => removeFromWishlist(productName)}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <X className="w-4 h-4 text-gray-400 hover:text-gray-600" />
      </button>
    </div>
  );
};

export default WishlistCard;