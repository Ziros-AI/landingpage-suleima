import { useEffect } from 'react';

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

export default function LandingPage() {
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
            <div className="leading-none text-[10px] md:text-[11px] tracking-[0.23em]">
              <p className="mt-1">SULEIMA</p>
              <p className="mt-1">ESTETICA</p>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.12em] uppercase">
              <a href="#about">Sobre</a>
              <a href="#services">Serviços</a>
              <a href="#gluteo-contour">Método CONTOUR</a>
              <a href="#subscription">Protocolos</a>
              <a href="#gallery">Galeria</a>
              <a href="#contacts">Contato</a>
            </nav>

            <div className="flex items-center gap-4 text-[10px]">
              <span className="hidden sm:block">+55 (11) 95867-1658</span>
              <a href={sistemaUrl} className="border border-white/60 px-3 py-2 uppercase tracking-[0.1em]">
                Agendar
              </a>
            </div>
          </header>

          <div className="relative z-10 h-full px-4 md:px-10 pb-8 md:pb-12 flex flex-col justify-end text-white">
            <div className="w-fit max-w-[760px] rounded-[22px] bg-black/26 px-4 py-4 md:px-7 md:py-6 backdrop-blur-[1px]">
              <h1 className="leading-[0.95] font-medium max-w-[600px]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(1.95rem,8vw,4.8rem)' }}>
                <span className="block">Alta tecnologia</span> 
                <span className="block md:pl-[6%]">em estética corporal</span>
                <span className="block">e facial em Salto.</span>
              </h1>
            </div>
            <div className="mt-4 max-w-[380px] md:max-w-[420px] md:ml-auto rounded-[18px] bg-black/22 px-4 py-3 text-[12px] md:text-[16px] backdrop-blur-[1px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p className="leading-relaxed">
                Protocolos personalizados para modelagem corporal, rejuvenescimento e valorização da sua beleza natural.
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.13em]">
                <a href={sistemaUrl} className="border-b border-white/70 pb-1">
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
          <div className="absolute left-1/2 top-[8%] h-[84%] w-[108%] -translate-x-1/2 rounded-full bg-[#d2cec2]" />
          <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 1200 1200" fill="none">
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
                  <a href="#services" className="bg-[#3c2922] px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-white">
                    Ver tratamentos
                  </a>
                  <a href={sistemaUrl} className="border border-[#3c2922]/50 px-4 py-2 text-[10px] uppercase tracking-[0.1em] text-[#3c2922]">
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

            <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
              {[imagemG4, imagemG5, imagemG3, imagemG2, imagemG].map((img, i) => (
                <div key={i} className="overflow-hidden rounded-[22px] bg-[#d8d1c2]">
                  <img src={img} alt={`Resultado Método Glúteos CONTOUR ${i + 1}`} className="h-[170px] w-full object-cover md:h-[220px]" />
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a href={sistemaUrl} className="bg-[#3c2922] px-5 py-2.5 text-[10px] uppercase tracking-[0.1em] text-white">
                Agendar avaliação do CONTOUR
              </a>
              <a href="#contacts" className="border border-[#3c2922]/45 px-5 py-2.5 text-[10px] uppercase tracking-[0.1em] text-[#3c2922]">
                Falar com a clínica
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="rounded-none overflow-hidden bg-[#dddacf]">
          <h2 className="text-center pt-8 md:pt-10 pb-6 md:pb-8 text-6xl md:text-8xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
            serviços
          </h2>

          {[
            { title: 'corporal', image: imagemSu4, position: 'object-[52%_40%] md:object-[50%_38%]' },
            { title: 'facial', image: imagem7, position: 'object-[48%_36%] md:object-[52%_32%]' },
            { title: 'experiência', image: imagem3, position: 'object-[50%_32%] md:object-[50%_30%]' },
          ].map((item) => (
            <article key={item.title} className="relative h-[200px] md:h-[300px] border-t border-white/65 first:border-t-0">
              <img src={item.image} alt={item.title} className={`absolute inset-0 w-full h-full object-cover ${item.position}`} />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10" />
              <div className="relative z-10 h-full flex flex-col justify-center pl-8 md:pl-16">
                <h3 className="text-white text-6xl md:text-7xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <a href={sistemaUrl} className="w-max bg-white text-[#2f2321] px-4 py-2 text-[10px] uppercase tracking-[0.12em]">Agendar avaliação</a>
                  <a href="#about" className="w-max border border-white text-white px-4 py-2 text-[10px] uppercase tracking-[0.12em]">Ver mais sobre</a>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="subscription" className="relative rounded-none overflow-hidden bg-[#dddacf] px-4 md:px-16 py-12 md:py-16">
          <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 1200 700" fill="none">
            <path d="M-10 390C200 340 390 420 610 410C860 400 980 280 1200 340" stroke="#b7ae9f" strokeWidth="1.1" />
            <path d="M40 620C260 520 430 570 640 620C860 670 1030 620 1230 690" stroke="#bdb4a5" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10">
            <h2 className="text-center leading-none mb-10 md:mb-12" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.8rem,5.8vw,5.4rem)' }}>
              protocolos
              <br />
              exclusivos
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-9 items-end">
              <article className="bg-[#d3cdc0] rounded-t-[170px] md:rounded-t-[250px] rounded-b-[38px] overflow-hidden px-6 md:px-9 pt-16 md:pt-20 pb-6 md:pb-9 min-h-[620px] md:min-h-[860px] flex flex-col">
                <h3 className="text-4xl md:text-6xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>modelagem</h3>
                <p className="text-[13px] md:text-[17px] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>protocolos corporais estratégicos</p>
                <div className="mt-5 text-[15px] md:text-[30px] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p>Protocolo Modelagem Intensiva</p>
                  <p className="text-[11px] md:text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Foco em definição e contorno corporal</p>
                  <p className="pt-3">Protocolo Detox Corporal</p>
                  <p className="text-[11px] md:text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Redução de retenção e melhora da circulação</p>
                </div>
                <a href={sistemaUrl} className="mt-5 bg-[#3c2922] text-white px-4 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.08em] w-max">Solicitar avaliação</a>
                <div className="mt-auto pt-6 h-[330px] md:h-[560px] rounded-[130px] md:rounded-[230px] overflow-hidden">
                  <img src={imagemSu4} alt="Protocolo corporal com tecnologia" className="w-full h-full object-cover object-center" />
                </div>
              </article>

              <article className="bg-[#978f79] text-white rounded-t-[170px] md:rounded-t-[250px] rounded-b-[38px] overflow-hidden px-6 md:px-9 pt-[4.5rem] md:pt-24 pb-6 md:pb-9 min-h-[620px] md:min-h-[780px] flex flex-col md:mt-16">
                <h3 className="text-4xl md:text-5xl leading-[0.98]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  protocolos
                  <br />
                  faciais
                  <br />
                  exclusivos
                </h3>
                <div className="mt-5 text-[15px] md:text-[30px] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p>Protocolo Rejuvenescimento Facial</p>
                  <p className="text-[11px] md:text-sm mt-1 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Vitalidade, firmeza e luminosidade da pele</p>
                  <p className="pt-3">Protocolo Redução de Medidas</p>
                  <p className="text-[11px] md:text-sm mt-1 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Combinação personalizada para resultado real</p>
                </div>
                <a href={sistemaUrl} className="mt-5 bg-white text-[#3c2922] px-4 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.08em] w-max">Solicitar avaliação</a>
                <div className="mt-auto pt-6 h-[300px] md:h-[490px] rounded-[130px] md:rounded-[220px] overflow-hidden">
                  <img src={imagem7} alt="Protocolo facial na clínica" className="w-full h-full object-cover object-center" />
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="gallery" className="relative rounded-none overflow-hidden bg-[#dddacf] px-4 md:px-16 py-10 md:py-12">
          <svg className="absolute left-0 top-0 w-full h-full opacity-35" viewBox="0 0 1200 300" fill="none">
            <path d="M50 70C190 30 260 80 360 80C510 80 590 10 780 50" stroke="#b6ad9f" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-5 md:mb-8">
              <div>
                <h2 className="text-6xl md:text-8xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>instagram</h2>
                <p className="mt-2 text-[12px] md:text-[14px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  @suleimaestetica
                </p>
              </div>
              <a
                href={instagramProfileUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#3c2922] text-white px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.1em]"
              >
                Ver perfil
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {instagramPosts.map((post, i) => (
                <div key={post.url} className="rounded-[18px] bg-[#ececea] border border-[#c8c0af] overflow-hidden">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-[#d8d0bf]">
                    <div className="h-7 w-7 rounded-full bg-[#3c2922] text-white text-[9px] grid place-items-center">SE</div>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-[#3c2922] underline underline-offset-4"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Ver post {i + 1} no Instagram
                    </a>
                  </div>
                  <a href={post.url} target="_blank" rel="noreferrer" className="block aspect-[4/5] overflow-hidden">
                    <img src={post.image} alt={post.label} className="h-full w-full object-cover" />
                  </a>
                  <div className="px-3 py-3">
                    <p className="text-[12px] text-[#4a3d37]" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {post.label}
                    </p>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-[10px] uppercase tracking-[0.1em] text-[#3c2922] border-b border-[#3c2922]/40 pb-1"
                    >
                      Abrir no Instagram →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer id="contacts" className="relative rounded-t-[28px] md:rounded-t-[40px] rounded-b-none overflow-hidden bg-[#8f876f] text-white px-4 md:px-16 py-10 md:py-14">
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 360" fill="none">
            <path d="M-40 200C170 130 340 190 540 240C760 290 920 240 1210 300" stroke="#d8d1c2" strokeWidth="1.1" />
            <path d="M420 40C560 50 620 100 640 160C650 230 600 280 510 320" stroke="#d8d1c2" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-start">
            <div>
              <p className="text-2xl md:text-4xl tracking-[0.22em] leading-none"><br />SULEIMA</p>
              <p className="mt-6 text-[11px] md:text-sm text-white/85" style={{ fontFamily: 'Inter, sans-serif' }}>
                Agende sua avaliação personalizada e descubra o protocolo ideal para sua transformação.
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl leading-[0.92]" style={{ fontFamily: 'Playfair Display, serif' }}>
                rua América
                <br />
                1321 - Salto
              </p>
              <a href={sistemaUrl} className="mt-5 inline-block bg-white text-[#3f3828] px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.08em]">Agendar agora</a>
            </div>
            <div className="md:text-right">
              <a href="tel:+5511958671658" className="text-4xl md:text-7xl leading-none block" style={{ fontFamily: 'Playfair Display, serif' }}>
                +55 (11) 95867-1658
              </a>
              <a
                href="mailto:suleimaestetica@icloud.com"
                className="mt-4 block text-[12px] md:text-sm text-white/90 underline underline-offset-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                suleimaestetica@icloud.com
              </a>
              <a
                href={sistemaUrl}
                className="inline-block mt-5 border border-white/60 px-3.5 py-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.08em] hover:bg-white hover:text-[#3f3828] transition-colors"
              >
                Agendar
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
