export interface User {
  id: number;
  email: string;
  password: string; 
  name: string;
  role: 'user' | 'admin';
}

export const hardcodedUsers: User[] = [
  {
    id: 1,
    email: 'user@example.com',
    password: 'user123', // TO DO: W pracy napisać że to DEMO
    name: 'ADC XYZ',
    role: 'user'
  },
  {
    id: 2,
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin Test',
    role: 'admin'
  },
  {
    id: 3,
    email: 'test@example.com',
    password: 'test123',
    name: 'Test User',
    role: 'user'
  }
];

// Funkcja do walidacji logowania
export function validateLogin(email: string, password: string): User | null {
  const user = hardcodedUsers.find(
    u => u.email === email && u.password === password
  );
  return user || null;
}
