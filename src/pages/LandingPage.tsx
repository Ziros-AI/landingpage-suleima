import { useEffect } from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80',
  'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80',
  'https://images.unsplash.com/photo-1549236177-4f93b503e645?w=600&q=80',
  'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&q=80',
  'https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=600&q=80',
  'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80',
  'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&q=80',
  'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&q=80',
  'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80',
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
        <section className="relative min-h-[440px] md:min-h-[760px] rounded-t-none rounded-b-[24px] md:rounded-b-[38px] overflow-hidden border border-[#b5ab9e]/60 border-t-0">
          <img
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=2200&q=80"
            alt="Hero"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,28,17,0.58),rgba(96,63,32,0.3),rgba(54,34,18,0.5))]" />
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
              <a href="#subscription">Pacotes</a>
              <a href="#gallery">Galeria</a>
              <a href="#contacts">Contato</a>
            </nav>

            <div className="flex items-center gap-4 text-[10px]">
              <span className="hidden sm:block">+55 (11) 99999-9999</span>
              <a href={sistemaUrl} className="border border-white/60 px-3 py-2 uppercase tracking-[0.1em]">
                Agendar
              </a>
            </div>
          </header>

          <div className="relative z-10 h-full px-4 md:px-10 pb-8 md:pb-12 flex flex-col justify-end text-white">
            <h1 className="leading-[0.88] font-medium max-w-[960px]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(3.2rem,7.6vw,6.8rem)' }}>
              <span className="block">cuide do seu</span>
              <span className="block md:pl-[36%]">
                corpo <span className="text-[clamp(1.2rem,2.5vw,2.2rem)] font-light">e</span> alma
              </span>
              <span className="block">em equilíbrio</span>
            </h1>
            <div className="ml-auto max-w-[350px] mt-4 text-[12px] md:text-[16px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              <p className="leading-relaxed">
                Um espaço acolhedor para beleza corporal e bem-estar mental, onde o processo é tão prazeroso quanto o resultado.
              </p>
              <a href="#contacts" className="inline-flex items-center gap-2 mt-4 text-[10px] uppercase tracking-[0.13em] border-b border-white/70 pb-1">
                Agendar agora <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="relative rounded-none overflow-hidden bg-[#dddacf] px-4 md:px-16 py-12 md:py-16">
          <div className="absolute left-1/2 -translate-x-1/2 top-[10%] w-[108%] h-[86%] bg-[#d2cec2] rounded-full" />
          <svg className="absolute inset-0 w-full h-full opacity-55" viewBox="0 0 1200 1200" fill="none">
            <path d="M-80 470C160 300 320 390 520 560C710 730 930 680 1230 760" stroke="#b5ac9d" strokeWidth="1.1" />
            <path d="M-20 930C200 760 390 850 620 980C840 1110 1030 1050 1210 1140" stroke="#bdb4a6" strokeWidth="1.1" />
            <path d="M760 180C860 150 960 220 1010 340C1060 460 1030 600 940 700" stroke="#beb6a7" strokeWidth="1.1" />
          </svg>

          <div className="relative z-10">
            <h2 className="text-center leading-[1.08] mb-10 md:mb-12" style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2rem,4.5vw,4.3rem)' }}>
              beleza não é uma característica.
              <br />
              é um estado — um corpo saudável, calmo e
              <br />
              bem cuidado.
            </h2>

            <div className="relative min-h-[720px] md:min-h-[980px]">
              <p className="absolute left-0 md:left-4 top-36 md:top-48 max-w-[250px] text-[11px] md:text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                A cidade grande impõe um ritmo acelerado e deixa pouco tempo para você. Desacelerar por alguns instantes ajuda a recuperar seu equilíbrio.
              </p>

              <div className="absolute left-1/2 -translate-x-1/2 top-52 md:top-40 w-[220px] h-[330px] md:w-[390px] md:h-[610px] rounded-[100px] md:rounded-[210px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1000&q=80" alt="Yoga main" className="w-full h-full object-cover" />
              </div>

              <div className="absolute right-0 md:right-2 top-20 md:top-18 w-[130px] h-[240px] md:w-[235px] md:h-[390px] rounded-[76px] md:rounded-[130px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=80" alt="Face" className="w-full h-full object-cover" />
              </div>

              <div className="absolute left-5 md:left-12 top-[470px] md:top-[560px] w-[110px] h-[190px] md:w-[175px] md:h-[285px] rounded-[58px] md:rounded-[95px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1525845859779-54d477ff291f?w=900&q=80" alt="Model left" className="w-full h-full object-cover" />
              </div>

              <div className="absolute right-8 md:right-28 top-[620px] md:top-[690px] w-[88px] h-[136px] md:w-[142px] md:h-[205px] rounded-[44px] md:rounded-[72px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=700&q=80" alt="Massage small" className="w-full h-full object-cover" />
              </div>

              <div className="absolute left-[34%] md:left-[30%] top-[780px] md:top-[868px] w-[72px] h-[110px] md:w-[115px] md:h-[170px] rounded-[38px] md:rounded-[80px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=700&q=80" alt="Body detail" className="w-full h-full object-cover" />
              </div>

              <div className="absolute left-1/2 -translate-x-1/2 top-[865px] md:top-[980px] w-[56px] h-[86px] md:w-[90px] md:h-[132px] rounded-[30px] md:rounded-[50px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80" alt="Meditation tiny" className="w-full h-full object-cover" />
              </div>

              <p className="absolute right-0 md:right-2 top-[515px] md:top-[605px] max-w-[240px] md:max-w-[360px] text-[11px] md:text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Chegou o momento de criar um espaço que respeita seu ritmo e seu tempo, oferecendo relaxamento profundo e resultado estético visível.
              </p>

              <p className="absolute left-[35%] md:left-[40%] top-[690px] md:top-[800px] max-w-[220px] md:max-w-[350px] text-[11px] md:text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Você será cuidada desde o primeiro toque. Aromas, sons e sensações vão te conduzir para um estado de calma e relaxamento.
              </p>
            </div>
          </div>
        </section>

        <section className="relative rounded-none overflow-hidden bg-[#dddacf] px-4 md:px-16 py-12 md:py-16">
          <svg className="absolute inset-0 w-full h-full opacity-45" viewBox="0 0 1200 580" fill="none">
            <path d="M-20 250C170 110 340 180 530 280C700 370 860 290 1090 410" stroke="#b3aa9c" strokeWidth="1.1" />
            <path d="M740 40C650 120 650 210 700 300C770 410 930 430 1170 520" stroke="#b9b1a2" strokeWidth="1.1" />
          </svg>
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-12 gap-y-10 md:gap-y-0 md:gap-x-6">
            <div className="col-span-2 md:col-span-4">
              <h3 className="leading-none mb-7" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="block text-5xl md:text-7xl">nossa</span>
                <span className="block text-5xl md:text-7xl pl-10 md:pl-14 -mt-1">base</span>
              </h3>
              <h4 className="leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
                <span className="block text-4xl md:text-5xl">lugar</span>
                <span className="block text-4xl md:text-5xl pl-9 md:pl-14">seguro</span>
              </h4>
              <p className="max-w-[270px] mt-4 text-[12px] md:text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Um refúgio no centro da cidade, onde o estado de bem-estar das nossas clientes é o principal valor.
              </p>
            </div>

            <div className="col-span-2 md:col-span-5 md:col-start-7">
              <h4 className="text-5xl md:text-6xl leading-[0.9]" style={{ fontFamily: 'Playfair Display, serif' }}>
                corpo & alma
                <br />
                conceito
              </h4>
              <p className="mt-4 max-w-[390px] text-[12px] md:text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Acreditamos que a beleza nasce do estado interior, e a satisfação com o corpo traz confiança e equilíbrio.
              </p>

              <h4 className="text-5xl md:text-6xl leading-none mt-8 md:mt-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                beleza
                <br />
                saudável
              </h4>
              <ul className="mt-4 text-[12px] md:text-[14px] space-y-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <li>➤ rituais relaxantes de spa</li>
                <li>➤ tratamentos corporais com eficácia</li>
                <li>➤ reposição da energia mental com meditações e práticas</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="rounded-none overflow-hidden bg-[#dddacf]">
          <h2 className="text-center pt-8 md:pt-10 pb-6 md:pb-8 text-6xl md:text-8xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
            serviços
          </h2>

          {[
            { title: 'corpo', image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1800&q=80' },
            { title: 'rosto', image: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1800&q=80' },
            { title: 'alma', image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1800&q=80' },
          ].map((item) => (
            <article key={item.title} className="relative h-[170px] md:h-[265px] border-t border-white/65 first:border-t-0">
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10" />
              <div className="relative z-10 h-full flex flex-col justify-center pl-8 md:pl-16">
                <h3 className="text-white text-6xl md:text-7xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                <button className="mt-4 w-max bg-white text-[#2f2321] px-4 py-2 text-[10px] uppercase tracking-[0.12em]">Ver serviços</button>
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
              pacotes
              <br />
              e certificados
            </h2>

            <div className="grid md:grid-cols-2 gap-6 md:gap-9 items-end">
              <article className="bg-[#d3cdc0] rounded-t-[170px] md:rounded-t-[250px] rounded-b-[38px] overflow-hidden px-6 md:px-9 pt-16 md:pt-20 pb-6 md:pb-9 min-h-[620px] md:min-h-[860px] flex flex-col">
                <h3 className="text-4xl md:text-6xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>icoone</h3>
                <p className="text-[13px] md:text-[17px] mt-2" style={{ fontFamily: 'Inter, sans-serif' }}>massagem com aparelho</p>
                <div className="mt-5 text-[15px] md:text-[30px] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p>13 500 rub. <span className="line-through text-[11px] md:text-sm opacity-60">16 500 rub.</span></p>
                  <p className="text-[11px] md:text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Pacote para 3 sessões</p>
                  <p className="pt-3">21 500 rub. <span className="line-through text-[11px] md:text-sm opacity-60">27 500 rub.</span></p>
                  <p className="text-[11px] md:text-sm mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Pacote para 5 sessões</p>
                </div>
                <button className="mt-5 bg-[#3c2922] text-white px-5 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.1em] w-max">Comprar</button>
                <div className="mt-auto pt-6 h-[330px] md:h-[560px] rounded-[130px] md:rounded-[230px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=1100&q=80" alt="Card left" className="w-full h-full object-cover object-center" />
                </div>
              </article>

              <article className="bg-[#978f79] text-white rounded-t-[170px] md:rounded-t-[250px] rounded-b-[38px] overflow-hidden px-6 md:px-9 pt-16 md:pt-20 pb-6 md:pb-9 min-h-[620px] md:min-h-[780px] flex flex-col md:mt-16">
                <h3 className="text-4xl md:text-6xl leading-[0.93]" style={{ fontFamily: 'Playfair Display, serif' }}>
                  tratamentos
                  <br />
                  faciais e
                  <br />
                  corporais
                </h3>
                <div className="mt-5 text-[15px] md:text-[30px] leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p>3 800 rub. <span className="line-through text-[11px] md:text-sm opacity-70">5 000 rub.</span></p>
                  <p className="text-[11px] md:text-sm mt-1 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Certificado-presente</p>
                  <p className="pt-3">7 000 rub. <span className="line-through text-[11px] md:text-sm opacity-70">10 000 rub.</span></p>
                  <p className="text-[11px] md:text-sm mt-1 text-white/90" style={{ fontFamily: 'Inter, sans-serif' }}>Certificado-presente</p>
                </div>
                <button className="mt-5 bg-white text-[#3c2922] px-5 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.1em] w-max">Comprar</button>
                <div className="mt-auto pt-6 h-[300px] md:h-[490px] rounded-[130px] md:rounded-[220px] overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=1100&q=80" alt="Card right" className="w-full h-full object-cover object-center" />
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
              <h2 className="text-6xl md:text-8xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>instagram</h2>
              <button className="bg-[#3c2922] text-white px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.1em]">Entrar</button>
            </div>
            <div className="grid grid-cols-5 gap-1.5 md:gap-2">
              {galleryImages.map((image, i) => (
                <div key={i} className="aspect-square overflow-hidden">
                  <img src={image} alt={`Instagram ${i + 1}`} className="w-full h-full object-cover" />
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
                Um espaço de cuidado para corpo e mente.
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl leading-[0.92]" style={{ fontFamily: 'Playfair Display, serif' }}>
                moscou,
                <br />
                ul. pogodinskaya, 2
              </p>
              <button className="mt-5 bg-white text-[#3f3828] px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.1em]">Navegar</button>
            </div>
            <div className="md:text-right">
              <a href="tel:+5511999999999" className="text-4xl md:text-7xl leading-none block" style={{ fontFamily: 'Playfair Display, serif' }}>
                +55 (11) 99999-9999
              </a>
              <a
                href={sistemaUrl}
                className="inline-block mt-5 border border-white/60 px-4 py-2 text-[10px] md:text-[11px] uppercase tracking-[0.1em] hover:bg-white hover:text-[#3f3828] transition-colors"
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
