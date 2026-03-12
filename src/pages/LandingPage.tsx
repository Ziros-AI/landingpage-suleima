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
import imagemT1 from '../assets/ImagensThelma/ImagemTh1.jpeg';
import imagem8 from '../assets/ImagensBronzeamento/imagem8.jpeg';
import imagem9 from '../assets/ImagensBronzeamento/imagem9.jpeg';
import imagemCurso from '../assets/ImagensCurso/imagemCurso.jpeg';

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
  const [activeServiceTab, setActiveServiceTab] = useState(0);
  const sistemaUrl = import.meta.env.VITE_SISTEMA_URL ?? 'http://localhost:5173/login';

  const serviceDetails = [
    {
      label: 'CUIDADO FACIAL',
      image: imagem7,
      description: 'Rejuvenescimento, firmeza e luminosidade com tecnologia avançada para cada tipo de pele.',
    },
    {
      label: 'RITUAIS CORPORAIS',
      image: imagemSu4,
      description: 'Tratamentos corporais especializados para tonificar, nutrir e realçar a beleza natural do seu corpo.',
    },
    {
      label: 'GLÚTEOS CONTOUR',
      image: imagemG4,
      description: 'Técnica de harmonização glútea com protocolo personalizado para melhorar contorno e firmeza.',
    },
    {
      label: 'BRONZEAMENTO ARTIFICAL',
      image: imagem9,
      description: 'O bronzeamento artificial é um procedimento estético desenvolvido para proporcionar à pele um tom dourado, uniforme e saudável, sem a necessidade de exposição prolongada ao sol. A técnica utiliza produtos específicos que reagem com a camada superficial da pele, promovendo um efeito de bronzeado natural e temporário.'
    },
  ];

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

      .stats-bar { background: #2f2321; color: white; display: grid; grid-template-columns: repeat(3, 1fr); }
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
      .photo-hover img { transition: transform 0.6s ease; will-change: transform; }
      .photo-hover:hover img { transform: scale(1.04); }

      .ig-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
      .ig-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(47,35,33,0.12); }

      /* SERVICES PREVIEW */
      .lx-services-section { background: #fff; padding: 4rem 2rem; }
      .lx-services-title { text-align: center; margin-bottom: 3rem; }
      .lx-services-title h2 { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: clamp(2rem,5vw,3.5rem); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 0; }
      .lx-services-title .service-box { display: inline-block; border: 2px solid #2f2321; padding: 0.5rem 1rem; margin-left: 0.5rem; font-family: 'Barlow Condensed', sans-serif; font-size: 0.85rem; letter-spacing: 0.15em; font-weight: 600; }
      .lx-tabs-container { max-width: 1000px; margin: 0 auto; }
      .lx-tabs-nav { display: flex; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
      .lx-tab-button { background: white; border: 1px solid #ccc; padding: 0.9rem 1.5rem; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 500; transition: all 0.3s ease; color: #2f2321; position: relative; }
      .lx-tab-button:hover { background: #f5f5f5; }
      .lx-tab-button.active { background: #2f2321; color: white; border-color: #2f2321; }
      .lx-tab-button .tab-close { position: absolute; right: 0.6rem; top: 50%; transform: translateY(-50%); font-size: 1rem; opacity: 0.6; }
      .lx-service-detail { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: flex-start; }
      .lx-service-info { }  
      .lx-service-title { font-family: 'Cormorant Garamond', serif; font-weight: 400; font-size: clamp(2rem,4vw,3rem); text-transform: uppercase; margin-bottom: 1.5rem; letter-spacing: 0.03em; }
      .lx-service-description { font-family: 'Inter', sans-serif; font-size: 0.95rem; color: #666; line-height: 1.7; margin-bottom: 2rem; }
      .lx-service-image { width: 100%; height: 350px; object-fit: cover; border-radius: 4px; }
      @media (max-width: 768px) { 
        .lx-services-section { padding: 2rem 1rem; }
        .lx-services-title h2 { font-size: 1.8rem; }
        .lx-tabs-nav { flex-direction: column; }
        .lx-tab-button { width: 100%; }
        .lx-service-detail { grid-template-columns: 1fr; }
        .lx-service-image { height: 250px; }
      }

      /* INSTAGRAM */
      .ig-section { background: #fff; }
      .ig-header { display: flex; align-items: center; justify-content: space-between; padding: 3rem 2.5rem 1.5rem; }
      .ig-header h2 { font-family: 'Cormorant Garamond', serif; font-weight: 300; font-size: clamp(1.5rem,4vw,3rem); text-transform: uppercase; }
      .ig-grid { display: grid; grid-template-columns: repeat(6,1fr); }
      .ig-cell { overflow: hidden; aspect-ratio: 1; }
      .ig-cell a { display: block; height: 100%; }
      .ig-cell img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease, filter 0.5s ease; filter: brightness(0.9); }
      .ig-cell:hover img { transform: scale(1.07); filter: brightness(1); }
      @media (max-width: 768px) { .ig-grid { grid-template-columns: repeat(3,1fr); } .ig-header { padding: 2rem 1.25rem 1rem; } }

      /* FOOTER */
      .lx-footer { background: #8f876f; color: white; }
      .lx-footer-top { display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,0.12); }
      .lx-footer-col { padding: 3rem 2.5rem; border-right: 1px solid rgba(255,255,255,0.12); }
      .lx-footer-col:last-child { border-right: none; }
      .lx-footer-logo { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 2.2rem; letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 1rem; }
      .lx-footer-tagline { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 0.88rem; color: rgba(255,255,255,0.5); line-height: 1.7; margin-bottom: 1.5rem; }
      .lx-footer-label { font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 1rem; }
      .lx-footer-address-big { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 2rem; text-transform: uppercase; line-height: 1; margin-bottom: 0.5rem; }
      .lx-footer-city { font-family: 'Barlow', sans-serif; font-size: 0.88rem; color: rgba(255,255,255,0.5); margin-bottom: 1.25rem; }
      .lx-footer-contact-row { display: flex; align-items: center; gap: 0.75rem; padding: 0.7rem 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
      .lx-footer-contact-row:last-child { border-bottom: none; }
      .lx-footer-contact-row a { font-family: 'Barlow', sans-serif; font-size: 0.85rem; color: rgba(255,255,255,0.65); text-decoration: none; transition: color 0.2s; }
      .lx-footer-contact-row a:hover { color: #fff; }
      .lx-footer-bottom { display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 2.5rem; }
      .lx-footer-copy { font-family: 'Barlow', sans-serif; font-size: 0.72rem; color: rgba(255,255,255,0.25); letter-spacing: 0.05em; }
      @media (max-width: 768px) { .lx-footer-top { grid-template-columns: 1fr; } .lx-footer-col { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.12); padding: 2rem 1.25rem; } .lx-footer-bottom { flex-direction: column; gap: 0.5rem; padding: 1.25rem; } }

      /* Scroll Animation Classes */
      .scroll-parallax { will-change: transform; }
      .scroll-reveal { opacity: 0; }
      .scroll-reveal.in-view { opacity: 1; }
      .stagger-item { opacity: 0; transform: translateY(30px) scale(0.95); transition: none; }
      .stagger-item.in-view { opacity: 1; transform: translateY(0) scale(1); }

      .contour-img { will-change: transform; }
      .about-grid-img { opacity: 0; transform: translateY(20px); }
      .about-grid-img.revealed { animation: revealImage 0.75s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }

      @keyframes revealImage {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      @keyframes slideInLeft {
        from { opacity: 0; transform: translateX(-30px); }
        to { opacity: 1; transform: translateX(0); }
      }

      @keyframes slideInRight {
        from { opacity: 0; transform: translateX(30px); }
        to { opacity: 1; transform: translateX(0); }
      }

      /* Mobile delays and extended animation times */
      @media (max-width: 768px) {
        .about-grid-img.revealed { animation: revealImage 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .stagger-item.in-view { transition: opacity 1.2s ease, transform 1.2s ease; }
        .service-img-animate { animation: slideInLeft 1.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .service-img-animate.delay-1 { animation-delay: 0.35s; }
        .service-img-animate.delay-2 { animation-delay: 0.65s; }
      }

      Desktop delays
      @media (min-width: 769px) {
        .service-img-animate { animation: slideInLeft 0.85s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .service-img-animate.delay-1 { animation-delay: 0.1s; }
        .service-img-animate.delay-2 { animation-delay: 0.2s; }
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Parallax effect on hero image
      const hero = document.querySelector('.hero-parallax');
      if (hero) {
        const scrollY = window.scrollY;
        const parallaxOffset = scrollY * 0.5;
        (hero as HTMLElement).style.transform = `translateY(${parallaxOffset}px)`;
      }

      // Animate images on scroll
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      scrollRevealElements.forEach((el) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        if (isInView) {
          el.classList.add('in-view');
        }
      });

      // Stagger animation for grid items
      const staggerItems = document.querySelectorAll('.stagger-item');
      staggerItems.forEach((el, index) => {
        const rect = (el as HTMLElement).getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.7;
        if (isInView && !el.classList.contains('in-view')) {
          const isMobile = window.innerWidth < 768;
          const delayMultiplier = isMobile ? 150 : 80; // Longer delays on mobile
          setTimeout(() => {
            el.classList.add('in-view');
          }, index * delayMultiplier);
        }
      });

      // Parallax scroll on CONTOUR images
      const contourImgs = document.querySelectorAll('.contour-img');
      contourImgs.forEach((img, index) => {
        const rect = (img as HTMLElement).getBoundingClientRect();
        const scrollPercent = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + (img as HTMLElement).offsetHeight)));
        const offsetY = (scrollPercent - 0.5) * 15;
        const scaleValue = 0.95 + scrollPercent * 0.1;
        (img.parentElement as HTMLElement).style.transform = `translateY(${offsetY}px) scale(${scaleValue})`;
      });

      // Smooth scale animation on about grid images
      const aboutGridImages = document.querySelectorAll('.about-grid-img');
      aboutGridImages.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8 && !img.classList.contains('revealed')) {
          img.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
        else e.target.classList.remove('visible');
      }),
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
            {/* navbar Agendar button removed */}
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
            className="hero-parallax absolute inset-0 w-full h-full object-cover object-[62%_18%] md:object-[84%_20%] lg:object-[87%_20%]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_120%,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.55)_18%,rgba(0,0,0,0.28)_34%,transparent_50%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1400 760" fill="none">
            <path d="M120 550C380 410 620 620 910 510C1100 440 1280 450 1460 520" stroke="#d3c9b8" strokeWidth="1.2" />
            <path d="M70 620C300 500 520 670 820 640C1060 620 1270 660 1490 740" stroke="#d3c9b8" strokeWidth="1.2" />
          </svg>

          <div className="relative z-10 flex-1 flex flex-col justify-end px-5 md:px-10 pb-10 md:pb-14 text-white">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/55 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Seu brilho começa aqui. Bem-vinda à Suleima.
            </p>
            <h1 className="leading-[0.96] font-light max-w-[680px]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem,7.5vw,5.8rem)' }}>
              ESTÉTICA AVANÇADA
            </h1>
          </div>

          <div className="absolute bottom-6 right-6 z-10 flex flex-col items-center gap-2">
            <div className="scroll-line" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 [writing-mode:vertical-rl]"
              style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="w-full grid grid-cols-3 text-center bg-[#2f2321] text-white">

          {[
            { num: '10+', label: 'Anos de experiência' },
            { num: '500+', label: 'Clientes atendidas' },
            { num: '100%', label: 'Atendimento personalizado' },
          ].map((s, i) => (

            <div
              key={s.label}
              className={`py-6 px-2 flex flex-col items-center justify-center ${i !== 2 ? "border-r border-white/10" : ""}`}
            >

              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.8rem,2.8vw,2.5rem)',
                  fontWeight: 300,
                  lineHeight: 1
                }}
              >
                {s.num}
              </div>

              <div
                className="text-[10px] uppercase tracking-[0.15em] text-white/60 mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {s.label}
              </div>

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
          <div className="relative z-10 mx-auto max-w-6xl fade-in text-center">

            <p
              className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Sobre a Suleima e a clínica
            </p>

            <h2
              className="mb-8 md:mb-10"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 300,
                fontSize: 'clamp(2rem,4.5vw,4.3rem)',
                lineHeight: 1.05
              }}
            >
              Nós ajudamos a <br />
              criar momentos de beleza <br />
              para você e seu brilho
            </h2>

            <p
              className="mx-auto max-w-[520px] text-[14px] md:text-[15px] leading-relaxed text-[#6f625a]/90 mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A Suleima é uma clínica premium de estética para mulheres, oferecendo
              cuidados especializados para pele, corpo e bem-estar. Atendimento
              personalizado para cada cliente.
            </p>

            <a
              href="#services"
              className="inline-block text-[13px] underline underline-offset-4 text-[#3e342e] hover:text-[#2a221d] transition"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Saiba mais
            </a>

          </div>
        </section>

        {/* SERVICES PREVIEW */}
        <section className="lx-services-section fade-in relative overflow-hidden hidden md:block">

          {/* Background shapes */}
          <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-[#5a3e36]/30 rounded-full blur-[140px]"></div>

          <div className="absolute -bottom-40 -right-40 w-[520px] h-[520px] bg-[#8b6a60]/30 rounded-full blur-[140px]"></div>

          <div className="absolute top-1/2 left-1/3 w-[380px] h-[380px] bg-[#3a2a26]/20 rounded-full blur-[120px]"></div>

          <div className="relative">

            <div className="lx-services-title">
              <h2>NOSSOS SERVIÇOS</h2>
            </div>

            <div className="lx-tabs-container">

              <div className="lx-tabs-nav">
                {serviceDetails.map((service, idx) => (
                  <button
                    key={idx}
                    className={`lx-tab-button ${activeServiceTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveServiceTab(idx)}
                  >
                    {service.label.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="lx-service-detail">
                <div className="lx-service-info">
                  <h3 className="lx-service-title">
                    {serviceDetails[activeServiceTab].label}
                  </h3>

                  <p className="lx-service-description">
                    {serviceDetails[activeServiceTab].description}
                  </p>
                </div>

                <img
                  src={serviceDetails[activeServiceTab].image}
                  alt={serviceDetails[activeServiceTab].label}
                  className="lx-service-image"
                />
              </div>

            </div>

          </div>

        </section>

        {/* MOBILE SERVICES */}
        <div className="md:hidden mt-8">

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">

            {serviceDetails.map((service, idx) => (

              <div
                key={idx}
                onClick={() => setActiveServiceTab(idx)}
                className={`
                min-w-[220px]
                rounded-xl
                overflow-hidden
                snap-start
                cursor-pointer
                transition
                border
                ${activeServiceTab === idx
                    ? "border-[#2f2321] shadow-lg"
                    : "border-[#e5e0d9]"
                  }
        `}
              >

                <div className="relative h-[110px]">

                  <img
                    src={service.image}
                    alt={service.label}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-black/25"></div>

                  <div className="absolute bottom-2 left-3 text-white">

                    <div className="text-sm font-semibold">
                      {service.label.split(' ')[0]}
                    </div>

                    <div className="text-[11px] opacity-80">

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
        {/* MOBILE SERVICE DETAIL */}
        <div className="md:hidden mt-8 px-2">

          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 shadow-sm border border-[#e7e1da]">

            <h3
              className="text-[26px] mb-3 text-[#2f2321] leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              {serviceDetails[activeServiceTab].label}
            </h3>

            <p className="text-[14px] text-[#3b2d2a]/80 mb-5 leading-relaxed">
              {serviceDetails[activeServiceTab].description}
            </p>

            <div className="overflow-hidden rounded-xl">

              <img
                src={serviceDetails[activeServiceTab].image}
                alt={serviceDetails[activeServiceTab].label}
                className="w-full h-[220px] object-cover transition duration-500 hover:scale-105"
              />

            </div>

          </div>

        </div>

        {/* FEATURES */}
        <section className="relative overflow-hidden bg-[#ececea] px-4 md:px-16 py-14 md:py-20">
          <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" viewBox="0 0 1200 580" fill="none">
            <path d="M-20 250C170 110 340 180 530 280C700 370 860 290 1090 410" stroke="#b3aa9c" strokeWidth="1.1" />
            <path d="M740 40C650 120 650 210 700 300C770 410 930 430 1170 520" stroke="#b9b1a2" strokeWidth="1.1" />
          </svg>

        </section>


        {/* THELMA ARCURI — antes de Serviços */}
        <section className="relative overflow-hidden bg-[#ececea] px-4 md:px-16 py-14 md:py-20">
          <div className="absolute left-1/2 top-[6%] h-[88%] w-[108%] -translate-x-1/2 rounded-full bg-[#e4e0d9]" />
          <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" viewBox="0 0 1200 900" fill="none">
            <path d="M-100 380C140 220 300 310 500 480C690 650 910 600 1250 680" stroke="#c5bfb1" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl fade-in">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-3" style={{ fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>Terapias Complementares</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 0.95, textAlign: 'center' }}>Thelma Arcuri</h2>
            <p className="mt-2 text-base md:text-lg text-[#4a3d37] font-light mb-10" style={{ fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>Massoterapeuta e Fisioterapeuta</p>

            <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-4 scroll-reveal">
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

        {/* CURSOS */}
        <section id="cursos" className="relative overflow-hidden bg-[#ececea] px-4 md:px-16 py-14 md:py-20">

          <div className="absolute left-1/2 top-[6%] h-[88%] w-[104%] -translate-x-1/2 rounded-full bg-[#e2dfda]" />

          <svg className="absolute inset-0 h-full w-full opacity-50 pointer-events-none" viewBox="0 0 1200 900" fill="none">
            <path d="M-100 380C140 220 300 310 500 480C690 650 910 600 1250 680" stroke="#c5bfb1" strokeWidth="1.1" />
            <path d="M-40 840C180 680 370 770 600 900C820 1030 1010 970 1190 1060" stroke="#cbc5b8" strokeWidth="1.1" />
          </svg>

          <div className="relative z-10 mx-auto max-w-6xl fade-in">

            {/* FRAME */}
            <div className="bg-white/70 backdrop-blur-sm border border-[#b5ac9d]/40 rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.12)] p-6 md:p-10">

              <p className="text-[10px] uppercase tracking-[0.22em] text-[#6f625a] mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                Capacitação Profissional
              </p>

              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 0.95 }}>
                Cursos para Profissionais<br />da Saúde
              </h2>

              <p className="mt-4 max-w-3xl text-[14px] md:text-[15px] leading-relaxed text-[#4a3d37] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quer se aperfeiçoar, não ter medo de atender, aprender novas técnicas, se aprimorar para fazer a diferença em sua clínica? Nos procure, somos uma clínica escola!
              </p>

              <div className="mt-8 bg-gradient-to-r from-[#3c2922] to-[#4f3b30] text-white p-6 md:p-8 rounded-[22px]">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem,3.5vw,3rem)', marginBottom: '0.5rem' }}>
                  Cursos VIP
                </h3>

                <p className="text-[14px] md:text-[15px] font-light text-white/80" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Atendimento exclusivo com apenas <strong className="text-white">3 alunos por curso</strong> para garantir aprendizado personalizado e prática intensiva.
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-12 gap-8">

                <div className="md:col-span-7">

                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: '2rem', marginBottom: '1.25rem' }}>
                    Cursos Disponíveis
                  </h3>

                  <div className="bg-white/70 rounded-[22px] p-6 md:p-7 border border-[#b5ac9d]/40">
                    <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] md:text-[14px] text-[#2f2321] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {['Limpeza de pele', 'Prime shape (ganho de massa)', 'Harmonização glútea', 'Peeling', 'Microagulhamento', 'Jato de plasma', 'Hidrolipoclasia', 'Carboxiterapia', 'Peim', 'Intradermoterapia', 'Toxina botulínica', 'Preenchimento', 'Bioestimulador', 'Ozônio terapia', 'Fios de PDO'].map((c) => (
                        <li key={c} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#8f876f] flex-shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 bg-gradient-to-r from-[#d8d1c2] to-[#cfc8b8] p-5 rounded-[18px] border border-[#b5ac9d]/60">
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, fontSize: '1.3rem', marginBottom: '0.75rem' }}>
                      Formas de Pagamento
                    </h4>

                    <div className="space-y-1.5 text-[13px] md:text-[14px] text-[#2f2321] font-light" style={{ fontFamily: 'Inter, sans-serif' }}>
                      <p>✓ Até <strong>6x sem juros</strong></p>
                      <p>✓ Até <strong>10x com juros</strong></p>
                    </div>
                  </div>

                </div>

                <div className="md:col-span-5">
                  <img
                    src={imagemCurso}
                    alt="Profissinal Ensinando Técnica de Estética"
                    className="rounded-[18px] shadow-md"
                  />
                </div>

              </div>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={whatsappCursos}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3c2922] px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-white rounded-full hover:bg-[#5a3d33] hover:shadow-md transition-all duration-300 active:scale-[0.98] text-center"
                >
                  Falar sobre cursos
                </a>

                <a
                  href={`${whatsappAgendamento} Seria de um curso profissionalizante na Suleima.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#3c2922]/45 px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-[#3c2922] rounded-full hover:bg-[#CDCDCD] hover:shadow-md transition-all duration-300 active:scale-[0.98] text-center"
                >
                  Agendar Curso
                </a>
              </div>

            </div>

          </div>

        </section>

        {/* INSTAGRAM PREVIEW */}
        <section className="fade-in py-20 px-6 bg-[#f4f2ee]">

          <div className="max-w-6xl mx-auto">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-10 flex-wrap gap-4">

              <div className="flex items-center gap-3">

                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 text-[#2f2321]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5"></rect>
                  <circle cx="12" cy="12" r="3.5"></circle>
                  <circle cx="17.5" cy="6.5" r="1"></circle>
                </svg>

                <h2
                  className="text-2xl md:text-3xl font-light tracking-wide"
                  style={{ fontFamily: 'Cormorant Garamond, serif' }}
                >
                  SULEIMAESTETICA
                </h2>

              </div>

              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2f2321] text-sm uppercase tracking-wider border-b border-[#2f2321]/40 hover:border-[#2f2321] transition"
              >
                Ver Perfil
              </a>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">

              {instagramPosts.map((p, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <a href={p.url} target="_blank" rel="noopener noreferrer">

                    <img
                      src={p.image}
                      alt=""
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#2f2321]/0 group-hover:bg-[#2f2321]/25 transition"></div>

                  </a>
                </div>
              ))}

            </div>

          </div>

        </section>

        <footer id="contacts" className="relative rounded-t-[32px] md:rounded-t-[40px] overflow-hidden bg-[#8f876f] text-white px-6 md:px-16 py-14">
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1200 360" fill="none">
            <path d="M-40 200C170 130 340 190 540 240C760 290 920 240 1210 300" stroke="#d8d1c2" strokeWidth="1.1" />
            <path d="M420 40C560 50 620 100 640 160C650 230 600 280 510 320" stroke="#d8d1c2" strokeWidth="1.1" />
          </svg>
          <div className="lx-footer-top">
            <div className="lx-footer-col">
              <div className="lx-footer-logo">SULEIMA</div>
              <p className="lx-footer-tagline">Agende sua avaliação personalizada e descubra o protocolo ideal para sua transformação.</p>
            </div>

            <div className="lx-footer-col">
              <p className="lx-footer-label">Endereço</p>
              <div className="lx-footer-address-big">Rua América<br />1321</div>
              <p className="lx-footer-city">Salto — SP</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hidden md:block bg-[#3c292] text-white px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] rounded-full hover:bg-[#5a3d33] transition-all duration-300 mb-2" style={{ textDecoration: 'none', display: 'inline-block' }}>Ver no Google Maps</a>
            </div>
            <div className="lx-footer-col">
              <p className="lx-footer-label">Contato</p>
              <div className="lx-footer-contact-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4, flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V21a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.89.32 1.76.59 2.6a2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006.18 6.18l1.48-1.32a2 2 0 012.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0122 16.92z" /></svg>
                <a href="tel:+5511958671658">+55 (11) 95867-1658</a>
              </div>
              <div className="lx-footer-contact-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4, flexShrink: 0 }}><rect x="3" y="4" width="18" height="16" rx="2" /><path strokeLinecap="round" d="M3 6l9 7 9-7" /></svg>
                <a href="mailto:suleimaestetica@icloud.com">suleimaestetica@icloud.com</a>
              </div>
              <div className="lx-footer-contact-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4, flexShrink: 0 }}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">@suleimaestetica</a>
              </div>
            </div>
          </div>
          <div className="lx-footer-bottom mt-6">
            <p className="lx-footer-copy">© 2025 SULEIMA ESTÉTICA · TODOS OS DIREITOS RESERVADOS</p>
            <p className="lx-footer-copy">SALTO, SÃO PAULO · BRASIL</p>
          </div>
        </footer>

      </main>
    </div>
  );
}