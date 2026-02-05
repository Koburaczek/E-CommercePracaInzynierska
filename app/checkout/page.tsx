export default function CheckoutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">💳 Kasa</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Formularz danych */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Dane do wysyłki</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Imię i nazwisko</label>
              <input type="text" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Adres e-mail</label>
              <input type="email" className="w-full border p-2 rounded" />
            </div>
            <div>
              <label className="block mb-1">Adres dostawy</label>
              <textarea className="w-full border p-2 rounded" rows={3} />
            </div>
          </form>
        </div>
        
        {/* Podsumowanie */}
        <div className="border p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Podsumowanie zamówienia</h2>
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Produkty:</span>
              <span>0,00 zł</span>
            </div>
            <div className="flex justify-between">
              <span>Dostawa:</span>
              <span>0,00 zł</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-4 border-t">
              <span>Do zapłaty:</span>
              <span>0,00 zł</span>
            </div>
          </div>
          
          <button className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">
            Złóż zamówienie (DEMO)
          </button>
          
          <p className="text-center text-gray-600 text-sm mt-4">
            To jest demonstracyjna wersja. Płatności nie są przetwarzane.
          </p>
        </div>
      </div>
    </div>
  );
}