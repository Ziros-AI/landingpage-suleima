import { useEffect, useRef, useState } from 'react';

import imagemSu3 from '../assets/imagensSuleima/imagemSu3.jpg';
import imagemSu4 from '../assets/imagensSuleima/imagemSu4.jpg';
import imagemSu1 from '../assets/imagensSuleima/imagemSu1.jpg';
import imagemSu2 from '../assets/imagensSuleima/imagemSu2.jpg';
import imagem3 from '../assets/ImagensClinica/imagem3.jpg';
import imagem4 from '../assets/ImagensClinica/imagem4.jpg';
import imagem5 from '../assets/ImagensClinica/imagem5.jpg';
import imagem7 from '../assets/ImagensClinica/imagem7.jpg';
import imagemG from '../assets/imagensGluteo/imagemG.jpg';
import imagemG2 from '../assets/imagensGluteo/imagemG2.jpg';
import imagemG3 from '../assets/imagensGluteo/imagemG3.jpg';
import imagemG4 from '../assets/imagensGluteo/imagemG4.jpg';
import imagemG5 from '../assets/imagensGluteo/imagemG5.jpg';
import imagemT1 from '../assets/ImagensThelma/ImagemTh1.jpeg';

const whatsappAvaliacao = 'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o.';
const whatsappClinica = 'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20tratamentos.';
const whatsappCursos = 'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos.';
const whatsappAgendamento = 'https://api.whatsapp.com/send/?phone=5511958671658&text=Ol%C3%A1,%20gostaria%20de%20realizar%20um%20agendamento.';
const googleMapsUrl = 'https://maps.app.goo.gl/5ACdHhu2EvLqRs1k7';
const instagramProfileUrl = 'https://www.instagram.com/suleimaestetica';

/* ─── DATA ─────────────────────────────────────────── */
const serviceCategories = [
  { id: 'all',      label: 'ALL',           count: '29 tratamentos', image: imagemSu3 },
  { id: 'corporal', label: 'CORPORAL',       count: '8 tratamentos',  image: imagemSu4 },
  { id: 'facial',   label: 'FACIAL',         count: '12 tratamentos', image: imagem7   },
  { id: 'gluteo',   label: 'GLÚTEOS',        count: '5 protocolos',   image: imagemG4  },
];

interface Treatment {
  id: string;
  cat: string;
  name: string;
  duration: string;
  desc: string;
  idealFor: string;
  steps: { title: string; desc: string }[];
  image1: string;
  image2: string;
}

const treatments: Treatment[] = [
  {
    id: 't1', cat: 'facial',
    name: 'LIMPEZA DE PELE',
    duration: '60min',
    desc: 'A limpeza de pele profissional remove impurezas, células mortas e cravos, devolvendo luminosidade e textura uniforme à pele.',
    idealFor: 'Manutenção mensal e controle de oleosidade',
    steps: [
      { title: 'Higienização', desc: 'Remoção de maquiagem, suor e impurezas superficiais.' },
      { title: 'Esfoliação', desc: 'Remoção de células mortas para melhor absorção.' },
      { title: 'Extração', desc: 'Extração manual ou com aparelho dos cravos.' },
      { title: 'Máscara calmante', desc: 'Finalização com máscara hidratante.' },
    ],
    image1: imagemSu1, image2: imagem3,
  },
  {
    id: 't2', cat: 'facial',
    name: 'MICROAGULHAMENTO',
    duration: '45min',
    desc: 'Técnica que estimula a produção de colágeno através de micro perfurações, reduzindo marcas, poros e rugas finas.',
    idealFor: 'Rejuvenescimento e tratamento de cicatrizes',
    steps: [
      { title: 'Anestesia tópica', desc: 'Aplicação de creme anestésico para conforto.' },
      { title: 'Microagulhamento', desc: 'Passagem do dermaroller com agulhas calibradas.' },
      { title: 'Serum ativo', desc: 'Aplicação de ativos para potencializar resultado.' },
      { title: 'Protetor solar', desc: 'Finalização com proteção solar de alto fator.' },
    ],
    image1: imagem4, image2: imagem7,
  },
  {
    id: 't3', cat: 'facial',
    name: 'PEELING QUÍMICO',
    duration: '30min',
    desc: 'Renovação celular acelerada com ácidos que promovem descamação controlada, uniformizando tom e textura da pele.',
    idealFor: 'Manchas, oleosidade e envelhecimento precoce',
    steps: [
      { title: 'Limpeza', desc: 'Remoção de oleosidade e preparo da pele.' },
      { title: 'Aplicação do ácido', desc: 'Peeling com ácidos como glicólico, mandélico ou TCA.' },
      { title: 'Neutralização', desc: 'Interrupção da ação do ácido no momento certo.' },
      { title: 'Hidratação', desc: 'Aplicação de sérum reparador e hidratante.' },
    ],
    image1: imagemSu2, image2: imagem5,
  },
  {
    id: 't4', cat: 'facial',
    name: 'JATO DE PLASMA',
    duration: '40min',
    desc: 'Tecnologia de plasma para estimulação intensa do colágeno, efeito lifting sem cirurgia com resultados visíveis e duradouros.',
    idealFor: 'Flacidez facial e rejuvenescimento sem bisturi',
    steps: [
      { title: 'Avaliação', desc: 'Análise das áreas a serem tratadas.' },
      { title: 'Anestesia tópica', desc: 'Creme anestésico para conforto durante o procedimento.' },
      { title: 'Aplicação do plasma', desc: 'Descarga de plasma sobre a pele com precisão.' },
      { title: 'Cuidados pós', desc: 'Orientação sobre cuidados nos dias seguintes.' },
    ],
    image1: imagemSu3, image2: imagemSu4,
  },
  {
    id: 't5', cat: 'corporal',
    name: 'CRIOLIPÓLISE',
    duration: '60min',
    desc: 'Eliminação de gordura localizada por congelamento, reduzindo células de gordura sem dor e sem cirurgia.',
    idealFor: 'Gordura localizada resistente à dieta e exercício',
    steps: [
      { title: 'Mapeamento', desc: 'Avaliação das áreas com gordura localizada.' },
      { title: 'Gel protetor', desc: 'Proteção da pele antes da aplicação do frio.' },
      { title: 'Criolipólise', desc: 'Aplicação do aparelho que congela as células de gordura.' },
      { title: 'Massagem', desc: 'Massagem para ativar a eliminação das células tratadas.' },
    ],
    image1: imagemSu4, image2: imagem5,
  },
  {
    id: 't6', cat: 'corporal',
    name: 'RADIOFREQUÊNCIA',
    duration: '50min',
    desc: 'Ondas de radiofrequência que aquecem as camadas profundas da pele estimulando colágeno e melhorando flacidez.',
    idealFor: 'Flacidez corporal e facial após emagrecimento',
    steps: [
      { title: 'Limpeza', desc: 'Preparação e limpeza da área a ser tratada.' },
      { title: 'Gel condutor', desc: 'Aplicação de gel para condução das ondas.' },
      { title: 'Radiofrequência', desc: 'Movimentos circulares com o aparelho aquecendo as camadas.' },
      { title: 'Finalização', desc: 'Hidratação e proteção da área tratada.' },
    ],
    image1: imagem3, image2: imagem4,
  },
  {
    id: 't7', cat: 'corporal',
    name: 'CARBOXITERAPIA',
    duration: '30min',
    desc: 'Infusão de CO₂ medicinal que melhora circulação, reduz celulite, gordura localizada e estimula colágeno.',
    idealFor: 'Celulite, olheiras e gordura localizada',
    steps: [
      { title: 'Avaliação', desc: 'Mapeamento das áreas de aplicação.' },
      { title: 'Infusão de CO₂', desc: 'Injeção do gás medicinal com agulha fina.' },
      { title: 'Massagem', desc: 'Distribuição do gás pela área tratada.' },
      { title: 'Resultado progressivo', desc: 'Resultados melhores a cada sessão realizada.' },
    ],
    image1: imagemSu1, image2: imagemSu2,
  },
  {
    id: 't8', cat: 'corporal',
    name: 'HIDROLIPOCLASIA',
    duration: '45min',
    desc: 'Técnica de ultrassom associada à infiltração de solução fisiológica para redução de gordura localizada.',
    idealFor: 'Gordura localizada abdominal e flancos',
    steps: [
      { title: 'Infiltração', desc: 'Aplicação de solução fisiológica na área.' },
      { title: 'Ultrassom', desc: 'Aplicação de ultrassom focado para romper as células.' },
      { title: 'Drenagem', desc: 'Massagem linfática para eliminar os resíduos.' },
      { title: 'Repouso', desc: 'Orientações de repouso e cuidados pós-procedimento.' },
    ],
    image1: imagem5, image2: imagem7,
  },
  {
    id: 't9', cat: 'gluteo',
    name: 'MÉTODO CONTOUR',
    duration: '90min',
    desc: 'Protocolo exclusivo de harmonização glútea que combina técnicas avançadas para contorno, firmeza e proporção perfeita.',
    idealFor: 'Modelagem e contorno glúteo personalizado',
    steps: [
      { title: 'Avaliação corporal', desc: 'Análise da estrutura corporal e definição do protocolo ideal.' },
      { title: 'Ativação muscular', desc: 'Eletroestimulação para ativar a musculatura glútea.' },
      { title: 'Harmonização', desc: 'Técnicas combinadas para contorno e volume.' },
      { title: 'Finalização', desc: 'Hidratação intensa e orientações de manutenção.' },
    ],
    image1: imagemG4, image2: imagemG5,
  },
  {
    id: 't10', cat: 'gluteo',
    name: 'PRIME SHAPE',
    duration: '60min',
    desc: 'Protocolo de ganho de massa e definição glútea com eletroestimulação de alta intensidade para resultados expressivos.',
    idealFor: 'Ganho de volume e definição muscular',
    steps: [
      { title: 'Avaliação', desc: 'Análise da composição corporal e objetivo da cliente.' },
      { title: 'Eletroestimulação', desc: '30 minutos equivalentes a 20.000 contrações musculares.' },
      { title: 'Massagem modeladora', desc: 'Técnicas para potencializar o resultado.' },
      { title: 'Nutrição pós', desc: 'Orientações nutricionais para maximizar ganhos.' },
    ],
    image1: imagemG3, image2: imagemG2,
  },
  {
    id: 't11', cat: 'gluteo',
    name: 'HARMONIZAÇÃO GLÚTEA',
    duration: '75min',
    desc: 'Combinação de técnicas não invasivas para modelar, levantar e definir o contorno glúteo com resultados naturais.',
    idealFor: 'Volume, levantamento e definição glútea',
    steps: [
      { title: 'Diagnóstico', desc: 'Avaliação postural e corporal detalhada.' },
      { title: 'Protocolo combinado', desc: 'Associação de técnicas para resultado superior.' },
      { title: 'Drenagem linfática', desc: 'Drenagem para eliminar toxinas e reduzir edemas.' },
      { title: 'Resultado final', desc: 'Glúteos com melhor formato, firmeza e projeção.' },
    ],
    image1: imagemG, image2: imagemG2,
  },
];

