'use client';
import { User, LogOut, LogIn } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth(); 
  const { totalItems } = useCart();
  
  return (
    <nav className="sticky top-0 z-50 bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          🛒 Mój Sklep
        </Link>
        
        <div className="space-x-6">
          <Link href="/" className="hover:text-yellow-300">
            Strona główna
          </Link>
          <Link href="/cart" className="hover:text-yellow-300 relative"> 
            Koszyk
            {totalItems > 0 && ( 
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <Link href="/about" className="hover:text-yellow-300">
            O nas
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {/* Przycisk logowania/wylogowania z informacjami o użytkowniku */}
          {isAuthenticated ? (
            <div className="flex items-center space-x-4"> 
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-sm">
                  <p className="font-medium">{user?.name}</p>
                  <p className="text-xs text-gray-300">
                    {user?.role === 'admin' ? 'Administrator' : 'Użytkownik'}
                  </p>
                </div>
              </div>
              <button
                onClick={logout}
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-red-300"
              >
                <LogOut className="h-4 w-4" />
                Wyloguj
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 px-4 py-2 text-white hover:text-yellow-300"
            >
              <LogIn className="h-4 w-4" />
              Zaloguj się
            </Link>
          )}
          
        </div>
      </div>
    </nav>
  );
}