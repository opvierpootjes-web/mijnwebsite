export default function Footer() {
  return (
    <footer className="text-wit/80 text-sm py-8 mt-24" style={{ backgroundColor: '#7f8a8a' }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Op vier pootjes · Alle rechten voorbehouden</p>
        <a href="/contact" className="hover:text-wit transition-colors">Contact</a>
      </div>
    </footer>
  );
}
