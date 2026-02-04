

"use client";

import React, { useState, useRef } from 'react';
import { getTeamAxes, SubAxe, Axe } from './teamAxesData';

interface TeamSectionProps {
  axes: Axe[];
}
export default function TeamSection({ axes }: TeamSectionProps) {
  const [openAxe, setOpenAxe] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSubAxe, setSelectedSubAxe] = useState<{ axeId: number; subAxe: SubAxe } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 320; // px, adjust as needed
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleAxeClick = (id: number) => {
    setOpenAxe(openAxe === id ? null : id);
  };

  const handleSubAxeClick = (axeId: number, subAxe: SubAxe) => {
    setSelectedSubAxe({ axeId, subAxe });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedSubAxe(null);
  };

  return (
    <section id="team" className="py-20 px-4" style={{ backgroundColor: '#f3f3f3', minHeight: 'calc(100vh - 64px)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4" style={{ color: '#1B2845' }}>
                Notre équipe
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
               Tous nos professionnels de santé et leurs canaux de prise de rendez-vous.
              </p>
            </div>
            <div className="relative">
              <button
                aria-label="Précédent"
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-gray-100 transition"
                style={{ display: 'block' }}
              >
                <span style={{ fontSize: 24 }}>&#8592;</span>
              </button>
              <div
                ref={scrollRef}
                className="flex gap-8 overflow-x-auto py-2 px-8 no-scrollbar"
                style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
              >
                {axes.map((axe: Axe) => {
                  const isOpen = openAxe === axe.id;
                  return (
                    <div
                      key={axe.id}
                      className={
                        `bg-gray-100 rounded-lg p-8 text-center cursor-pointer transition-shadow hover:shadow-lg min-w-[260px] max-w-[280px] w-full ` +
                        (isOpen ? 'ring-4 shadow-xl' : '')
                      }
                      style={isOpen ? { borderColor: '#1B2845', boxShadow: '0 0 0 4px #1B2845' } : {}}
                      onClick={() => handleAxeClick(axe.id)}
                    >
                      <div className="text-5xl mb-4 flex justify-center">
                        <img src={axe.icon} alt={axe.title} width={48} height={48} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#1B2845' }}>{axe.title}</h3>
                      <p className="text-gray-700">{axe.description}</p>
                      {isOpen && (
                        <div className="mt-4">
                          <ul className="space-y-2">
                            {axe.subAxes.map((sub: SubAxe) => (
                              <li
                                key={sub.id}
                                className={
                                  `bg-white rounded-lg px-4 py-3 shadow text-gray-800 border border-gray-100 cursor-pointer transition `
                                }
                                onClick={e => { e.stopPropagation(); handleSubAxeClick(axe.id, sub); }}
                              >
                                {sub.title}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <button
                aria-label="Suivant"
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-300 rounded-full shadow p-2 hover:bg-gray-100 transition"
                style={{ display: 'block' }}
              >
                <span style={{ fontSize: 24 }}>&#8594;</span>
              </button>
            </div>
            {/* Modal for subaxe info */}
            {modalOpen && selectedSubAxe && (
              <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.4)', backdropFilter: 'blur(4px)' }}>
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-xl w-full relative animate-fadeIn">
                  <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                    onClick={closeModal}
                    aria-label="Fermer"
                  >
                    &times;
                  </button>
                  <div className="flex flex-row items-stretch w-full h-full gap-6">
                    {selectedSubAxe.subAxe.photo && (
                      <div className="flex-shrink-0 flex items-center h-full">
                        <img
                          src={selectedSubAxe.subAxe.photo}
                          alt={selectedSubAxe.subAxe.title}
                          className="object-cover rounded-lg border-2"
                          style={{ borderColor: '#09a2d8', height: '320px', width: '220px', minWidth: '180px', maxHeight: '90vh' }}
                        />
                      </div>
                    )}
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <div className="text-lg font-semibold mb-1 break-words">{selectedSubAxe.subAxe.title}</div>
                      {selectedSubAxe.subAxe.phone && (
                        <div className="font-mono mb-2" style={{ color: '#09a2d8' }}>{selectedSubAxe.subAxe.phone}</div>
                      )}
                      {selectedSubAxe.subAxe.description && (
                        <div
                          className="text-gray-700 text-left mt-2 break-words whitespace-pre-line"
                          style={{ whiteSpace: 'pre-line' }}
                        >
                          {selectedSubAxe.subAxe.description}
                        </div>
                      )}
                      {selectedSubAxe.subAxe.link && (
                        <a
                          href={selectedSubAxe.subAxe.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-6 inline-block px-6 py-2 text-white rounded-lg shadow transition"
                          style={{ backgroundColor: '#09a2d8', width: 'fit-content' }}
                          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#077bb5')}
                          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#09a2d8')}
                        >
                          Prendre rendez-vous
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
  );
}
