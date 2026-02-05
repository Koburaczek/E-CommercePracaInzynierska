'use client';
import { Product } from '@/lib/data';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem, getItemQuantity } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const quantityInCart = getItemQuantity(product.id);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem(product);
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h3 className="text-xl text-gray-900 font-bold mb-2">{product.name}</h3>
      <p className="text-gray-900 text-sm mb-4 line-clamp-2">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">
          {product.price.toFixed(2)} zł
        </span>
        
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`
            px-4 py-2 rounded font-medium transition-colors
            ${isAdding
              ? 'bg-green-500 text-white'
              : quantityInCart > 0
                ? 'bg-blue-700 text-white'
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }
          `}
        >
          {isAdding ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Dodano!
            </span>
          ) : (
            <span className="flex items-center">
              {quantityInCart > 0 ? (
                <>
                  <span className="mr-2">🛒</span>
                  W koszyku: {quantityInCart}
                </>
              ) : (
                'Dodaj do koszyka'
              )}
            </span>
          )}
        </button>
      </div>
      
      {quantityInCart > 0 && !isAdding && (
        <div className="mt-3 text-sm text-green-600">
          ✓ Produkt w koszyku
        </div>
      )}
    </div>
  );
}