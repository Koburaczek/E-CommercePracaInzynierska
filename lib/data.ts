export interface ekProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export const ekproducts: ekProduct[] = [
  {
    id: 1,
    name: "iPhone 15",
    price: 4999.99,
    description: "Nowy smartfon Apple",
    category: "Elektronika",
    image: "/images/iphone15.jpg"
  },
  {
    id: 2,
    name: "Laptop Gaming",
    price: 6999.99,
    description: "Wydajny laptop do gier",
    category: "Elektronika",
    image: "/images/laptop.jpg"
  },
  {
    id: 3,
    name: "PC Gaming",
    price: 8999.99,
    description: "Wydajny Komputer do gier",
    category: "Elektronika",
    image: "/images/pro.jpg"
  },
  {
    id: 4,
    name: "Laptop Gaming pro",
    price: 9999.99,
    description: "Wydajny laptop do gier",
    category: "Elektronika",
    image: "/images/prolaptop.jpg"
  },
  {
    id: 5,
    name: "Laptop Gaming Casual",
    price: 5999.99,
    description: "Wydajny laptop do gier",
    category: "Elektronika",
    image: "/images/casual.jpg"
  },
  {
    id: 6,
    name: "Laptop Gaming Beginner",
    price: 3999.99,
    description: "Wydajny laptop do gier",
    category: "Elektronika",
    image: "/images/beginner.jpg"
  },
  
];
// Funkcja do pobierania wszystkich produktów
export function ekgetProducts(): ekProduct[] {
  return ekproducts;
}

// Funkcja do pobierania pojedynczego produktu
export function ekgetProductById(id: number): ekProduct | undefined {
  return ekproducts.find(ekproduct => ekproduct.id === id);
}

// Funkcja do filtrowania produktów
export function ekgetProductsByCategory(category: string): ekProduct[] {
  return ekproducts.filter(ekproduct => ekproduct.category === category);
}