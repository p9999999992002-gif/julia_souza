import Image from "next/image";
import { diferenciais } from "@/lib/data";

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#060810] px-6 py-28">
      {/* Gradiente atmosférico */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#c8a96e]/5 blur-[200px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-20 md:grid-cols-2 md:items-center">
          {/* Coluna de texto */}
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#c8a96e]/60" />
              <span className="text-[10px] uppercase tracking-[0.55em] text-[#c8a96e]">
                Sobre
              </span>
            </div>

            <h2 className="mt-6 font-['Cormorant_Garamond'] text-5xl font-semibold leading-tight text-white md:text-6xl">
              Atendimento
              <br />
              <em className="font-light not-italic text-[#c8a96e]">próximo,</em>
              <br />
              estratégia sólida.
            </h2>

            <p className="mt-8 text-[15px] font-light leading-8 text-white/45">
              Com foco em Direito do Trabalho, Julia Souza atua com dedicação
              pessoal e linguagem acessível para garantir que cada cliente
              entenda e confie em cada etapa do processo.
            </p>

            {/* Diferenciais */}
            <ul className="mt-12 divide-y divide-white/[0.06]">
              {diferenciais.map((d, i) => (
                <li
                  key={d.texto}
                  className="group flex items-start gap-5 py-5 transition-all duration-300 hover:pl-2"
                >
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[#c8a96e]/25 text-[11px] font-light text-[#c8a96e] transition group-hover:border-[#c8a96e]/60 group-hover:bg-[#c8a96e]/5">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <span className="text-sm font-light leading-7 text-white/60 transition group-hover:text-white/85">
                    {d.texto}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="mt-12 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.25em] text-[#c8a96e] transition hover:gap-5"
            >
              Agendar consulta
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Coluna de imagem */}
          <div className="order-1 md:order-2">
            <div className="relative">
              {/* Borda decorativa */}
              <div className="absolute -left-4 -top-4 h-full w-full border border-[#c8a96e]/15" />

              <div className="relative overflow-hidden">
                <div className="relative h-[620px] w-full">
                  <Image
                    src="/julia_souza/julia.jpg"
                    alt="Julia Souza — Advogada Trabalhista"
                    fill
                    className="object-cover object-top grayscale-[20%]"
                    priority
                  />
                  {/* Overlay mais suave */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Badge de credencial */}
                <div className="absolute right-6 top-6 border border-white/10 bg-[#060810]/85 px-4 py-3 backdrop-blur-xl">
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#c8a96e]">
                    Credencial
                  </p>
                  <p className="mt-1 text-xs font-light text-white/70">
                    OAB/SP · Direito do Trabalho
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
