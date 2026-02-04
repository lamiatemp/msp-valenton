
import { axes } from './axesData';

export default function AxesSection() {
  return (
    <section id="axes" className="py-20 px-4" style={{ backgroundColor: '#f3f3f3', minHeight: 'calc(100vh - 64px)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1B2845' }}>
                Un engagement autour de 2 axes
              </h2>
              <p className="text-xl text-gray-700">pour répondre à vos besoins</p>
            </div>
            <div className="grid grid-cols-1 gap-8 mb-12">
              {axes.map((axe) => (
                <div key={axe.id} className="bg-gray-100 rounded-lg p-8 flex flex-col items-center">
                  <div className="flex items-center justify-center w-full mb-4">
                    <img src={axe.icon} alt={axe.title} width={48} height={48} className="text-5xl" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#1B2845' }}>
                    {axe.title}
                  </h3>
                  <p className="text-gray-700 text-left" style={{ whiteSpace: 'pre-line' }}>{axe.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
