
"use client";
import React, { useState } from "react";

export default function SatisfactionSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    satisfaction: "",
    comments: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/satisfaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      // Optionally handle error
    }
    setSubmitted(true);
  };

  return (
    <section id="satisfaction" className="py-20 px-4" style={{ backgroundColor: '#f3f3f3', minHeight: 'calc(100vh - 64px)' }}>
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8">
        <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: '#1B2845' }}>
          Votre avis compte pour nous !
        </h2>
        <p className="text-lg text-center text-gray-700 mb-6">
          Partagez votre niveau de satisfaction et vos commentaires pour nous aider à améliorer nos services.
        </p>
        {submitted ? (
          <div className="text-center text-xl font-semibold" style={{ color: '#09a2d8' }}>
            Merci pour votre retour !
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-semibold mb-2">Nom (optionnel)</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block font-semibold mb-2">Note de satisfaction</label>
              <div className="flex gap-8 items-center justify-center mb-2 w-full" style={{ fontSize: '3rem', maxWidth: 400, margin: '0 auto' }}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    aria-label={`Note ${star} étoile${star > 1 ? 's' : ''}`}
                    onClick={() => setForm({ ...form, satisfaction: String(star) })}
                    className="focus:outline-none bg-transparent border-none p-0"
                    style={{ width: '20%', display: 'flex', justifyContent: 'center' }}
                  >
                    <span style={{ color: Number(form.satisfaction) >= star ? '#FFD700' : '#E5E7EB', cursor: 'pointer', transition: 'color 0.2s' }}>
                      ★
                    </span>
                  </button>
                ))}
              </div>
              <div className="text-center text-sm text-gray-500">
                {form.satisfaction ? `Vous avez noté ${form.satisfaction} étoile${form.satisfaction === '1' ? '' : 's'}` : 'Cliquez pour noter'}
              </div>
            </div>
            <div>
              <label htmlFor="comments" className="block font-semibold mb-2">Commentaires</label>
              <textarea
                id="comments"
                name="comments"
                value={form.comments}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2"
                rows={4}
                placeholder="Vos remarques ou suggestions"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1B2845] text-white font-bold py-3 rounded hover:bg-[#233366] transition"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
