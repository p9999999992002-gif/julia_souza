export default function Footer() {
  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Áreas", href: "#areas" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[#040609]">
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div>
            <p className="font-['Cormorant_Garamond'] text-2xl font-semibold text-white">
              Julia <span className="text-[#c8a96e]">Souza</span>
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.5em] text-white/30">
              Advocacia Trabalhista · OAB/SP
            </p>
            <p className="mt-6 max-w-xs text-[12px] font-light leading-6 text-white/30">
              Defesa dos direitos trabalhistas com excelência, discrição e
              comprometimento real com cada cliente.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.45em] text-white/25">
              Navegação
            </p>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] font-light text-white/40 transition duration-300 hover:text-[#c8a96e]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.45em] text-white/25">
              Contato rápido
            </p>
            <div className="space-y-3">
              <a
                href="tel:+5511900000000"
                className="block text-[13px] font-light text-white/40 transition hover:text-white/80"
              >
                (11) 9 0000-0000
              </a>
              <a
                href="mailto:contato@juliasouza.adv.br"
                className="block text-[13px] font-light text-white/40 transition hover:text-white/80"
              >
                contato@juliasouza.adv.br
              </a>
              <p className="text-[13px] font-light text-white/25">
                São Paulo, SP
              </p>
            </div>

            <a
              href="#contato"
              className="mt-8 inline-flex items-center gap-3 border border-[#c8a96e]/30 px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-[#c8a96e] transition duration-300 hover:bg-[#c8a96e] hover:text-[#060810]"
            >
              Agendar consulta
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/[0.05] pt-8 md:flex-row">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Julia Souza Advogada. Todos os direitos reservados.
          </p>
          <p className="text-[11px] text-white/15">
            OAB/SP · Advocacia Trabalhista
          </p>
        </div>
      </div>
    </footer>
  );
}