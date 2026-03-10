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
import imagemT1 from '../assets/imagensThelma/imagemTh1.jpg';

const instagramProfileUrl = 'https://www.instagram.com/suleimaestetica';

const instagramPosts = [
  {
    url: 'https://www.instagram.com/suleimaestetica/reel/DPaRforjTnO/',
    image: imagemSu3,
    label: 'Reel de estética avançada',
  },
  {
    url: 'https://www.instagram.com/suleimaestetica/p/DP6OMaWDa1A/',
    image: imagem3,
    label: 'Post de rotina na clínica',
  },
  {
    url: 'https://www.instagram.com/suleimaestetica/reel/DU_IOOOkeEA/',
    image: imagem5,
    label: 'Reel de procedimento corporal',
  },
  {
    url: 'https://www.instagram.com/suleimaestetica/p/DLxQT2fxFtz/',
    image: imagem7,
    label: 'Post de cuidado facial',
  },
  {
    url: 'https://www.instagram.com/suleimaestetica/reel/DVZbr2MEopr/',
    image: imagemG4,
    label: 'Reel Método Glúteos CONTOUR',
  },
  {
    url: 'https://www.instagram.com/suleimaestetica/reel/DU53r6rDS8D/',
    image: imagemG5,
    label: 'Reel de harmonização glútea',
  },
];

