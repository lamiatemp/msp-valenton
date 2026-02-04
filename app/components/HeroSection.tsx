
export default function HeroSection() {
  return (
    <section
        className="relative px-4 flex flex-col justify-center"
        style={{ backgroundColor: '#ffffff', minHeight: 'calc(100vh - 64px)' }}
      >
        {/* Background Image with transparency */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/medical-banner-with-stethoscope.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center top', // Center horizontally, align to top vertically
            opacity: 0.4, // Reduce only the image opacity
            zIndex: 0,
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold mb-4" style={{ color: '#1B2845' }}>Bienvenue à la</h2>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#1B2845' }}>
              Maison de Santé de Valenton
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              La Maison de santé de Valenton regroupe différents professionnels de santé afin de vous apporter une qualité de service répondant à vos besoins de santé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.doctolib.fr/maison-de-sante/valenton/maison-de-sante-pluridisciplinaire-de-valenton?pid=practice-494378" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-3 rounded-lg text-lg font-semibold transition" style={{ borderColor: '#1B2845', color: '#1B2845', border: '2px solid' }}>
                  Prendre rendez-vous
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}
