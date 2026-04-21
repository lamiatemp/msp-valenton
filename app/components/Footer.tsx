export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-4" style={{ backgroundColor: '#1B2845', color: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Maison de Santé de Valenton</h3>
            <p className="text-gray-300">
              Une équipe pluriprofessionnelle exerçant de manière coordonnée autour d'un projet de santé commun pour vous assurer une prise en charge globale.
            </p>
          </div>
          <div className="md:col-start-2 md:col-end-3 md:justify-self-end w-full">
            <h4 className="font-bold mb-4 text-lg">Informations Pratiques</h4>
            <ul className="space-y-2 text-gray-300 text-left">
              <li>📍 Place Paul Vaillant Couturier, 94460 Valenton</li>
              <li>📞 Téléphone à définir</li>
              <li>⏰ Lundi au vendredi : 9h00 - 19h00</li>
              </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2026 La Maison de Santé de Valenton. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