const navLinks = [
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#gluteo-contour', label: 'Método CONTOUR' },
  { href: '#subscription', label: 'Protocolos' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#contacts', label: 'Contato' },
];

//Links de WhatsApp de cada seção:
const whatsappCursos =
  "https://api.whatsapp.com/send/?phone=5511958671658&text=Olá,%20gostaria%20de%20informações%20sobre%20os%20cursos.";

const whatsappAvaliacao =
  "https://api.whatsapp.com/send/?phone=5511958671658&text=Olá,%20gostaria%20de%20agendar%20uma%20avaliação.";

const whatsappClinica =
  "https://api.whatsapp.com/send/?phone=5511958671658&text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20tratamentos.";

const whatsappAgendamento =
  "https://api.whatsapp.com/send/?phone=5511958671658&text=Olá,%20gostaria%20de%20realizar%20um%20agendamento.";

const googleMapsUrl = "https://maps.app.goo.gl/5ACdHhu2EvLqRs1k7";

export default function LandingPage() {

  const [menuOpen, setMenuOpen] = useState(false);

  const sistemaUrl = import.meta.env.VITE_SISTEMA_URL ?? 'http://localhost:5173/login';

  useEffect(() => {
    const link = document.createElement('link');
    link.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (


    <div className="bg-[#ececea] min-h-screen pt-0 pb-0 text-[#2f2321]">
      <main className="w-full px-0 space-y-0">
        <section className="relative min-h-[460px] md:min-h-[780px] rounded-t-none rounded-b-[24px] md:rounded-b-[38px] overflow-hidden border-0">
          <img
            src={imagemSu3}
            alt="Suleima com equipamento"
            className="absolute inset-0 w-full h-full object-cover object-[62%_18%] md:object-[84%_20%] lg:object-[87%_20%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(24,15,10,0.78)_0%,rgba(43,28,17,0.55)_36%,rgba(60,39,26,0.22)_72%,rgba(60,39,26,0.12)_100%)]" />
          <svg className="absolute inset-0 w-full h-full opacity-35" viewBox="0 0 1400 760" fill="none">
            <path d="M120 550C380 410 620 620 910 510C1100 440 1280 450 1460 520" stroke="#d3c9b8" strokeWidth="1.2" />
            <path d="M70 620C300 500 520 670 820 640C1060 620 1270 660 1490 740" stroke="#d3c9b8" strokeWidth="1.2" />
          </svg>

          <header className="relative z-20 px-4 md:px-9 pt-4 md:pt-8 flex items-center justify-between text-white/90">
            <div className="leading-none text-[10px] md:text-[11px] tracking-[0.23em] mr-12">
              <p className="mt-1">SULEIMA</p>
              <p className="mt-1">ESTETICA</p>
            </div>

            <nav
              className="hidden md:flex items-center gap-7 text-[11px] tracking-[0.12em] uppercase font-light"
              aria-label="Navegação principal"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative pb-0.5
                             after:absolute after:bottom-0 after:left-0
                             after:h-px after:w-0 after:bg-white/70
                             after:transition-all after:duration-300
                             hover:after:w-full hover:text-white
                             transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 text-[10px] ml-auto">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden flex flex-col gap-1"
              >
                <span className="w-6 h-[2px] bg-white"></span>
                <span className="w-6 h-[2px] bg-white"></span>
                <span className="w-6 h-[2px] bg-white"></span>
              </button>

              <div className="hidden lg:flex flex-col items-center justify-center gap-2 text-[11px]">

                <a
                  href={whatsappClinica}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#2f2321] px-4 py-2 rounded-full uppercase tracking-[0.1em]
                  text-center w-[170px]
                  transition-all duration-300
                  hover:bg-[#f2f2f2] active:scale-[0.97]"
                >
                  Agendar
                </a>

                <span className="tracking-wide text-center w-[170px]
                  hover:text-white/70 transition-colors duration-200">
                  +55 (11) 95867-1658
                </span>

              </div>
            </div>

            <div className="flex items-center justify-between">
              {/* logo + nav + botão */}
            </div>

            {menuOpen && (
              <div className="absolute top-full left-0 w-full bg-[#2f2321] text-white shadow-lg md:hidden">
                <div className="flex flex-col items-center gap-6 py-8">

                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="uppercase tracking-[0.15em]"
                    >
                      {link.label}
                    </a>
                  ))}

                  <a
                    href={whatsappAvaliacao}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white px-6 py-3 rounded-full uppercase text-sm"
                  >
                    Agendar avaliação
                  </a>

                </div>
              </div>
            )}
          </header>

          <div className="relative z-10 h-full px-4 md:px-10 pb-8 md:pb-12 flex flex-col justify-end text-white">
            <div className="w-fit max-w-[760px] rounded-[22px] bg-black/26 px-4 py-4 md:px-7 md:py-6 backdrop-blur-[1px]">
              <h1 className="leading-[0.95] font-medium max-w-[600px]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.95rem,8vw,4.8rem)' }}>
                <span className="block">Alta tecnologia</span>
                <span className="block">em estética corporal</span>
                <span className="block">e facial em Salto.</span>
              </h1>
            </div>
            <div className="mt-4 max-w-[380px] md:max-w-[420px] md:ml-auto rounded-[18px] bg-black/22 px-4 py-3 text-[12px] md:text-[16px] backdrop-blur-[1px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p className="leading-relaxed">
                Protocolos personalizados para modelagem corporal, rejuvenescimento e valorização da sua beleza natural.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.13em]">
                <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="border-b border-white/70 pb-1">
                  Agendar avaliação <span aria-hidden>→</span>
                </a>
                <a href="#services" className="border-b border-white/70 pb-1">
                  Conhecer tratamentos <span aria-hidden>→</span>
                </a>
                <a href="#about" className="border-b border-white/70 pb-1">
                  Ver mais sobre <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-[#dddacf] px-4 py-12 md:px-16 md:py-16">
          <div className="absolute left-1/2 top-[6.8%] h-[87.3%] w-[108%] -translate-x-1/2 rounded-full bg-[#d2cec2]" />
          <svg className="absolute inset-0 h-full w-full opacity-100" viewBox="0 0 1200 1200" fill="none">
            <path d="M-80 470C160 300 320 390 520 560C710 730 930 680 1230 760" stroke="#b5ac9d" strokeWidth="1.1" />
            <path d="M-20 930C200 760 390 850 620 980C840 1110 1030 1050 1210 1140" stroke="#bdb4a6" strokeWidth="1.1" />
            <path d="M760 180C860 150 960 220 1010 340C1060 460 1030 600 940 700" stroke="#beb6a7" strokeWidth="1.1" />
          </svg>

          <div className="relative z-10 mx-auto max-w-6xl">
            <h2 className="text-center leading-[1.08] mb-8 md:mb-10" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,4.5vw,4.3rem)' }}>
              Sobre a Suleima e a clínica.
              <br />
              Estética avançada com estratégia
              <br />
              e cuidado personalizado em Salto.
            </h2>

            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-5 text-[14px] md:text-[15px] leading-relaxed text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>
                  Suleima atua com estética corporal modeladora e tratamentos faciais, unindo experiência prática,
                  avaliação criteriosa e protocolos personalizados para cada objetivo.
                </p>
                <p>
                  A clínica foi planejada para oferecer atendimento reservado, tecnologia profissional e conforto em cada etapa,
                  com foco em resultados progressivos, harmoniosos e naturais.
                </p>
                <ul className="grid gap-2 text-[13px] md:text-[14px]">
                  <li>✔ Atendimento exclusivo e personalizado</li>
                  <li>✔ Estrutura moderna com tecnologia avançada</li>
                  <li>✔ Protocolos corporais e faciais estratégicos</li>
                  <li>✔ Cuidado humanizado em cada etapa</li>
                </ul>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a href="#services" className="bg-[#3c2922] px-5 py-2.5 text-[11px] uppercase tracking-[0.1em] text-white
              rounded-full transition-all duration-300
              hover:bg-[#5a3d33] hover:shadow-md active:scale-[0.98]">
                    Ver tratamentos
                  </a>
                  <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="border border-[#3c2922]/50 px-4 py-2 text-[10.5px] uppercase tracking-[0.1em]
                  rounded-full transition-all duration-300
                  text-[#3c2922]
                  hover:bg-[#CDCDCD] hover:shadow-md active:scale-[0.98] ">
                    Agendar avaliação
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="row-span-2 h-[330px] md:h-[470px] rounded-[120px] md:rounded-[180px] overflow-hidden">
                  <img src={imagemSu2} alt="Suleima com equipamento" className="h-full w-full object-cover object-[50%_32%]" />
                </div>
                <div className="h-[160px] md:h-[225px] rounded-[72px] md:rounded-[110px] overflow-hidden">
                  <img src={imagemSu1} alt="Suleima na clínica" className="h-full w-full object-cover object-[72%_30%]" />
                </div>
                <div className="h-[160px] md:h-[225px] rounded-[72px] md:rounded-[110px] overflow-hidden">
                  <img src={imagem3} alt="Clientes na clínica" className="h-full w-full object-cover object-[52%_38%]" />
                </div>
                <div className="h-[135px] md:h-[190px] rounded-[58px] md:rounded-[90px] overflow-hidden">
                  <img src={imagem4} alt="Procedimento facial" className="h-full w-full object-cover object-[48%_34%]" />
                </div>
                <div className="h-[135px] md:h-[190px] rounded-[58px] md:rounded-[90px] overflow-hidden">
                  <img src={imagem5} alt="Procedimento corporal" className="h-full w-full object-cover object-[52%_34%]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative rounded-none overflow-hidden bg-[#dddacf] px-4 md:px-16 py-12 md:py-16">
          <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 1200 580" fill="none">
            <path d="M-20 250C170 110 340 180 530 280C700 370 860 290 1090 410" stroke="#b3aa9c" strokeWidth="1.1" />
            <path d="M740 40C650 120 650 210 700 300C770 410 930 430 1170 520" stroke="#b9b1a2" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 mx-auto max-w-6xl grid gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-5">
              <h3 className="leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="block text-3xl md:text-6xl">Tecnologia de ponta</span>
              </h3>
              <h4 className="leading-[0.95] mt-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="block text-3xl md:text-5xl">Estrutura premium</span>
              </h4>
              <p className="mt-5 max-w-[560px] text-[14px] md:text-[15px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Equipamentos modernos e reconhecidos no mercado estético para garantir segurança, conforto e eficácia em cada sessão.
              </p>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <h4 className="text-3xl md:text-6xl leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Resultados superiores
              </h4>
              <p className="mt-4 max-w-[560px] text-[14px] md:text-[15px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Nosso espaço foi pensado para proporcionar atendimento reservado, acolhimento e uma experiência de alto padrão do início ao fim.
              </p>

              <h4 className="text-3xl md:text-6xl leading-[0.95] mt-9" style={{ fontFamily: 'Playfair Display, serif' }}>
                Diferenciais reais
              </h4>
              <ul className="mt-4 text-[14px] md:text-[15px] space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li>➤ atendimento exclusivo e próximo</li>
                <li>➤ tecnologia profissional com segurança</li>
                <li>➤ protocolos com foco em resultado visível</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="gluteo-contour" className="relative rounded-none overflow-hidden bg-[#ececea] px-4 md:px-16 py-12 md:py-16">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6f625a]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Destaque exclusivo
            </p>
            <h2 className="mt-2 text-4xl md:text-6xl leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Método Glúteos CONTOUR
            </h2>
            <p className="mt-4 max-w-3xl text-[14px] md:text-[16px] leading-relaxed text-[#4a3d37]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Técnica de harmonização glútea com protocolo personalizado para melhorar contorno, firmeza e proporção, respeitando a estrutura corporal de cada cliente.
            </p>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 ">
              {[imagemG4, imagemG5, imagemG3, imagemG2, imagemG].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-[22px] bg-[#d8d1c2]">
                  <img src={img} alt={`Resultado Método Glúteos CONTOUR ${i + 1}`} className="h-[170px] w-full object-cover md:h-[220px]" />
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={sistemaUrl} target="_blank" rel="noopener noreferrer" className="bg-[#3c2922] px-5 py-2.5 text-[11px] uppercase tracking-[0.1em] text-white
              rounded-full transition-all duration-300
              hover:bg-[#5a3d33] hover:shadow-md active:scale-[0.98]">
                Conhecer o Método CONTOUR
              </a>
              <a href={whatsappClinica} target="_blank" rel="noopener noreferrer" className="border border-[#3c2922]/45 px-5 py-2.5 text-[10.5px] uppercase tracking-[0.1em] 
              text-[#3c2922]
              rounded-full transition-all duration-300
              hover:bg-[#CDCDCD] hover:shadow-md active:scale-[0.98]">
                Falar com a clínica
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="rounded-none overflow-hidden bg-[#dddacf]">
          <h2 className="text-center pt-8 md:pt-10 pb-6 md:pb-8 text-6xl md:text-8xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
            Serviços
          </h2>

          {[
            { title: 'Corporal', image: imagemSu4, position: 'object-[52%_40%] md:object-[50%_38%]' },
            { title: 'Facial', image: imagem7, position: 'object-[48%_36%] md:object-[52%_32%]' },
            { title: 'Experiência', image: imagem3, position: 'object-[50%_32%] md:object-[50%_30%]' },
          ].map((item) => (
            <article key={item.title} className="relative h-[200px] md:h-[300px] border-t border-white/65 first:border-t-0">
              <img src={item.image} alt={item.title} className={`absolute inset-0 w-full h-full object-cover ${item.position}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10" />
              <div className="relative z-10 h-full flex flex-col justify-center pl-8 md:pl-16">
                <h3 className="text-white text-6xl md:text-7xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={whatsappAvaliacao} target="_blank" rel="noopener noreferrer" className="w-max bg-white text-[#2f2321] px-4 py-2 text-[10px] uppercase tracking-[0.12em] rounded-full transition-all duration-300
              hover:bg-[#CDCDCD] hover:shadow-md active:scale-[0.98]">Agendar avaliação</a>
                  <a href="#about" className="w-max border border-white text-white px-4 py-2 text-[10px] uppercase tracking-[0.12em] rounded-full transition-all duration-300
              hover:bg-[#9E9E9E] hover:shadow-md active:scale-[0.98]">Ver mais sobre</a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="subscription" className="relative rounded-none overflow-hidden bg-[#dddacf] px-4 md:px-16 py-12 md:py-16">
          <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 1200 680" fill="none">
            <path d="M-60 320C180 190 360 260 570 370C760 470 940 400 1200 500" stroke="#b3aa9c" strokeWidth="1.1" />
            <path d="M820 80C730 160 730 250 780 340C850 450 1010 470 1250 560" stroke="#b9b1a2" strokeWidth="1.1" />
          </svg>

          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6f625a]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Terapias Complementares
            </p>
            <h2 className="mt-2 text-4xl md:text-6xl leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Thelma Arcuri
            </h2>
            <p className="mt-3 text-lg md:text-xl text-[#4a3d37]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Massoterapeuta e Fisioterapeuta
            </p>

            <div className="mt-8 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
              <div className="md:col-span-5">
                <div className="overflow-hidden rounded-[120px] md:rounded-[180px]">
                  <img
                    src="https://alur.com.br/wp-content/uploads/2024/01/Estetica-Avancada-1.jpg"
                    alt="Thelma Arcuri - Massoterapeuta e Fisioterapeuta"
                    className="h-[400px] md:h-[520px] w-full object-cover object-[50%_30%]"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6">
                <div className="bg-gradient-to-br from-[#d8d1c2] to-[#cfc8b8] p-6 md:p-8 rounded-[22px] border-2 border-[#b5ac9d]">
                  <h3 className="text-2xl md:text-3xl leading-[0.95] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Microfisioterapia
                  </h3>
                  <div className="space-y-3 text-[14px] md:text-[15px] leading-relaxed text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>
                      A microfisioterapia é uma técnica manual terapêutica que utiliza toques sutis e precisos para identificar e tratar marcas deixadas por traumas físicos, emocionais ou infecciosos no organismo.
                    </p>
                    <p>
                      Baseada na embriologia e na anatomia palpatória, ela estimula o próprio corpo a reconhecer e eliminar essas memórias celulares, favorecendo o equilíbrio e a autorregulação.
                    </p>
                    <p>
                      É um método complementar, indicado para dores crônicas, alterações emocionais, distúrbios funcionais e para promover bem-estar integral.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-white/60 p-5 rounded-[18px] border border-[#b5ac9d]/50">
                    <h4 className="text-lg md:text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Barra de Access</h4>
                    <p className="text-[13px] md:text-[14px] text-[#4a3d37]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Técnica energética que promove relaxamento profundo e liberação de bloqueios mentais.
                    </p>
                  </div>

                  <div className="bg-white/60 p-5 rounded-[18px] border border-[#b5ac9d]/50">
                    <h4 className="text-lg md:text-xl mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Reiki</h4>
                    <p className="text-[13px] md:text-[14px] text-[#4a3d37]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      Terapia energética que equilibra corpo, mente e espírito através da canalização de energia vital.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#8f876f] to-[#a39a83] p-6 rounded-[18px] text-white">
                  <p className="text-[14px] md:text-[15px] italic leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    "A verdadeira beleza começa no equilíbrio interior. Cuidamos de você de dentro para fora"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="cursos" className="relative rounded-none overflow-hidden bg-[#ececea] px-4 md:px-16 py-12 md:py-16">
          <div className="absolute left-1/2 top-[6%] h-[88%] w-[104%] -translate-x-1/2 rounded-full bg-[#e2dfda]" />
          <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 1200 900" fill="none">
            <path d="M-100 380C140 220 300 310 500 480C690 650 910 600 1250 680" stroke="#c5bfb1" strokeWidth="1.1" />
            <path d="M-40 840C180 680 370 770 600 900C820 1030 1010 970 1190 1060" stroke="#cbc5b8" strokeWidth="1.1" />
          </svg>

          <div className="relative z-10 mx-auto max-w-6xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#6f625a]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Capacitação Profissional
            </p>
            <h2 className="mt-2 text-4xl md:text-6xl leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Cursos para Profissionais da Saúde
            </h2>
            <p className="mt-4 max-w-3xl text-[14px] md:text-[16px] leading-relaxed text-[#4a3d37]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Quer se aperfeiçoar, não ter medo de atender, aprender novas técnicas, se aprimorar para fazer a diferença em sua clínica? Nos procure, somos uma clínica escola!
            </p>

            <div className="mt-8 bg-gradient-to-r from-[#3c2922] to-[#4f3b30] text-white p-6 md:p-8 rounded-[22px]">
              <h3 className="text-2xl md:text-4xl leading-[0.95] mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Cursos VIP
              </h3>
              <p className="text-[14px] md:text-[16px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                Atendimento exclusivo com apenas <strong>3 alunos por curso</strong> para garantir aprendizado personalizado e prática intensiva.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <h3 className="text-2xl md:text-3xl mb-5 leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Cursos Disponíveis
                </h3>
                <div className="bg-white/70 rounded-[22px] p-6 md:p-7 border border-[#b5ac9d]/40">
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <li>💉 Limpeza de pele</li>
                    <li>💉 Prime shape (ganho de massa)</li>
                    <li>💉 Harmonização glútea</li>
                    <li>💉 Peeling</li>
                    <li>💉 Microagulhamento</li>
                    <li>💉 Jato de plasma</li>
                    <li>💉 Hidrolipoclasia</li>
                    <li>💉 Carboxiterapia</li>
                    <li>💉 Peim</li>
                    <li>💉 Intradermoterapia</li>
                    <li>💉 Toxina botulínica</li>
                    <li>💉 Preenchimento</li>
                    <li>💉 Bioestimulador</li>
                    <li>💉 Ozônio terapia</li>
                    <li>💉 Fios de PDO</li>
                  </ul>
                </div>

                <div className="mt-6 bg-gradient-to-r from-[#d8d1c2] to-[#cfc8b8] p-5 rounded-[18px] border border-[#b5ac9d]/60">
                  <h4 className="text-lg md:text-xl mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Formas de Pagamento</h4>
                  <div className="space-y-2 text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <p>✓ Até <strong>6x sem juros</strong></p>
                    <p>✓ Até <strong>10x com juros</strong></p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5">
                <h3 className="text-2xl md:text-3xl mb-5 leading-[0.95]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Itens Inclusos
                </h3>
                <div className="space-y-3">
                  <div className="bg-white/70 p-4 rounded-[16px] border border-[#b5ac9d]/40">
                    <p className="text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>💁🏻 Modelos</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-[16px] border border-[#b5ac9d]/40">
                    <p className="text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>💉 Descartáveis</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-[16px] border border-[#b5ac9d]/40">
                    <p className="text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>☕ Coffee break</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-[16px] border border-[#b5ac9d]/40">
                    <p className="text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>🗒 Apostila</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-[16px] border border-[#b5ac9d]/40">
                    <p className="text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>📝 Caderno e caneta</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-[16px] border border-[#b5ac9d]/40">
                    <p className="text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>📜 Certificado</p>
                  </div>
                  <div className="bg-white/70 p-4 rounded-[16px] border border-[#b5ac9d]/40">
                    <p className="text-[13px] md:text-[14px] text-[#2f2321]" style={{ fontFamily: 'Inter, sans-serif' }}>📞 Suporte pós-curso ilimitado</p>
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-[25px]">
                  <img
                    src="https://img.cdndsgni.com/preview/11795962.jpg"
                    alt="Ambiente de treinamento profissional"
                    className="h-[240px] w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={whatsappCursos}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#3c2922] px-5 py-2.5 text-[10px] uppercase tracking-[0.1em] text-white 
    rounded-full transition-all duration-300
    hover:bg-[#5a3d33] hover:shadow-md active:scale-[0.98]
    text-center"
              >
                Falar sobre cursos
              </a>

              <a
                href={whatsappAgendamento + ' Seria de um curso profissionalizante na Suleima.'}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#3c2922]/45 px-5 py-2.5 text-[10px] uppercase tracking-[0.1em] 
    text-[#3c2922] rounded-full transition-all duration-300
    hover:bg-[#CDCDCD] hover:shadow-md active:scale-[0.98]
    text-center"
              >
                Agendar Curso
              </a>
            </div>
          </div>
        </section>

        <footer
          id="contacts"
          className="relative rounded-t-[32px] md:rounded-t-[40px] overflow-hidden bg-[#8f876f] text-white px-6 md:px-16 py-14"
        >

          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 360" fill="none">
            <path d="M-40 200C170 130 340 190 540 240C760 290 920 240 1210 300" stroke="#d8d1c2" strokeWidth="1.1" />
            <path d="M420 40C560 50 620 100 640 160C650 230 600 280 510 320" stroke="#d8d1c2" strokeWidth="1.1" />
          </svg>

          <div className="relative z-10 grid md:grid-cols-3 gap-14 md:gap-10 lg:gap-14 items-start text-center md:text-left">

            {/* COLUNA 1 */}
            <div className="space-y-6 flex flex-col items-center md:items-start">
              <h2 className="text-3xl md:text-4xl tracking-[0.25em]">
                SULEIMA
              </h2>

              <p className="text-sm text-white/85 max-w-[280px]">
                Agende sua avaliação personalizada e descubra o protocolo ideal para sua transformação.
              </p>

              <a
                href={whatsappAgendamento}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto bg-white text-[#3f3828] px-5 py-2 text-[11px] uppercase tracking-[0.12em] rounded-full transition-all duration-300 hover:bg-[#f2f2f2]"
              >
                Agendar agora
              </a>
            </div>

            {/* COLUNA 2 */}
            <div className="space-y-5 flex flex-col items-center md:items-start text-center md:text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/70">
              Endereço
              </p>

              <h3 className="text-3xl md:text-4xl leading-[1.1]">
                Rua América 1321
              </h3>

              <p className="text-lg text-white/90">
                Salto — SP
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto border border-white/60 px-5 py-2 text-[11px]
                uppercase tracking-[0.12em] rounded-full
                transition-all duration-300
                hover:bg-white hover:text-[#3f3828]"
              >
                Ver no Google Maps
              </a>
            </div>

            {/* COLUNA 3 */}
            <div className="space-y-4 w-full md:max-w-[220px] md:ml-auto flex flex-col items-center md:items-end">

              <p className="text-[11px] uppercase tracking-[0.2em] text-white/70 text-center w-full">
              Contato
              </p>
              
              <div className="grid grid-cols-[18px_auto] md:grid-cols-[24px_auto] gap-x-2 md:gap-x-3 gap-y-4">

                {/* TELEFONE */}
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M22 16.92V21a2 2 0 01-2.18 2A19.8 19.8 0 013 5.18 2 2 0 015 3h4.09a2 2 0 012 1.72c.12.89.32 1.76.59 2.6a2 2 0 01-.45 2.11L9.91 10.91a16 16 0 006.18 6.18l1.48-1.32a2 2 0 012.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0122 16.92z" />
                </svg>

                <a
                  href="tel:+5511958671658"
                  className="whitespace-nowrap text-center md:text-left"
                >
                  +55 (11) 95867-1658
                </a>

                {/* EMAIL */}
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 7 9-7" />
                </svg>

                <a
                  href="mailto:suleimaestetica@icloud.com"
                  className="text-center md:text-left"
                >
                  suleimaestetica@icloud.com
                </a>

                {/* INSTAGRAM */}
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" />
                </svg>

                <a
                  href={instagramProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center md:text-left"
                >
                  @suleimaestetica
                </a>

              </div>

            </div>

          </div>

        </footer>
      </main>
    </div>
  );
}
