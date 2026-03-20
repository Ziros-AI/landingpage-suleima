import { useEffect, useState } from 'react';
import { Star } from "lucide-react";

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
import imagemG6 from '../assets/imagensGluteo/imagemG6.jpg';
import imagemG7 from '../assets/imagensGluteo/ImagemG7.jpeg';
import imagemT1 from '../assets/ImagensThelma/ImagemTh1.jpeg';
import imagem8 from '../assets/ImagensBronzeamento/imagem8.jpeg';
import imagem9 from '../assets/ImagensBronzeamento/imagem9.jpeg';
import imagemCurso from '../assets/ImagensCurso/imagemCurso.jpeg';
import imagemCurso2 from '../assets/ImagensCurso/imagemCurso2.jpeg';
import imagemCurso3 from '../assets/ImagensCurso/imagemCurso3.jpeg';
import imagemCurso5 from '../assets/ImagensCurso/imagemCurso5.jpeg';
import imagemG7Cortada from '../assets/imagensGluteo/ImagemG7Cortada.jpeg';
import imagemG8Depois from '../assets/imagensGluteo/ImagemG8Depois.jpeg';
import imagemG9 from '../assets/imagensGluteo/ImagemG9.jpeg';
import imagemPeeling from '../assets/ImagensClinica/ImagemPeeling.jpeg';
import imagemJatoDePlasma from '../assets/ImagensClinica/ImagemJatoDePlasma.jpeg';
import imagemG4Cortada from '../assets/imagensGluteo/ImagemG4Cortada.jpeg';
import imagemF1 from '../assets/imagensFuncionarios/FuncionariaAna.jpeg';
import imagemF2 from '../assets/imagensFuncionarios/FuncionariaLuana.jpeg';

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
  { href: '#', label:'Início'},
  { href: '#about', label: 'Sobre' },
  { href: '#equipe', label: 'Equipe'},
  { href: '#depoimentos', label: 'Depoimentos'},
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

interface Treatment {
  id: string;
  cat: string;
  name: string;
  duration: string;
  desc: string;
  idealFor: string;
  steps: { title: string; desc: string }[];
  image1: string;
}

interface Depoimento {
  id: number;
  name: string;
  image: string;
  rating: number;
  text: string;
  treatment: string;
  date: string;
}

