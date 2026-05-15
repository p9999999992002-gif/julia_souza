import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#060810] px-6 pt-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[15%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#c8a96e]/10 blur-[180px]" />
        <div className="absolute right-[10%] top-[40%] h-[350px] w-[350px] rounded-full bg-[#1a2744]/60 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-full bg-gradient-to-t from-[#060810] to-transparent" />
      </div>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="pointer-events-none absolute bottom-0 left-[max(2rem,calc(50%-42rem))] top-0 w-px bg-gradient-to-b from-transparent via-[#c8a96e]/20 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-end gap-12 pb-0 pt-16 md:grid-cols-[1fr_420px] md:items-center md:gap-20">
        <div className="order-2 pb-12 md:order-1 md:pb-0">
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px w-10 bg-[#c8a96e]/60" />
            <span className="text-[10px] uppercase tracking-[0.55em] text-[#c8a96e]">
              Direito do Trabalho
            </span>
          </div>

          <h1 className="font-['Cormorant_Garamond'] text-[3.5rem] font-semibold leading-[1.08] tracking-tight text-white md:text-[5.5rem]">
            Seus direitos
            <br />
            <em className="font-light not-italic text-[#c8a96e]">defendidos</em>
            <br />
            com precisão.
          </h1>

          <p className="mt-8 max-w-lg text-[15px] font-light leading-relaxed tracking-wide text-white/45">
            Assessoria jurídica trabalhista completa para trabalhadores que
            buscam clareza, estratégia e resultado real.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#contato"
              className="group relative overflow-hidden bg-[#c8a96e] px-10 py-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-[#060810] transition-all duration-500 hover:shadow-[0_0_60px_rgba(200,169,110,0.35)]"
            >
              <span className="relative z-10">Consulta gratuita</span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#areas"
              className="flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-white/40 transition hover:text-white/80"
            >
              Ver atuação
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="mt-16 flex gap-10 border-t border-white/8 pt-10">
            {[
              { num: "8+", label: "Anos de atuação" },
              { num: "500+", label: "Casos resolvidos" },
              { num: "98%", label: "Clientes satisfeitos" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-['Cormorant_Garamond'] text-3xl font-semibold text-[#c8a96e]">
                  {stat.num}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-widest text-white/30">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full border border-[#c8a96e]/20" />
            <div className="relative overflow-hidden bg-[#0e1320]">
              <div className="relative h-[580px] w-full md:h-[680px]">
                <Image
                  src="./julia_souza/julia.jpg"
                  alt="Julia Souza — Advogada Trabalhista"
                  fill
                  priority
                  className="object-cover object-top grayscale-[15%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060810]/80 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="border border-white/10 bg-[#060810]/80 px-5 py-4 backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[0.5em] text-[#c8a96e]">
                    Julia Souza
                  </p>
                  <p className="mt-1 font-['Cormorant_Garamond'] text-xl font-medium text-white">
                    Advogada Trabalhista
                  </p>
                  <p className="mt-0.5 text-[11px] tracking-wider text-white/35">
                    São Paulo · OAB/SP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}