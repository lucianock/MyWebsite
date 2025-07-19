import { socialMediaLists } from "@/staticData/home/home";
import { downloadPdf } from "@/utils/downloadPdf";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Button from "../ui/Button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isTypewriterSafe, setIsTypewriterSafe] = useState(true);

  useEffect(() => {
    // Verificar si es seguro usar Typewriter
    const checkTypewriterSafety = () => {
      try {
        // Verificar si Google Translate está activo
        const htmlElement = document.querySelector('html');
        const isTranslateActive = htmlElement && htmlElement.getAttribute('translate') === 'yes';
        
        // Verificar si hay problemas con el DOM
        const testElement = document.createElement('div');
        document.body.appendChild(testElement);
        document.body.removeChild(testElement);
        
        setIsTypewriterSafe(!isTranslateActive);
      } catch (error) {
        console.warn('Typewriter safety check failed:', error);
        setIsTypewriterSafe(false);
      }
    };

    checkTypewriterSafety();
    
    // Verificar cada 3 segundos
    const interval = setInterval(checkTypewriterSafety, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-banner" id="home">
      <div className="container">
        <div className="content-inner">
          <h2 className="hero-subtitle">Hola</h2>
          <h1 className="hero-title">
            Soy <span className="bottom-border">Luciano</span>
          </h1>
          <div className="typewritter">
            {isTypewriterSafe ? (
              <Typewriter
                options={{
                  strings: [
                    "Desarrollador de software que vive en Rosario, Argentina.",
                    "Tengo habilidades sólidas en backend y frontend para construir productos completos.",
                    "Mi objetivo es crear soluciones que resuelvan problemas reales y generen valor para las personas.",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 20,
                }}
                className="custom-typewriter"
              />
            ) : (
              <div className="custom-typewriter">
                <span>Trabajo en el desarrollo y mantenimiento de sistemas de gestión a medida para la industria farmacéutica, incluyendo CRMs personalizados, integración de APIs, desarrollo de módulos específicos y gestión de métricas.</span>
              </div>
            )}
          </div>
          <ul className="buttons">
            <li>
              <Button arrow onClick={downloadPdf} />
            </li>
            <li>
              <a
                href="https://wa.me/543416589951?text=Hola%20Luciano%2C%20vi%20tu%20perfil%20y%20estoy%20interesado%20en%20hablar%20contigo."
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button className="whatsapp-button whatsapp-animate" style={{
                  display: 'flex',
                  alignItems: 'center',
                  background: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '10px 24px',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  cursor: 'pointer',
                  marginTop: '16px',
                  gap: '10px',
                }}>
                   Chatear
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="whatsapp-icon" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                </button>
              </a>
            </li>
          </ul>
          <div className="hero-img">
            {/* <Image
              src="/assets/images/hero/luciano3.png"
              className="dark img-fluid"
              alt="Luciano"
              height={400}
              width={400}
              priority
            />
            <Image
              // src={lightImage?.src}
              className="light img-fluid"
              alt="Luciano"
              height={400}
              width={400}
              priority
            /> */}
          </div>
        </div>
        <div className="animated-bg-line">
          {Array(5)
            .fill()
            .map((_item, i) => (
              <div key={i} className="line-item"></div>
            ))}
        </div>
      </div>
      <div className="sticky-social-media">
        <ul>
          {socialMediaLists?.map((item) => (
            <li key={item?.id}>
              <Link target="_blank" href={item?.url}>
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
