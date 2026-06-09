// ════════════════════════════════════════════════════════════
//  Homepagina — vervang de placeholder-tekst door jouw eigen
//  content. Beschrijf aan Claude Code wat hier moet komen.
// ════════════════════════════════════════════════════════════

import ScrollReveal from '@/components/ScrollReveal';

export default function HomePage() {
  return (
    <>
      {/* Hero — portret.jpg uit /public/ als achtergrond.
          Ontbreekt de foto? Dan valt de achtergrond terug op --color-primair. */}
      <div className="hero-section" style={{ backgroundImage: "url('/fotos/puppy.jpg')", backgroundPosition: 'center center', backgroundSize: 'cover', height: '80vh' }}>
        <div className="hero-overlay">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-2xl leading-tight">
            Zelf leren begrijpen om betere voedingskeuzes te maken voor je hond?
          </h1>
          <p className="text-white/80 max-w-xl text-lg leading-relaxed mb-2">
            Mijn naam is Daniëlle van Egmond en ik ben orthomoleculair en integraal voedingstherapeut voor honden. Ik help jou om zelf keuzes te maken die passen bij jouw hond.
          </p>
          <a href="/aanbod" className="hero-btn">
            Bekijk mijn aanbod →
          </a>
        </div>
      </div>

      <div className="relative z-10 bg-achtergrond">
        {/* Introductie */}
        <section className="max-w-5xl mx-auto px-6 py-20 text-center">
          <p className="text-accent leading-relaxed reveal" style={{ fontFamily: 'var(--font-sierlijk)', fontSize: '18px' }}>
            Ik geloof dat optimale voeding een investering is in de levenskracht van jouw hond.<br />Maar voeding werkt pas echt optimaal als het lichaam van je hond in balans is en de voedingsstoffen goed kan verwerken.
          </p>
        </section>
      </div>

      <ScrollReveal singles={['.reveal']} />
    </>
  );
}
