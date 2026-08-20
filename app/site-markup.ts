export const siteMarkup = `<!-- ===== GRÃO ===== -->
<div class="grain" aria-hidden="true"></div>

<!-- ===== CURSOR ===== -->
<div class="cursor" id="cursor" aria-hidden="true"><span class="cursor__txt" id="cursorTxt">ver</span></div>

<!-- ===== LOADER ===== -->
<div class="loader" id="loader" role="status" aria-label="Carregando">
  <div class="loader__top">
    <span class="label">Lado B CK — Estúdio</span>
    <span class="label">São Paulo, BR</span>
  </div>
  <div class="loader__mid">
    <img class="loader__logo" src="/images/logo-ladob.png" alt="Lado B Estúdio" width="1024" height="576">
    <div class="loader__bar"><i id="loadBar"></i></div>
  </div>
  <div class="loader__bot">
    <span class="label">Preparando a experiência</span>
    <span class="loader__count" id="loadCount">00</span>
  </div>
</div>
<div class="loader__curtain" id="curtain" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>

<!-- ===== NAV ===== -->
<header class="nav" id="nav">
  <a class="brand" href="#top" aria-label="Lado B CK, início">
    <img class="brand__logo" src="/images/logo-ladob.png" alt="Lado B Estúdio" width="1024" height="576">
  </a>
  <nav class="nav__links" aria-label="Principal">
    <a class="nav__link" href="#principios">Princípios</a>
    <a class="nav__link" href="#servicos">Serviços</a>
    <a class="nav__link" href="#noiva">Dia da Noiva</a>
    <a class="nav__link" href="#estudio">Estúdio</a>
  </nav>
  <div class="nav__right">
    <a class="btn btn--solid" href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener" data-cursor="agendar"><span class="btn__dot"></span>Agendar agora</a>
    <button class="burger" id="burger" aria-label="Abrir menu" aria-expanded="false"><i></i><i></i></button>
  </div>
</header>

<!-- ===== MENU MOBILE ===== -->
<div class="menu" id="menu" aria-hidden="true">
  <ul class="menu__list display">
    <li><a href="#principios">Princípios</a></li>
    <li><a href="#servicos">Serviços</a></li>
    <li><a href="#noiva">Dia da Noiva</a></li>
    <li><a href="#galeria">Galeria</a></li>
    <li><a href="#estudio">Estúdio</a></li>
  </ul>
  <div class="menu__foot">
    <div>
      <span class="label">Jardim Vila Mariana</span>
      <p class="dim" style="margin-top:.4rem">Rua Pedro Pomponazzi, 71<br>São Paulo — SP</p>
    </div>
    <a class="btn" href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener"><span class="btn__dot"></span>Agendar no WhatsApp</a>
  </div>
</div>

<!-- ===== RAILING ===== -->
<aside class="railing" id="railing" aria-hidden="true">
  <span class="railing__num" id="railNum">01</span>
  <span class="railing__track"><i id="railFill"></i></span>
  <span class="railing__name" id="railName">Início</span>
</aside>

<!-- ===== WHATSAPP FIXO ===== -->
<a class="wa" id="wa" href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener" aria-label="Falar no WhatsApp com o Lado B CK">
  <span class="wa__pulse" aria-hidden="true"></span>
  <span class="wa__icon" aria-hidden="true"><img src="/images/whatsapp-icon.png" alt="" width="26" height="26"></span>
  <span class="wa__txt">Agendar no WhatsApp</span>
</a>

<main id="top">

<!-- ============================================================
     HERO
     ============================================================ -->
<section class="hero" data-section="Início" data-idx="01">
  <!--
    VIDEO FULLSCREEN (opcional): para trocar a sequencia de fotos por um video,
    substitua os tres blocos .hero__slide abaixo por:

    <div class="hero__slide active">
      <video src="SEU-VIDEO.mp4" poster="POSTER.jpg" autoplay muted loop playsinline
             style="width:100%;height:100%;object-fit:cover;filter:grayscale(.62) contrast(1.16) brightness(.74) sepia(.14)"></video>
    </div>

    Recomendacao: 12-18s, sem audio, H.264, ~1920x1080, ate 6 MB.
  -->
  <div class="hero__media" data-speed="0.16" id="heroMedia">
    <div class="hero__slide active" data-slide="0"><img src="/images/hero-cobre.jpg" alt="Cliente do Lado B CK com coloração acobreada, fotografada no estúdio" fetchpriority="high"></div>
    <div class="hero__slide" data-slide="1"><img src="/images/hero-loiro.jpeg" alt="Cliente do Lado B CK com corte e loiro trabalhado" loading="lazy"></div>
    <div class="hero__slide" data-slide="2"><img src="/images/hero-ondas.jpg" alt="Cliente do Lado B CK com ondas e iluminação de cor" loading="lazy"></div>
  </div>
  <div class="hero__veil" aria-hidden="true"></div>
  <div class="hero__scan" aria-hidden="true"></div>

  <div class="hero__inner wrap">
    <div class="hero__kicker" data-reveal>
      <span class="rule"></span>
      <span class="label label--brass">Estúdio de beleza — Jardim Vila Mariana, SP</span>
    </div>
    <h1 class="hero__title display" data-split>Existe um lado seu que ainda não foi <span class="serif-it">revelado</span>.</h1>
    <p class="hero__sub" data-reveal style="--d:.55s">Cabelo, unhas, cílios, pele e o dia mais importante da sua vida — tratados com o cuidado de quem entende que autoestima não é detalhe. É o resultado.</p>
    <div class="hero__actions" data-reveal style="--d:.7s">
      <a class="btn btn--solid" href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener" data-cursor="agendar"><span class="btn__dot"></span>Agendar agora</a>
      <a class="btn" href="#servicos">Conhecer os serviços</a>
    </div>
  </div>

  <div class="hero__foot">
    <div class="hero__foot-in wrap">
      <div class="hero__meta" data-reveal style="--d:.85s">
        <div><span class="label">Desde</span><b>2023</b></div>
        <div><span class="label">Google</span><b>4,9 ★ · 317 avaliações</b></div>
        <div><span class="label">Instagram</span><b><a class="ulink" href="https://www.instagram.com/ladobck/" target="_blank" rel="noopener">@ladobck</a></b></div>
      </div>
      <div class="scrollcue" data-reveal style="--d:.95s">
        <span class="label">Role</span><span class="scrollcue__line"></span>
        <span class="hero__count" id="heroCount">01 / 03</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== MARQUEE ===== -->
<div class="marquee" aria-hidden="true">
  <div class="marquee__track" id="marquee">
    <div class="marquee__item"><span>Coloração</span><i class="marquee__dot"></i><span><em>Cortes</em></span><i class="marquee__dot"></i><span>Escovas</span><i class="marquee__dot"></i><span>Mega hair</span><i class="marquee__dot"></i><span><em>Unhas</em></span><i class="marquee__dot"></i><span>Cílios</span><i class="marquee__dot"></i><span>Sobrancelhas</span><i class="marquee__dot"></i><span><em>Dia da noiva</em></span><i class="marquee__dot"></i><span>Maquiagem</span><i class="marquee__dot"></i></div>
    <div class="marquee__item"><span>Coloração</span><i class="marquee__dot"></i><span><em>Cortes</em></span><i class="marquee__dot"></i><span>Escovas</span><i class="marquee__dot"></i><span>Mega hair</span><i class="marquee__dot"></i><span><em>Unhas</em></span><i class="marquee__dot"></i><span>Cílios</span><i class="marquee__dot"></i><span>Sobrancelhas</span><i class="marquee__dot"></i><span><em>Dia da noiva</em></span><i class="marquee__dot"></i><span>Maquiagem</span><i class="marquee__dot"></i></div>
  </div>
</div>

<!-- ============================================================
     MANIFESTO
     ============================================================ -->
<section class="section manifesto" data-section="Manifesto" data-idx="02">
  <div class="wrap">
    <span class="label" data-reveal>01 — Manifesto</span>
    <h2 class="manifesto__text" id="manifesto" style="margin-top:clamp(1.4rem,4vh,2.6rem)">
      Um salão que não apenas cuida de você, mas <span class="it">transforma a sua autoestima</span>.
    </h2>
    <div class="manifesto__sig" data-reveal>
      <span class="rule" style="width:clamp(40px,8vw,120px); background:var(--brass)"></span>
      <span class="label">Lado B CK — São Paulo</span>
    </div>
  </div>
</section>

<!-- ============================================================
     PRINCÍPIOS
     ============================================================ -->
<section class="section section--tight" id="principios" data-section="Princípios" data-idx="03">
  <div class="wrap">
    <div class="sechead">
      <div>
        <span class="sechead__idx" data-reveal>02 — Princípios</span>
        <h2 class="display" data-split style="font-size:var(--fs-h2); margin-top:.9rem; max-width:18ch">Porque sua beleza merece mais do que o <span class="serif-it">comum</span>.</h2>
      </div>
      <p class="dim" data-reveal style="--d:.3s; max-width:34ch; font-weight:300">Três compromissos que sustentam tudo o que fazemos — do primeiro café ao espelho final.</p>
    </div>
  </div>

  <div class="pillars">
    <article class="pillar" data-reveal>
      <div class="pillar__bg" aria-hidden="true"><img src="/images/estudio-bancadas.jpg" alt="" loading="lazy"></div>
      <span class="pillar__num display">01</span>
      <div>
        <h3>Atendimento exclusivo<br>e humanizado</h3>
        <p>Cada cliente é prioridade — agenda respeitada, tempo dedicado e um profissional que escuta antes de propor.</p>
      </div>
    </article>
    <article class="pillar" data-reveal style="--d:.12s">
      <div class="pillar__bg" aria-hidden="true"><img src="/images/estudio-atendimento.jpg" alt="" loading="lazy"></div>
      <span class="pillar__num display">02</span>
      <div>
        <h3>Ambiente sofisticado<br>e acolhedor</h3>
        <p>Um espaço pensado para relaxar enquanto se transforma. Luz certa, silêncio quando é preciso, conversa quando dá vontade.</p>
      </div>
    </article>
    <article class="pillar" data-reveal style="--d:.24s">
      <div class="pillar__bg" aria-hidden="true"><img src="/images/estudio-detalhe.jpg" alt="" loading="lazy"></div>
      <span class="pillar__num display">03</span>
      <div>
        <h3>Serviços para<br>todas as ocasiões</h3>
        <p>De um dia casual a eventos inesquecíveis. A mesma técnica, ajustada à ocasião — e ao seu tempo.</p>
      </div>
    </article>
  </div>
</section>

<!-- ============================================================
     JORNADA — sticky split
     ============================================================ -->
<section class="section section--tight" data-section="A jornada" data-idx="04">
  <div class="wrap">
    <div class="sechead">
      <div>
        <span class="sechead__idx" data-reveal>03 — A jornada</span>
        <h2 class="display" data-split style="font-size:var(--fs-h2); margin-top:.9rem; max-width:20ch">Mais do que beleza: uma jornada de <span class="serif-it">autoconfiança</span>.</h2>
      </div>
    </div>

    <div class="split">
      <div class="split__sticky">
        <div class="split__figs">
          <figure class="fig fig--warm img-mask" data-reveal><img src="/images/recepcao-espumante.jpg" alt="Taças de espumante servidas na recepção do Lado B CK" loading="lazy"><figcaption>Recepção — Lado B CK</figcaption></figure>
          <figure class="fig fig--bw fig--float img-mask" data-reveal style="--d:.25s" data-speed="-0.05"><img src="/images/bastidores.jpg" alt="Bastidores do estúdio fotográfico do Lado B CK" loading="lazy"></figure>
        </div>
      </div>

      <div class="split__body">
        <article class="chapter" data-reveal>
          <span class="chapter__idx">i — A chegada</span>
          <h3>Você entra e o ritmo muda.</h3>
          <p>Nada de fila, nada de pressa. Um café, um lugar reservado e a conversa que define o que vamos fazer hoje — e o que faz sentido deixar para depois.</p>
        </article>
        <article class="chapter" data-reveal>
          <span class="chapter__idx">ii — O diagnóstico</span>
          <h3>Antes da técnica, a leitura.</h3>
          <p>Fio, couro cabeludo, histórico de química, rotina e expectativa. É esse mapa que decide entre uma correção, uma tonalização ou um cronograma capilar completo.</p>
        </article>
        <article class="chapter" data-reveal>
          <span class="chapter__idx">iii — A transformação</span>
          <h3>Precisão sem pressa.</h3>
          <p>Especialistas em correções de cor, transformações e realizações delicadas — mega hair, alongamentos, cílios fio a fio. Cada etapa acontece no tempo que ela pede.</p>
        </article>
        <article class="chapter" data-reveal>
          <span class="chapter__idx">iv — A saída</span>
          <h3>O espelho é só a confirmação.</h3>
          <p>Você sai sabendo como manter em casa o que construímos aqui. E volta quando quiser — com a agenda guardada e o histórico registrado.</p>
        </article>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     SERVIÇOS
     ============================================================ -->
<section class="services" id="servicos" data-section="Serviços" data-idx="05">
  <div class="wrap">
    <div class="section section--tight" style="padding-bottom:0">
      <div class="sechead" style="margin-bottom:0">
        <div>
          <span class="sechead__idx" data-reveal>04 — Serviços</span>
          <h2 class="display" data-split style="font-size:var(--fs-h2); margin-top:.9rem; max-width:16ch">Cinco frentes. Um mesmo <span class="serif-it">padrão</span>.</h2>
        </div>
        <p class="dim" data-reveal style="--d:.3s; max-width:32ch; font-weight:300">Do fio ao esmalte, do cílio ao véu — tudo executado por especialistas dedicados a uma única frente.</p>
      </div>
    </div>

    <div class="services__grid">
      <div class="services__media">
        <div class="services__stage" id="svcStage">
          <figure class="fig fig--warm active" data-media="0"><img src="/images/servico-cabelo.jpg" alt="Finalização de cabelo no salão Lado B CK" loading="lazy"></figure>
          <figure class="fig fig--warm" data-media="1"><img src="/images/servico-unhas.jpg" alt="Sala de manicure do Lado B CK com parede de esmaltes" loading="lazy"></figure>
          <figure class="fig fig--warm" data-media="2"><img src="/images/noiva.png" alt="Noiva penteada e maquiada pelo Lado B CK" loading="lazy"></figure>
          <figure class="fig fig--bw" data-media="3"><img src="/images/servico-estetica.jpg" alt="Sala privativa de estética e depilação do Lado B CK" loading="lazy"></figure>
          <figure class="fig fig--warm" data-media="4"><img src="/images/servico-maquiagem.jpg" alt="Cliente do Lado B CK com maquiagem e cabelo finalizados" loading="lazy"></figure>
          <span class="services__stagenum" id="svcNum">01</span>
        </div>
      </div>

      <div class="services__list">

        <article class="svc" data-svc="0">
          <div class="svc__mobile"><figure class="fig fig--warm img-mask" data-reveal><img src="/images/servico-cabelo.jpg" alt="" loading="lazy"></figure></div>
          <div class="svc__head" data-reveal><span class="svc__idx">01</span><h3 class="display">Tratamentos<br>capilares</h3></div>
          <p class="svc__lead" data-reveal>Especialistas em correções, tonalizações e transformações. Aqui a cor é calculada — não improvisada.</p>
          <ul class="svc__items" data-reveal style="--d:.1s">
            <li>Coloração personalizada, retoques e tonalizações (masculino e feminino)</li>
            <li>Escovas progressivas, definitivas e modeladas</li>
            <li>Hidratação capilar (masculino e feminino)</li>
            <li>Corte feminino, masculino, infantil e bordado</li>
            <li>Velaterapia</li>
            <li>Terapia e cronograma capilar</li>
            <li>Manutenção e aplicação de mega hair</li>
          </ul>
        </article>

        <article class="svc" data-svc="1">
          <div class="svc__mobile"><figure class="fig fig--warm img-mask" data-reveal><img src="/images/servico-unhas.jpg" alt="" loading="lazy"></figure></div>
          <div class="svc__head" data-reveal><span class="svc__idx">02</span><h3 class="display">Cuidados<br>com unhas</h3></div>
          <p class="svc__lead" data-reveal>Estrutura, acabamento e durabilidade. Mão e pé tratados com a mesma atenção de um detalhe de alfaiataria.</p>
          <ul class="svc__items" data-reveal style="--d:.1s">
            <li>Alongamento em gel, fibra ou tips, com manutenção</li>
            <li>Esmaltação em gel (mãos e pés) e blindagem</li>
            <li>Decorações, francesinhas e esmaltação tradicional</li>
            <li>Spa para mãos e pés com cutilagem</li>
            <li>Tratamentos de podologia com esmaltação</li>
          </ul>
        </article>

        <article class="svc" data-svc="2">
          <div class="svc__mobile"><figure class="fig fig--warm img-mask" data-reveal><img src="/images/noiva.png" alt="" loading="lazy"></figure></div>
          <div class="svc__head" data-reveal><span class="svc__idx">03</span><h3 class="display">Dia<br>da noiva</h3></div>
          <p class="svc__lead" data-reveal>Um roteiro inteiro, não um horário. Ambiente privativo para você e suas madrinhas, do spa ao último grampo.</p>
          <ul class="svc__items" data-reveal style="--d:.1s">
            <li>Penteado e maquiagem que realçam sua beleza natural</li>
            <li>Day Spa no Buddha Spa Chácara Klabin</li>
            <li>Ambiente privativo para criar memórias com as madrinhas</li>
          </ul>
        </article>

        <article class="svc" data-svc="3">
          <div class="svc__mobile"><figure class="fig fig--bw img-mask" data-reveal><img src="/images/servico-estetica.jpg" alt="" loading="lazy"></figure></div>
          <div class="svc__head" data-reveal><span class="svc__idx">04</span><h3 class="display">Depilação<br>e pele</h3></div>
          <p class="svc__lead" data-reveal>Técnica limpa, ambiente reservado e um desenho de sobrancelha que respeita o seu rosto.</p>
          <ul class="svc__items" data-reveal style="--d:.1s">
            <li>Depilação completa — axilas, braços, pernas e virilha — com cera ou linha</li>
            <li>Design e limpeza de sobrancelhas</li>
            <li>Aplicação de henna ou tintura</li>
          </ul>
        </article>

        <article class="svc" data-svc="4">
          <div class="svc__mobile"><figure class="fig fig--warm img-mask" data-reveal><img src="/images/servico-maquiagem.jpg" alt="" loading="lazy"></figure></div>
          <div class="svc__head" data-reveal><span class="svc__idx">05</span><h3 class="display">Cílios<br>e maquiagem</h3></div>
          <p class="svc__lead" data-reveal>Fio a fio, volume ou lifting — mais um olhar do que um procedimento.</p>
          <ul class="svc__items" data-reveal style="--d:.1s">
            <li>Alongamento de cílios: clássico, volume russo, brasileiro e híbrido, com manutenção</li>
            <li>Lash lifting e tintura de cílios</li>
            <li>Aplicação de cílios postiços e maquiagem profissional</li>
            <li>Hidragloss</li>
          </ul>
        </article>

      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     DIA DA NOIVA
     ============================================================ -->
<section class="bridal" id="noiva" data-section="Dia da Noiva" data-idx="06">
  <div class="bridal__bg" data-speed="0.1" aria-hidden="true"><img src="/images/noiva-ambiente.jpg" alt="" loading="lazy"></div>
  <div class="bridal__veil" aria-hidden="true"></div>
  <div class="wrap">
    <div class="bridal__in">
      <div>
        <span class="sechead__idx" data-reveal>05 — Dia da noiva</span>
        <h2 class="display" data-split style="margin-top:.9rem; max-width:14ch">O dia inteiro pensado para <span class="serif-it">um único momento</span>.</h2>
        <p class="bridal__lead" data-reveal style="--d:.35s">Da manhã ao carro que te leva: um ambiente privativo, uma equipe dedicada só a você e um roteiro que inclui as madrinhas — sem correria, sem improviso.</p>
        <div class="bridal__pts">
          <div class="bridal__pt" data-reveal><b>01</b><p><strong>Penteado e maquiagem</strong> que realçam a sua beleza natural — testados em prova antes do grande dia.</p></div>
          <div class="bridal__pt" data-reveal style="--d:.1s"><b>02</b><p><strong>Day Spa no Buddha Spa Chácara Klabin</strong>, nossa parceria para começar o dia relaxada.</p></div>
          <div class="bridal__pt" data-reveal style="--d:.2s"><b>03</b><p><strong>Ambiente privativo</strong> para criar memórias inesquecíveis com as madrinhas.</p></div>
        </div>
        <div style="margin-top:2.4rem" data-reveal>
          <a class="btn btn--solid" href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20conversar%20sobre%20o%20Dia%20da%20Noiva." target="_blank" rel="noopener" data-cursor="falar"><span class="btn__dot"></span>Falar sobre meu casamento</a>
        </div>
      </div>

      <div class="bridal__stack">
        <figure class="fig fig--warm img-mask" data-reveal><img src="/images/noiva.png" alt="Noiva atendida pela equipe do Lado B CK" loading="lazy"></figure>
        <figure class="fig fig--bw img-mask" data-reveal style="--d:.22s" data-speed="-0.06"><img src="/images/finalizacao.jpg" alt="Escova e finalização no Lado B CK" loading="lazy"><figcaption>Escova e finalização</figcaption></figure>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     GALERIA horizontal
     ============================================================ -->
<section class="gal" id="galeria" data-section="Galeria" data-idx="07">
  <div class="gal__sticky">
    <div class="gal__head wrap">
      <span class="sechead__idx">06 — Portfólio</span>
      <h2 class="display" style="font-size:clamp(1.8rem,3.6vw,3.4rem); margin-top:.7rem; max-width:16ch">O lado B, em imagens.</h2>
    </div>

    <div class="gal__track" id="galTrack">
      <figure class="gal__item"><div class="fig fig--warm"><img src="/images/galeria-corte-cor.jpg" alt="Corte e cor: cliente do Lado B CK" loading="lazy"></div><div class="gal__cap"><span class="label">Corte e cor</span><span class="label">01</span></div></figure>
      <figure class="gal__item"><div class="fig fig--bw"><img src="/images/galeria-cobre.jpg" alt="Coloração acobreada feita no Lado B CK" loading="lazy"></div><div class="gal__cap"><span class="label">Cobre</span><span class="label">02</span></div></figure>
      <figure class="gal__item"><div class="fig fig--warm"><img src="/images/galeria-cachos.jpg" alt="Cachos e volume trabalhados no Lado B CK" loading="lazy"></div><div class="gal__cap"><span class="label">Cachos</span><span class="label">03</span></div></figure>
      <figure class="gal__item"><div class="fig fig--warm"><img src="/images/servico-unhas.jpg" alt="Sala de manicure e esmaltes do Lado B CK" loading="lazy"></div><div class="gal__cap"><span class="label">Esmalteria</span><span class="label">04</span></div></figure>
      <figure class="gal__item"><div class="fig fig--bw"><img src="/images/galeria-ruivo.jpg" alt="Cliente ruiva do Lado B CK" loading="lazy"></div><div class="gal__cap"><span class="label">Ruivo</span><span class="label">05</span></div></figure>
      <figure class="gal__item gal__item--wide"><div class="fig fig--warm"><img src="/images/estudio-bancadas.jpg" alt="Bancadas com espelhos iluminados do Lado B CK" loading="lazy"></div><div class="gal__cap"><span class="label">Bancadas</span><span class="label">06</span></div></figure>
      <figure class="gal__item"><div class="fig fig--warm"><img src="/images/galeria-loiro.jpg" alt="Loiro iluminado feito no Lado B CK" loading="lazy"></div><div class="gal__cap"><span class="label">Loiro</span><span class="label">07</span></div></figure>
      <figure class="gal__item gal__item--wide"><div class="fig fig--bw"><img src="/images/bastidores.jpg" alt="Bastidores do Lado B CK em preto e branco" loading="lazy"></div><div class="gal__cap"><span class="label">Bastidores</span><span class="label">08</span></div></figure>
    </div>

    <div class="gal__prog"><i id="galProg"></i></div>
  </div>
</section>

<!-- ============================================================
     VOZES — avaliações reais do Google (perfil Lado B CK I Salão de Beleza)
     ============================================================ -->
<section class="section voices" id="avaliacoes" data-section="Avaliações" data-idx="08">
  <div class="wrap">
    <div class="sechead">
      <div>
        <span class="sechead__idx" data-reveal>07 — Avaliações</span>
        <h2 class="display" data-split style="font-size:var(--fs-h2); margin-top:.9rem; max-width:18ch">Quem senta na cadeira <span class="serif-it">volta</span>.</h2>
      </div>
      <a class="score" data-reveal href="https://www.google.com/maps/place/Lado+B+CK+I+Sal%C3%A3o+de+Beleza/@-23.589825,-46.6289535,17z/data=!4m8!3m7!1s0x94ce5b6572795081:0xd1bf1a41657c4cd3!9m1!1b1" target="_blank" rel="noopener">
        <span class="score__num display">4,9</span>
        <span class="score__body">
          <span class="score__stars" aria-hidden="true">★★★★★</span>
          <span class="label">317 avaliações no Google</span>
        </span>
      </a>
    </div>
  </div>

  <div class="voices__grid">
    <blockquote class="voice" data-reveal>
      <p class="voice__q">“O salão tem um ambiente agradável e acolhedor, e o atendimento é sempre maravilhoso. Sou cliente do profissional <em>João Benett</em> há um tempo e não poderia estar mais satisfeita! Faço luzes com ele e o resultado fica impecável: natural, iluminado e com um acabamento lindo.”</p>
      <div class="voice__meta"><span class="label">Bruna Ract</span><span class="voice__src">Google · há 2 meses</span></div>
    </blockquote>
    <blockquote class="voice" data-reveal style="--d:.1s">
      <p class="voice__q">“Vim deixar um elogio pra toda a equipe que é super atenciosa! O local é muito limpo e organizado. Elogio especial pra manicure <em>Marianne</em>, que é extremamente caprichosa, e pro <em>Gouveia</em>, que faz os clientes se sentirem acolhidos.”</p>
      <div class="voice__meta"><span class="label">Karen Malzoni · Local Guide</span><span class="voice__src">Google · há 3 meses</span></div>
    </blockquote>
    <blockquote class="voice" data-reveal style="--d:.2s">
      <p class="voice__q">“Gostaria de agradecer ao <em>Kevin</em> e à <em>Nicole</em> pelo excelente atendimento. O Kevin é muito atencioso e profissional, cabeleireiro maravilhoso. E a Nicole realiza um trabalho impecável, com muito capricho e dedicação.”</p>
      <div class="voice__meta"><span class="label">Larissa Diniz</span><span class="voice__src">Google · há 2 meses</span></div>
    </blockquote>
    <blockquote class="voice" data-reveal>
      <p class="voice__q">“Amo esse lugar. Manicure e pedicure da Du, além de impecáveis, duram facilmente duas semanas — fora o carinho do Gouveia, que não tem igual. <em>Mais do que serviços, eles entregam uma experiência gratificante.</em>”</p>
      <div class="voice__meta"><span class="label">Anna Almeida</span><span class="voice__src">Google · há 1 ano</span></div>
    </blockquote>
    <blockquote class="voice" data-reveal style="--d:.1s">
      <p class="voice__q">“Experiência maravilhosa. Fiz mechas com <em>Rodrigo Haddad</em> e ele é simplesmente perfeito — amei meu cabelo.”</p>
      <div class="voice__meta"><span class="label">Camile Santos Rossi</span><span class="voice__src">Google · há 2 meses</span></div>
    </blockquote>
    <blockquote class="voice" data-reveal style="--d:.2s">
      <p class="voice__q">“Fui ao salão pela primeira vez e saí encantada! O ambiente é lindo, aconchegante e muito acolhedor. Todos os profissionais demonstram grande competência, profissionalismo e <em>atenção aos clientes</em>.”</p>
      <div class="voice__meta"><span class="label">Isabella Calixto · Local Guide</span><span class="voice__src">Google · há 2 meses</span></div>
    </blockquote>
  </div>
</section>

<!-- ============================================================
     ESTÚDIO
     ============================================================ -->
<section class="section studio" id="estudio" data-section="Estúdio" data-idx="09">
  <div class="wrap">
    <div class="studio__grid">
      <figure class="fig fig--warm img-mask" data-reveal data-speed="0.05"><img src="/images/fachada.jpg" alt="Fachada do Lado B CK na Rua Pedro Pomponazzi" loading="lazy"><figcaption>Rua Pedro Pomponazzi, 71</figcaption></figure>
      <div class="studio__info">
        <span class="sechead__idx" data-reveal>08 — Estúdio</span>
        <h2 class="display" data-split style="max-width:14ch">Um endereço, <span class="serif-it">todo o cuidado</span>.</h2>
        <p class="dim" data-reveal style="--d:.3s; max-width:40ch; font-weight:300">Estamos a poucos minutos da Chácara Klabin, no Jardim Vila Mariana. Atendimento com hora marcada — o que garante que a cadeira seja sua pelo tempo que o serviço pedir.</p>
        <dl class="datarow" data-reveal style="--d:.4s">
          <dt>Endereço</dt>
          <dd>Rua Pedro Pomponazzi, 71<br>Jardim Vila Mariana — São Paulo, SP<br><small>CEP 04115-000</small></dd>
          <dt>Horários</dt>
          <dd>Terça a sábado, 08:00 – 20:00<br><small>Domingo e segunda: fechado · atendimento com hora marcada</small></dd>
          <dt>Contato</dt>
          <dd><a class="ulink" href="tel:+5511968542734">(11) 96854-2734</a><br><small><a class="ulink" href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener">WhatsApp</a> · <a class="ulink" href="https://www.instagram.com/ladobck/" target="_blank" rel="noopener">@ladobck</a></small></dd>
        </dl>
        <div data-reveal style="--d:.5s">
          <a class="btn" href="https://www.google.com/maps/search/?api=1&amp;query=Rua+Pedro+Pomponazzi,+71+-+Jardim+Vila+Mariana,+S%C3%A3o+Paulo" target="_blank" rel="noopener">Ver no mapa</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============================================================
     CTA FINAL
     ============================================================ -->
<section class="cta" data-section="Agendar" data-idx="10">
  <div class="cta__bg" data-speed="0.12" aria-hidden="true"><img src="/images/noiva-ambiente.jpg" alt="" loading="lazy"></div>
  <div class="cta__veil" aria-hidden="true"></div>
  <div class="cta__in wrap">
    <span class="gift" data-reveal>Presente exclusivo na primeira visita</span>
    <h2 class="display" data-split style="margin-top:.4rem">Você está a um clique de transformar sua <span class="serif-it">beleza</span>.</h2>
    <p data-reveal style="--d:.4s">Conte o que você quer mudar. A gente responde com um plano — e uma data.</p>
    <div data-reveal style="--d:.5s; margin-top:.6rem">
      <a class="btn btn--solid" href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener" data-cursor="agendar"><span class="btn__dot"></span>Agendar agora</a>
    </div>
  </div>
</section>

</main>

<!-- ============================================================
     FOOTER
     ============================================================ -->
<footer class="footer">
  <div class="wrap">
    <div class="footer__top">
      <div>
        <h4>Lado B CK Estúdio</h4>
        <p class="dim" style="max-width:32ch; font-weight:300">Viva momentos de beleza em um ambiente estiloso e sofisticado. Um salão que não só cuida de você — transforma a sua autoestima.</p>
      </div>
      <div>
        <h4>Navegar</h4>
        <ul>
          <li><a href="#principios">Princípios</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#noiva">Dia da noiva</a></li>
          <li><a href="#galeria">Galeria</a></li>
          <li><a href="#avaliacoes">Avaliações</a></li>
          <li><a href="#estudio">Estúdio</a></li>
        </ul>
      </div>
      <div>
        <h4>Contato</h4>
        <ul>
          <li><a href="https://wa.me/5511968542734?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Studio%20Lado%20B%20CK%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio." target="_blank" rel="noopener">WhatsApp</a></li>
          <li><a href="tel:+5511968542734">(11) 96854-2734</a></li>
          <li><a href="https://www.instagram.com/ladobck/" target="_blank" rel="noopener">Instagram @ladobck</a></li>
          <li><a href="https://www.google.com/maps/search/?api=1&amp;query=Rua+Pedro+Pomponazzi,+71+-+Jardim+Vila+Mariana,+S%C3%A3o+Paulo" target="_blank" rel="noopener">Rua Pedro Pomponazzi, 71 — SP</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer__logo"><img src="/images/logo-ladob.png" alt="Lado B Estúdio CK" loading="lazy"></div>
  <div class="wrap">
    <div class="footer__bot">
      <span class="label">© <span id="year">2026</span> — Todos os direitos reservados, Lado B Estudio.</span>
      <a class="label ulink" href="https://ladobck.com.br/politicas/" target="_blank" rel="noopener">Políticas de privacidade</a>
    </div>
  </div>
</footer>`;
