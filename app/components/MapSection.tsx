import React from "react";

const MapSection = () => {
  return (
    <section id="map" className="py-20 px-4" style={{ backgroundColor: '#f3f3f3', minHeight: 'calc(100vh - 64px)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ color: '#1B2845' }}>
              Accès
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
              <div className="text-base text-gray-700 max-w-xs w-full md:w-1/3 text-left" style={{lineHeight: '1.7'}}>
                <div>Place Paul Vaillant Couturier, 94460 Valenton</div>
                <div className="font-bold mt-4 mb-1">Moyens de transport</div>
                <div>Bus - Hôtel de Ville de (lignes O1, J1 et J2)</div>
                <div>Bus - Ancienne Poste (lignes J2, O1, J1 et K)</div>
                <div>Bus - Gabriel Péri (ligne K)</div>
                <div className="font-bold mt-4 mb-1">Informations pratiques</div>
                <div>1er étage avec ascenseur</div>
                <div>Entrée accessible</div>
              </div>
              <a
                href="https://www.google.com/maps?hl=fr&gl=fr&um=1&ie=UTF-8&fb=1&sa=X&geocode=KStOgIE9C-ZHMcLy2oYnBJO2&daddr=5+Pl.+Paul+Vaillant+Couturier,+94460+Valenton"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir la localisation sur Google Maps"
                className="flex-1 w-full"
              >
                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border cursor-pointer hover:opacity-90 transition-opacity">
                  <iframe
                    src="https://www.google.com/maps?q=5+Pl.+Paul+Vaillant+Couturier,+94460+Valenton&hl=fr&z=16&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation Maison de Santé de Valenton"
                  ></iframe>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      </section>
  );
};

export default MapSection;
