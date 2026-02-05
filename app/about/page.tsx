export default function ekAboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">O projekcie</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cel pracy</h2>
          <p>
            Projekt i implementacja funkcjonalnej strony internetowej typu e-commerce 
            z wykorzystaniem metodyki Extreme Programming i frameworka Next.js.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Wykorzystane technologie</h2>
          <ul className="list-disc pl-5">
            <li><strong>Next.js 14</strong> - React framework z App Router</li>
            <li><strong>TypeScript</strong> - Statyczne typowanie</li>
            <li><strong>Tailwind CSS</strong> - Utility-first CSS framework</li>
            <li><strong>Extreme Programming</strong> - Metodyka wytwarzania oprogramowania</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Funkcjonalności</h2>
          <ul className="list-disc pl-5">
            <li>Przeglądanie katalogu produktów</li>
            <li>System koszyka zakupowego</li>
            <li>Responsywny design (RWD)</li>
            <li>Proces składania zamówienia</li>
          </ul>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Autor</h2>
          <p>
            Projekt realizowany jako praca inżynierska na kierunku Informatyka.
            Wszystkie elementy zostały zaimplementowane samodzielnie zgodnie 
            z założeniami metodyki Extreme Programming.
          </p>
        </section>
      </div>
    </div>
  );
}