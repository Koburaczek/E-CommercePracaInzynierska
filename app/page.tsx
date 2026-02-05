'use client';
import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { Product, products } from '@/lib/data';




export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Witaj w moim sklepie!</h1>
        <p className="text-xl text-gray-600">
          Znajdziesz tutaj najlepsze produkty w najlepszych cenach.
        </p>
        <Link 
          href="/"
          className="inline-block mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-blue-700"
        >
          Zobacz produkty →
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Polecane produkty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mt-12 bg-gray-500 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">O projekcie</h2>
        <p className="mb-4">
          Ta strona to implementacja sklepu e-commerce z użyciem:
        </p>
        <ul className="list-disc pl-5">
          <li>Next.js 14 z App Router</li>
          <li>TypeScript dla bezpieczeństwa typów</li>
          <li>Tailwind CSS dla stylowania</li>
          <li>Extreme Programming jako metodyka</li>
        </ul>
        <Link 
          href="/about" 
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
        </Link>
      </section>
    </div>
  );
}