interface Funcionario {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeCat, setActiveCat] = useState<string>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);
  const [modalAnimIn, setModalAnimIn] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sistemaUrl = import.meta.env.VITE_SISTEMA_URL ?? 'http://localhost:5173/login';

  const serviceCategories = [
    { id: 'all', label: 'ALL', count: 'Seleção de tratamentos', image: imagemSu3 },
    { id: 'corporal', label: 'CORPORAL', count: 'Vários tratamentos', image: imagemSu4 },
    { id: 'facial', label: 'FACIAL', count: 'Vários tratamentos', image: imagem7 },
    { id: 'gluteo', label: 'GLÚTEOS', count: 'Vários protocolos', image: imagemG7Cortada },
    { id: 'bronze', label: 'BRONZEAMENTO', count: 'Vários protocolos', image: imagem9 },
  ];

  const treatments: Treatment[] = [
    {
      id: 't1',
      cat: 'facial',
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
      image1: imagem4
    },
    {
      id: 't2',
      cat: 'facial',
      name: 'MICROAGULHAMENTO',
      duration: '45min',
      desc: 'Técnica que estimula a produção de colágeno através de micro perfurações, reduzindo marcas, poros e rugas finas.',
      idealFor: 'Rejuvenescimento e tratamento de cicatrizes',
      steps: [
        { title: 'Anestesia tópica', desc: 'Aplicação de creme anestésico para conforto.' },
        { title: 'Microagulhamento', desc: 'Passagem do dermaroller com agulhas calibradas.' },
        { title: 'Sérum ativo', desc: 'Aplicação de ativos para potencializar resultado.' },
        { title: 'Protetor solar', desc: 'Finalização com proteção solar de alto fator.' },
      ],
      image1: imagemCurso5
    },
    {
      id: 't3',
      cat: 'facial',
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
      image1: imagemPeeling
    },
    {
      id: 't4',
      cat: 'facial',
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
      image1: imagemJatoDePlasma
    },
    {
      id: 't5',
      cat: 'corporal',
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
      image1: imagemSu4
    },
    {
      id: 't6',
      cat: 'corporal',
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
      image1: imagem5
    },
    {
      id: 't7',
      cat: 'corporal',
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
      image1: imagem6
    },
    {
      id: 't8',
      cat: 'corporal',
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
      image1: imagemCurso
    },
    {
      id: 't9',
      cat: 'gluteo',
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
      image1: imagemG7Cortada
    },
    {
      id: 't10',
      cat: 'gluteo',
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
      image1: imagemG9
    },
    {
      id: 't11',
      cat: 'gluteo',
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
      image1: imagemG8Depois
    },
    {
      id: 't12',
      cat: 'bronze',
      name: 'BRONZEAMENTO',
      duration: '60min',
      desc: 'Bronzeamento artificial com tecnologia avançada para um tom dourado, uniforme e saudável, sem exposição ao sol, realçando sua beleza de forma natural e temporária.',
      idealFor: 'Pele radiante sem sol, com bronzeado saudável realçando a beleza natural',
      steps: [
        { title: 'Diagnóstico Personalizado', desc: 'Análise detalhada da pele e do corpo para definir o melhor protocolo.' },
        { title: 'Protocolo exclusivo', desc: 'Combinação de técnicas avançadas para potencializar resultados.' },
        { title: 'Drenagem revitalizante', desc: 'Elimina toxinas, reduz inchaços e melhora a circulação.' },
        { title: 'Resultado visível', desc: 'Pele com tom dourado uniforme e glúteos mais firmes e definidos.' },
      ],
      image1: imagem9
    },
  ];

  const Depoimentos: Depoimento[] = [
    {
      id: 1,
      name: "Pessoa 1",
      image: imagem3,
      rating: 5,
      text: "Excelente atendimento! Os profissionais são super atenciosos e o resultado dos tratamentos superou minhas expectativas. Ambiente limpo e acolhedor.",
      treatment: "Limpeza de Pele",
      date: "Março 2026"
    },
    {
      id: 2,
      name: "Pessoa 2",
      image: imagem2,
      rating: 5,
      text: "Simplesmente perfeito! A Dra. [Pessoa] é uma profissional incrível. Me senti super segura durante todo o procedimento. Recomendo muito!",
      treatment: "Harmonização Facial",
      date: "Fevereiro 2026"
    },
    {
      id: 3,
      name: "Pessoa 3",
      image: imagem9,
      rating: 5,
      text: "Ótima experiência! O [Pessoa] é muito profissional e explicou todo o processo. Já estou vendo resultados significativos.",
      treatment: "Drenagem Linfática",
      date: "Janeiro 2026"
    },
    {
      id: 4,
      name: "Pessoa 4",
      image: imagemSu4,
      rating: 5,
      text: "A [Pessoa] é uma artista! Minhas sobrancelhas ficaram perfeitas, exatamente como eu queria. Atendimento impecável do início ao fim.",
      treatment: "Design de Sobrancelhas",
      date: "Março 2026"
    }
  ];

  const Funcionarios: Funcionario[] = [
    {
      id: 1,
      name: "Dra. Suleima",
      role: "Fisioterapeuta Dermato-Funcional",
      image: imagemSu1,
      bio: "Especialista em tratamentos faciais e harmonização"
    },
    {
      id: 2,
      name: "Dra. Thelma",
      role: "Massoterapeuta e Fisioterapeuta",
      image: imagemT1,
      bio: "Especialista em drenagem linfática e massoterapia"
    },
    {
      id: 3,
      name: "Dra. Ana",
      role: "Formadora e Mentora",
      image: imagemF1,
      bio: "Responsável pela capacitação de profissionais com metodologia prática e estratégica"
    },
    {
      id: 4,
      name: "Dra. Luana",
      role: "Gestora Comercial",
      image: imagemF2,
      bio: "Responsável pela gestão comercial e estagiária na área de estética"
    }
  ];

  const catInfo: Record<string, { title: string; desc: string; img: string }> = {
    all: { title: 'TODOS OS SERVIÇOS', desc: 'Protocolos personalizados para corpo e rosto, com tecnologia e atendimento exclusivo.', img: imagemSu3 },
    corporal: { title: 'CORPORAL', desc: 'Modelagem, definição e contorno com protocolos de alta performance para cada objetivo.', img: imagemSu4 },
    facial:   { title: 'FACIAL', desc: 'Rejuvenescimento, firmeza e luminosidade com tecnologia avançada para cada tipo de pele.', img: imagem7 },
    gluteo:   { title: 'GLÚTEOS', desc: 'Harmonização e contorno glúteo com protocolo exclusivo.', img: imagemG7 },
    bronze:   { title: 'BRONZEAMENTO ARTIFICIAL', desc: 'Bronzeado dourado e uniforme sem sol.', img: imagem9 },
  };

  const openModal = (t: Treatment) => {
    setSelectedTreatment(t);
    setTimeout(() => setModalAnimIn(true), 10);
  };
  const closeModal = () => {
    setModalAnimIn(false);
    setTimeout(() => setSelectedTreatment(null), 350);
  };

  const visibleTreatments = activeCat === 'all'
    ? treatments
    : treatments.filter((t) => t.cat === activeCat);

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

      /* SERVICES */
      .lx-our-services { background: #fff; padding: 4.5rem 2rem; }
      .lx-our-services-header { margin: 0 auto 2.5rem; max-width: 1100px; }
      .lx-our-services h2 {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-size: clamp(2.4rem, 8vw, 6.2rem);
        text-transform: uppercase;
        line-height: 0.92;
      }
      .lx-our-services h2 .lx-h2-tag {
        display: inline-block;
        border: 1px solid #111;
        padding: 0.08em 0.4em;
        margin: 0 0.25rem;
        font-size: 0.52em;
        letter-spacing: 0.16em;
        vertical-align: middle;
      }
      .lx-tabs {
      display: flex;
      gap: 12px; /* Reduzido de 12px para 6px */
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 10px 20px; /* Padding lateral ligeiramente menor para alinhar com o gap menor */
      overflow-x: auto;
      scroll-snap-type: none;
      -webkit-overflow-scrolling: touch;
    }

      .lx-tab {
      position: relative;
      flex: 0 0 calc(30% - 10px);
      min-height: 380px;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      scroll-snap-align: start;
      border: none !important;
    }
      .lx-tab:last-child { border-right: none; }
      .lx-tab-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 1 !important;
      filter: brightness(0.8);
      transition: transform 0.5s ease;
    }
      .lx-tab:hover .lx-tab-bg { transform: scale(1.05); }
      .lx-tab-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
      z-index: 2;
    }
      .lx-tab-name {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 700;
      font-size: 1.1rem;
      color: #fff !important;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
      @media (max-width: 768px) {
      .lx-tab {
        flex: 0 0 75%;
        min-height: 220px;
      }
      .lx-tabs {
        gap: 8px;
        padding: 0 16px 16px;
      }
    }
      .lx-tab:hover .lx-tab-name, .lx-tab.active .lx-tab-name { color: #fff; }
      .lx-tab-count {
        font-family: 'Inter', sans-serif;
        font-size: 0.72rem;
        color: #777;
      }
      .lx-tab:hover .lx-tab-count, .lx-tab.active .lx-tab-count { color: rgba(255,255,255,0.72); }
      .lx-cat-header {
        max-width: 1100px;
        margin: 0 auto 1.8rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
      .lx-cat-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-size: clamp(2rem, 5vw, 4rem);
        text-transform: uppercase;
        line-height: 1;
      }
      .lx-cat-desc {
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        color: #666;
        line-height: 1.7;
      }
      .lx-treatments-layout {
        max-width: 1100px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2.2rem;
      }
      .lx-treatments-img img {
        width: 100%;
        aspect-ratio: 3/4;
        object-fit: cover;
        display: block;
      }
      .lx-treatments-cards {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1px;
        background: #e0e0e0;
        border: 1px solid #e0e0e0;
      }
      .lx-treatment-card {
        background: #fff;
        padding: 1.2rem 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
        cursor: pointer;
        transition: background 0.2s;
      }
      .lx-treatment-card:hover { background: #f8f8f8; }
      .lx-tc-name {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 800;
        font-size: 0.92rem;
      }
      .lx-tc-duration {
        font-family: 'Inter', sans-serif;
        font-size: 0.72rem;
        color: #777;
      }
      .lx-tc-desc {
        font-family: 'Inter', sans-serif;
        font-size: 0.82rem;
        color: #555;
        line-height: 1.55;
      }
      .lx-tc-btns {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
        opacity: 0;
        transition: opacity 0.2s;
      }
      .lx-treatment-card:hover .lx-tc-btns { opacity: 1; }
      .lx-tc-book {
        background: #111;
        color: #fff;
        border: none;
        cursor: pointer;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700;
        font-size: 0.7rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        padding: 0.45rem 0.8rem;
        display: flex;
        align-items: center;
        gap: 0.3rem;
        transition: background 0.2s;
      }
      .lx-tc-book:hover { background: #333; }
      .lx-tc-learn {
        background: none;
        color: #111;
        border: none;
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        font-size: 0.75rem;
        text-decoration: underline;
        text-underline-offset: 3px;
        transition: opacity 0.2s;
      }
      .lx-tc-learn:hover { opacity: 0.5; }
      .lx-modal-backdrop {
        position: fixed;
        inset: 0;
        z-index: 500;
        background: rgba(0,0,0,0.5);
        backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        opacity: 0;
        transition: opacity 0.35s;
      }
      .lx-modal-backdrop.open { opacity: 1; }
      .lx-modal {
        background: #fff;
        width: 100%;
        max-width: 900px;
        max-height: 90vh;
        overflow-y: auto;
        overflow-x: hidden;
        border-radius: 2px;
        transform: translateY(40px) scale(0.97);
        opacity: 0;
        transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.35s;
        position: relative;
      }
      .lx-modal-backdrop.open .lx-modal { transform: translateY(0) scale(1); opacity: 1; }
      .lx-modal-close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        z-index: 10;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        color: #888;
        width: 32px;
        height: 32px;
      }
      .lx-modal-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 0; min-width: 0; }
      .lx-modal-imgs { display: flex; flex-direction: column; gap: 2px; }
      .lx-modal-imgs img { width: 100%; object-fit: cover; flex: 1; display: block; }
      .lx-modal-imgs img:first-child { aspect-ratio: 4/3; }
      .lx-modal-imgs img:last-child  { aspect-ratio: 4/3; }
      .lx-modal-info { padding: 2.5rem; display: flex; flex-direction: column; gap: 1rem; min-width: 0; }
      .lx-modal-stars { font-size: 0.85rem; color: #111; display: flex; align-items: center; gap: 0.4rem; }
      .lx-modal-name {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-size: 2.2rem;
        text-transform: uppercase;
        line-height: 0.95;
        overflow-wrap: anywhere;
        word-break: break-word;
      }
      .lx-modal-meta { display: flex; align-items: center; gap: 1rem; }
      .lx-modal-price { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; font-size: 1.8rem; }
      .lx-modal-dur { font-family: 'Inter', sans-serif; font-size: 0.8rem; color: #888; display: flex; align-items: center; gap: 0.3rem; }
      .lx-modal-desc { font-family: 'Inter', sans-serif; font-size: 0.9rem; line-height: 1.7; color: #555; }
      .lx-modal-label { font-family: 'Barlow Condensed', sans-serif; font-weight: 800; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; margin-top: 0.5rem; }
      .lx-modal-ideal { font-family: 'Inter', sans-serif; font-size: 0.88rem; color: #555; }
      .lx-modal-steps { display: flex; flex-direction: column; gap: 0.6rem; }
      .lx-modal-step { display: flex; gap: 0.6rem; }
      .lx-modal-step-dot { width: 6px; height: 6px; border-radius: 50%; background: #111; flex-shrink: 0; margin-top: 0.4rem; }
      .lx-modal-step-text { font-family: 'Inter', sans-serif; font-size: 0.85rem; color: #333; }
      .lx-modal-step-text strong { font-weight: 700; color: #111; }
      .lx-modal-book {
        margin-top: auto;
        background: #111;
        color: #fff;
        border: none;
        cursor: pointer;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 0.9rem 1.5rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: background 0.2s;
      }
      .lx-modal-book:hover { background: #333; }
      @media (max-width: 900px) {
        .lx-tabs { grid-template-columns: repeat(2, 1fr); }
        .lx-cat-header { grid-template-columns: 1fr; }
        .lx-treatments-layout { grid-template-columns: 1fr; }
      }
      @media (max-width: 700px) {
        .lx-our-services { padding: 3rem 1rem; }
        .lx-tabs { display: flex; overflow-x: auto; }
        .lx-tab { min-width: 170px; border-right: 1px solid #e0e0e0 !important; }
        .lx-treatments-cards { grid-template-columns: 1fr; }
        .lx-modal-inner { grid-template-columns: 1fr; }
        .lx-modal-info { padding: 1.5rem; }
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
      setShowBackToTop(window.scrollY > 400);

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
    handleScroll();

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Depoimentos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .depoimentos-section {
        background: #ececea;
        padding: 4.5rem 2rem;
      }
      .depoimentos-header {
        text-align: center;
        margin-bottom: 3rem;
      }
      .depoimentos-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-size: clamp(2.4rem, 8vw, 4.5rem);
        text-transform: uppercase;
        line-height: 1;
        color: #2f2321;
        margin-bottom: 1rem;
      }
      .depoimentos-subtitle {
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.7;
      }
      .depoimentos-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1.5rem;
        max-width: 1200px;
        margin: 0 auto 3rem;
      }
      @media (max-width: 1023px) {
        .depoimentos-grid {
          display: none;
        }
      }
      .depoimentos-carousel {
        display: none;
        position: relative;
        max-width: 400px;
        margin: 0 auto 3rem;
        overflow: hidden;
      }
      @media (max-width: 1023px) {
        .depoimentos-carousel {
          display: block;
        }
      }
      .depoimentos-carousel-track {
        display: flex;
        transition: transform 0.5s ease;
      }
      .depoimentos-carousel-slide {
        min-width: 100%;
        padding: 0 1rem;
      }
      .depoimento-card {
        background: #fff;
        border-radius: 2px;
        padding: 1.5rem;
        box-shadow: 0 2px 12px rgba(47, 35, 33, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .depoimento-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(47, 35, 33, 0.12);
      }
      .depoimento-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }
      .depoimento-avatar {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        overflow: hidden;
        flex-shrink: 0;
        background: #ececea;
      }
      .depoimento-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .depoimento-info {
        flex: 1;
        min-width: 0;
      }
      .depoimento-name {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 800;
        font-size: 1.1rem;
        color: #2f2321;
        margin-bottom: 0.15rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .depoimento-date {
        font-family: 'Inter', sans-serif;
        font-size: 0.75rem;
        color: #888;
      }
      .depoimento-stars {
        display: flex;
        gap: 0.25rem;
        margin-bottom: 0.75rem;
      }
      .depoimento-stars svg {
        width: 16px;
        height: 16px;
      }
      .star-filled {
        fill: #f59e0b;
        color: #f59e0b;
      }
      .star-empty {
        fill: #d1d5db;
        color: #d1d5db;
      }
      .depoimento-treatment {
        display: inline-block;
        padding: 0.35rem 0.75rem;
        background: rgba(60, 41, 34, 0.08);
        color: #3c2922;
        border-radius: 12px;
        font-family: 'Inter', sans-serif;
        font-size: 0.7rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
      }
      .depoimento-text {
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        color: #555;
        line-height: 1.65;
        flex: 1;
      }
      .depoimentos-carousel-dots {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1.5rem;
      }
      .depoimento-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(47, 35, 33, 0.2);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
      }
      .depoimento-dot.active {
        background: #3c2922;
        width: 24px;
        border-radius: 4px;
      }
      .depoimentos-cta {
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
      }
      .depoimentos-cta-text {
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        color: #666;
        margin-bottom: 1.25rem;
        line-height: 1.7;
      }
      .depoimentos-cta-btn {
        background: #3c2922;
        color: #fff;
        border: none;
        cursor: pointer;
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 1rem 2.5rem;
        border-radius: 2px;
        transition: background 0.2s ease;
        text-decoration: none;
        display: inline-block;
      }
      .depoimentos-cta-btn:hover {
        background: #2f2321;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .funcionario-section {
        background: #ececea;
        padding: 4.5rem 2rem;
      }
      .funcionario-header {
        text-align: center;
        margin-bottom: 3rem;
      }
      .funcionario-title {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 900;
        font-size: clamp(2.4rem, 8vw, 4.5rem);
        text-transform: uppercase;
        line-height: 1;
        color: #2f2321;
        margin-bottom: 1rem;
      }
      .funcionario-subtitle {
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        color: #666;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.7;
      }
      .funcionario-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }
      @media (max-width: 1023px) {
        .funcionario-grid {
          display: none;
        }
      }
      .funcionario-carousel {
        display: none;
        position: relative;
        max-width: 400px;
        margin: 0 auto;
        overflow: hidden;
      }
      @media (max-width: 1023px) {
        .funcionario-carousel {
          display: block;
        }
      }
      .funcionario-carousel-track {
        display: flex;
        transition: transform 0.5s ease;
      }
      .funcionario-carousel-slide {
        min-width: 100%;
        padding: 0 1rem;
      }
      .funcionario-card {
        background: #fff;
        border-radius: 2px;
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(47, 35, 33, 0.08);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .funcionario-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(47, 35, 33, 0.12);
      }
      .funcionario-card-img {
        position: relative;
        aspect-ratio: 3/4;
        overflow: hidden;
        background: #ececea;
      }
      .funcionario-card-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      .funcionario-card:hover .funcionario-card-img img {
        transform: scale(1.05);
      }
      .funcionario-card-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(47, 35, 33, 0.6), transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .funcionario-card:hover .funcionario-card-overlay {
        opacity: 1;
      }
      .funcionario-card-content {
        padding: 1.5rem;
      }
      .funcionario-card-name {
        font-family: 'Barlow Condensed', sans-serif;
        font-weight: 800;
        font-size: 1.3rem;
        color: #2f2321;
        margin-bottom: 0.25rem;
      }
      .funcionario-card-role {
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        color: #8f876f;
        margin-bottom: 0.75rem;
      }
      .funcionario-card-bio {
        font-family: 'Inter', sans-serif;
        font-size: 0.82rem;
        color: #666;
        line-height: 1.6;
        margin-bottom: 1rem;
      }
      .funcionario-card-social {
        display: flex;
        gap: 0.5rem;
      }
      .funcionario-social-link {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #ececea;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s ease, color 0.2s ease;
        color: #2f2321;
      }
      .funcionario-social-link:hover {
        background: #3c2922;
        color: #fff;
      }
      .funcionario-social-link svg {
        width: 16px;
        height: 16px;
      }
      .funcionario-carousel-dots {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        margin-top: 1.5rem;
      }
      .funcionario-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: rgba(47, 35, 33, 0.2);
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
        padding: 0;
      }
      .funcionario-dot.active {
        background: #3c2922;
        width: 24px;
        border-radius: 4px;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="depoimento-stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={index < rating ? 'star-filled' : 'star-empty'}
        />
      ))}
    </div>
  );

  const DepoimentoCard = ({ depoimento }: { depoimento: Depoimento }) => (
    <div className="depoimento-card">
      <div className="depoimento-header">
        <div className="depoimento-avatar">
          <img src={depoimento.image} alt={depoimento.name} />
        </div>
        <div className="depoimento-info">
          <h4 className="depoimento-name">{depoimento.name}</h4>
          <p className="depoimento-date">{depoimento.date}</p>
        </div>
      </div>
      <StarRating rating={depoimento.rating} />
      <span className="depoimento-treatment">{depoimento.treatment}</span>
      <p className="depoimento-text">"{depoimento.text}"</p>
    </div>
  );

  const FuncionarioCard = ({ funcionario }: { funcionario: Funcionario }) => (
    <div className="funcionario-card">
      <div className="funcionario-card-img">
        <img src={funcionario.image} alt={funcionario.name} />
        <div className="funcionario-card-overlay" />
      </div>
      <div className="funcionario-card-content">
        <h3 className="funcionario-card-name">{funcionario.name}</h3>
        <p className="funcionario-card-role">{funcionario.role}</p>
        <p className="funcionario-card-bio">{funcionario.bio}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-[#ececea] min-h-screen text-[#2f2321]">

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[200] bg-black/45 backdrop-blur-[2px] flex items-start justify-center px-5 pt-20"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="relative w-full max-w-[290px] rounded-[20px] border border-white/10 bg-[#2a1f1d]/95 text-white px-6 py-6 shadow-[0_24px_60px_rgba(0,0,0,0.45)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-3 right-4 text-[1.7rem] leading-none text-white/70 hover:text-white">✕</button>
            <div className="mt-8 flex flex-col items-center gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[1.7rem] tracking-[0.13em] uppercase leading-none"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href={whatsappAvaliacao}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-7 mx-auto border border-white/60 px-5 py-2.5 rounded-full uppercase text-[12px] tracking-[0.13em]"
            >
              Agendar avaliação
            </a>
          </div>
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
        <section className="relative h-[100svh] min-h-[600px] flex flex-col overflow-hidden">
          <img src={imagemSu3} alt="Suleima com equipamento"
            className="hero-parallax absolute inset-0 w-full h-full object-cover object-[62%_18%] md:object-[84%_20%] lg:object-[87%_20%]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_120%,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.55)_18%,rgba(0,0,0,0.28)_34%,transparent_50%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1400 760" fill="none">
            <path d="M120 550C380 410 620 620 910 510C1100 440 1280 450 1460 520" stroke="#d3c9b8" strokeWidth="1.2" />
            <path d="M70 620C300 500 520 670 820 640C1060 620 1270 660 1490 740" stroke="#d3c9b8" strokeWidth="1.2" />
          </svg>

          <div className="relative z-10 flex-1 flex flex-col justify-end px-5 md:px-10 pb-10 md:pb-14 text-white">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/55 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Seu brilho começa aqui. <br /> Bem-vinda à Suleima.
            </p>
            <h1 className="leading-[0.96] font-light max-w-[680px]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem,7.5vw,5.8rem)' }}>
              ESTÉTICA AVANÇADA
            </h1>
          </div>

          <div className="absolute bottom-6 right-6 z-10 hidden md:flex flex-col items-center gap-2">
            <div className="scroll-line" />
            <span className="text-[9px] uppercase tracking-[0.2em] text-white/40 [writing-mode:vertical-rl]"
              style={{ fontFamily: 'Inter, sans-serif' }}>Scroll</span>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="w-full grid grid-cols-3 text-center bg-[#2f2321] text-white">

          {[
            { num: '10+', label: 'Anos de experiência' },
            { num: '15.000+', label: 'Clientes atendidas' },
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
                id="about"
                className="text-[10px] uppercase tracking-[0.15em] text-white/60 mt-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {s.label}
              </div>

            </div>

          ))}

        </div>

        {/* ABOUT */}
        <section id="about" className="relative overflow-hidden bg-[#f5f5f3] pt-16 md:pt-24">
          <div className="mx-auto max-w-[1280px] px-4 md:px-20 fade-in">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
              <div className="relative flex justify-center md:justify-start">
                <div className="relative w-full max-w-[500px] rounded-[28px] border border-[#e5e1d8] bg-white p-4 shadow-[0_20px_52px_rgba(0,0,0,0.09)]">
                  <img
                    src={imagemSu2}
                    alt="Profissional da clínica Suleima"
                    className="h-[420px] w-full rounded-[20px] object-cover object-center md:h-[560px]"
                  />
                </div>

                <div className="absolute -bottom-6 left-2 rounded-2xl border border-[#e5e1d8] bg-white px-5 py-3 shadow-[0_16px_30px_rgba(0,0,0,0.1)] md:left-[-10px]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#8f876f]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    10+ anos
                  </p>
                  <p className="text-[12px] text-[#4a3d37]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    de experiência
                  </p>
                </div>
              </div>

              <div className="pt-6 md:pt-0 md:max-w-[620px]">
                <p className="mb-4 text-[11px] uppercase tracking-[0.26em] text-[#b29b55]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Sofisticação & Cuidado
                </p>

                <h2
                  className="mb-6 leading-none text-[#2f2321]"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 300,
                    fontSize: 'clamp(2.9rem,4.9vw,5rem)'
                  }}
                >
                  Nossa <span className="text-[#b29b55] italic">Essência</span>
                </h2>

                <p className="mb-4 text-[14px] leading-relaxed text-[#4a3d37] md:text-[19px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Na Clínica Suleima Estética, acreditamos que a verdadeira beleza nasce do equilíbrio entre saúde,
                  ciência e bem-estar individualizado.
                </p>

                <p className="mb-4 text-[14px] leading-relaxed text-[#5f524c] md:text-[19px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Há mais de uma década, transformamos vidas com protocolos personalizados, tecnologia de ponta e
                  atendimento humano, respeitando a singularidade de cada pele.
                </p>

                <p className="mb-7 text-[14px] leading-relaxed text-[#5f524c] md:text-[19px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Cada plano é construído com acompanhamento próximo e objetivo claro: resultados naturais, progressivos
                  e sustentáveis para a sua rotina.
                </p>

                <div className="mb-8 grid grid-cols-3 gap-3 border-y border-[#e1ddd3] py-5">
                  <div className="text-center">
                    <p className="text-3xl leading-none text-[#2f2321] md:text-5xl" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      4
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[#6f625a] md:text-[11px] md:tracking-[0.13em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Áreas
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-3xl leading-none text-[#2f2321]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      30+
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[#6f625a] md:text-[11px] md:tracking-[0.13em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Protocolos
                    </p>
                  </div>

                  <div className="text-center">
                    <p className="text-3xl leading-none text-[#2f2321]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      1:1
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.1em] text-[#6f625a] md:text-[11px] md:tracking-[0.13em]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Plano 1:1
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-full bg-[#d5ac23] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#2f2321] transition hover:bg-[#c79f1f]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Conheça nossa história
                  </a>
                  <a
                    href={instagramProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-[13px] text-[#2f2321] transition hover:text-[#1e1714]"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <span className="text-[11px]">●</span> Assista o vídeo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 border-y border-[#e4e0d5] bg-[#ece9df]">
            <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 text-center md:grid-cols-3 md:px-20">
              <div>
                <p className="mb-2 text-sm font-semibold text-[#2f2321]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}>
                  Certificação Premium
                </p>
                <p className="text-[14px] text-[#6f625a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Protocolos exclusivos validados para máxima segurança e performance.
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-[#2f2321]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}>
                  Alta Tecnologia
                </p>
                <p className="text-[14px] text-[#6f625a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Equipamentos de última geração para resultados precisos e duradouros.
                </p>
              </div>
              <div>
                <p className="mb-2 text-sm font-semibold text-[#2f2321]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem' }}>
                  Foco no Paciente
                </p>
                <p className="text-[14px] text-[#6f625a]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Avaliação personalizada e plano de cuidado pensado para cada objetivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FUNCIONARIOS */}
        <section className="funcionario-section" id="equipe">
          <div className="funcionario-header">
            <h2 className="funcionario-title">Nossa Equipe</h2>
            <p className="funcionario-subtitle">
              Profissionais altamente qualificados e dedicados a proporcionar os melhores resultados para nossos clientes
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="funcionario-grid">
            {Funcionarios.map((funcionario) => (
              <FuncionarioCard key={funcionario.id} funcionario={funcionario} />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="funcionario-carousel">
            <div className="funcionario-carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {Funcionarios.map((funcionario) => (
                <div key={funcionario.id} className="funcionario-carousel-slide">
                  <FuncionarioCard funcionario={funcionario} />
                </div>
              ))}
            </div>
            <div className="funcionario-carousel-dots">
              {Funcionarios.map((_, index) => (
                <button
                  key={index}
                  className={`funcionario-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir para membro ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="depoimentos-section" id="depoimentos">
          <div className="depoimentos-header">
            <h2 className="depoimentos-title">Depoimentos</h2>
            <p className="depoimentos-subtitle">
              Veja o que nossos clientes têm a dizer sobre a experiência e os resultados alcançados em nossos tratamentos
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="depoimentos-grid">
            {Depoimentos.map((depoimento) => (
              <DepoimentoCard key={depoimento.id} depoimento={depoimento} />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="depoimentos-carousel">
            <div className="depoimentos-carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {Depoimentos.map((depoimento) => (
                <div key={depoimento.id} className="depoimentos-carousel-slide">
                  <DepoimentoCard depoimento={depoimento} />
                </div>
              ))}
            </div>
            <div className="depoimentos-carousel-dots">
              {Depoimentos.map((_, index) => (
                <button
                  key={index}
                  className={`depoimento-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="depoimentos-cta">
            <p className="depoimentos-cta-text">
              Quer fazer parte da nossa lista de clientes satisfeitos?
            </p>
            <a href={whatsappAgendamento} className="depoimentos-cta-btn" target="_blank" rel="noopener noreferrer">
              Agende Seu Horário
            </a>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative overflow-hidden px-4 md:px-16 py-20 bg-gradient-to-b from-[#2f2321] via-[#2a1f1d] to-[#241a18]"
        >
          {/* BACKGROUND DECOR */}
          <div className="absolute inset-0 pointer-events-none">

            {/* glow esquerda */}
            <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-[#5a423d] rounded-full blur-[140px] opacity-40" />

            {/* glow direita */}
            <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-[#4b3733] rounded-full blur-[140px] opacity-40" />

            {/* linhas orgânicas */}
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 1400 900"
              fill="none"
            >
              <path
                d="M-80 400C200 260 400 460 700 420C980 390 1100 420 1500 480"
                stroke="#6b504a"
                strokeWidth="1.2"
              />
              <path
                d="M-100 700C220 560 450 720 750 690C1040 660 1240 720 1500 800"
                stroke="#7a5c56"
                strokeWidth="1.2"
              />
            </svg>

          </div>
          <div className="mb-14">
            <h2 className="text-5xl md:text-8xl font-semibold tracking-wide text-white">
              NOSSOS <br /> SERVIÇOS
            </h2>
          </div>

          {/* TABS */}
          <div className="flex w-full gap-10 overflow-x-auto py-4 px-4 snap-x snap-mandatory justify-between">

            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className={`relative flex-shrink-0 snap-start w-[200px] h-[350px] rounded-3xl overflow-hidden transition-all duration-300 ${activeCat === cat.id
                  ? "ring-2 ring-black scale-105"
                  : "hover:scale-105"
                  }`}
                onClick={() => setActiveCat(cat.id)}
              >

                <img
                  src={cat.image}
                  alt={cat.label}
                  className="absolute inset-0 w-full h-full object-cover brightness-75"
                />

                <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                  <div className="font-semibold text-sm tracking-wide">
                    {cat.label}
                  </div>

                  <div className="text-xs opacity-80">
                    {cat.count}
                  </div>
                </div>

              </div>
            ))}

          </div>

          {activeCat && (
            <>
              {/* HEADER DA CATEGORIA */}
              <div className="mt-12 mb-12 max-w-xl text-white">
                <h3 className="text-2xl font-semibold">
                  {catInfo[activeCat].title}
                </h3>

                <p className="text-sm opacity-70 mt-2">
                  {catInfo[activeCat].desc}
                  <br />
                  <span className="text-xs opacity-60">
                    Mostrando 6 procedimentos por categoria.
                  </span>
                </p>
              </div>

              {/* LAYOUT */}
              <div className="flex flex-col lg:flex-row gap-12">

                {/* IMAGEM */}
                <div className="lg:w-[420px] w-full">
                  <img
                    src={catInfo[activeCat].img}
                    alt={catInfo[activeCat].title}
                    className="w-full h-[420px] object-cover rounded-2xl shadow-md"
                  />
                </div>

                {/* CARDS */}
                <div className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory">

                  {visibleTreatments.slice(0, 6).map((t) => (
                    <div
                      key={t.id}
                      onClick={() => openModal(t)}
                      className="snap-start min-w-[280px] max-w-[280px] bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition cursor-pointer"
                    >
                      <div className="text-lg font-semibold mb-2">
                        {t.name}
                      </div>

                      <div className="flex items-center gap-2 text-xs opacity-70 mb-3">
                        <svg
                          width="12"
                          height="12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {t.duration}
                      </div>

                      <p className="text-sm opacity-80 leading-relaxed">
                        {t.desc}
                      </p>

                      {/* BOTÕES */}
                      <div className="flex gap-3 mt-6">

                        <a
                          href={whatsappAvaliacao}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-xs bg-[#3a2b23] text-white px-4 py-2 rounded-full"
                        >
                          Agendar
                          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(t);
                          }}
                          className="text-xs border border-black px-4 py-2 rounded-full"
                        >
                          Saiba mais
                        </button>

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </>
          )}
        </section>

        {/* MÉTODO GLÚTEO */}
        <section id="gluteo-contour" className="relative overflow-hidden bg-[#111] px-4 md:px-16 py-14 md:py-20 fade-in">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-end mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-white/55 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Destaque exclusivo
                </p>
                <h2
                  className="text-white leading-[0.95]"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.2rem,5vw,4rem)' }}
                >
                  Método Glúteo Contour
                </h2>
              </div>

              <div>
                <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed mb-5" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Protocolo exclusivo de harmonização glútea que combina técnicas avançadas para contorno,
                  firmeza e proporção. O atendimento é personalizado para a estrutura corporal de cada cliente.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={whatsappAvaliacao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-[#111] rounded-full hover:bg-white/85 transition-all duration-300"
                    style={{ textDecoration: 'none' }}
                  >
                    Agendar avaliação
                  </a>
                  <a
                    href={whatsappClinica}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/45 px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] text-white rounded-full hover:bg-white/10 transition-all duration-300"
                    style={{ textDecoration: 'none' }}
                  >
                    Falar com a clínica
                  </a>
                </div>
              </div>
            </div>

            {/* Container de Grid que vira Carousel no Mobile */}
            <div className="flex lg:grid lg:grid-cols-3 gap-6 md:gap-10 overflow-x-auto lg:overflow-visible snap-x snap-mandatory scrollbar-hide pb-4">
              {[imagemG8Depois, imagemG7Cortada, imagemG4Cortada].map((img, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-[85%] lg:w-full snap-center overflow-hidden rounded-xl border border-white/15 bg-[#1a1a1a]"
                >
                  <img 
                    src={img} 
                    alt={`Resultado glúteo ${i + 1}`} 
                    className="contour-img w-full aspect-[3/4] object-cover transition duration-500 hover:scale-105" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="relative overflow-hidden bg-[#ececea] px-4 md:px-16 py-14 md:py-20">
          <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" viewBox="0 0 1200 580" fill="none">
            <path d="M-20 250C170 110 340 180 530 280C700 370 860 290 1090 410" stroke="#b3aa9c" strokeWidth="1.1" />
            <path d="M740 40C650 120 650 210 700 300C770 410 930 430 1170 520" stroke="#b9b1a2" strokeWidth="1.1" />
          </svg>

        </section>

        {/* THELMA ARCURI */} 
        <section className="relative overflow-hidden bg-[#ececea] px-6 md:px-16 py-14 md:py-16 fade-in">

          {/* fundo decorativo */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
            <svg viewBox="0 0 1200 900" className="w-full h-full">
              <path
                d="M-100 380C140 220 300 310 500 480C690 650 910 600 1250 680"
                stroke="#b8a999"
                strokeWidth="1.2"
                fill="none"
              />
            </svg>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-8 md:mb-10">
              <p className="uppercase tracking-[0.25em] text-[11px] text-[#6f625a] mb-3">
                Terapias Complementares
              </p>
              <h2
                className="text-[clamp(2.7rem,5.5vw,4.3rem)] leading-none"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                Thelma Arcuri
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-center">
              <div className="flex justify-center md:justify-start">
                <div className="w-[260px] h-[340px] md:w-[340px] md:h-[450px] overflow-hidden rounded-t-[180px] rounded-b-[120px] shadow-xl">
                  <img
                    src={imagemT1}
                    alt="Thelma Arcuri"
                    className="w-full h-full object-cover object-[50%_30%]"
                  />
                </div>
              </div>

              <div>
                <p className="text-[#4a3d37] text-[13px] uppercase tracking-[0.16em] mb-2">
                  Massoterapeuta e Fisioterapeuta
                </p>

                <p className="text-[#4a3d37] text-[14px] md:text-[15px] leading-relaxed mb-4">
                  A microfisioterapia é uma técnica manual terapêutica que utiliza toques sutis e precisos para
                  identificar e tratar marcas deixadas por traumas físicos, emocionais ou infecciosos no organismo.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#dddacf] p-4 rounded-xl border border-[#c9c2b5]">
                    <h4 className="text-base md:text-lg mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Barra de Access
                    </h4>
                    <p className="text-xs md:text-sm text-[#4a3d37] leading-relaxed">
                      Técnica energética que promove relaxamento profundo e liberação de bloqueios mentais.
                    </p>
                  </div>

                  <div className="bg-[#dddacf] p-4 rounded-xl border border-[#c9c2b5]">
                    <h4 className="text-base md:text-lg mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                      Reiki
                    </h4>
                    <p className="text-xs md:text-sm text-[#4a3d37] leading-relaxed">
                      Terapia energética que equilibra corpo, mente e espírito através da canalização da energia vital.
                    </p>
                  </div>
                </div>

                <p
                  className="italic text-[#4a3d37] text-base md:text-lg"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                >
                  "A verdadeira beleza começa no equilíbrio interior."
                </p>
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
                    <ul
                      className="grid sm:grid-cols-2 gap-3 text-[13px] md:text-[14px] text-[#2f2321] font-light"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {[
                        "Limpeza de pele",
                        "Prime shape (ganho de massa)",
                        "Harmonização glútea",
                        "Peeling",
                        "Microagulhamento",
                        "Jato de plasma",
                        "Hidrolipoclasia",
                        "Carboxiterapia",
                        "Peim",
                        "Intradermoterapia",
                        "Toxina botulínica",
                        "Preenchimento",
                        "Bioestimulador",
                        "Ozônio terapia",
                        "Fios de PDO",
                      ].map((c) => (
                        <li
                          key={c}
                          className="group flex items-center gap-3 px-3 py-2 rounded-xl 
                          bg-[#f3f1ea] border border-[#e1dbcf]
                          transition-all duration-300 ease-out
                          hover:bg-[#ece7dc]
                          hover:scale-[1.04]
                          hover:-translate-y-[2px]
                          hover:shadow-md"
                        >
                          <span className="text-[#8f876f] text-sm transition-transform duration-300 group-hover:scale-125">
                            ✦
                          </span>

                          <span className="transition-colors duration-300 group-hover:text-[#5c5147]">
                            {c}
                          </span>
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

        {/* INSTAGRAM PREVIEW */} {/* AVALIAR RETIRADA */}
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
            <p className="lx-footer-copy">© SULEIMA ESTÉTICA · TODOS OS DIREITOS RESERVADOS</p>
            <p className="lx-footer-copy">SALTO, SÃO PAULO · BRASIL</p>
          </div>
        </footer>

      </main>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-[90] w-12 h-12 rounded-full bg-[#8f876f] text-white shadow-lg hover:bg-[#5a4f3d] transition-all duration-300 flex items-center justify-center hover:scale-105"
          aria-label="Voltar ao topo"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="rotate-180">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      )}

      {selectedTreatment && (
        <div className={`lx-modal-backdrop${modalAnimIn ? ' open' : ''}`} onClick={closeModal}>
          <div className="lx-modal" onClick={(e) => e.stopPropagation()}>
            <button className="lx-modal-close" onClick={closeModal}>✕</button>
            <div className="lx-modal-inner">
              <div className="lx-modal-imgs">
                <img src={selectedTreatment.image1} alt={selectedTreatment.name} />
              </div>
              <div className="lx-modal-info">
                <div className="lx-modal-stars">★★★★★ <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>4.9</span></div>
                <div className="lx-modal-name">{selectedTreatment.name}</div>
                <div className="lx-modal-meta">
                  <div className="lx-modal-price">Consultar</div>
                  <div className="lx-modal-dur">
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
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
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
