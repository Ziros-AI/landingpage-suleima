import { useEffect, useState } from 'react';

import imagem1 from '../assets/ImagensClinica/imagem1.jpg';
import imagem2 from '../assets/ImagensClinica/imagem2.jpg';
import imagem3 from '../assets/ImagensClinica/imagem3.jpg';
import imagem4 from '../assets/ImagensClinica/imagem4.jpg';
import imagem5 from '../assets/ImagensClinica/imagem5.jpg';
import imagem6 from '../assets/ImagensClinica/imagem6.jpg';
import imagem7 from '../assets/ImagensClinica/imagem7.jpg';
import imagemSu1 from '../assets/imagensSuleima/imagemSu1.jpg';
import imagemSu2 from '../assets/imagensSuleima/imagemSu2.jpg';
import imagemSu3 from '../assets/imagensSuleima/imagemSu3.jpg';
import imagemSu4 from '../assets/imagensSuleima/imagemSu4.jpg';
import imagemG from '../assets/imagensGluteo/imagemG.jpg';
import imagemG2 from '../assets/imagensGluteo/imagemG2.jpg';
import imagemG3 from '../assets/imagensGluteo/imagemG3.jpg';
import imagemG4 from '../assets/imagensGluteo/imagemG4.jpg';
import imagemG5 from '../assets/imagensGluteo/imagemG5.jpg';
import imagemT1 from '../assets/ImagensThelma/imagemTh1.jpeg';

const instagramProfileUrl = 'https://www.instagram.com/suleimaestetica';

const instagramPosts = [
  { url: 'https://www.instagram.com/suleimaestetica/reel/DPaRforjTnO/', image: imagemSu3, label: 'Reel de estética avançada' },
  { url: 'https://www.instagram.com/suleimaestetica/p/DP6OMaWDa1A/', image: imagem3, label: 'Post de rotina na clínica' },
  { url: 'https://www.instagram.com/suleimaestetica/reel/DU_IOOOkeEA/', image: imagem5, label: 'Reel de procedimento corporal' },
  { url: 'https://www.instagram.com/suleimaestetica/p/DLxQT2fxFtz/', image: imagem7, label: 'Post de cuidado facial' },
  { url: 'https://www.instagram.com/suleimaestetica/reel/DVZbr2MEopr/', image: imagemG4, label: 'Reel Método Glúteos CONTOUR' },
  { url: 'https://www.instagram.com/suleimaestetica/reel/DU53r6rDS8D/', image: imagemG5, label: 'Reel de harmonização glútea' },
];

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#gluteo-contour', label: 'Método CONTOUR' },
  { href: '#subscription', label: 'Protocolos' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#contacts', label: 'Contato' },
];

const whatsappCursos =
  'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos.';
const whatsappAvaliacao =
  'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';
const whatsappClinica =
  'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20tratamentos.';
const whatsappAgendamento =
  'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20agendamento.';
