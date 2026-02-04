"use client";
import React, { useState } from 'react';

export interface AboutData {
  title: string;
  description: string;
  info: string;
}

export default function AboutSection({ about }: { about: AboutData }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: '#f3f3f3', minHeight: 'calc(100vh - 64px)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1B2845' }}>
                {about.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8" dangerouslySetInnerHTML={{ __html: about.description }} />
              <button
                className="px-8 py-3 rounded-lg text-lg font-semibold transition"
                style={{ borderColor: '#1B2845', color: '#1B2845', border: '2px solid' }}
                onClick={() => setModalOpen(true)}
              >
                Qu'est ce qu'une MSP ?
              </button>
              {modalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                  <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                      onClick={() => setModalOpen(false)}
                      aria-label="Fermer"
                    >
                      &times;
                    </button>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: '#1B2845' }}>
                      Notre projet de santé
                    </h3>
                    <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: about.info }} />
                  </div>
                </div>
              )}
            </div>
            <div className="rounded-lg overflow-hidden h-96">
              <img src="/images/5207289.jpg" alt="Illustration MSP" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
