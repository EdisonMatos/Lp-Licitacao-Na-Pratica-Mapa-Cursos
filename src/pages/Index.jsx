import { useState } from "react";

export default function LandingLicitacoesMapa() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const whatsappNumber = "5545991290837";
  const whatsappMessage =
    "Olá, gostaria de obter mais informações sobre o curso Licitações na Prática.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const coverImage = "/images/capa-licitacoes.jpg";
  const folderImage = "/images/folder-licitacoes.jpg";
  const logo = "/images/logo.webp";

  const youtubeVideo1 = ""; // cole aqui o link do YouTube
  const youtubeVideo2 = ""; // cole aqui o link do YouTube

  const schedule = [
    ["08:00 às 09:40", "Aula"],
    ["09:40 às 10:00", "Intervalo"],
    ["10:00 às 11:40", "Aula"],
    ["11:40 às 13:30", "Almoço"],
    ["13:30 às 15:10", "Aula"],
    ["15:10 às 15:40", "Coffee Break"],
    ["15:40 às 17:20", "Aula"],
  ];

  const content = [
    "Aplicabilidade da Lei nº 14.133/21 na gestão, fiscalização e responsabilização contratual.",
    "Segregação de funções, gestão de riscos e prevenção de irregularidades na execução contratual.",
    "Estudo Técnico Preliminar, Termo de Referência e Pesquisa de Preços como instrumentos de mitigação de riscos e prevenção de sanções.",
    "Procedimento licitatório e seus reflexos na execução contratual e nos procedimentos sancionatórios.",
    "Empenhos, liquidação da despesa, formas de pagamento e controle da execução contratual.",
    "Contratações por dispensa, inexigibilidade e credenciamento.",
    "Contratação de artistas e serviços técnicos especializados.",
    "Gestão e fiscalização de contratos administrativos.",
    "Atribuições, deveres e responsabilidades do gestor e do fiscal de contratos.",
    "Alterações contratuais, reajuste, reequilíbrio econômico-financeiro e prorrogações.",
    "Recebimento do objeto.",
    "Procedimentos sancionatórios na Lei nº 14.133/21.",
    "Aplicação de advertência, multa, impedimento de licitar e declaração de inidoneidade.",
    "Processo administrativo sancionador.",
    "Inteligência artificial aplicada à gestão contratual, fiscalização e procedimentos sancionatórios.",
  ];

  function scrollToForm() {
    document.getElementById("formulario-inscricao")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("https://formsubmit.co/ajax/mapainstituto@outlook.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      setSent(true);
      e.currentTarget.reset();
    } catch (error) {
      alert(
        "Não foi possível enviar sua pré-inscrição agora. Tente novamente ou entre em contato pelo WhatsApp."
      );
    } finally {
      setSending(false);
    }
  }

  function getYoutubeEmbed(url) {
    if (!url) return "";

    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/
    );

    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }

  return (
    <main className="bg-[#f6f8ff] text-[#101430]">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
        aria-label="Falar pelo WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className="h-8 w-8 fill-current"
          aria-hidden="true"
        >
          <path d="M19.11 17.37c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.74.94-.91 1.13-.17.19-.33.21-.62.07-.29-.14-1.21-.45-2.31-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.44.12-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42 0 1.43 1.03 2.8 1.17 2.99.14.19 2.03 3.09 4.91 4.33.69.3 1.22.48 1.64.61.69.22 1.31.19 1.8.12.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33ZM16.04 3C8.86 3 3.03 8.82 3.03 16c0 2.29.6 4.53 1.74 6.5L3 29l6.67-1.75A12.93 12.93 0 0 0 16.04 29c7.18 0 13-5.82 13-13s-5.82-13-13-13Zm0 23.79c-2.13 0-4.21-.57-6.03-1.66l-.43-.25-3.96 1.04 1.06-3.86-.28-.45A10.73 10.73 0 0 1 5.24 16c0-5.95 4.84-10.79 10.8-10.79 5.95 0 10.79 4.84 10.79 10.79s-4.84 10.79-10.79 10.79Z" />
        </svg>
      </a>

      <header className="relative min-h-screen overflow-hidden bg-[#05071f] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${coverImage})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-br from-[#05071f]/95 via-[#080b2b]/95 to-[#05071f]/95" />
        {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f6f8ff] to-transparent" /> */}

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 py-20">
          <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="flex justify-center md:justify-start mb-20">
                <img src={logo} className="w-[200px]" />
              </div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.5em] text-cyan-200">
                3ª edição
              </p>

              <h1 className="max-w-5xl text-5xl font-black uppercase leading-none tracking-tight md:text-7xl lg:text-8xl">
                Licitações na Prática
              </h1>

              <p className="mt-5 max-w-4xl text-xl font-bold uppercase tracking-wide text-cyan-200 md:text-3xl">
                Gestão Contratual e Procedimentos Sancionadores
              </p>

              <div className="mt-9 grid max-w-3xl gap-4 sm:grid-cols-3">
                <HeroInfo label="Data" value="10 e 11 de setembro" />
                <HeroInfo label="Cidade" value="Maringá/PR" />
                <HeroInfo label="Carga horária" value="16 horas" />
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  onClick={scrollToForm}
                  className="rounded-full bg-cyan-300 px-9 py-4 text-base font-black uppercase tracking-wide text-[#05071f] shadow-[0_0_45px_rgba(103,232,249,0.45)] transition hover:scale-105 hover:bg-white"
                >
                  Inscreva-se já
                </button>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-9 py-4 text-center text-base font-black uppercase tracking-wide text-white backdrop-blur transition hover:bg-white hover:text-[#05071f]"
                >
                  Tirar dúvidas
                </a>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-cyan-300/20 blur-3xl" />
              <img
                src={folderImage}
                alt="Folder do curso Licitações na Prática"
                className="relative w-full rounded-[2rem] border border-white/15 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </header>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#23158f]">
              Sobre o curso
            </p>

            <h2 className="text-4xl font-black leading-tight text-[#080b2b] md:text-5xl">
              Capacitação prática para quem atua com licitações e contratos
              administrativos.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-700">
              O curso Licitações na Prática foi desenvolvido para capacitar
              agentes públicos, gestores, fiscais de contratos, procuradores,
              assessores jurídicos e servidores que atuam com licitações e
              contratos administrativos.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate-700">
              Com{" "}
              <strong className="font-black text-cyan-500">
                abordagem extremamente prática
              </strong>{" "}
              e atualizada pela Lei nº 14.133/2021, o treinamento apresenta
              soluções reais para os desafios enfrentados na gestão contratual e
              nos procedimentos sancionadores.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#080b2b] p-8 text-white shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-200">
              Informações principais
            </p>

            <div className="mt-6 space-y-4">
              <Info label="Curso" value="Licitações na Prática – 3ª Edição" />
              <Info
                label="Tema"
                value="Gestão Contratual e Procedimentos Sancionadores"
              />
              <Info label="Data" value="10 e 11 de setembro" />
              <Info label="Local" value="Hotel Deville – Maringá/PR" />
              <Info label="Carga horária" value="16 horas" />
            </div>

            <button
              onClick={scrollToForm}
              className="mt-8 w-full rounded-full bg-cyan-300 px-8 py-4 font-black uppercase text-[#05071f] transition hover:bg-white"
            >
              Inscreva-se já
            </button>
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={folderImage}
              alt="Prof. Matheus Carvalho"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-cyan-200">
              Professor
            </p>

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              O Professor Matheus Carvalho, Procurador da Fazenda Nacional
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-white/75">
              <p>
                Matheus Vianna de Carvalho é reconhecido nacionalmente como uma
                das maiores referências brasileiras em Direito Administrativo,
                Licitações e Contratos Administrativos. Procurador da Fazenda
                Nacional, Mestre em Direito e autor de diversas obras jurídicas,
                destaca-se por unir sólida formação acadêmica à experiência
                prática na aplicação das normas que regem a Administração
                Pública.
              </p>

              <p>
                Autor do consagrado Manual de Direito Administrativo, atualmente
                em sua 12ª edição pela Editora Juspodivm, Matheus Carvalho
                tornou-se um dos juristas mais respeitados do país na área do
                Direito Público. Seus livros, artigos e estudos são amplamente
                utilizados por advogados, procuradores, magistrados, membros do
                Ministério Público, servidores públicos e candidatos a concursos
                em todo o Brasil.
              </p>

              <p>
                O reconhecimento de sua produção intelectual ultrapassa o
                ambiente acadêmico. Seus entendimentos jurídicos são
                frequentemente citados em decisões do Supremo Tribunal Federal
                (STF) e do Superior Tribunal de Justiça (STJ), consolidando sua
                posição como um dos mais influentes juristas brasileiros na
                interpretação e desenvolvimento do Direito Administrativo
                contemporâneo.
              </p>
            </div>

            <button
              onClick={scrollToForm}
              className="mt-8 rounded-full bg-cyan-300 px-8 py-4 font-black uppercase text-[#05071f] transition hover:bg-white"
            >
              Inscreva-se já
            </button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Edições anteriores"
          title="Histórico de sucesso e excelentes avaliações dos participantes."
          description="Confira registros das edições anteriores do curso."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <VideoCard url={youtubeVideo1} label="Vídeo 1" />
          <VideoCard url={youtubeVideo2} label="Vídeo 2" />
        </div>
      </Section>

      <Section soft>
        <SectionTitle
          eyebrow="Depoimentos"
          title="Experiências de quem já participou"
          description="Espaço preparado para inserir depoimentos com texto, foto, cargo e órgão."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <TestimonialCard
            name="Ana Paula Ribeiro"
            role="Fiscal de Contratos"
            text="Foi uma capacitação muito objetiva e conectada com a rotina de quem lida com contratos públicos. Os exemplos práticos ajudaram bastante a entender pontos que, no dia a dia, costumam gerar dúvidas na fiscalização e na instrução dos processos."
          />

          <TestimonialCard
            name="Marcelo Henrique Souza"
            role="Assessor Jurídico"
            text="O curso trouxe uma visão muito clara sobre a Lei nº 14.133/2021, principalmente na parte de gestão de riscos, responsabilização e procedimentos sancionadores. Saí com orientações que consigo aplicar diretamente nos processos internos do órgão."
          />

          <TestimonialCard
            name="Juliana Martins Pereira"
            role="Pregoeira e Agente de Contratação"
            text="Gostei muito da forma como o conteúdo foi apresentado. Mesmo tratando de temas técnicos, a abordagem foi prática, com linguagem acessível e exemplos próximos da realidade da Administração Pública."
          />
        </div>
      </Section>

      <Section dark>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-cyan-200">
              Programação
            </p>

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Dois dias de formação intensiva
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/70">
              A programação dos dias 10 e 11 de setembro seguirá a mesma
              estrutura de horários.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <ScheduleCard day="10 de setembro" schedule={schedule} />
              <ScheduleCard day="11 de setembro" schedule={schedule} />
            </div>

            <button
              onClick={scrollToForm}
              className="mt-8 rounded-full bg-cyan-300 px-8 py-4 font-black uppercase text-[#05071f] transition hover:bg-white"
            >
              Inscreva-se já
            </button>
          </div>

          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-cyan-200">
              Conteúdo programático
            </p>

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Temas abordados no curso
            </h2>

            <ul className="mt-8 space-y-4">
              {content.map((item, index) => (
                <li key={index} className="flex gap-3 text-white/75">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                  <span className="leading-7">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionTitle
          eyebrow="Investimento"
          title="Garanta sua inscrição no melhor lote disponível"
          description="Os valores são definidos por lote, conforme a data da inscrição."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <PriceCard
            title="1º Lote"
            date="até 30/06/2026"
            price="R$ 2.200,00"
            highlight
          />

          <PriceCard
            title="2º Lote"
            date="até 31/07/2026"
            price="R$ 2.500,00"
          />

          <PriceCard
            title="3º Lote"
            date="até 31/08/2026"
            price="R$ 2.900,00"
          />
        </div>

        <div className="mt-8 rounded-[2rem] bg-[#080b2b] p-8 text-center text-white">
          <p className="text-lg font-semibold">
            Para mais de um inscrito, solicite uma proposta especial.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-cyan-300 px-8 py-4 font-black uppercase text-[#05071f] transition hover:bg-white"
          >
            Solicitar proposta via WhatsApp
          </a>
        </div>
      </Section>

      <Section soft>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#23158f]">
              Local do evento
            </p>

            <h2 className="text-4xl font-black leading-tight text-[#080b2b] md:text-5xl">
              Hotel Deville Maringá
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              Avenida Herval, n. 26 - Zona 01, Maringá/PR.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Hotel%20Deville%20Avenida%20Herval%2026%20Maring%C3%A1%20PR"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-[#23158f] px-8 py-4 font-black uppercase text-white transition hover:bg-[#080b2b]"
            >
              Como chegar
            </a>
          </div>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl">
            <iframe
              title="Mapa Hotel Deville Maringá"
              src="https://www.google.com/maps?q=Hotel%20Deville%20Avenida%20Herval%2026%20Maring%C3%A1%20PR&output=embed"
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div
          id="formulario-inscricao"
          className="mx-auto max-w-4xl scroll-mt-10 rounded-[2rem] bg-white p-6 shadow-2xl md:p-10"
        >
          <SectionTitle
            eyebrow="Formulário de inscrição"
            title="Preencha seus dados para realizar a pré-inscrição"
            description="Após o envio, a equipe entrará em contato para confirmar a inscrição e fornecer as informações para contratação formalizada."
          />

          {sent ? (
            <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-center">
              <h3 className="text-2xl font-black text-emerald-700">
                Sua pré-inscrição foi recebida com sucesso.
              </h3>

              <p className="mt-3 text-slate-700">
                Em breve nossa equipe entrará em contato para confirmar a
                inscrição e fornecer as informações para contratação
                formalizada.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-8">
              <input
                type="hidden"
                name="_subject"
                value="Nova pré-inscrição - Curso Licitações na Prática"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <h3 className="mb-5 text-xl font-black text-[#080b2b]">
                  Dados pessoais
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <Input name="Nome completo" label="Nome completo" required />
                  <Input name="WhatsApp" label="WhatsApp" required />

                  <Input
                    name="E-mail"
                    label="E-mail"
                    type="email"
                    required
                    className="md:col-span-2"
                  />
                </div>
              </div>

              <div>
                <h3 className="mb-5 text-xl font-black text-[#080b2b]">
                  Dados institucionais
                </h3>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-600">
                      Órgão ou ofício onde trabalha
                    </label>

                    <select
                      name="Órgão ou ofício"
                      required
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#23158f] focus:ring-4 focus:ring-[#23158f]/10"
                    >
                      <option value="">Selecione uma opção</option>
                      <option>Prefeitura Municipal</option>
                      <option>Câmara Municipal</option>
                      <option>Autarquia</option>
                      <option>Fundação Pública</option>
                      <option>Iniciativa Privada</option>
                    </select>
                  </div>

                  <Input name="Município/UF" label="Município/UF" required />
                  <Input name="Cargo/Função" label="Cargo/Função" required />
                </div>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-full bg-[#23158f] px-8 py-5 text-lg font-black uppercase text-white transition hover:bg-[#080b2b] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Enviando..." : "Enviar pré-inscrição"}
              </button>
            </form>
          )}
        </div>
      </Section>

      <footer className="bg-[#05071f] px-5 py-10 text-center text-white">
        <div className="flex justify-center mb-10">
          <img src={logo} className="w-[200px]" />
        </div>

        <p className="mt-3 text-white/60">
          Licitações na Prática – Gestão Contratual e Procedimentos
          Sancionadores
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-2 text-white/70 sm:flex-row sm:gap-6">
          <span>45 99129-0837</span>
          <span>mapainstituto@outlook.com</span>
          <span>www.mapacursos.com</span>
        </div>
      </footer>
    </main>
  );

  function Section({ children, dark = false, soft = false }) {
    return (
      <section
        className={`px-5 py-20 md:py-28 ${
          dark
            ? "bg-[#05071f] text-white"
            : soft
            ? "bg-[#eef3ff]"
            : "bg-[#f6f8ff]"
        }`}
      >
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
    );
  }

  function SectionTitle({ eyebrow, title, description }) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.35em] text-[#23158f]">
          {eyebrow}
        </p>

        <h2 className="text-4xl font-black leading-tight text-[#080b2b] md:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-5 text-lg leading-8 text-slate-700">{description}</p>
        )}
      </div>
    );
  }

  function HeroInfo({ label, value }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
        <p className="text-xs font-bold uppercase tracking-widest text-white/60">
          {label}
        </p>

        <p className="mt-2 text-xl font-black text-white">{value}</p>
      </div>
    );
  }

  function Info({ label, value }) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">
          {label}
        </p>

        <p className="mt-1 font-bold text-white">{value}</p>
      </div>
    );
  }

  function VideoCard({ url, label }) {
    const embed = getYoutubeEmbed(url);

    return (
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        {embed ? (
          <iframe
            title={label}
            src={embed}
            className="aspect-video w-full border-0"
            allowFullScreen
          />
        ) : (
          <div className="flex aspect-video items-center justify-center bg-[#080b2b] p-8 text-center text-white">
            <div>
              <p className="text-2xl font-black">{label}</p>

              <p className="mt-3 text-white/60">
                Cole o link do YouTube na constante correspondente.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  function TestimonialCard({ name, role, text }) {
    return (
      <div className="rounded-[2rem] bg-white p-7 shadow-xl">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#23158f]/10 text-2xl font-black text-[#23158f]">
          💬
        </div>

        <p className="leading-7 text-slate-700">“{text}”</p>

        <p className="mt-6 font-black text-[#080b2b]">{name}</p>

        <p className="text-sm font-semibold text-[#23158f]">{role}</p>
      </div>
    );
  }

  function ScheduleCard({ day, schedule }) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-black text-cyan-200">{day}</h3>

        <div className="mt-5 space-y-3">
          {schedule.map(([hour, label], index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 rounded-xl bg-white/5 px-4 py-3"
            >
              <span className="font-semibold text-white/75">{hour}</span>
              <span className="font-black text-white">{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  function PriceCard({ title, date, price, highlight = false }) {
    return (
      <div
        className={`rounded-[2rem] p-8 shadow-xl ${
          highlight
            ? "bg-[#080b2b] text-white ring-4 ring-cyan-300"
            : "bg-white text-[#080b2b]"
        }`}
      >
        {highlight && (
          <p className="mb-4 inline-flex rounded-full bg-cyan-300 px-4 py-2 text-xs font-black uppercase text-[#080b2b]">
            Melhor condição
          </p>
        )}

        <h3 className="text-3xl font-black">{title}</h3>

        <p className={`mt-2 ${highlight ? "text-white/60" : "text-slate-500"}`}>
          {date}
        </p>

        <p className="mt-6 text-4xl font-black">{price}</p>

        <button
          onClick={scrollToForm}
          className={`mt-8 w-full rounded-full px-6 py-4 font-black uppercase transition ${
            highlight
              ? "bg-cyan-300 text-[#05071f] hover:bg-white"
              : "bg-[#23158f] text-white hover:bg-[#080b2b]"
          }`}
        >
          Inscreva-se já
        </button>
      </div>
    );
  }

  function Input({
    label,
    name,
    type = "text",
    required = false,
    className = "",
  }) {
    return (
      <div className={className}>
        <label className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-600">
          {label}
        </label>

        <input
          type={type}
          name={name}
          required={required}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-[#23158f] focus:ring-4 focus:ring-[#23158f]/10"
        />
      </div>
    );
  }
}
