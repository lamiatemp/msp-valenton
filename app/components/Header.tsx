export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <img src="/images/logo.PNG" alt="Logo" className="h-12" />
        <ul className="hidden md:flex gap-8 text-gray-700">
          <li><a href="#axes" className="hover:opacity-70" style={{ color: '#1B2845' }}>Notre approche</a></li>
          <li><a href="#about" className="hover:opacity-70" style={{ color: '#1B2845' }}>À propos</a></li>
          <li><a href="#team" className="hover:opacity-70" style={{ color: '#1B2845' }}>Équipe</a></li>
          <li><a href="#contact" className="hover:opacity-70" style={{ color: '#1B2845' }}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
