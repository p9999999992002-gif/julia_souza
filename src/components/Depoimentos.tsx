import { depoimentos } from "@/lib/data";

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="relative bg-[#f7f4ef] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#8a6b2f]/50" />
              <span className="text-[10px] uppercase tracking-[0.55em] text-[#8a6b2f]">
                Depoimentos
              </span>
            </div>
            <h2 className="mt-5 font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-[#0b0e16] md:text-6xl">
              Histórias de quem
              <br />
              <em className="font-light not-italic text-[#8a6b2f]">confiou</em> no trabalho.
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {depoimentos.map((d, i) => (
            <div
              key={d.nome}
              className="group relative flex flex-col justify-between border border-[#0b0e16]/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#c8a96e]/30 hover:shadow-[0_30px_80px_rgba(11,14,22,0.08)]"
            >
              {/* Número de fundo */}
              <span className="absolute right-6 top-4 font-['Cormorant_Garamond'] text-7xl font-light leading-none text-[#0b0e16]/[0.04]">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Aspas estilizadas */}
              <div className="mb-6 h-px w-12 bg-[#c8a96e]" />

              <p className="flex-1 text-[15px] font-light leading-8 text-[#0b0e16]/65">
                {d.texto}
              </p>

              <div className="mt-8 flex items-center gap-3 border-t border-[#0b0e16]/6 pt-6">
                {/* Iniciais */}
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center bg-[#c8a96e]/10 text-[11px] font-semibold uppercase tracking-wider text-[#8a6b2f]">
                  {d.nome.split(" ").map((n: string) => n[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0b0e16]">{d.nome}</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#0b0e16]/35">
                    Cliente
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}