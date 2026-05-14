"use client";

import { useState } from "react";

const infoItems = [
  {
    titulo: "Localização",
    valor: "Rua Maria Paula, São Paulo, SP, 01319-001",
    sub: "Atendimento presencial e remoto",
  },
  {
    titulo: "WhatsApp",
    valor: "(11) 9 0000-0000",
    sub: "Resposta em até 2 horas úteis",
  },
  {
    titulo: "E-mail",
    valor: "contato@juliasouza.adv.br",
    sub: "Para documentos e formalidades",
  },
  {
    titulo: "Atendimento",
    valor: "Seg – Sex",
    sub: "Com hora marcada",
  },
];

export default function Contato() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contato" className="relative overflow-hidden bg-[#060810] px-6 py-28">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[#c8a96e]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#c8a96e]/60" />
            <span className="text-[10px] uppercase tracking-[0.55em] text-[#c8a96e]">
              Contato
            </span>
          </div>
          <h2 className="mt-6 font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-white md:text-6xl">
            Fale com a advogada
            <br />
            <em className="not-italic font-light text-[#c8a96e]">com discrição</em> e agilidade.
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-3">
            <div className="border border-white/8 bg-white/[0.03] p-8 backdrop-blur-sm md:p-10">
              <div className="grid gap-5">
                {[
                  { id: "nome", type: "text", placeholder: "Seu nome completo" },
                  { id: "whatsapp", type: "tel", placeholder: "WhatsApp com DDD" },
                  { id: "email", type: "email", placeholder: "Seu e-mail" },
                ].map((field) => (
                  <div key={field.id} className="relative">
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      onFocus={() => setFocused(field.id)}
                      onBlur={() => setFocused(null)}
                      className="w-full border border-white/10 bg-transparent px-5 py-4 text-sm font-light text-white placeholder-white/25 outline-none transition-all duration-300 focus:border-[#c8a96e]/50"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-px bg-[#c8a96e] transition-all duration-500 ${
                        focused === field.id ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                ))}

                <div className="relative">
                  <textarea
                    rows={5}
                    placeholder="Conte brevemente sua situação..."
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused(null)}
                    className="w-full resize-none border border-white/10 bg-transparent px-5 py-4 text-sm font-light text-white placeholder-white/25 outline-none transition-all duration-300 focus:border-[#c8a96e]/50"
                  />
                  <div
                    className={`absolute bottom-0 left-0 h-px bg-[#c8a96e] transition-all duration-500 ${
                      focused === "msg" ? "w-full" : "w-0"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative mt-2 overflow-hidden bg-[#c8a96e] px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#060810] transition-all duration-500 hover:shadow-[0_0_50px_rgba(200,169,110,0.35)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Enviar mensagem
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 -translate-x-full bg-black/10 transition-transform duration-500 group-hover:translate-x-0" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col gap-4">
            {infoItems.map((item) => (
              <div
                key={item.titulo}
                className="group border border-white/8 bg-white/[0.03] px-6 py-5 transition-all duration-300 hover:border-[#c8a96e]/25 hover:bg-white/[0.05]"
              >
                <p className="text-[9px] uppercase tracking-[0.5em] text-[#c8a96e]/70">
                  {item.titulo}
                </p>
                <p className="mt-2 text-sm font-light text-white/80">{item.valor}</p>
                <p className="mt-0.5 text-[11px] text-white/30">{item.sub}</p>
              </div>
            ))}

            <div className="mt-2 border-l-2 border-[#c8a96e]/30 pl-4">
              <p className="text-[11px] font-light leading-6 text-white/30">
                Todas as informações compartilhadas são tratadas com absoluta
                confidencialidade e sigilo profissional.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <iframe
            title="Mapa do escritório"
            src="https://www.google.com/maps?q=Rua%20Maria%20Paula,%20São%20Paulo,%20SP,%2001319-001&output=embed"
            className="h-[420px] w-full"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}