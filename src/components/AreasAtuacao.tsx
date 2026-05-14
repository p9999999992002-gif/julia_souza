import { areas } from "@/lib/data";

export default function AreasAtuacao() {
  return (
    <section id="areas" className="relative bg-[#f7f4ef] px-6 py-28">
      {/* Linha decorativa lateral */}
      <div className="pointer-events-none absolute bottom-0 right-[max(2rem,calc(50%-42rem))] top-0 w-px bg-gradient-to-b from-transparent via-[#c8a96e]/15 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Header da seção */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#8a6b2f]/50" />
              <span className="text-[10px] uppercase tracking-[0.55em] text-[#8a6b2f]">
                Áreas de atuação
              </span>
            </div>
            <h2 className="mt-5 font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-[#0b0e16] md:text-6xl">
              Especialidades
              <br />
              <em className="font-light not-italic text-[#8a6b2f]">jurídicas</em> com
              <br />
              foco no trabalhador.
            </h2>
          </div>
          <p className="max-w-xs text-sm font-light leading-7 text-[#0b0e16]/45 md:text-right">
            Cada área de atuação representa um compromisso direto com os direitos
            do trabalhador brasileiro.
          </p>
        </div>

        {/* Grid de áreas */}
        <div className="mt-16 grid gap-px bg-[#0b0e16]/8 md:grid-cols-2 xl:grid-cols-3">
          {areas.map((area, index) => (
            <article
              key={area.titulo}
              className="group relative bg-[#f7f4ef] p-8 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_60px_rgba(11,14,22,0.08)]"
            >
              {/* Número */}
              <span className="font-['Cormorant_Garamond'] text-[80px] font-light leading-none text-[#0b0e16]/[0.04] transition-all duration-500 group-hover:text-[#c8a96e]/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="-mt-6">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0b0e16]">
                  {area.titulo}
                </h3>
                <div className="mt-3 h-px w-8 bg-[#c8a96e] transition-all duration-500 group-hover:w-14" />
                <p className="mt-4 text-sm font-light leading-7 text-[#0b0e16]/55">
                  {area.descricao}
                </p>
              </div>

              {/* Seta hover */}
              <div className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#c8a96e] opacity-0 transition-all duration-300 group-hover:opacity-100">
                Saiba mais
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}