const instagramPosts = [
  { url: 'https://www.instagram.com/suleimaestetica/reel/DPaRforjTnO/', image: imagemSu3 },
  { url: 'https://www.instagram.com/suleimaestetica/p/DP6OMaWDa1A/', image: imagem3 },
  { url: 'https://www.instagram.com/suleimaestetica/reel/DU_IOOOkeEA/', image: imagem5 },
  { url: 'https://www.instagram.com/suleimaestetica/p/DLxQT2fxFtz/', image: imagem7 },
  { url: 'https://www.instagram.com/suleimaestetica/reel/DVZbr2MEopr/', image: imagemG4 },
  { url: 'https://www.instagram.com/suleimaestetica/reel/DU53r6rDS8D/', image: imagemG5 },
];

/* ─── COMPONENT ─────────────────────────────────────── */
export default function LandingPage() {
  const sistemaUrl = import.meta.env.VITE_SISTEMA_URL ?? 'http://localhost:5173/login';

  const [menuOpen, setMenuOpen]             = useState(false);
  const [activeCat, setActiveCat]           = useState<string | null>(null);
  const [servicesActivated, setServicesActivated] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [contourModalOpen, setContourModalOpen] = useState(false);
  const [modalAnimIn, setModalAnimIn]       = useState(false);

  // Floating label on about section heading
  const [mousePos, setMousePos]             = useState({ x: 0, y: 0 });
  const aboutRef = useRef<HTMLElement>(null);

  const openModal = (t: Treatment) => {
    setSelectedTreatment(t);
    setTimeout(() => setModalAnimIn(true), 10);
  };
  const closeModal = () => {
    setModalAnimIn(false);
    setTimeout(() => setSelectedTreatment(null), 350);
  };
  const openContour = () => {
    setContourModalOpen(true);
    setTimeout(() => setModalAnimIn(true), 10);
  };
  const closeContour = () => {
    setModalAnimIn(false);
    setTimeout(() => setContourModalOpen(false), 350);
  };
  const activateServices = () => {
    setServicesActivated(true);
    setActiveCat(prev => prev ?? 'all');
  };

  const visibleTreatments = !activeCat
    ? []
    : activeCat === 'all'
      ? treatments
      : treatments.filter(t => t.cat === activeCat);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Barlow:ital,wght@0,300;0,400;0,500;1,300&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html { scroll-behavior: smooth; }
      body { background: #fff; color: #111; overflow-x: hidden; }

      /* ─── NAV ─── */
      .lx-nav {
        position: fixed; top: 0; left: 0; right: 0; z-index: 100;
        background: rgba(255,255,255,0.92); backdrop-filter: blur(12px);
        border-bottom: 1px solid rgba(0,0,0,0.08);
        display: flex; align-items: center; justify-content: space-between;
        padding: 0 2.5rem; height: 60px;
        font-family: 'Barlow Condensed', sans-serif;
        animation: navSlideIn 0.6s ease both;
      }
      @keyframes navSlideIn { from { transform: translateY(-100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      .lx-logo { font-weight: 900; font-size: 1.2rem; letter-spacing: 0.06em; cursor: pointer; }
      .lx-logo .lx-x { display: inline-block; font-style: italic; }
      .lx-nav-links { display: flex; gap: 2rem; list-style: none; }
      .lx-nav-links a { font-weight: 600; font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase; color: #111; text-decoration: none; transition: opacity 0.2s; }
      .lx-nav-links a:hover { opacity: 0.5; }
      .lx-book-btn {
        background: #111; color: #fff; border: none; cursor: pointer;
        font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
        font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase;
        padding: 0.6rem 1.2rem; text-decoration: none;
        transition: background 0.2s;
      }
      .lx-book-btn:hover { background: #333; }
      @media (max-width: 900px) { .lx-nav-links { display: none; } }
      @media (max-width: 600px) { .lx-nav { padding: 0 1.25rem; } }

      /* ─── HAMBURGER ─── */
      .lx-hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
      .lx-hamburger span { display: block; width: 24px; height: 2px; background: #111; transition: transform 0.3s, opacity 0.3s; }
      @media (max-width: 900px) { .lx-hamburger { display: flex; } }

      /* ─── MOBILE MENU ─── */
      .lx-mobile-menu {
        position: fixed; inset: 0; z-index: 200; background: #fff;
        display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 2rem;
        transition: opacity 0.3s, transform 0.3s;
      }
      .lx-mobile-menu a {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
        font-size: 2.5rem; text-transform: uppercase; color: #111; text-decoration: none;
        transform: translateY(20px); opacity: 0;
        animation: menuItemIn 0.4s ease both;
      }
      @keyframes menuItemIn { to { transform: translateY(0); opacity: 1; } }

      /* ─── HERO ─── */
      .lx-hero {
        position: relative; width: 100%; height: 100vh; overflow: hidden;
        margin-top: 60px;
      }
      .lx-hero-img {
        position: absolute; inset: 0;
        width: 100%; height: 100%; object-fit: cover; object-position: 62% 20%;
        transform: scale(1.05);
        animation: heroImgIn 1.2s cubic-bezier(0.25,0.46,0.45,0.94) both;
      }
      @keyframes heroImgIn { from { transform: scale(1.12); opacity: 0.6; } to { transform: scale(1.05); opacity: 1; } }
      .lx-hero-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.3) 100%); }
      .lx-hero-content {
        position: absolute; bottom: 0; left: 0; right: 0;
        padding: 0 2.5rem 0;
      }
      .lx-hero-top {
        display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
        animation: fadeUp 0.8s 0.3s ease both;
      }
      .lx-hero-tag { font-family: 'Barlow', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.8); }
      .lx-hero-cta {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
        font-size: 0.8rem; letter-spacing: 0.1em; text-transform: uppercase;
        color: #fff; text-decoration: underline; text-underline-offset: 3px;
        transition: opacity 0.2s;
      }
      .lx-hero-cta:hover { opacity: 0.7; }
      .lx-hero-title {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
        font-size: clamp(5rem, 13vw, 13rem); line-height: 1;
        text-transform: uppercase; color: #fff; letter-spacing: -0.01em;
        white-space: nowrap; overflow: hidden;
        animation: heroTitleIn 1s 0.15s cubic-bezier(0.25,0.46,0.45,0.94) both;
      }
      @keyframes heroTitleIn { from { transform: translateY(100%); } to { transform: translateY(0); } }
      @media (max-width: 600px) {
        .lx-hero {
          height: calc(100dvh - 60px);
          min-height: 520px;
        }
        .lx-hero-img {
          object-position: 60% 16%;
        }
        .lx-hero-content {
          padding: 0 1rem 2.1rem;
        }
        .lx-hero-top {
          align-items: flex-start;
          flex-direction: column;
          gap: 0.45rem;
          margin-bottom: 0.75rem;
        }
        .lx-hero-title {
          font-size: clamp(2.7rem, 12.8vw, 4.1rem);
          line-height: 0.95;
          white-space: nowrap;
          overflow: visible;
          max-width: 100%;
        }
      }

      /* ─── ABOUT / BIG TEXT ─── */
      .lx-about {
        background: #fff; padding: 8rem 2.5rem;
        display: flex; flex-direction: column; align-items: center; text-align: center;
        position: relative; overflow: hidden;
      }
      .lx-about-title {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
        font-size: clamp(3rem, 9vw, 9rem); line-height: 0.95; text-transform: uppercase;
        color: #111; position: relative; cursor: default;
        user-select: none;
      }
      .lx-about-title .lx-word { display: inline-block; position: relative; }
      .lx-about-title .lx-tag {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
        font-family: 'Barlow', sans-serif; font-size: 0.55rem; font-weight: 500;
        letter-spacing: 0.2em; text-transform: uppercase; color: #111;
        background: none; padding: 0 0.3rem;
        opacity: 0; transition: opacity 0.15s;
        white-space: nowrap; pointer-events: none;
      }
      .lx-about-title .lx-tag-bracket {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 400;
        font-size: 0.9em; color: #111;
        opacity: 0; transition: opacity 0.15s;
        position: relative; display: inline-block;
      }
      .lx-about-title .lx-slot:hover .lx-tag,
      .lx-about-title .lx-slot:hover .lx-tag-bracket { opacity: 1; }
      .lx-about-desc {
        font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 1rem;
        line-height: 1.7; color: #555; max-width: 440px; text-align: center;
        margin-top: 2rem;
      }
      .lx-read-more {
        margin-top: 2rem;
        font-family: 'Barlow', sans-serif; font-weight: 400; font-size: 0.95rem;
        color: #111; text-decoration: underline; text-underline-offset: 4px;
        cursor: pointer; background: none; border: none; transition: opacity 0.2s;
      }
      .lx-read-more:hover { opacity: 0.5; }
      @media (max-width: 600px) {
        .lx-about {
          padding: 3.5rem 1.25rem 3rem;
        }
        .lx-about-title {
          font-size: clamp(2.8rem, 13.5vw, 4rem);
          line-height: 1;
          max-width: 340px;
          margin: 0 auto;
          text-align: center;
        }
        .lx-about-desc {
          margin-top: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.65;
          max-width: 330px;
        }
      }
      @media (max-width: 900px) {
        .lx-about-title .lx-tag,
        .lx-about-title .lx-tag-bracket {
          display: none !important;
        }
      }

      /* ─── SERVICES INTRO ─── */
      .lx-services-intro {
        background: #f5f5f3; padding: 5rem 2.5rem 3rem;
        text-align: center;
      }
      .lx-services-intro h2 {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
        font-size: clamp(2.5rem, 7vw, 6rem); text-transform: uppercase; color: #111;
      }
      .lx-services-grid {
        display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem;
        max-width: 1100px; margin: 2.5rem auto 0; padding: 0 2.5rem 4rem;
        background: #f5f5f3;
      }
      .lx-service-card {
        position: relative; overflow: hidden; border-radius: 4px;
        aspect-ratio: 3/4; cursor: pointer;
        background: #ddd;
      }
      .lx-service-card img {
        position: absolute; inset: 0; width: 100%; height: 100%;
        object-fit: cover; transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
      }
      .lx-service-card:hover img { transform: scale(1.06); }
      .lx-service-card-overlay {
        position: absolute; inset: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%);
      }
      .lx-service-card-info {
        position: absolute; bottom: 1rem; left: 1rem; right: 1rem;
        display: flex; align-items: flex-end; justify-content: space-between;
      }
      .lx-service-card-name {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
        font-size: 1rem; text-transform: uppercase; color: #fff; letter-spacing: 0.04em;
      }
      .lx-service-card-count { font-family: 'Barlow', sans-serif; font-size: 0.7rem; color: rgba(255,255,255,0.75); }
      .lx-service-card-icon {
        width: 28px; height: 28px; border: 1.5px solid rgba(255,255,255,0.6);
        display: flex; align-items: center; justify-content: center;
        font-size: 0.7rem; color: #fff; flex-shrink: 0;
      }
      .lx-view-all {
        display: block; text-align: center; margin: 0 auto;
        font-family: 'Barlow', sans-serif; font-weight: 400; font-size: 0.95rem;
        color: #111; text-decoration: underline; text-underline-offset: 4px;
        padding-bottom: 4rem; background: #f5f5f3;
      }
      .lx-view-all:hover { opacity: 0.5; }
      @media (max-width: 768px) { .lx-services-grid { grid-template-columns: 1fr; padding: 0 1.25rem 3rem; } }

      /* ─── OUR SERVICES (tabs + cards) ─── */
      .lx-our-services { background: #fff; padding: 5rem 2.5rem; }
      .lx-our-services-header {
        display: flex; align-items: flex-end; gap: 1rem; flex-wrap: wrap;
        margin-bottom: 3rem;
      }
      .lx-our-services h2 {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
        font-size: clamp(3rem, 8vw, 7rem); text-transform: uppercase; color: #111;
        line-height: 0.92; flex: 1; min-width: 240px;
      }
      .lx-our-services h2 .lx-h2-tag {
        display: inline-block;
        font-family: 'Barlow Condensed', sans-serif; font-weight: 600;
        font-size: 0.55em; letter-spacing: 0.2em; vertical-align: middle;
        border: 1px solid #111; padding: 0.1em 0.4em; margin: 0 0.3rem;
        position: relative; top: -0.1em;
      }

      /* tabs */
      .lx-tabs {
        display: grid; grid-template-columns: repeat(4,1fr);
        border: 1px solid #e0e0e0; margin-bottom: 3rem;
        border-radius: 2px;
      }
      .lx-tabs.preview {
        grid-template-columns: repeat(3,1fr);
        border: none;
        gap: 0.85rem;
      }
      .lx-tab {
        position: relative; overflow: hidden;
        padding: 1.25rem 1.5rem; cursor: pointer;
        border-right: 1px solid #e0e0e0; min-height: 90px;
        transition: background 0.3s;
        display: flex; flex-direction: column; justify-content: flex-end; gap: 0.2rem;
      }
      .lx-tab:last-child { border-right: none; }
      .lx-tabs.preview .lx-tab {
        border: 1px solid #ddd;
        min-height: 240px;
        padding: 1rem;
      }
      .lx-tab-bg {
        position: absolute; inset: 0; width: 100%; height: 100%;
        object-fit: cover; opacity: 0;
        transition: opacity 0.35s; filter: brightness(0.4);
      }
      .lx-tabs.preview .lx-tab-bg { opacity: 1; }
      .lx-tab:hover .lx-tab-bg, .lx-tab.active .lx-tab-bg { opacity: 1; }
      .lx-tab-content { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 0.2rem; }
      .lx-tab-name {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
        font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.06em;
        color: #111; display: flex; align-items: center; justify-content: space-between;
        transition: color 0.3s;
      }
      .lx-tab:hover .lx-tab-name, .lx-tab.active .lx-tab-name { color: #fff; }
      .lx-tab-count { font-family: 'Barlow', sans-serif; font-size: 0.72rem; color: #888; transition: color 0.3s; }
      .lx-tab:hover .lx-tab-count, .lx-tab.active .lx-tab-count { color: rgba(255,255,255,0.7); }
      .lx-tab-x { font-size: 0.7rem; opacity: 0.6; }
      .lx-tabs.preview .lx-tab-name,
      .lx-tabs.preview .lx-tab-count { color: #fff; }
      .lx-tabs.preview .lx-tab-count { color: rgba(255,255,255,0.75); }
      .lx-services-hint {
        max-width: 1100px;
        margin: -1.4rem auto 2rem;
        font-family: 'Barlow', sans-serif;
        font-size: 0.8rem;
        color: #777;
      }
      @media (max-width: 700px) { .lx-tabs { grid-template-columns: repeat(2,1fr); } .lx-tab:nth-child(2) { border-right: none; } .lx-tab:nth-child(3) { border-right: 1px solid #e0e0e0; } }
      @media (max-width: 700px) {
        .lx-tabs.preview { grid-template-columns: 1fr; }
        .lx-tabs.preview .lx-tab { min-height: 180px; }
        .lx-tabs:not(.preview) { display: flex; overflow-x: auto; scrollbar-width: thin; }
        .lx-tabs:not(.preview) .lx-tab {
          min-width: 160px;
          border-right: 1px solid #e0e0e0 !important;
        }
      }

      /* category heading below tabs */
      .lx-cat-header {
        display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2.5rem; align-items: start;
      }
      .lx-cat-title {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
        font-size: clamp(2rem, 5vw, 4.5rem); text-transform: uppercase; color: #111; line-height: 1;
      }
      .lx-cat-desc { font-family: 'Barlow', sans-serif; font-size: 0.95rem; line-height: 1.7; color: #555; padding-top: 0.5rem; }
      @media (max-width: 768px) { .lx-cat-header { grid-template-columns: 1fr; } }

      /* treatment cards grid */
      .lx-treatments-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: start; }
      .lx-treatments-img { border-radius: 2px; overflow: hidden; }
      .lx-treatments-img img { width: 100%; aspect-ratio: 3/4; object-fit: cover; display: block; }
      .lx-treatments-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e0e0e0; border: 1px solid #e0e0e0; }
      .lx-treatment-card {
        background: #fff; padding: 1.5rem 1.25rem;
        cursor: pointer; transition: background 0.2s;
        display: flex; flex-direction: column; gap: 0.5rem;
      }
      .lx-treatment-card:hover { background: #f8f8f8; }
      .lx-treatment-card:hover .lx-tc-btns { opacity: 1; }
      .lx-tc-name {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 800;
        font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.04em; color: #111;
      }
      .lx-tc-duration {
        font-family: 'Barlow', sans-serif; font-size: 0.72rem; color: #888;
        display: flex; align-items: center; gap: 0.3rem;
      }
      .lx-tc-desc { font-family: 'Barlow', sans-serif; font-size: 0.8rem; color: #555; line-height: 1.5; flex: 1; }
      .lx-tc-btns {
        display: flex; gap: 0.5rem; margin-top: 0.5rem;
        opacity: 0; transition: opacity 0.2s;
      }
      .lx-tc-book {
        background: #111; color: #fff; border: none; cursor: pointer;
        font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
        font-size: 0.7rem; letter-spacing: 0.08em; text-transform: uppercase;
        padding: 0.45rem 0.8rem; display: flex; align-items: center; gap: 0.3rem;
        transition: background 0.2s;
      }
      .lx-tc-book:hover { background: #333; }
      .lx-tc-learn {
        background: none; color: #111; border: none; cursor: pointer;
        font-family: 'Barlow', sans-serif; font-size: 0.75rem;
        text-decoration: underline; text-underline-offset: 3px;
        transition: opacity 0.2s;
      }
      .lx-tc-learn:hover { opacity: 0.5; }
      @media (max-width: 1024px) { .lx-treatments-layout { grid-template-columns: 1fr; } }
      @media (max-width: 600px) { .lx-treatments-cards { grid-template-columns: 1fr; } .lx-our-services { padding: 3rem 1.25rem; } }
      @media (hover: none) {
        .lx-tc-btns { opacity: 1; }
      }

      /* center text in cards area */
      .lx-cards-center-text {
        display: flex; align-items: center; justify-content: center;
        background: #fff; font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700; font-size: 0.75rem; letter-spacing: 0.25em; text-transform: uppercase;
        color: #bbb; border-left: 1px solid #e0e0e0;
        position: relative;
      }
      .lx-cards-center-text::before,
      .lx-cards-center-text::after {
        content: '❛'; position: absolute;
        font-size: 2rem; color: #ddd;
      }
      .lx-cards-center-text::before { top: 1rem; left: 1rem; }
      .lx-cards-center-text::after  { bottom: 1rem; right: 1rem; transform: rotate(180deg); }

      /* ─── CONTOUR SECTION ─── */
      .lx-contour {
        background: #111; color: #fff; padding: 5rem 2.5rem;
      }
      .lx-contour-inner { max-width: 1100px; margin: 0 auto; }
      .lx-contour-top { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 3rem; align-items: end; }
      .lx-contour-top h2 {
        font-family: 'Barlow Condensed', sans-serif; font-weight: 900;
        font-size: clamp(2.5rem, 6vw, 5.5rem); text-transform: uppercase; line-height: 0.92;
      }
      .lx-contour-right { display: flex; flex-direction: column; gap: 1.5rem; }
      .lx-contour-desc { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 0.95rem; line-height: 1.7; color: rgba(255,255,255,0.65); }
      .lx-contour-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; }
      .lx-btn-white {
        background: #fff; color: #111; border: none; cursor: pointer;
        font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
        font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase;
        padding: 0.7rem 1.4rem; text-decoration: none; display: inline-block;
        transition: background 0.2s;
      }
      .lx-btn-white:hover { background: #eee; }
      .lx-btn-ghost-white {
        background: transparent; color: #fff; border: 1.5px solid rgba(255,255,255,0.5); cursor: pointer;
        font-family: 'Barlow Condensed', sans-serif; font-weight: 700;
        font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase;
        padding: 0.7rem 1.4rem; text-decoration: none; display: inline-block;
        transition: border-color 0.2s, background 0.2s;
      }
      .lx-btn-ghost-white:hover { border-color: #fff; background: rgba(255,255,255,0.1); }
      .lx-contour-photos { display: grid; grid-template-columns: repeat(5,1fr); gap: 4px; }
      .lx-contour-photo { overflow: hidden; border-radius: 2px; aspect-ratio: 3/4; }
      .lx-contour-photo img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.75); transition: transform 0.6s ease, filter 0.6s ease; }
      .lx-contour-photo:hover img { transform: scale(1.06); filter: brightness(1); }
      @media (max-width: 768px) { .lx-contour-top { grid-template-columns: 1fr; } .lx-contour-photos { grid-template-columns: repeat(3,1fr); } .lx-contour { padding: 3rem 1.25rem; } }

      /* ─── THELMA ─── */
      .lx-thelma { background: #fff; padding: 5rem 2.5rem; }
      .lx-thelma-inner { display: grid; grid-template-columns: 5fr 7fr; gap: 4rem; max-width: 1100px; margin: 0 auto; align-items: center; }
      .lx-thelma-photo { border-radius: 999px; overflow: hidden; aspect-ratio: 3/4; }
      .lx-thelma-photo img { width: 100%; height: 100%; object-fit: cover; object-position: 50% 25%; }
      .lx-thelma-content { display: flex; flex-direction: column; gap: 1.5rem; }
      .lx-thelma-tag { font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 0.7rem; letter-spacing: 0.3em; text-transform: uppercase; color: #888; }
      .lx-thelma-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(2.5rem,5vw,4.5rem); text-transform: uppercase; line-height: 0.95; }
      .lx-thelma-role { font-family: 'Barlow', sans-serif; font-size: 0.85rem; letter-spacing: 0.1em; text-transform: uppercase; color: #888; }
      .lx-thelma-desc { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 0.95rem; line-height: 1.7; color: #555; }
      .lx-thelma-cards2 { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e0e0e0; border: 1px solid #e0e0e0; }
      .lx-thelma-card2 { background: #fff; padding: 1.25rem; }
      .lx-thelma-card2 h4 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1rem; text-transform: uppercase; margin-bottom: 0.4rem; }
      .lx-thelma-card2 p { font-family: 'Barlow', sans-serif; font-size: 0.8rem; color: #555; line-height: 1.6; }
      .lx-thelma-quote { border-left: 3px solid #111; padding-left: 1rem; font-family: 'Barlow', sans-serif; font-style: italic; font-size: 1rem; line-height: 1.6; color: #444; }
      @media (max-width: 768px) { .lx-thelma-inner { grid-template-columns: 1fr; } .lx-thelma { padding: 3rem 1.25rem; } }

      /* ─── CURSOS ─── */
      .lx-cursos { background: #f5f5f3; padding: 5rem 2.5rem; }
      .lx-cursos-inner { max-width: 1100px; margin: 0 auto; }
      .lx-cursos-header { margin-bottom: 3rem; }
      .lx-cursos-header h2 { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(2.5rem,6vw,5.5rem); text-transform: uppercase; line-height: 0.95; }
      .lx-cursos-header p { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 0.95rem; line-height: 1.7; color: #555; max-width: 560px; margin-top: 1rem; }
      .lx-cursos-body { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
      .lx-cursos-list-tag { font-family: 'Barlow Condensed', sans-serif; font-weight: 600; font-size: 0.65rem; letter-spacing: 0.3em; text-transform: uppercase; color: #888; margin-bottom: 1rem; }
      .lx-curso-row { display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 0; border-bottom: 1px solid #ddd; }
      .lx-curso-row:last-child { border-bottom: none; }
      .lx-curso-row span { font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.04em; }
      .lx-curso-row small { font-family: 'Barlow', sans-serif; font-size: 0.72rem; color: #aaa; }
      .lx-cursos-aside { display: flex; flex-direction: column; gap: 1.5rem; }
      .lx-vip { background: #111; color: #fff; padding: 2rem; }
      .lx-vip h3 { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 2rem; text-transform: uppercase; margin-bottom: 0.5rem; }
      .lx-vip p { font-family: 'Barlow', sans-serif; font-weight: 300; font-size: 0.9rem; color: rgba(255,255,255,0.65); line-height: 1.6; }
      .lx-includes { display: flex; flex-direction: column; gap: 0; border: 1px solid #ddd; }
      .lx-inc-row { display: flex; align-items: center; gap: 0.75rem; padding: 0.8rem 1rem; border-bottom: 1px solid #ddd; font-family: 'Barlow', sans-serif; font-size: 0.85rem; color: #333; }
      .lx-inc-row:last-child { border-bottom: none; }
      .lx-payment { border: 1px solid #ddd; padding: 1.25rem; }
      .lx-payment h4 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1rem; text-transform: uppercase; margin-bottom: 0.6rem; }
      .lx-payment p { font-family: 'Barlow', sans-serif; font-size: 0.85rem; color: #555; }
      .lx-cursos-btns { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem; }
      .lx-btn-dark { background: #111; color: #fff; border: none; cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.7rem 1.4rem; text-decoration: none; display: inline-block; transition: background 0.2s; }
      .lx-btn-dark:hover { background: #333; }
      .lx-btn-ghost { background: transparent; color: #111; border: 1.5px solid #111; cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.7rem 1.4rem; text-decoration: none; display: inline-block; transition: all 0.2s; }
      .lx-btn-ghost:hover { background: #111; color: #fff; }
      @media (max-width: 768px) { .lx-cursos-body { grid-template-columns: 1fr; } .lx-cursos { padding: 3rem 1.25rem; } }

      /* ─── INSTAGRAM ─── */
      .lx-ig { background: #fff; }
      .lx-ig-header { display: flex; align-items: center; justify-content: space-between; padding: 3rem 2.5rem 1.5rem; }
      .lx-ig-header h2 { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: clamp(1.5rem,4vw,3rem); text-transform: uppercase; }
      .lx-ig-grid { display: grid; grid-template-columns: repeat(6,1fr); }
      .lx-ig-cell { overflow: hidden; aspect-ratio: 1; }
      .lx-ig-cell a { display: block; height: 100%; }
      .lx-ig-cell img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease, filter 0.5s ease; filter: brightness(0.9); }
      .lx-ig-cell:hover img { transform: scale(1.07); filter: brightness(1); }
      @media (max-width: 768px) { .lx-ig-grid { grid-template-columns: repeat(3,1fr); } .lx-ig-header { padding: 2rem 1.25rem 1rem; } }

      /* ─── FOOTER ─── */
      .lx-footer { background: #111; color: #fff; }
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

      /* ─── MODAL ─── */
      .lx-modal-backdrop {
        position: fixed; inset: 0; z-index: 500;
        background: rgba(0,0,0,0.5); backdrop-filter: blur(6px);
        display: flex; align-items: center; justify-content: center; padding: 1rem;
        opacity: 0; transition: opacity 0.35s;
      }
      .lx-modal-backdrop.open { opacity: 1; }
      .lx-modal {
        background: #fff; width: 100%; max-width: 900px; max-height: 90vh;
        overflow-y: auto; border-radius: 2px;
        transform: translateY(40px) scale(0.97); opacity: 0;
        transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.35s;
        position: relative;
      }
      .lx-modal-backdrop.open .lx-modal { transform: translateY(0) scale(1); opacity: 1; }
      .lx-modal-close {
        position: absolute; top: 1rem; right: 1rem; z-index: 10;
        background: none; border: none; cursor: pointer; font-size: 1.2rem;
        color: #888; transition: color 0.2s;
        width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
      }
      .lx-modal-close:hover { color: #111; }
      .lx-modal-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
      .lx-modal-imgs { display: flex; flex-direction: column; gap: 2px; }
      .lx-modal-imgs img { width: 100%; object-fit: cover; flex: 1; display: block; }
      .lx-modal-imgs img:first-child { aspect-ratio: 4/3; }
      .lx-modal-imgs img:last-child  { aspect-ratio: 4/3; }
      .lx-modal-info { padding: 2.5rem; display: flex; flex-direction: column; gap: 1rem; }
      .lx-modal-stars { font-size: 0.85rem; color: #111; display: flex; align-items: center; gap: 0.4rem; }
      .lx-modal-name { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 2.2rem; text-transform: uppercase; line-height: 0.95; }
      .lx-modal-meta { display: flex; align-items: center; gap: 1rem; }
      .lx-modal-price { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 1.8rem; }
      .lx-modal-dur { font-family: 'Barlow', sans-serif; font-size: 0.8rem; color: #888; display: flex; align-items: center; gap: 0.3rem; }
      .lx-modal-desc { font-family: 'Barlow', sans-serif; font-size: 0.9rem; line-height: 1.7; color: #555; }
      .lx-modal-label { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }
      .lx-modal-ideal { font-family: 'Barlow', sans-serif; font-size: 0.88rem; color: #555; }
      .lx-modal-steps { display: flex; flex-direction: column; gap: 0.6rem; }
      .lx-modal-step { display: flex; gap: 0.6rem; }
      .lx-modal-step-dot { width: 6px; height: 6px; border-radius: 50%; background: #111; flex-shrink: 0; margin-top: 0.4rem; }
      .lx-modal-step-text { font-family: 'Barlow', sans-serif; font-size: 0.85rem; color: #333; }
      .lx-modal-step-text strong { font-weight: 600; color: #111; }
      .lx-modal-book { margin-top: auto; background: #111; color: #fff; border: none; cursor: pointer; font-family: 'Barlow Condensed', sans-serif; font-weight: 700; font-size: 0.9rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.9rem 1.5rem; display: flex; align-items: center; gap: 0.5rem; transition: background 0.2s; }
      .lx-modal-book:hover { background: #333; }
      @media (max-width: 700px) { .lx-modal-inner { grid-template-columns: 1fr; } .lx-modal-info { padding: 1.5rem; } }

      /* ─── CONTOUR MODAL ─── */
      .lx-contour-modal-inner { padding: 3rem; display: flex; flex-direction: column; gap: 2rem; }
      .lx-contour-modal-photos { display: grid; grid-template-columns: repeat(3,1fr); gap: 4px; }
      .lx-contour-modal-photos img { width: 100%; aspect-ratio: 1; object-fit: cover; display: block; }
      .lx-contour-modal-steps { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e0e0e0; border: 1px solid #e0e0e0; }
      .lx-contour-modal-step { background: #fff; padding: 1.5rem; }
      .lx-contour-modal-step h4 { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 1rem; text-transform: uppercase; margin-bottom: 0.4rem; }
      .lx-contour-modal-step p { font-family: 'Barlow', sans-serif; font-size: 0.85rem; color: #555; line-height: 1.6; }
      @media (max-width: 600px) { .lx-contour-modal-photos { grid-template-columns: repeat(2,1fr); } .lx-contour-modal-steps { grid-template-columns: 1fr; } .lx-contour-modal-inner { padding: 1.5rem; } }

      /* ─── SCROLL ANIMATIONS ─── */
      .lx-reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.75s ease, transform 0.75s ease; }
      .lx-reveal.visible { opacity: 1; transform: translateY(0); }
      .lx-reveal-scale { opacity: 0; transform: scale(0.95); transition: opacity 0.7s ease, transform 0.7s ease; }
      .lx-reveal-scale.visible { opacity: 1; transform: scale(1); }

      /* ─── UTIL ─── */
      @media (max-width: 600px) { .lx-book-btn-nav { display: none; } }
    `;
    document.head.appendChild(style);

    // IntersectionObserver for scroll reveals
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const observe = () => {
      document.querySelectorAll('.lx-reveal, .lx-reveal-scale').forEach(el => observer.observe(el));
    };
    observe();
    const t = setTimeout(observe, 400);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  const catInfo: Record<string, { title: string; desc: string; img: string }> = {
    all:      { title: 'TODOS OS SERVIÇOS', desc: 'Protocolos personalizados para corpo e rosto, com tecnologia de ponta e atendimento exclusivo.', img: imagemSu3 },
    corporal: { title: 'CORPORAL', desc: 'Modelagem, definição e contorno com protocolos de alta performance para cada objetivo.', img: imagemSu4 },
    facial:   { title: 'FACIAL', desc: 'Rejuvenescimento, firmeza e luminosidade com tecnologia avançada para cada tipo de pele.', img: imagem7 },
    gluteo:   { title: 'GLÚTEOS', desc: 'Harmonização e contorno glúteo com o exclusivo Método CONTOUR desenvolvido pela Suleima.', img: imagemG4 },
  };

  return (
    <div style={{ background: '#fff', color: '#111' }}>

      {/* ─── MOBILE MENU ─── */}
      {menuOpen && (
        <div className="lx-mobile-menu" onClick={() => setMenuOpen(false)}>
          <button onClick={() => setMenuOpen(false)}
            style={{ position: 'absolute', top: '1rem', right: '1.25rem', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.3rem', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700 }}>✕</button>
          {[['#about','SOBRE'],['#services','SERVIÇOS'],['#gluteo-contour','MÉTODO CONTOUR'],['#cursos','CURSOS'],['#contacts','CONTATO']].map(([href,label], i) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${i * 0.06}s` }}>{label}</a>
          ))}
          <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer"
            style={{ background: '#111', color: '#fff', padding: '0.9rem 2rem', marginTop: '1rem', fontSize: '1rem', animationDelay: '0.36s', fontFamily: 'Barlow Condensed, sans-serif', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.08em' }}>
            AGENDAR AVALIAÇÃO
          </a>
        </div>
      )}

      {/* ─── NAV ─── */}
      <header className="lx-nav">
        <div className="lx-logo">S<span className="lx-x">U</span>LEIMA</div>
        <nav>
          <ul className="lx-nav-links">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#services">Serviços</a></li>
            <li><a href="#gluteo-contour">Método CONTOUR</a></li>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#contacts">Contato</a></li>
          </ul>
        </nav>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="lx-book-btn lx-book-btn-nav">
            Agendar Avaliação
          </a>
          <button className="lx-hamburger" onClick={() => setMenuOpen(true)}>
            <span /><span /><span />
          </button>
        </div>
      </header>

      <main>

        {/* ─── HERO ─── */}
        <section className="lx-hero">
          <img src={imagemSu3} alt="Suleima Estética" className="lx-hero-img" />
          <div className="lx-hero-overlay" />
          <div className="lx-hero-content">
            <div className="lx-hero-top">
              <span className="lx-hero-tag">Seu brilho começa aqui. Bem-vinda à Suleima.</span>
              <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="lx-hero-cta">
                Agendar Avaliação
              </a>
            </div>
            <div className="lx-hero-title">ESTÉTICA AVANÇADA</div>
          </div>
        </section>

        {/* ─── ABOUT — big text + floating tags ─── */}
        <section id="about" className="lx-about" ref={aboutRef}>
          <h1 className="lx-about-title lx-reveal">
            {/* Each space between words becomes a hoverable slot with a bracket-tag pair */}
            {[
              ['NÓS AJUDAMOS', 'SOBRE NÓS'],
              ['A CRIAR', 'SOBRE NÓS'],
              ['MOMENTOS DE', 'SOBRE NÓS'],
              ['BELEZA PARA', 'SOBRE NÓS'],
              ['VOCÊ E SEU', 'SOBRE NÓS'],
              ['BRILHO', 'SOBRE NÓS'],
            ].map(([line, tag], i) => (
              <div key={i} className="lx-slot" style={{ lineHeight: 1.05, display: 'block', position: 'relative' }}>
                {i > 0 && (
                  <>
                    <span className="lx-tag-bracket">❛</span>
                    <span className="lx-tag">{tag}</span>
                    <span className="lx-tag-bracket">❜</span>
                    &nbsp;
                  </>
                )}
                {line}
              </div>
            ))}
          </h1>
          <p className="lx-about-desc lx-reveal" style={{ transitionDelay: '0.15s' }}>
            A Suleima é uma clínica premium de estética para mulheres, oferecendo cuidados especializados para pele, corpo e bem-estar. Atendimento personalizado para cada cliente.
          </p>
          <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="lx-read-more lx-reveal" style={{ transitionDelay: '0.25s' }}>
            Saiba mais
          </a>
        </section>

        {/* ─── SERVICES PREVIEW — 3 cards ─── */}
        <div className="lx-services-intro lx-reveal">
          <h2>NOSSOS SERVIÇOS</h2>
        </div>
        <div className="lx-services-grid">
          {[
            { label: 'CUIDADO FACIAL', count: '12 tratamentos', img: imagem7 },
            { label: 'RITUAIS CORPORAIS', count: '8 tratamentos', img: imagemSu4 },
            { label: 'GLÚTEOS CONTOUR', count: '5 protocolos', img: imagemG4 },
          ].map((s, i) => (
            <div key={i} className="lx-service-card lx-reveal-scale" style={{ transitionDelay: `${i * 0.1}s` }}>
              <img src={s.img} alt={s.label} />
              <div className="lx-service-card-overlay" />
              <div className="lx-service-card-info">
                <div>
                  <div className="lx-service-card-name">{s.label}</div>
                  <div className="lx-service-card-count">{s.count}</div>
                </div>
                <div className="lx-service-card-icon">✕</div>
              </div>
            </div>
          ))}
        </div>
        <a href="#services" className="lx-view-all lx-reveal">Ver Todos</a>

        {/* ─── OUR SERVICES — tabs + treatment cards ─── */}
        <section id="services" className="lx-our-services">
          <div className="lx-our-services-header lx-reveal" style={{ maxWidth: 1100, margin: '0 auto 3rem' }}>
            <h2>
              NOSSOS<span className="lx-h2-tag">SERVIÇOS</span>SERVIÇOS
            </h2>
          </div>

          {/* category tabs */}
          <div
            className={`lx-tabs lx-reveal${servicesActivated ? '' : ' preview'}`}
            style={{ maxWidth: 1100, margin: '0 auto 2rem' }}
            onMouseEnter={activateServices}
            onTouchStart={activateServices}
          >
            {(servicesActivated ? serviceCategories : serviceCategories.filter(cat => cat.id !== 'all')).map(cat => (
              <div
                key={cat.id}
                className={`lx-tab${activeCat === cat.id ? ' active' : ''}`}
                onClick={() => {
                  activateServices();
                  setActiveCat(cat.id);
                }}
              >
                <img src={cat.image} alt={cat.label} className="lx-tab-bg" />
                <div className="lx-tab-content">
                  <div className="lx-tab-name">
                    {cat.label}
                    <span className="lx-tab-x">✕</span>
                  </div>
                  <div className="lx-tab-count">{cat.count}</div>
                </div>
              </div>
            ))}
          </div>
          {!activeCat && (
            <p className="lx-services-hint lx-reveal">
              Toque em uma categoria para abrir os tratamentos.
            </p>
          )}

          {/* category heading */}
          {activeCat && (
            <div className="lx-cat-header" style={{ maxWidth: 1100, margin: '0 auto 2rem' }}>
              <h3 className="lx-cat-title">{catInfo[activeCat].title}</h3>
              <p className="lx-cat-desc">{catInfo[activeCat].desc}</p>
            </div>
          )}

          {/* treatments layout */}
          {activeCat && (
            <div className="lx-treatments-layout" style={{ maxWidth: 1100, margin: '0 auto' }}>
            {/* big image */}
            <div className="lx-treatments-img">
              <img src={catInfo[activeCat].img} alt={catInfo[activeCat].title} />
            </div>

            {/* cards grid */}
            <div>
              <div className="lx-treatments-cards">
                {visibleTreatments.slice(0, 4).map(t => (
                  <div key={t.id} className="lx-treatment-card" onClick={() => openModal(t)}>
                    <div className="lx-tc-name">{t.name}</div>
                    <div className="lx-tc-duration">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      {t.duration}
                    </div>
                    <p className="lx-tc-desc">{t.desc}</p>
                    <div className="lx-tc-btns">
                      <button className="lx-tc-book">
                        Agendar
                        <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>
                      <button className="lx-tc-learn" onClick={e => { e.stopPropagation(); openModal(t); }}>Saiba mais</button>
                    </div>
                  </div>
                ))}

                {/* Center text block visible when 4 cards + more */}
                {visibleTreatments.length > 4 && (
                  <div className="lx-cards-center-text" style={{ gridColumn: 'span 1', minHeight: 120 }}>
                    NOSSOS<br />SERVIÇOS
                  </div>
                )}

                {visibleTreatments.slice(4, 7).map(t => (
                  <div key={t.id} className="lx-treatment-card" onClick={() => openModal(t)}>
                    <div className="lx-tc-name">{t.name}</div>
                    <div className="lx-tc-duration">
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      {t.duration}
                    </div>
                    <p className="lx-tc-desc">{t.desc}</p>
                    <div className="lx-tc-btns">
                      <button className="lx-tc-book">Agendar</button>
                      <button className="lx-tc-learn" onClick={e => { e.stopPropagation(); openModal(t); }}>Saiba mais</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
          )}
        </section>

        {/* ─── MÉTODO CONTOUR ─── */}
        <section id="gluteo-contour" className="lx-contour">
          <div className="lx-contour-inner lx-reveal">
            <div className="lx-contour-top">
              <h2>MÉTODO GLÚTEOS<br />CONTOUR</h2>
              <div className="lx-contour-right">
                <p className="lx-contour-desc" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 0 }}>
                  DESTAQUE EXCLUSIVO
                </p>
                <p className="lx-contour-desc">
                  Protocolo exclusivo de harmonização glútea que combina técnicas avançadas para contorno, firmeza e proporção. Personalizado para a estrutura corporal de cada cliente.
                </p>
                <div className="lx-contour-btns">
                  <button className="lx-btn-white" onClick={openContour}>Conhecer o Método CONTOUR</button>
                  <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="lx-btn-ghost-white">Falar com a clínica</a>
                </div>
              </div>
            </div>
            <div className="lx-contour-photos">
              {[imagemG4, imagemG5, imagemG3, imagemG2, imagemG].map((img, i) => (
                <div key={i} className="lx-contour-photo">
                  <img src={img} alt={`CONTOUR resultado ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── THELMA ─── */}
        <section className="lx-thelma lx-reveal">
          <div className="lx-thelma-inner">
            <div className="lx-thelma-photo">
              <img src={imagemT1} alt="Thelma Arcuri" />
            </div>
            <div className="lx-thelma-content">
              <p className="lx-thelma-tag">Terapias Complementares</p>
              <h2 className="lx-thelma-name">THELMA<br />ARCURI</h2>
              <p className="lx-thelma-role">Massoterapeuta e Fisioterapeuta</p>
              <p className="lx-thelma-desc">
                A microfisioterapia é uma técnica manual terapêutica que utiliza toques sutis e precisos para identificar e tratar marcas deixadas por traumas físicos, emocionais ou infecciosos no organismo.
              </p>
              <div className="lx-thelma-cards2">
                <div className="lx-thelma-card2">
                  <h4>Barra de Access</h4>
                  <p>Técnica energética que promove relaxamento profundo e liberação de bloqueios mentais e emocionais.</p>
                </div>
                <div className="lx-thelma-card2">
                  <h4>Reiki</h4>
                  <p>Terapia energética que equilibra corpo, mente e espírito através da canalização de energia vital.</p>
                </div>
              </div>
              <blockquote className="lx-thelma-quote">
                "A verdadeira beleza começa no equilíbrio interior. Cuidamos de você de dentro para fora."
              </blockquote>
              <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="lx-btn-dark" style={{ alignSelf: 'flex-start', textDecoration: 'none' }}>
                Agendar Sessão
              </a>
            </div>
          </div>
        </section>

        {/* ─── CURSOS ─── */}
        <section id="cursos" className="lx-cursos">
          <div className="lx-cursos-inner">
            <div className="lx-cursos-header lx-reveal">
              <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '0.75rem' }}>
                CAPACITAÇÃO PROFISSIONAL
              </p>
              <h2>CURSOS PARA<br />PROFISSIONAIS<br />DA SAÚDE</h2>
              <p>Quer se aperfeiçoar, aprender novas técnicas e se aprimorar? Somos uma clínica escola com atendimento exclusivo de até 3 alunos por curso.</p>
            </div>
            <div className="lx-cursos-body lx-reveal">
              <div>
                <p className="lx-cursos-list-tag">Cursos Disponíveis</p>
                {['Limpeza de pele','Prime shape (ganho de massa)','Harmonização glútea','Peeling','Microagulhamento','Jato de plasma','Hidrolipoclasia','Carboxiterapia','Peim','Intradermoterapia','Toxina botulínica','Preenchimento','Bioestimulador','Ozônio terapia','Fios de PDO'].map(c => (
                  <div key={c} className="lx-curso-row">
                    <span>{c}</span>
                    <small>→</small>
                  </div>
                ))}
                <div className="lx-cursos-btns">
                  <a href={whatsappCursos} target="_blank" rel="noopener noreferrer" className="lx-btn-dark" style={{ textDecoration: 'none' }}>Falar sobre cursos</a>
                  <a href={whatsappAgendamento} target="_blank" rel="noopener noreferrer" className="lx-btn-ghost" style={{ textDecoration: 'none' }}>Agendar curso</a>
                </div>
              </div>
              <div className="lx-cursos-aside">
                <div className="lx-vip">
                  <h3>Cursos VIP</h3>
                  <p>Atendimento exclusivo com apenas <strong style={{ color: '#fff' }}>3 alunos por curso</strong> para garantir aprendizado personalizado e prática intensiva.</p>
                </div>
                <div>
                  <p className="lx-cursos-list-tag">Itens Inclusos</p>
                  <div className="lx-includes">
                    {['💁🏻 Modelos','💉 Descartáveis','☕ Coffee break','🗒 Apostila','📝 Caderno e caneta','📜 Certificado','📞 Suporte pós-curso ilimitado'].map(item => (
                      <div key={item} className="lx-inc-row">{item}</div>
                    ))}
                  </div>
                </div>
                <div className="lx-payment">
                  <h4>Formas de Pagamento</h4>
                  <p>✓ Até <strong>6x sem juros</strong></p>
                  <p>✓ Até <strong>10x com juros</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── INSTAGRAM ─── */}
        <section className="lx-ig lx-reveal">
          <div className="lx-ig-header">
            <h2>@SULEIMAESTETICA</h2>
            <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer" className="lx-btn-ghost" style={{ textDecoration: 'none' }}>Ver Perfil</a>
          </div>
          <div className="lx-ig-grid">
            {instagramPosts.map((p, i) => (
              <div key={i} className="lx-ig-cell">
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  <img src={p.image} alt={`Post ${i + 1}`} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer id="contacts" className="lx-footer">
          <div className="lx-footer-top">
            <div className="lx-footer-col">
              <div className="lx-footer-logo">SULEIMA</div>
              <p className="lx-footer-tagline">Agende sua avaliação personalizada e descubra o protocolo ideal para sua transformação.</p>
              <a href={whatsappAgendamento} target="_blank" rel="noopener noreferrer" className="lx-btn-white" style={{ textDecoration: 'none', display: 'inline-block' }}>Agendar Agora</a>
            </div>
            <div className="lx-footer-col">
              <p className="lx-footer-label">Endereço</p>
              <div className="lx-footer-address-big">Rua América<br />1321</div>
              <p className="lx-footer-city">Salto — SP</p>
              <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="lx-btn-ghost-white" style={{ textDecoration: 'none', display: 'inline-block' }}>Ver no Google Maps</a>
            </div>
            <div className="lx-footer-col">
              <p className="lx-footer-label">Contato</p>
              <div className="lx-footer-contact-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4, flexShrink: 0 }}><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V21a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.89.32 1.76.59 2.6a2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006.18 6.18l1.48-1.32a2 2 0 012.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+5511958671658">+55 (11) 95867-1658</a>
              </div>
              <div className="lx-footer-contact-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4, flexShrink: 0 }}><rect x="3" y="4" width="18" height="16" rx="2"/><path strokeLinecap="round" d="M3 6l9 7 9-7"/></svg>
                <a href="mailto:suleimaestetica@icloud.com">suleimaestetica@icloud.com</a>
              </div>
              <div className="lx-footer-contact-row">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" style={{ opacity: 0.4, flexShrink: 0 }}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
                <a href={instagramProfileUrl} target="_blank" rel="noopener noreferrer">@suleimaestetica</a>
              </div>
            </div>
          </div>
          <div className="lx-footer-bottom">
            <p className="lx-footer-copy">© 2025 SULEIMA ESTÉTICA · TODOS OS DIREITOS RESERVADOS</p>
            <p className="lx-footer-copy">SALTO, SÃO PAULO · BRASIL</p>
          </div>
        </footer>

      </main>

      {/* ─── TREATMENT MODAL ─── */}
      {selectedTreatment && (
        <div className={`lx-modal-backdrop${modalAnimIn ? ' open' : ''}`} onClick={closeModal}>
          <div className="lx-modal" onClick={e => e.stopPropagation()}>
            <button className="lx-modal-close" onClick={closeModal}>✕</button>
            <div className="lx-modal-inner">
              <div className="lx-modal-imgs">
                <img src={selectedTreatment.image1} alt={selectedTreatment.name} />
                <img src={selectedTreatment.image2} alt={selectedTreatment.name} />
              </div>
              <div className="lx-modal-info">
                <div className="lx-modal-stars">★★★★★ <span style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 400 }}>4.9</span></div>
                <div className="lx-modal-name">{selectedTreatment.name}</div>
                <div className="lx-modal-meta">
                  <div className="lx-modal-price" style={{ fontFamily: 'Barlow Condensed, sans-serif' }}>Consultar</div>
                  <div className="lx-modal-dur">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                    {selectedTreatment.duration}
                  </div>
                </div>
                <p className="lx-modal-desc">{selectedTreatment.desc}</p>
                <p className="lx-modal-label">IDEAL PARA:</p>
                <p className="lx-modal-ideal">{selectedTreatment.idealFor}</p>
                <p className="lx-modal-label">O QUE ENVOLVE:</p>
                <div className="lx-modal-steps">
                  {selectedTreatment.steps.map((s, i) => (
                    <div key={i} className="lx-modal-step">
                      <div className="lx-modal-step-dot" />
                      <p className="lx-modal-step-text"><strong>{s.title}</strong><br />{s.desc}</p>
                    </div>
                  ))}
                </div>
                <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="lx-modal-book" style={{ textDecoration: 'none' }}>
                  Agendar Agora
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ─── CONTOUR MODAL ─── */}
      {contourModalOpen && (
        <div className={`lx-modal-backdrop${modalAnimIn ? ' open' : ''}`} onClick={closeContour}>
          <div className="lx-modal" style={{ maxWidth: 860 }} onClick={e => e.stopPropagation()}>
            <button className="lx-modal-close" onClick={closeContour}>✕</button>
            <div className="lx-contour-modal-inner">
              <div>
                <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#888', marginBottom: '0.5rem' }}>
                  DESTAQUE EXCLUSIVO
                </p>
                <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,5vw,4rem)', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1rem' }}>
                  MÉTODO GLÚTEOS<br />CONTOUR
                </h2>
                <p style={{ fontFamily: 'Barlow, sans-serif', fontWeight: 300, fontSize: '0.95rem', lineHeight: 1.7, color: '#555', maxWidth: 600 }}>
                  O Método CONTOUR é um protocolo exclusivo desenvolvido pela Suleima para harmonização glútea completa. Combina eletroestimulação, técnicas manuais e ativos específicos para contorno, firmeza e proporção — personalizado para a estrutura corporal de cada cliente.
                </p>
              </div>
              <div className="lx-contour-modal-photos">
                {[imagemG4, imagemG5, imagemG3, imagemG2, imagemG, imagemSu4].map((img, i) => (
                  <img key={i} src={img} alt={`CONTOUR ${i + 1}`} />
                ))}
              </div>
              <div className="lx-contour-modal-steps">
                {[
                  { title: 'AVALIAÇÃO CORPORAL', desc: 'Análise detalhada da estrutura corporal, histórico e objetivos para definição do protocolo ideal.' },
                  { title: 'ATIVAÇÃO MUSCULAR', desc: 'Eletroestimulação profissional para ativar e preparar a musculatura glútea antes do protocolo.' },
                  { title: 'HARMONIZAÇÃO', desc: 'Combinação exclusiva de técnicas manuais e tecnológicas para contorno, volume e firmeza.' },
                  { title: 'FINALIZAÇÃO', desc: 'Hidratação intensiva, massagem linfática e orientações de manutenção para potencializar resultados.' },
                ].map((s, i) => (
                  <div key={i} className="lx-contour-modal-step">
                    <h4>{`0${i + 1}. ${s.title}`}</h4>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="lx-btn-dark" style={{ textDecoration: 'none' }}>
                  Agendar Avaliação CONTOUR
                </a>
                <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="lx-btn-ghost" style={{ textDecoration: 'none' }}>
                  Falar com a clínica
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}