const googleMapsUrl = 'https://maps.app.goo.gl/5ACdHhu2EvLqRs1k7';

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sistemaUrl = import.meta.env.VITE_SISTEMA_URL ?? 'http://localhost:5173/login';

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      html { scroll-behavior: smooth; }

      .lp-nav-scrolled {
        background: rgba(236,236,234,0.95) !important;
        backdrop-filter: blur(14px);
        border-bottom: 1px solid rgba(47,35,33,0.09);
      }
      .lp-nav-scrolled .lp-logo,
      .lp-nav-scrolled nav a,
      .lp-nav-scrolled .nav-phone { color: #2f2321 !important; }
      .lp-nav-scrolled .nav-agendar {
        background: #3c2922 !important;
        color: white !important;
        border-color: #3c2922 !important;
      }

      .nav-link-ul { position: relative; padding-bottom: 2px; }
      .nav-link-ul::after { content: ''; position: absolute; bottom: 0; left: 0; height: 1px; width: 0; background: currentColor; transition: width 0.3s ease; }
      .nav-link-ul:hover::after { width: 100%; }

      @keyframes scrollPulse {
        0%, 100% { transform: scaleY(1); opacity: 0.5; }
        50% { transform: scaleY(0.35); opacity: 1; }
      }
      .scroll-line { width: 1px; height: 52px; background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent); animation: scrollPulse 2.2s ease-in-out infinite; }

      .stats-bar { background: #2f2321; color: white; display: grid; grid-template-columns: repeat(4, 1fr); }
      .stat-item { padding: 1.6rem 2rem; border-right: 1px solid rgba(255,255,255,0.09); }
      .stat-item:last-child { border-right: none; }
      @media (max-width: 768px) {
        .stats-bar { grid-template-columns: repeat(2, 1fr); }
        .stat-item:nth-child(2) { border-right: none; }
        .stat-item:nth-child(3) { border-right: 1px solid rgba(255,255,255,0.09); }
      }

      .feature-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 2px; background: rgba(47,35,33,0.1); margin-top: 2.5rem; }
      .feature-card { background: #ececea; padding: 2.5rem; transition: background 0.3s; }
      .feature-card:hover { background: #dddacf; }
      @media (max-width: 768px) { .feature-grid { grid-template-columns: 1fr; } }

      .service-row { position: relative; height: 260px; overflow: hidden; cursor: pointer; border-top: 1px solid rgba(255,255,255,0.55); }
      .service-row:first-child { border-top: none; }
      .service-row .service-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.65s ease; filter: brightness(0.55) saturate(0.8); }
      .service-row:hover .service-bg { transform: scale(1.05); filter: brightness(0.65) saturate(0.9); }
      @media (max-width: 768px) { .service-row { height: 190px; } }

      .fade-in { opacity: 0; transform: translateY(22px); transition: opacity 0.75s ease, transform 0.75s ease; }
      .fade-in.visible { opacity: 1; transform: translateY(0); }

      .thelma-quote { border-left: 3px solid #8f876f; padding-left: 1.25rem; }

      .photo-hover { overflow: hidden; }
      .photo-hover img { transition: transform 0.6s ease; }
      .photo-hover:hover img { transform: scale(1.04); }

      .ig-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .ig-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(47,35,33,0.12); }
    `;
    document.head.appendChild(style);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    const observe = () => document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    observe();
    const t = setTimeout(observe, 300);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div className="bg-[#ececea] min-h-screen text-[#2f2321]">

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-[#2f2321] text-white flex flex-col items-center justify-center gap-7">
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-2xl text-white/70 hover:text-white">✕</button>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              className="text-2xl tracking-[0.15em] uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}>
              {link.label}
            </a>
          ))}
          <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
            className="mt-4 border border-white/60 px-6 py-3 rounded-full uppercase text-sm tracking-widest">
            Agendar avaliação
          </a>
        </div>
      )}

      {/* NAV */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-400 ${scrolled ? 'lp-nav-scrolled' : ''}`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="px-5 md:px-9 py-4 md:py-5 flex items-center justify-between">
          <div className="lp-logo text-[10px] md:text-[11px] tracking-[0.25em] leading-[1.6] font-medium uppercase"
            style={{ color: scrolled ? '#2f2321' : 'white' }}>
            <span className="block">SULEIMA</span>
            <span className="block">ESTÉTICA</span>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-[10.5px] tracking-[0.12em] uppercase font-light"
            style={{ color: scrolled ? '#2f2321' : 'rgba(255,255,255,0.88)' }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link-ul transition-opacity duration-200" style={{ opacity: 0.8 }}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className="nav-phone hidden lg:block text-[11px] tracking-wide"
              style={{ color: scrolled ? '#7a6355' : 'rgba(255,255,255,0.6)' }}>
              +55 (11) 95867-1658
            </span>
            <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer"
              className="nav-agendar hidden sm:block text-[10px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all duration-300 hover:opacity-90"
              style={{ background: scrolled ? '#3c2922' : 'white', color: scrolled ? 'white' : '#2f2321', border: '1px solid', borderColor: scrolled ? '#3c2922' : 'white' }}>
              Agendar
            </a>
            <button onClick={() => setMenuOpen(true)} className="md:hidden flex flex-col gap-[5px]"
              style={{ color: scrolled ? '#2f2321' : 'white' }}>
              <span className="block w-6 h-[1.5px] bg-current" />
              <span className="block w-6 h-[1.5px] bg-current" />
              <span className="block w-6 h-[1.5px] bg-current" />
            </button>
          </div>
        </div>
      </header>

      <main>

        {/* HERO */}
        <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">
          <img src={imagemSu3} alt="Suleima com equipamento"
            className="absolute inset-0 w-full h-full object-cover object-[62%_18%] md:object-[84%_20%] lg:object-[87%_20%]" />
          <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(20,12,8,0.85)_0%,rgba(43,28,17,0.58)_38%,rgba(60,39,26,0.2)_72%,transparent_100%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1400 760" fill="none">
            <path d="M120 550C380 410 620 620 910 510C1100 440 1280 450 1460 520" stroke="#d3c9b8" strokeWidth="1.2" />
            <path d="M70 620C300 500 520 670 820 640C1060 620 1270 660 1490 740" stroke="#d3c9b8" strokeWidth="1.2" />
          </svg>

          <div className="relative z-10 flex-1 flex flex-col justify-end px-5 md:px-10 pb-10 md:pb-14 text-white">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/55 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Clínica de Estética · Salto, SP
            </p>
            <h1 className="leading-[0.96] font-light max-w-[680px]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem,7.5vw,5.8rem)' }}>
              Alta tecnologia<br />
              em <em>estética corporal</em><br />
              e facial em Salto.
            </h1>
            <div className="mt-5 max-w-[420px] md:ml-auto text-[13px] md:text-[15px] font-light leading-relaxed text-white/70"
              style={{ fontFamily: 'Inter, sans-serif' }}>
              <p>Protocolos personalizados para modelagem corporal, rejuvenescimento e valorização da sua beleza natural.</p>
              <div className="mt-5 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.13em]">
                <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer"
                  className="bg-white text-[#2f2321] px-5 py-2.5 rounded-full hover:bg-white/90 transition-all duration-300 active:scale-[0.97]">
                  Agendar avaliação →
                </a>
                <a href="#services"
                  className="border border-white/50 text-white px-5 py-2.5 rounded-full hover:bg-white/10 transition-all duration-300">
                  Conhecer tratamentos
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2">
            <div className="scroll-line" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 [writing-mode:vertical-rl]"
              style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="stats-bar">
          {[
            { num: '10+', label: 'Anos de experiência' },
            { num: '500+', label: 'Clientes atendidas' },
            { num: '15+', label: 'Protocolos exclusivos' },
            { num: '100%', label: 'Atendimento personalizado' },
          ].map((s) => (
            <div key={s.label} className="stat-item">
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(1.8rem,2.8vw,2.5rem)', fontWeight: 300, lineHeight: 1 }}>{s.num}</div>
              <div className="text-[10px] uppercase tracking-[0.15em] text-white/50 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ABOUT */}
        <section id="about" className="relative overflow-hidden bg-[#dddacf] px-4 py-14 md:px-16 md:py-20">
          <div className="absolute left-1/2 top-[6.8%] h-[87%] w-[108%] -translate-x-1/2 rounded-full bg-[#d2cec2]" />
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1200 1200" fill="none">
            <path d="M-80 470C160 300 320 390 520 560C710 730 930 680 1230 760" stroke="#b5ac9d" strokeWidth="1.1" opacity="0.6" />
            <path d="M-20 930C200 760 390 850 620 980C840 1110 1030 1050 1210 1140" stroke="#bdb4a6" strokeWidth="1.1" opacity="0.6" />
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl fade-in">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Sobre a Suleima e a clínica</p>
            <h2 className="mb-10 md:mb-12" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem,4.5vw,4.3rem)', lineHeight: 1.05 }}>
              Estética avançada com estratégia<br />e cuidado personalizado em Salto.
            </h2>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-5 text-[14px] md:text-[15px] leading-relaxed text-[#2f2321] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>Suleima atua com estética corporal modeladora e tratamentos faciais, unindo experiência prática, avaliação criteriosa e protocolos personalizados para cada objetivo.</p>
                <p>A clínica foi planejada para oferecer atendimento reservado, tecnologia profissional e conforto em cada etapa, com foco em resultados progressivos, harmoniosos e naturais.</p>
                <ul className="grid gap-2.5 text-[13px] md:text-[14px]">
                  {['Atendimento exclusivo e personalizado','Estrutura moderna com tecnologia avançada','Protocolos corporais e faciais estratégicos','Cuidado humanizado em cada etapa'].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8f876f] flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#services" className="bg-[#3c2922] px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-white rounded-full transition-all duration-300 hover:bg-[#5a3d33] hover:shadow-md active:scale-[0.98]">Ver tratamentos</a>
                  <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="border border-[#3c2922]/50 px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-[#3c2922] rounded-full transition-all duration-300 hover:bg-[#CDCDCD] hover:shadow-md active:scale-[0.98]">Agendar avaliação</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="row-span-2 h-[330px] md:h-[470px] rounded-[120px] md:rounded-[180px] photo-hover">
                  <img src={imagemSu2} alt="Suleima com equipamento" className="h-full w-full object-cover object-[50%_32%]" />
                </div>
                <div className="h-[160px] md:h-[225px] rounded-[72px] md:rounded-[110px] photo-hover">
                  <img src={imagemSu1} alt="Suleima na clínica" className="h-full w-full object-cover object-[72%_30%]" />
                </div>
                <div className="h-[160px] md:h-[225px] rounded-[72px] md:rounded-[110px] photo-hover">
                  <img src={imagem3} alt="Clientes na clínica" className="h-full w-full object-cover object-[52%_38%]" />
                </div>
                <div className="h-[135px] md:h-[190px] rounded-[58px] md:rounded-[90px] photo-hover">
                  <img src={imagem4} alt="Procedimento facial" className="h-full w-full object-cover object-[48%_34%]" />
                </div>
                <div className="h-[135px] md:h-[190px] rounded-[58px] md:rounded-[90px] photo-hover">
                  <img src={imagem5} alt="Procedimento corporal" className="h-full w-full object-cover object-[52%_34%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative overflow-hidden bg-[#ececea] px-4 md:px-16 py-14 md:py-20">
          <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" viewBox="0 0 1200 580" fill="none">
            <path d="M-20 250C170 110 340 180 530 280C700 370 860 290 1090 410" stroke="#b3aa9c" strokeWidth="1.1" />
            <path d="M740 40C650 120 650 210 700 300C770 410 930 430 1170 520" stroke="#b9b1a2" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl fade-in">
            <div className="flex items-end justify-between mb-2 border-b border-[#2f2321]/10 pb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>Por que nos escolher</p>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.2rem,4vw,3.8rem)' }}>Diferenciais reais.</h2>
              </div>
              <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer"
                className="hidden md:block bg-[#3c2922] text-white px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] rounded-full hover:bg-[#5a3d33] transition-all duration-300">
                Agendar agora
              </a>
            </div>
            <div className="feature-grid">
              {[
                { num: '01', title: 'Tecnologia de ponta', desc: 'Equipamentos modernos e reconhecidos no mercado estético para garantir segurança, conforto e eficácia em cada sessão.' },
                { num: '02', title: 'Estrutura premium', desc: 'Nosso espaço foi pensado para proporcionar atendimento reservado, acolhimento e uma experiência de alto padrão do início ao fim.' },
                { num: '03', title: 'Resultados superiores', desc: 'Protocolos com foco em resultado visível, progressivo e natural — respeitando a individualidade de cada cliente.' },
              ].map((f) => (
                <div key={f.num} className="feature-card">
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: '#8f876f', lineHeight: 1, marginBottom: '1rem' }}>{f.num}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p className="text-[13px] leading-relaxed text-[#4a3d37] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÉTODO CONTOUR */}
        <section id="gluteo-contour" className="relative overflow-hidden bg-[#2f2321] text-white px-4 md:px-16 py-14 md:py-20">
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1200 580" fill="none">
            <path d="M-20 250C170 110 340 180 530 280C700 370 860 290 1090 410" stroke="#d3c9b8" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl fade-in">
            <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/40 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Destaque exclusivo</p>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 0.95 }}>
                  Método Glúteos<br />CONTOUR
                </h2>
              </div>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-white/65 font-light md:pt-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Técnica de harmonização glútea com protocolo personalizado para melhorar contorno, firmeza e proporção, respeitando a estrutura corporal de cada cliente.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-8">
              {[imagemG4, imagemG5, imagemG3, imagemG2, imagemG].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-[18px] photo-hover" style={{ height: '200px' }}>
                  <img src={img} alt={`Resultado CONTOUR ${i + 1}`} className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={sistemaUrl} target="_blank" rel="noopener noreferrer"
                className="bg-white text-[#2f2321] px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] rounded-full hover:bg-white/90 transition-all duration-300 active:scale-[0.98]">
                Conhecer o Método CONTOUR
              </a>
              <a href={whatsappClinica} target="_blank" rel="noopener noreferrer"
                className="border border-white/40 text-white px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] rounded-full hover:bg-white/10 transition-all duration-300">
                Falar com a clínica
              </a>
            </div>
          </div>
        </section>

        {/* THELMA ARCURI — antes de Serviços */}
        <section className="relative overflow-hidden bg-[#ececea] px-4 md:px-16 py-14 md:py-20">
          <div className="absolute left-1/2 top-[6%] h-[88%] w-[108%] -translate-x-1/2 rounded-full bg-[#e4e0d9]" />
          <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" viewBox="0 0 1200 900" fill="none">
            <path d="M-100 380C140 220 300 310 500 480C690 650 910 600 1250 680" stroke="#c5bfb1" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl fade-in">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Terapias Complementares</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 0.95 }}>Thelma Arcuri</h2>
            <p className="mt-2 text-base md:text-lg text-[#4a3d37] font-light mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>Massoterapeuta e Fisioterapeuta</p>

            <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-4">
                <div className="overflow-hidden rounded-[120px] md:rounded-[160px] photo-hover" style={{ height: '420px' }}>
                  <img src={imagemT1} alt="Thelma Arcuri - Massoterapeuta e Fisioterapeuta" className="h-full w-full object-cover object-[50%_30%]" />
                </div>
              </div>
              <div className="md:col-span-8 space-y-5">
                <div className="bg-gradient-to-br from-[#d8d1c2] to-[#cfc8b8] p-6 md:p-8 rounded-[22px] border border-[#b5ac9d]/60">
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.8rem', marginBottom: '1rem' }}>Microfisioterapia</h3>
                  <div className="space-y-3 text-[14px] md:text-[15px] leading-relaxed text-[#2f2321] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>A microfisioterapia é uma técnica manual terapêutica que utiliza toques sutis e precisos para identificar e tratar marcas deixadas por traumas físicos, emocionais ou infecciosos no organismo.</p>
                    <p>Baseada na embriologia e na anatomia palpatória, ela estimula o próprio corpo a reconhecer e eliminar essas memórias celulares, favorecendo o equilíbrio e a autorregulação.</p>
                    <p>É um método complementar, indicado para dores crônicas, alterações emocionais, distúrbios funcionais e para promover bem-estar integral.</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/60 p-5 rounded-[18px] border border-[#b5ac9d]/50">
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Barra de Access</h4>
                    <p className="text-[13px] text-[#4a3d37] font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Técnica energética que promove relaxamento profundo e liberação de bloqueios mentais.</p>
                  </div>
                  <div className="bg-white/60 p-5 rounded-[18px] border border-[#b5ac9d]/50">
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', marginBottom: '0.5rem' }}>Reiki</h4>
                    <p className="text-[13px] text-[#4a3d37] font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>Terapia energética que equilibra corpo, mente e espírito através da canalização de energia vital.</p>
                  </div>
                </div>
                <div className="thelma-quote">
                  <p className="italic text-[#4a3d37] leading-relaxed" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '1.15rem' }}>
                    "A verdadeira beleza começa no equilíbrio interior. Cuidamos de você de dentro para fora"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="overflow-hidden bg-[#dddacf]">
          <div className="pt-10 md:pt-14 pb-4 px-4 md:px-16">
            <div className="mx-auto max-w-6xl flex items-end justify-between fade-in">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>O que oferecemos</p>
                <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(3rem,7vw,6rem)', lineHeight: 0.95 }}>Serviços.</h2>
              </div>
              <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer"
                className="hidden md:block bg-[#3c2922] text-white px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] rounded-full hover:bg-[#5a3d33] transition-all duration-300 mb-2">
                Agendar avaliação
              </a>
            </div>
          </div>
          <div className="mt-6 fade-in">
            {[
              { title: 'Corporal', desc: 'Modelagem, definição e contorno com protocolos de alta performance.', image: imagemSu4, position: 'object-[52%_40%] md:object-[50%_38%]' },
              { title: 'Facial', desc: 'Rejuvenescimento, firmeza e luminosidade com tecnologia avançada.', image: imagem7, position: 'object-[48%_36%] md:object-[52%_32%]' },
              { title: 'Experiência', desc: 'Ambiente reservado, estrutura premium e acolhimento em cada etapa.', image: imagem3, position: 'object-[50%_32%] md:object-[50%_30%]' },
            ].map((item, i) => (
              <article key={item.title} className="service-row">
                <img src={item.image} alt={item.title} className={`service-bg ${item.position}`} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" />
                <div className="relative z-10 h-full flex items-center gap-6 md:gap-10 px-6 md:px-16">
                  <span className="text-white/35 text-sm hidden md:block" style={{ fontFamily: 'Cormorant Garamond, serif' }}>0{i + 1}</span>
                  <h3 className="text-white leading-none" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem,5.5vw,4.5rem)' }}>{item.title}</h3>
                  <p className="hidden md:block text-white/55 text-[13px] font-light max-w-[280px] ml-4" style={{ fontFamily: 'Inter, sans-serif' }}>{item.desc}</p>
                  <div className="ml-auto flex gap-2">
                    <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer"
                      className="bg-white text-[#2f2321] px-4 py-2 text-[10px] uppercase tracking-[0.1em] rounded-full hover:bg-white/90 transition-all duration-300 active:scale-[0.97]">
                      Agendar
                    </a>
                    <a href="#about" className="hidden md:block border border-white/60 text-white px-4 py-2 text-[10px] uppercase tracking-[0.1em] rounded-full hover:bg-white/10 transition-all duration-300">
                      Saiba mais
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CURSOS */}
        <section id="cursos" className="relative overflow-hidden bg-[#ececea] px-4 md:px-16 py-14 md:py-20">
          <div className="absolute left-1/2 top-[6%] h-[88%] w-[104%] -translate-x-1/2 rounded-full bg-[#e2dfda]" />
          <svg className="absolute inset-0 h-full w-full opacity-50 pointer-events-none" viewBox="0 0 1200 900" fill="none">
            <path d="M-100 380C140 220 300 310 500 480C690 650 910 600 1250 680" stroke="#c5bfb1" strokeWidth="1.1" />
            <path d="M-40 840C180 680 370 770 600 900C820 1030 1010 970 1190 1060" stroke="#cbc5b8" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl fade-in">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>Capacitação Profissional</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 0.95 }}>
              Cursos para Profissionais<br />da Saúde
            </h2>
            <p className="mt-4 max-w-3xl text-[14px] md:text-[15px] leading-relaxed text-[#4a3d37] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
              Quer se aperfeiçoar, não ter medo de atender, aprender novas técnicas, se aprimorar para fazer a diferença em sua clínica? Nos procure, somos uma clínica escola!
            </p>
            <div className="mt-8 bg-gradient-to-r from-[#3c2922] to-[#4f3b30] text-white p-6 md:p-8 rounded-[22px]">
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem,3.5vw,3rem)', marginBottom: '0.5rem' }}>Cursos VIP</h3>
              <p className="text-[14px] md:text-[15px] font-light text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                Atendimento exclusivo com apenas <strong className="text-white">3 alunos por curso</strong> para garantir aprendizado personalizado e prática intensiva.
              </p>
            </div>
            <div className="mt-8 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2rem', marginBottom: '1.25rem' }}>Cursos Disponíveis</h3>
                <div className="bg-white/70 rounded-[22px] p-6 md:p-7 border border-[#b5ac9d]/40">
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] md:text-[14px] text-[#2f2321] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {['Limpeza de pele','Prime shape (ganho de massa)','Harmonização glútea','Peeling','Microagulhamento','Jato de plasma','Hidrolipoclasia','Carboxiterapia','Peim','Intradermoterapia','Toxina botulínica','Preenchimento','Bioestimulador','Ozônio terapia','Fios de PDO'].map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#8f876f] flex-shrink-0" />{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 bg-gradient-to-r from-[#d8d1c2] to-[#cfc8b8] p-5 rounded-[18px] border border-[#b5ac9d]/60">
                  <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.3rem', marginBottom: '0.75rem' }}>Formas de Pagamento</h4>
                  <div className="space-y-1.5 text-[13px] md:text-[14px] text-[#2f2321] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>✓ Até <strong>6x sem juros</strong></p>
                    <p>✓ Até <strong>10x com juros</strong></p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-5">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2rem', marginBottom: '1.25rem' }}>Itens Inclusos</h3>
                <div className="space-y-2.5">
                  {['💁🏻 Modelos','💉 Descartáveis','☕ Coffee break','🗒 Apostila','📝 Caderno e caneta','📜 Certificado','📞 Suporte pós-curso ilimitado'].map((item) => (
                    <div key={item} className="bg-white/70 p-4 rounded-[14px] border border-[#b5ac9d]/40 text-[13px] md:text-[14px] text-[#2f2321] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a href={whatsappCursos} target="_blank" rel="noopener noreferrer"
                className="bg-[#3c2922] px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-white rounded-full hover:bg-[#5a3d33] hover:shadow-md transition-all duration-300 active:scale-[0.98] text-center">
                Falar sobre cursos
              </a>
              <a href={`${whatsappAgendamento} Seria de um curso profissionalizante na Suleima.`} target="_blank" rel="noopener noreferrer"
                className="border border-[#3c2922]/45 px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-[#3c2922] rounded-full hover:bg-[#CDCDCD] hover:shadow-md transition-all duration-300 active:scale-[0.98] text-center">
                Agendar Curso
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contacts" className="relative rounded-t-[32px] md:rounded-t-[40px] overflow-hidden bg-[#8f876f] text-white px-6 md:px-16 py-14">
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1200 360" fill="none">
            <path d="M-40 200C170 130 340 190 540 240C760 290 920 240 1210 300" stroke="#d8d1c2" strokeWidth="1.1" />
            <path d="M420 40C560 50 620 100 640 160C650 230 600 280 510 320" stroke="#d8d1c2" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 grid md:grid-cols-3 gap-12 md:gap-10 lg:gap-14 items-start text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-5">
              <h2 className="text-3xl md:text-4xl tracking-[0.25em]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>SULEIMA</h2>
              <p className="text-sm text-white/80 max-w-[280px] font-light leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Agende sua avaliação personalizada e descubra o protocolo ideal para sua transformação.
              </p>
              <a href={whatsappAgendamento} target="_blank" rel="noopener noreferrer"
                className="inline-block bg-white text-[#3f3828] px-5 py-2.5 text-[10.5px] uppercase tracking-[0.12em] rounded-full hover:bg-white/90 transition-all duration-300">
                Agendar agora
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/55" style={{ fontFamily: 'Inter, sans-serif' }}>Endereço</p>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(1.8rem,3vw,2.5rem)', lineHeight: 1.15 }}>Rua América 1321</h3>
              <p className="text-lg text-white/80 font-light">Salto — SP</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block border border-white/50 px-5 py-2 text-[10.5px] uppercase tracking-[0.12em] rounded-full hover:bg-white hover:text-[#3f3828] transition-all duration-300">
                Ver no Google Maps
              </a>
            </div>
            <div className="flex flex-col items-center md:items-end gap-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/55 w-full text-center md:text-right" style={{ fontFamily: 'Inter, sans-serif' }}>Contato</p>
              <div className="grid grid-cols-[20px_auto] gap-x-3 gap-y-4 text-sm font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                <svg className="w-5 h-5 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V21a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.89.32 1.76.59 2.6a2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006.18 6.18l1.48-1.32a2 2 0 012.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+5511958671658" className="text-white/85 hover:text-white transition-colors">+55 (11) 95867-1658</a>

                <svg className="w-5 h-5 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7" />
                </svg>
                <a href="mailto:suleimaestetica@icloud.com" className="text-white/85 hover:text-white transition-colors break-all">suleimaestetica@icloud.com</a>

                <svg className="w-5 h-5 text-white mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="text-white/85 hover:text-white transition-colors">@suleimaestetica</a>
              </div>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}