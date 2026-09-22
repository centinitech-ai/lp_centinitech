import Link from "next/link";
import { Brand } from "@/components/brand";
import { Intro } from "@/components/intro";
import { NeuralField } from "@/components/neural-field";

const services = [
  { n: "01", title: "Sistemas sob medida", detail: "Plataformas que organizam operações, conectam equipes e acompanham o crescimento do negócio.", tag: "ARQUITETURA · PRODUTO" },
  { n: "02", title: "Automações inteligentes", detail: "Fluxos, integrações e decisões automatizadas para tirar o trabalho repetitivo do caminho.", tag: "PROCESSOS · INTEGRAÇÕES" },
  { n: "03", title: "Sites e experiências", detail: "Presença digital com identidade, desempenho e intenção — muito além de estar online.", tag: "WEB · EXPERIÊNCIA" },
  { n: "04", title: "Aplicativos", detail: "Produtos digitais pensados de ponta a ponta, da primeira interação à operação diária.", tag: "MOBILE · ESCALA" },
];

export default function Home() {
  return (
    <>
      <Intro />
      <div className="site-shell">
        <header className="site-header">
          <Link href="/" aria-label="Centini Tech, início"><Brand compact /></Link>
          <nav aria-label="Navegação principal">
            <a href="#atuacao">Atuação</a>
            <a href="#solucoes">Soluções</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
          </nav>
          <Link className="header-cta" href="/iniciar">Iniciar projeto <span aria-hidden="true">↗</span></Link>
        </header>

        <main>
          <section className="hero" id="inicio">
            <div className="hero__ambient" />
            <NeuralField />
            <div className="hero__content container">
              <div className="eyebrow"><span className="eyebrow__dot" /> ENGENHARIA DIGITAL PARA O PRÓXIMO PASSO</div>
              <h1>Complexidade, <em>transformada</em> em avanço.</h1>
              <p>Construímos tecnologia com direção: sistemas, automações e experiências digitais que resolvem o que realmente importa.</p>
              <div className="hero__actions">
                <Link className="button button--primary" href="/iniciar">Vamos construir juntos <span aria-hidden="true">↗</span></Link>
                <a className="text-link" href="#atuacao">Explore a Centini <span aria-hidden="true">↓</span></a>
              </div>
            </div>
            <div className="hero__foot container"><span>DESENVOLVIMENTO / AUTOMAÇÃO / PRODUTO</span><span>SCROLL PARA EXPLORAR <span aria-hidden="true">↓</span></span></div>
          </section>

          <div className="signal-bar" aria-hidden="true"><span>ESTRATÉGIA</span><i /> <span>DESIGN</span><i /> <span>ENGENHARIA</span><i /> <span>EVOLUÇÃO</span></div>

          <section className="section section--services" id="atuacao">
            <div className="container">
              <div className="section-top"><span className="section-index">01 / O QUE FAZEMOS</span><span className="section-top__line" /></div>
              <div className="section-heading"><h2>Tecnologia feita para <em>funcionar no mundo real.</em></h2><p>Não começamos pela ferramenta. Começamos pelo problema, desenhamos o caminho e construímos a solução certa.</p></div>
              <div className="service-list">
                {services.map((service) => <div className="service-row" key={service.n}><span className="service-row__number">{service.n}</span><h3>{service.title}</h3><p>{service.detail}</p><span className="service-row__tag">{service.tag}</span><span className="service-row__arrow" aria-hidden="true">↗</span></div>)}
              </div>
            </div>
          </section>

          <section className="section section--solutions" id="solucoes">
            <div className="container">
              <div className="section-top"><span className="section-index">02 / SOLUÇÕES</span><span className="section-top__line" /></div>
              <div className="section-heading"><h2>Produtos com inteligência <em>aplicada.</em></h2><p>Tecnologia proprietária para tornar conversas e operações mais claras, rápidas e valiosas.</p></div>
              <div className="solution-grid">
                <article className="solution-card solution-card--assistant">
                  <div className="solution-card__top"><span>SOLUÇÃO CENTINI TECH / 001</span><span className="solution-card__glyph" aria-hidden="true">✳</span></div>
                  <div className="conversation-art" aria-hidden="true"><div className="conversation-art__bubble">Olá! Como posso ajudar?</div><div className="conversation-art__bubble conversation-art__bubble--right">Quero conhecer as opções.</div><div className="conversation-art__data"><span>CONTEXTO IDENTIFICADO</span><span>✓ INTERESSE REGISTRADO</span><span>✓ DADOS ORGANIZADOS</span></div></div>
                  <div className="solution-card__copy"><h3>Assistente de WhatsApp</h3><p>Uma conversa que entende, qualifica e organiza informações. Com uma plataforma para acompanhar cada atendimento e transformar dados em continuidade.</p><span className="tagline">CONVERSA + CONTEXTO + CONTROLE</span></div>
                </article>
                <article className="solution-card solution-card--provum">
                  <div className="solution-card__top"><span>PRODUTO / 002</span><span className="solution-card__glyph" aria-hidden="true">◈</span></div>
                  <div className="provum-art" aria-hidden="true"><span className="provum-art__ring provum-art__ring--one" /><span className="provum-art__ring provum-art__ring--two" /><span className="provum-art__core">P</span></div>
                  <div className="solution-card__copy"><h3>Provum</h3><p>Uma iniciativa da Centini Tech que traduz nossa visão de produto: tecnologia útil, experiência cuidadosa e evolução contínua.</p><span className="tagline">PRODUTO PRÓPRIO · EM EVOLUÇÃO</span></div>
                </article>
              </div>
            </div>
          </section>

          <section className="section section--method" id="projetos">
            <div className="container">
              <div className="section-top"><span className="section-index">03 / COMO PENSAMOS</span><span className="section-top__line" /></div>
              <div className="method-layout"><div><h2>Menos promessa.<br /><em>Mais construção.</em></h2><p>Projetos fortes nascem de perguntas melhores, decisões claras e execução consistente. É assim que trabalhamos.</p></div><div className="method-steps"><div><span>01 / ENTENDER</span><p>Mapeamos o contexto, as pessoas e os pontos de atrito.</p></div><div><span>02 / DESENHAR</span><p>Definimos a experiência e a arquitetura antes de acelerar.</p></div><div><span>03 / CONSTRUIR</span><p>Desenvolvemos, testamos e evoluímos com foco no resultado.</p></div></div></div>
              <div className="project-note"><span className="project-note__icon">↗</span><div><h3>Os próximos cases estão em construção.</h3><p>Preferimos mostrar projetos reais, com contexto e resultado verificável. Em breve, esta área vai contar essas histórias.</p></div></div>
            </div>
          </section>

          <section className="section section--about" id="sobre"><div className="container about-layout"><div><span className="section-index">04 / SOBRE NÓS</span><h2>Uma empresa de tecnologia que entende de <em>negócio.</em></h2></div><div><p>Somos a Centini Tech. Unimos visão de produto, engenharia e design para criar soluções digitais com propósito. Entramos na complexidade para que nossos clientes avancem com clareza.</p><div className="about-pills"><span>ESTRATÉGIA</span><span>DESIGN</span><span>DESENVOLVIMENTO</span><span>EVOLUÇÃO</span></div></div></div></section>

          <section className="contact" id="contato"><div className="container"><span className="section-index">05 / PRÓXIMO PASSO</span><h2>O próximo movimento <em>começa aqui.</em></h2><p>Conte o que você quer construir. A conversa começa pela ideia — e avança com direção.</p><div className="contact__actions"><Link className="button button--light" href="/iniciar">Iniciar um projeto <span aria-hidden="true">↗</span></Link><a href="https://wa.me/5511941262352?text=Ol%C3%A1%2C%20Centini%20Tech!%20Quero%20conversar%20sobre%20um%20projeto." target="_blank" rel="noopener noreferrer" className="contact__email">Fale pelo WhatsApp <span aria-hidden="true">↗</span></a><a href="mailto:centini.tech@gmail.com" className="contact__email">centini.tech@gmail.com <span aria-hidden="true">↗</span></a></div></div></section>
        </main>

        <footer className="site-footer container"><Link href="/" aria-label="Centini Tech, início"><Brand compact /></Link><p>Tecnologia que move negócios.</p><span>© {new Date().getFullYear()} CENTINI TECH</span><a href="#inicio">VOLTAR AO TOPO ↑</a></footer>
      </div>
    </>
  );
}

