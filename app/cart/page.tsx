
'use client';

import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { Trash2, Plus, Minus } from 'lucide-react';

export default function ekCartPage() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    totalPrice,
    totalItems 
  } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-4">Twój koszyk jest pusty</h1>
          <p className="text-gray-600 mb-8">
            Dodaj produkty ze strony produktów, aby zobaczyć je tutaj!
          </p>
          <Link 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Przejdź do produktów
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Twój koszyk ({totalItems} produktów)</h1>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Lista produktów */}
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div 
                key={item.product.id} 
                className="bg-white border rounded-lg p-4 flex items-center justify-between shadow-sm"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{item.product.name}</h3>
                    <p className="text-gray-700 text-sm">{item.product.category}</p>
                    <p className="text-lg font-bold text-blue-600">
                      {(item.product.price * item.quantity).toFixed(2)} zł
                    </p>
                    <p className="text-sm text-gray-700">
                      {item.product.price.toFixed(2)} zł / szt.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border rounded bg-gray-50">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="px-3 py-2 hover:bg-gray-200 text-gray-800"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="px-3 py-2 hover:bg-gray-200 text-gray-800"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
        
                  {}
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-gray-800 hover:text-red-600 p-2 hover:bg-red-50 rounded"
                    title="Usuń z koszyka"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-between">
            <Link 
              href="/page.tsx" 
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              ← Kontynuuj zakupy
            </Link>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-gray-900 border rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-white">Podsumowanie</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-gray-200">
                <span>Wartość produktów:</span>
                <span className="font-medium">{totalPrice.toFixed(2)} zł</span>
              </div>
              
              <div className="border-t border-gray-700 pt-3 mt-3">
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>RAZEM:</span>
                  <span>{totalPrice.toFixed(2)} zł</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                href="/checkout"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Przejdź do kasy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}