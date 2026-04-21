"use client";

import React, { useState, useEffect } from 'react';

export default function AboutSection() {
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    async function fetchTxt() {
      try {
        const response = await fetch('/txt/About.txt');
        const text = await response.text();
        setAboutText(text);
      } catch (error) {
        setAboutText('Erreur lors du chargement du document.');
      }
    }
    fetchTxt();
  }, []);

  function renderFormattedText(text: string) {
    if (!text) return null;
    const lines = text.split(/\r?\n/);
    const elements = [];
    let inList = false;
    let listItems = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '') {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`ul-end-${i}`} className="list-disc pl-6 mb-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(<br key={`br-${i}`} />);
        continue;
      }
      // Bold for section headers except the specific line
      if (/^Vous offrir|^Vous permettre|^Vous accueillir/.test(line)) {
        if (inList && listItems.length > 0) {
          elements.push(
            <ul key={`ul-end-${i}`} className="list-disc pl-6 mb-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        elements.push(
          <div key={`bold-${i}`} className="font-bold text-lg mt-4 mb-2" style={{fontWeight: 700}}>{line}</div>
        );
        continue;
      }
      // Special case: show this line as normal text
      if (line === "Notre engagement s’articule autour de 3 axes :") {
        elements.push(
          <p key={`p-${i}`} className="mb-2">{line}</p>
        );
        continue;
      }
      // Bullet points
      if (line.startsWith('•')) {
        inList = true;
        listItems.push(
          <li key={`li-${i}`} className="mb-1">{line.replace(/^•\s*/, '')}</li>
        );
        // If next line is not a bullet or end of file, close the list
        if (i + 1 === lines.length || !lines[i + 1].trim().startsWith('•')) {
          elements.push(
            <ul key={`ul-end-${i}`} className="list-disc pl-6 mb-2">
              {listItems}
            </ul>
          );
          listItems = [];
          inList = false;
        }
        continue;
      }
      // Normal paragraph
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`ul-end-${i}`} className="list-disc pl-6 mb-2">
            {listItems}
          </ul>
        );
        listItems = [];
        inList = false;
      }
      elements.push(
        <p key={`p-${i}`} className="mb-2">{line}</p>
      );
    }
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`ul-end-final`} className="list-disc pl-6 mb-2">
          {listItems}
        </ul>
      );
    }
    return elements;
  }

  return (
    <section id="about" className="py-20 px-4" style={{ backgroundColor: '#f3f3f3', minHeight: 'calc(100vh - 64px)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-8">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#1B2845' }}>
                À propos
              </h2>
              <div className="text-lg text-gray-700 mb-8">
                {renderFormattedText(aboutText)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
