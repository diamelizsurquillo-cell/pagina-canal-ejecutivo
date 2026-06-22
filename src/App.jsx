import { useEffect, useState, useRef } from 'react';
import {
  Menu, X, ChevronRight, ChevronLeft, Star, Quote,
  Award, Calendar, Users, ArrowUp,
  GraduationCap, Globe, ShieldCheck, Zap, MessageCircle,
  Target, Eye, CheckCircle, Sparkles, Clock, Gem, Video, ChevronDown,
  Play, ShoppingCart, Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { coursesData, getCourseById } from './data/courses';
import EscuelasPage from './pages/EscuelasPage';
import EscuelaIAPage from './pages/EscuelaIAPage';
import EscuelaRedesPage from './pages/EscuelaRedesPage';
import EscuelaEjecutivoPage from './pages/EscuelaEjecutivoPage';


const Footer = () => (
  <footer>
    <div className="container footer-grid">
      <div className="footer-col brand-col">
        <div className="footer-logo">
          <img src="/logo.png" alt="Canal Ejecutivo" style={{ height: '50px', objectFit: 'contain' }} />
        </div>
        <p className="footer-desc">Formación de élite, estrategias de vanguardia y networking de alto nivel.</p>
      </div>
      <div className="footer-col contact-col">
        <h4>Información</h4>
        <div className="footer-links">
          <a href="#nosotros">
            👥 Nosotros
          </a>
          <a href="#contacto">
            ℹ️ Contacto
          </a>
          <a href="https://campus.canalejecutivo.com/admin/tool/certificate/index.php" target="_blank" rel="noopener noreferrer">
            🎓 Consultar Certificados
          </a>
          <a href="#privacidad">
            🔒 Políticas de Privacidad
          </a>
          <a href="#terminos">
            📄 Términos y Condiciones
          </a>
        </div>
      </div>
      <div className="footer-col community-col">
        <h4>Comunidad</h4>
        <div className="footer-links">
          <a href="https://whatsapp.com/channel/0029VahvFS2KwqSN8BBjTr3g" target="_blank" rel="noopener noreferrer">
            📱 Canal de WhatsApp
          </a>
          <a href="https://whatsapp.com/channel/0029VatCOm0BA1erahotjS0f" target="_blank" rel="noopener noreferrer">
            💼 Bolsa Laboral
          </a>
        </div>
      </div>
      <div className="footer-col claims-col" style={{ alignItems: 'flex-start' }}>
        <a href="#contacto" style={{ display: 'inline-block', marginTop: '0.5rem' }}>
          <img
            src="/libro-de-reclamaciones.png"
            alt="Libro de Reclamaciones"
            style={{ height: '90px', objectFit: 'contain' }}
          />
        </a>
      </div>
    </div>
    <div className="container">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Canal Ejecutivo. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

const Header = ({ activePage, isScrolledExternal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledInternal, setIsScrolledInternal] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledInternal(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = isScrolledExternal !== undefined ? isScrolledExternal : isScrolledInternal;

  return (
    <header style={{ 
      background: isScrolled ? 'rgba(7, 11, 20, 0.95)' : 'transparent', 
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease'
    }}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Canal Ejecutivo" style={{ height: '40px', objectFit: 'contain' }} />
          </a>
        </div>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a 
            href="#" 
            className={activePage === 'inicio' ? 'active' : ''} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#nosotros" 
            className={activePage === 'nosotros' ? 'active' : ''} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </a>
          
          {/* Dropdown for Programas */}
          <div className="nav-dropdown">
            <button 
              className={`nav-dropdown-trigger ${activePage === 'envivo' || activePage === 'asincronicos' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setMobileSubmenuOpen(!mobileSubmenuOpen);
              }}
            >
              Programas <ChevronDown size={14} />
            </button>
            <div className={`nav-dropdown-menu ${mobileSubmenuOpen ? 'mobile-show' : ''}`}>
              <a 
                href="#programas-envivo" 
                className={activePage === 'envivo' ? 'active' : ''} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileSubmenuOpen(false);
                }}
              >
                En vivo
              </a>
              <a 
                href="#programas-asincronicos" 
                className={activePage === 'asincronicos' ? 'active' : ''} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileSubmenuOpen(false);
                }}
              >
                Asincrónicos
              </a>
            </div>
          </div>

          <a 
            href="#escuelas" 
            className={activePage === 'escuelas' ? 'active' : ''} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Escuelas
          </a>

          <a href="#aliados" onClick={() => setMobileMenuOpen(false)}>Aliados</a>
          <a href="#testimonios" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
          <a href="https://campus.canalejecutivo.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem' }}>Aula virtual</a>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Volver arriba"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const LoadingScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => onFinish(), 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="loading-screen"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src="/logo.png" alt="Canal Ejecutivo" className="loading-logo" />
      <div className="loading-bar-container">
        <div className="loading-bar"></div>
      </div>
    </motion.div>
  );
};

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/51983029039"
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-float"
    aria-label="Contactar por WhatsApp"
  >
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  </a>
);

const useCountUp = (end, duration = 2000, startCounting) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const increment = end / (duration / 16);
    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      countRef.current = requestAnimationFrame(animate);
    };
    countRef.current = requestAnimationFrame(animate);
    return () => {
      if (countRef.current) cancelAnimationFrame(countRef.current);
    };
  }, [end, duration, startCounting]);

  return count;
};

const StatItem = ({ number, suffix = '', label }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);
  const count = useCountUp(number, 2000, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-number">{count.toLocaleString()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <>
      <header style={{ background: 'rgba(7, 11, 20, 0.9)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container nav-container">
          <div className="logo">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src="/logo.png" alt="Canal Ejecutivo" style={{ height: '40px', objectFit: 'contain' }} />
            </a>
          </div>
          <nav className="nav-links">
            <a href="#">Volver al Inicio</a>
          </nav>
        </div>
      </header>

      <section className="section" style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '150px' }}>
        <div className="container text-center">
          <h2 className="section-title">Información de <span className="text-primary">Contacto</span></h2>
          <p className="section-subtitle" style={{ maxWidth: '600px', margin: '0 auto 4rem auto', color: '#94a3b8' }}>
            Estamos aquí para ayudarte a elevar tu potencial ejecutivo. Contáctanos a través de nuestros canales oficiales.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="course-card" style={{ padding: '3rem', width: '350px', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', margin: '0 auto 1rem auto' }}>✉️</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Correo Electrónico</h3>
              <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Escríbenos para cualquier consulta o solicitud de información.</p>
              <a href="mailto:contacto@canalejecutivo.com" className="btn btn-secondary" style={{ width: '100%', display: 'inline-block' }}>contacto@canalejecutivo.com</a>
            </div>

            <div className="course-card" style={{ padding: '3rem', width: '350px', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', margin: '0 auto 1rem auto' }}>📱</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>WhatsApp</h3>
              <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>Atención rápida y personalizada para tus dudas.</p>
              <a href="https://wa.me/51983029039" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: '100%', display: 'inline-block' }}>+51 983 029 039</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const PrivacyPage = () => {
  return (
    <>
      <header style={{ background: 'rgba(7, 11, 20, 0.9)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container nav-container">
          <div className="logo">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src="/logo.png" alt="Canal Ejecutivo" style={{ height: '40px', objectFit: 'contain' }} />
            </a>
          </div>
          <nav className="nav-links">
            <a href="#">Volver al Inicio</a>
          </nav>
        </div>
      </header>

      <section className="section" style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '150px' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'left' }}>
          <h2 className="section-title text-center" style={{ marginBottom: '1rem' }}>Políticas de <span className="text-primary">Privacidad</span></h2>
          <p className="text-center" style={{ color: '#94a3b8', marginBottom: '3rem' }}>Fecha de actualización: 01 de enero del 2024</p>

          <div style={{ color: '#e2e8f0', lineHeight: '1.8' }}>
            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>1. INTRODUCCIÓN</h3>
            <p style={{ marginBottom: '1rem' }}>CANA EJECUTIVO S.A.C.S. (en adelante, “CANAL EJECUTIVO”) se compromete a proteger la privacidad y seguridad de los datos personales de los usuarios que utilizan nuestros servicios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y compartimos su información personal, así como los derechos que usted tiene sobre su información.</p>
            <p style={{ marginBottom: '1rem' }}>Al utilizar nuestra plataforma, al registrarse o al participar en nuestros cursos y servicios, usted acepta esta Política de Privacidad y consiente la recopilación y uso de su información conforme a los términos establecidos.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>2. INFORMACIÓN QUE RECOPILAMOS</h3>
            <p style={{ marginBottom: '1rem' }}>Recopilamos la siguiente información personal cuando usted se registra, utiliza nuestros servicios, o interactúa con nuestra plataforma:</p>
            <p style={{ marginBottom: '0.5rem' }}><strong>Datos personales proporcionados por el usuario:</strong></p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Número de documento de identificación (DNI o pasaporte)</li>
              <li>Fecha de nacimiento</li>
              <li>Género</li>
              <li>Ciudad y país de residencia</li>
              <li>Información de pago (cuando sea aplicable)</li>
            </ul>
            <p style={{ marginBottom: '0.5rem' }}><strong>Datos recopilados automáticamente:</strong></p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li>Dirección IP</li>
              <li>Información sobre el navegador (tipo de dispositivo, sistema operativo, tipo de navegador, etc.)</li>
              <li>Datos de navegación (páginas visitadas, duración de la visita, interacciones con la plataforma, etc.)</li>
            </ul>
            <p style={{ marginBottom: '0.5rem' }}><strong>Datos de uso de los cursos:</strong></p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li>Historial de cursos completados</li>
              <li>Participación en foros y actividades de los cursos</li>
              <li>Solicitudes de certificación y progreso en los cursos</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>3. FINALIDAD DEL USO DE LOS DATOS PERSONALES</h3>
            <p style={{ marginBottom: '1rem' }}>La información personal que recopilamos es utilizada para los siguientes fines:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Gestión de registros y cuentas:</strong> Para crear, mantener y gestionar su cuenta de usuario en la plataforma de CANAL EJECUTIVO.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Provisión de servicios educativos:</strong> Para permitir su acceso a los cursos, talleres y demás servicios ofrecidos en la plataforma.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Envío de comunicaciones:</strong> Para enviarle notificaciones sobre sus cursos, actualizaciones de la plataforma, recordatorios de actividades, y certificaciones.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Gestión de pagos y facturación:</strong> Para procesar pagos y emitir certificados, cuando corresponda.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Mejora de la plataforma:</strong> Para analizar el uso de la plataforma, mejorar los contenidos y optimizar la experiencia del usuario.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Cumplimiento de obligaciones legales:</strong> Para cumplir con las obligaciones legales y normativas que rigen nuestros servicios.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>4. SEGURIDAD EN EL USO DE GRUPOS DE WHATSAPP Y OTRAS PLATAFORMAS DE MENSAJERÍA</h3>
            <p style={{ marginBottom: '1rem' }}>En algunos de nuestros cursos, proporcionamos acceso a grupos de WhatsApp u otras plataformas de mensajería, con el fin de enviar recordatorios y mensajes relacionados exclusivamente con el curso. Al unirse a estos grupos, debe tener en cuenta lo siguiente:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Aceptación de los riesgos al unirse a un grupo de WhatsApp:</strong> Al unirse a estos grupos, acepta los Términos y Condiciones de WhatsApp, los cuales rigen el uso de la plataforma. Su número de teléfono será visible para otros miembros del grupo, incluyendo personas ajenas a CANAL EJECUTIVO.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Privacidad de su número de teléfono:</strong> Tenga en cuenta que, al unirse a un grupo de WhatsApp, terceros ajenos a CANAL EJECUTIVO pueden tener acceso a su número de teléfono. Los grupos de WhatsApp proporcionados por CANAL EJECUTIVO son solo para enviar recordatorios y mensajes relacionados con el curso, no para interacción entre estudiantes.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Recomendaciones de privacidad:</strong> Para proteger su privacidad, le sugerimos que ajuste las configuraciones de privacidad de WhatsApp, de manera que su número de teléfono no sea visible para otros miembros del grupo sin su consentimiento.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>5. BASES LEGALES PARA EL TRATAMIENTO DE SUS DATOS</h3>
            <p style={{ marginBottom: '1rem' }}>El tratamiento de sus datos personales se realiza con base en las siguientes razones legales:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Consentimiento explícito:</strong> Cuando usted proporciona sus datos personales para registrarse y acceder a nuestros servicios.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Ejecución de un contrato:</strong> Para cumplir con nuestras obligaciones en relación con la provisión de los cursos, talleres y servicios educativos.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Intereses legítimos:</strong> Para mejorar la plataforma, personalizar la experiencia del usuario y realizar investigaciones de mercado, siempre respetando sus derechos y libertades.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Cumplimiento de obligaciones legales:</strong> En caso de que sea necesario para cumplir con leyes o regulaciones aplicables.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>6. SEGURIDAD DE LA INFORMACIÓN</h3>
            <p style={{ marginBottom: '1rem' }}>CANAL EJECUTIVO se compromete a proteger la seguridad de sus datos personales. Implementamos medidas de seguridad administrativas, técnicas y físicas adecuadas para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción. Sin embargo, ningún sistema de transmisión o almacenamiento de datos es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de la información transmitida a través de nuestra plataforma.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>7. COMPARTICIÓN DE DATOS PERSONALES</h3>
            <p style={{ marginBottom: '1rem' }}>No compartiremos su información personal con terceros sin su consentimiento, excepto en los siguientes casos:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Proveedores de servicios:</strong> Podemos compartir su información con proveedores de servicios externos que nos ayuden a operar nuestra plataforma y brindar nuestros servicios (por ejemplo, procesadores de pagos, servicios de alojamiento, servicios de mensajería). Estos proveedores están obligados a proteger su información y solo pueden usarla para los fines para los que fueron contratados.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Cumplimiento de la ley:</strong> Podemos divulgar su información personal si es necesario para cumplir con una obligación legal, resolver disputas o hacer cumplir nuestros acuerdos.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>8. DERECHOS DE LOS USUARIOS SOBRE SUS DATOS PERSONALES</h3>
            <p style={{ marginBottom: '1rem' }}>Usted tiene los siguientes derechos sobre su información personal:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Acceder a su información:</strong> Puede solicitar una copia de los datos personales que tenemos sobre usted.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Rectificar sus datos:</strong> Si sus datos son inexactos o incompletos, puede solicitarnos que los corrijamos.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Eliminar sus datos:</strong> Puede solicitar la eliminación de sus datos personales, sujeto a ciertas condiciones y limitaciones legales.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Oponerse o limitar el tratamiento:</strong> Puede oponerse al tratamiento de sus datos personales en determinadas situaciones.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Revocar el consentimiento:</strong> Si ha otorgado su consentimiento para el tratamiento de sus datos, puede revocar ese consentimiento en cualquier momento.</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>Para ejercer cualquiera de estos derechos, póngase en contacto con nosotros a través de nuestro correo electrónico <a href="mailto:contacto@canalejecutivo.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>contacto@canalejecutivo.com</a>.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const TermsPage = () => {
  return (
    <>
      <header style={{ background: 'rgba(7, 11, 20, 0.9)', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <div className="container nav-container">
          <div className="logo">
            <a href="#" style={{ textDecoration: 'none' }}>
              <img src="/logo.png" alt="Canal Ejecutivo" style={{ height: '40px', objectFit: 'contain' }} />
            </a>
          </div>
          <nav className="nav-links">
            <a href="#">Volver al Inicio</a>
          </nav>
        </div>
      </header>

      <section className="section" style={{ minHeight: 'calc(100vh - 100px)', paddingTop: '150px' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'left' }}>
          <h2 className="section-title text-center" style={{ marginBottom: '1rem' }}>Términos y <span className="text-primary">Condiciones</span></h2>
          <p className="text-center" style={{ color: '#94a3b8', marginBottom: '3rem' }}>Fecha de última actualización: 24 de enero del 2025</p>

          <div style={{ color: '#e2e8f0', lineHeight: '1.8' }}>
            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>1. INTRODUCCIÓN</h3>
            <p style={{ marginBottom: '1rem' }}>Bienvenido a CANAL EJECUTIVO S.A.C.S. (en adelante, “CANAL EJECUTIVO”). Al acceder y utilizar nuestros servicios en línea, ya sea como usuario registrado o visitante, usted (en adelante, “usted” o “el usuario”) acepta cumplir con los términos y condiciones establecidos en este documento. Si no está de acuerdo con estos términos, por favor, no acceda ni utilice los servicios de CANAL EJECUTIVO.</p>
            <p style={{ marginBottom: '1rem' }}>CANAL EJECUTIVO ofrece acceso a una variedad de cursos y talleres educativos, tanto gratuitos como de pago, dirigidos a mejorar las habilidades profesionales y personales de los usuarios. Estos términos y condiciones rigen el uso de nuestra plataforma, el acceso a los contenidos educativos, y las relaciones con los usuarios registrados y visitantes.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>2. RAZÓN SOCIAL Y DATOS LEGALES</h3>
            <p style={{ marginBottom: '1rem' }}>La razón social de la empresa es “CANAL EJECUTIVO S.A.C.S.”, con RUC 20612995959. Su domicilio legal está ubicado en Jr. Las Begonias Mza. C Lote. 4 Asc. La Esperanza Lima- Los Olivos, Perú. Puede contactarnos a través del teléfono (WhatsApp) +51 904 947 193 o el correo electrónico <a href="mailto:contacto@canalejecutivo.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>contacto@canalejecutivo.com</a>. Nuestro sitio web es <a href="https://www.canalejecutivo.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>www.canalejecutivo.com</a>.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>3. DEFINICIÓN DE LOS USUARIOS</h3>
            <p style={{ marginBottom: '1rem' }}>Dentro de nuestra plataforma, existen dos tipos de usuarios:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Estudiante registrado:</strong> Es aquel usuario que crea una cuenta en nuestra plataforma para acceder a todos los cursos, talleres y servicios ofrecidos, participar en foros, recibir certificación, y acceder a material adicional. El estudiante registrado tiene acceso completo a los contenidos, incluyendo cursos gratuitos y de pago, así como la posibilidad de obtener certificados.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Estudiante visitante:</strong> Es el usuario que accede a la plataforma sin registrarse, generalmente para explorar contenido gratuito o limitado. Los visitantes no tienen acceso a la totalidad de los cursos y no pueden obtener certificados por los cursos realizados.</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>Ambos tipos de usuarios están sujetos a los términos y condiciones que se describen en este documento.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>4. SERVICIOS OFRECIDOS</h3>
            <p style={{ marginBottom: '1rem' }}>CANAL EJECUTIVO ofrece una gama de cursos y talleres en línea, grabados y en vivo, en diversas áreas. Los servicios incluyen:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Cursos gratuitos y grabados:</strong> Disponibles para todos los usuarios, tanto registrados como visitantes, en temas como Gestión Pública, Recursos Humanos, Logística, Marketing, Tecnología, Habilidades Blandas, Psicología, Nutrición, Ingeniería, entre otros.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Acceso gratuito:</strong> Los cursos gratuitos ofrecen acceso a la mayoría de los contenidos educativos, como videos, materiales de lectura y actividades. Sin embargo, algunos recursos adicionales o materiales exclusivos pueden estar disponibles solo para estudiantes que soliciten y tramiten un certificado por el curso.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Cursos de pago:</strong> Los cursos de pago, son visibles para todos los usuarios pero el acceso completo a estos cursos solo se puede obtener una vez que el estudiante haya realizado el pago correspondiente.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Acceso previo al pago:</strong> Para acceder al contenido de los cursos de pago, el estudiante debe realizar el pago completo del curso, el cual puede realizarse a través de los métodos habilitados en la plataforma. El acceso será concedido una vez confirmado el pago.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Talleres virtuales y presenciales:</strong> Dirigidos a empresas y profesionales en diversas áreas.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Acceso a grupos de WhatsApp y otras plataformas de mensajería:</strong> En algunos cursos y actividades, proporcionamos un enlace a un grupo de WhatsApp para enviar recordatorios y mensajes exclusivamente relacionados con el curso. Al unirse a estos grupos, usted acepta los Términos y Condiciones de WhatsApp y los riesgos de que terceros ajenos a CANAL EJECUTIVO puedan tener acceso a su número de teléfono. Los grupos creados no están destinados para la interacción entre estudiantes, sino para comunicaciones relacionadas exclusivamente con el curso. Le recomendamos que ajuste las configuraciones de privacidad en su WhatsApp para proteger su número según sus preferencias.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>5. NORMAS DE CONDUCTA Y USO DE LA PLATAFORMA</h3>
            <p style={{ marginBottom: '1rem' }}>El acceso y uso de la plataforma CANAL EJECUTIVO está condicionado al cumplimiento de las siguientes normas de conducta:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Respeto mutuo:</strong> Los usuarios deben mantener un comportamiento respetuoso en todo momento. Se prohíbe cualquier forma de contenido o interacción que sea ofensiva, difamatoria, acosadora, discriminatoria, o que incite al odio.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Contenido inapropiado:</strong> Queda prohibido publicar o compartir cualquier contenido relacionado con actividades ilegales, virus, malware, o cualquier otro software malicioso que pueda dañar la plataforma o los equipos de otros usuarios.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Plagio y fraude académico:</strong> Los estudiantes no deben cometer fraude ni plagiar en actividades académicas, exámenes o pruebas. Se considera fraude académico cualquier intento de presentar como propio el trabajo realizado por otro, o cualquier otra acción que atente contra la integridad académica.</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>Los estudiantes registrados tienen la obligación de crear contraseñas seguras y de no compartirlas con terceros. En caso de sospecha de uso no autorizado, se recomienda cambiar la contraseña de inmediato.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>6. ELEMENTOS ESTRICTAMENTE PROHIBIDOS</h3>
            <p style={{ marginBottom: '1rem' }}>Los siguientes elementos están estrictamente prohibidos en la plataforma de CANAL EJECUTIVO:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li>Contenido difamatorio, acosador o amenazante.</li>
              <li>Contenido relacionado con actividades ilegales, con la intención de realizar dichas actividades.</li>
              <li>Infracción de propiedad intelectual de terceros (como derechos de autor, marcas registradas, etc.).</li>
              <li>Contenido obsceno, pornográfico o ilegal.</li>
              <li>Publicidad o solicitudes comerciales no autorizadas.</li>
              <li>Distribución de virus, troyanos, malware, spyware, o cualquier software similar.</li>
              <li>Publicar información falsa o engañosa con la intención de engañar a otros usuarios.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>7. LICENCIA DE USO Y PROPIEDAD INTELECTUAL</h3>
            <h4 style={{ color: '#cbd5e1', marginTop: '1rem', marginBottom: '0.5rem' }}>Licencia de uso del contenido académico</h4>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Licencia para estudiantes:</strong> A menos que se indique lo contrario, todo el contenido académico publicado en CANAL EJECUTIVO, incluyendo textos, videos, imágenes, exámenes, tareas, y otros materiales educativos proporcionados en los cursos, está sujeto a una licencia internacional Creative Commons Attribution 4.0 (CC BY 4.0). Esto significa que los estudiantes pueden compartir, copiar y distribuir el material proporcionado, así como adaptarlo o transformarlo, siempre que den el crédito adecuado a CANAL EJECUTIVO como la fuente original y no lo utilicen para fines comerciales.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Uso personal y no comercial:</strong> Los estudiantes tienen la libertad de usar el contenido para fines educativos personales. No pueden utilizar el contenido para fines comerciales sin obtener permiso explícito de CANAL EJECUTIVO.</li>
            </ul>
            <h4 style={{ color: '#cbd5e1', marginTop: '1rem', marginBottom: '0.5rem' }}>Contenido de cursos específicos</h4>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Excepciones a la licencia estándar:</strong> Algunos materiales específicos dentro de los cursos de CANAL EJECUTIVO pueden no estar cubiertos por la licencia Creative Commons y, en su lugar, pueden estar sujetos a derechos de autor exclusivos de CANAL EJECUTIVO o sus proveedores. Estos materiales no pueden ser utilizados, reproducidos, o distribuidos sin el permiso explícito de CANAL EJECUTIVO, ya que están protegidos por derechos de propiedad intelectual.</li>
            </ul>
            <h4 style={{ color: '#cbd5e1', marginTop: '1rem', marginBottom: '0.5rem' }}>Contenido del curso disponible en YouTube</h4>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Licencia YouTube estándar:</strong> Los videos del curso que se compartan a través de enlaces de YouTube pueden estar bajo la Licencia Estándar de YouTube o bajo una Licencia Creative Commons. Si el contenido se encuentra bajo la licencia Creative Commons, los estudiantes pueden compartir, adaptar y reutilizar el contenido, siempre dando el crédito correspondiente a la fuente original y respetando las restricciones de la licencia.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Materiales proporcionados por terceros:</strong> En algunos casos, CANAL EJECUTIVO utiliza materiales proporcionados por terceros, tales como artículos, estudios, libros de texto, y otros, que están licenciados o autorizados para su uso en los cursos. El uso de estos materiales está sujeto a las condiciones de la licencia de los proveedores de terceros. Los estudiantes deberán respetar los términos y condiciones de cada licencia asociada con estos materiales.</li>
            </ul>
            <h4 style={{ color: '#cbd5e1', marginTop: '1rem', marginBottom: '0.5rem' }}>Responsabilidad del estudiante en el uso del contenido</h4>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Atribución adecuada:</strong> Los estudiantes que utilicen o compartan cualquier contenido de los cursos proporcionados por CANAL EJECUTIVO deberán dar crédito adecuado a los autores originales y a CANAL EJECUTIVO, de acuerdo con los términos de la licencia aplicable. Esta atribución debe ser clara y prominente para indicar que el contenido es de CANAL EJECUTIVO y que el uso del material está sujeto a las licencias correspondientes.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Prohibición de uso comercial sin permiso:</strong> El contenido proporcionado por CANAL EJECUTIVO no puede ser utilizado con fines comerciales sin la autorización previa por escrito de CANAL EJECUTIVO. El estudiante se compromete a no vender, sublicenciar, alquilar ni utilizar de ninguna otra forma con fines comerciales los materiales proporcionados en los cursos, sin el permiso expreso de CANAL EJECUTIVO.</li>
            </ul>
            <h4 style={{ color: '#cbd5e1', marginTop: '1rem', marginBottom: '0.5rem' }}>Modificaciones y adaptaciones del contenido</h4>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong>Modificación del contenido:</strong> Los estudiantes tienen derecho a modificar, adaptar y crear obras derivadas de los materiales proporcionados en los cursos de CANAL EJECUTIVO, siempre y cuando lo hagan para fines educativos y no comerciales, y siempre otorgando la debida atribución a CANAL EJECUTIVO como la fuente original.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Excepciones a la modificación:</strong> Algunos contenidos pueden estar sujetos a restricciones adicionales que prohíben la modificación o la creación de obras derivadas. Estos materiales serán claramente indicados en el curso, y el estudiante se compromete a no modificar dichos materiales sin el permiso de CANAL EJECUTIVO.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>8. CERTIFICADOS DE ESTUDIO</h3>
            <p style={{ marginBottom: '1rem' }}><strong>Emisión de certificados:</strong> CANAL EJECUTIVO emite certificados digitales con código QR. Los certificados indican las horas académicas completadas por el estudiante y son verificables en línea a través de un sistema de validación global accesible desde cualquier parte del mundo.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Reembolsos de certificados:</strong> Los reembolsos por certificados son posibles únicamente mientras el certificado esté en proceso de firma. Una vez firmado y descargado, no será posible solicitar un reembolso, salvo en casos excepcionales determinados por CANAL EJECUTIVO.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>9. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h3>
            <p style={{ marginBottom: '1rem' }}><strong>Recopilación de datos personales:</strong> CANAL EJECUTIVO recopila la siguiente información personal de los estudiantes para gestionar la inscripción a los cursos y la emisión de certificados: nombre completo, correo electrónico, número de teléfono, documento de identidad, fecha de nacimiento, género, ciudad, país y datos de pago. Estos datos son almacenados de manera segura en servidores encriptados y no serán compartidos con terceros sin el consentimiento expreso del estudiante.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Derechos sobre los datos personales:</strong> Los estudiantes tienen derecho a acceder, corregir o eliminar sus datos personales en cualquier momento, conforme a la Ley N° 29733 de Protección de Datos Personales de Perú. Para ejercer estos derechos, pueden ponerse en contacto con CANAL EJECUTIVO a través del correo electrónico <a href="mailto:contacto@canalejecutivo.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>contacto@canalejecutivo.com</a>.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>10. EXONERACIÓN DE RESPONSABILIDAD</h3>
            <p style={{ marginBottom: '1rem' }}><strong>Responsabilidad por daños técnicos:</strong> CANAL EJECUTIVO no se hace responsable por pérdidas de datos o daños a equipos causados por fallos técnicos en la plataforma o problemas en el acceso a los cursos. Aunque CANAL EJECUTIVO realiza esfuerzos razonables para garantizar la disponibilidad continua de la plataforma, no garantiza que el acceso sea ininterrumpido y libre de errores.</p>
            <p style={{ marginBottom: '1rem' }}><strong>Responsabilidad sobre el contenido académico:</strong> CANAL EJECUTIVO no garantiza que todos los contenidos académicos sean adecuados para todos los estudiantes. Cada estudiante es responsable de verificar si el curso cubre sus expectativas antes de inscribirse.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>11. PROCEDIMIENTO DE BAJA</h3>
            <p style={{ marginBottom: '1rem' }}>Los estudiantes pueden darse de baja de la plataforma en cualquier momento desde la opción “Configuración de cuenta” en su perfil. Esto eliminará su acceso a los cursos y les enviará una notificación de confirmación de baja.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>12. RESERVA DE DERECHOS</h3>
            <p style={{ marginBottom: '1rem' }}>CANAL EJECUTIVO se reserva el derecho de denegar el servicio o cancelar el registro de aquellos usuarios que no cumplan con estos términos y condiciones. También podrá eliminar cualquier contenido sin previo aviso si este infringe las normas establecidas en estos términos. Además, CANAL EJECUTIVO tomará las acciones legales necesarias para hacer cumplir sus derechos y obtener reparación por daños y perjuicios causados por el incumplimiento de estos términos.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>13. VALIDEZ DE LAS PRESENTES NORMAS</h3>
            <p style={{ marginBottom: '1rem' }}>Estas normas son las únicas que rigen la relación entre el usuario y CANAL EJECUTIVO. Si alguna de sus cláusulas fuera declarada nula, las demás continuarán siendo válidas y aplicables.</p>
            <p style={{ marginBottom: '1rem' }}>CANAL EJECUTIVO se reserva el derecho de denegar el servicio o cancelar el registro de aquellos usuarios que no cumplan con estos términos y condiciones. También podrá eliminar cualquier contenido sin previo aviso si este infringe las normas establecidas en estos términos. Además, CANAL EJECUTIVO tomará las acciones legales necesarias para hacer cumplir sus derechos y obtener reparación por daños y perjuicios causados por el incumplimiento de estos términos.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>14. SEGURIDAD Y PROTECCIÓN DEL USUARIO</h3>
            <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '1.5rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
              <h4 style={{ color: '#ef4444', marginTop: 0, marginBottom: '0.5rem' }}>AVISO IMPORTANTE DE SEGURIDAD</h4>
              <p style={{ margin: 0 }}>Desde CANAL EJECUTIVO, <strong>NUNCA</strong> solicitamos códigos de verificación. Si alguien solicita códigos bajo el nombre de CANAL EJECUTIVO, es un intento de estafa. Por lo tanto, le pedimos que no proporcione ningún código de verificación a personas no autorizadas.</p>
            </div>
            <p style={{ marginBottom: '0.5rem' }}><strong>Recomendaciones de seguridad:</strong></p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li>No proporcione a nadie ningún código de verificación. En caso de recibir alguna solicitud sospechosa, comuníquese con nosotros inmediatamente para reportarlo.</li>
              <li>Este aviso está en vigor para proteger a nuestros usuarios de posibles fraudes o intentos de estafa que puedan estar relacionados con la marca CANAL EJECUTIVO.</li>
            </ul>

            <h4 style={{ color: '#cbd5e1', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Seguridad al usar grupos de mensajería</h4>
            <p style={{ marginBottom: '1rem' }}>Cada curso en CANAL EJECUTIVO puede incluir un enlace a un grupo o comunidad de WhatsApp para facilitar la comunicación de recordatorios y mensajes relacionados exclusivamente al curso. Al unirse a estos grupos, usted acepta los Términos y Condiciones de CANAL EJECUTIVO y los riesgos asociados a la visibilidad de su número de teléfono. Al ser parte del grupo de WhatsApp, su número podrá ser visible para otros miembros del grupo, incluyendo a personas que no sean parte de CANAL EJECUTIVO.</p>
            <p style={{ marginBottom: '1rem' }}>Le informamos que terceros ajenos a CANAL EJECUTIVO podrían tener acceso a su número de teléfono al ser parte de estos grupos. Los grupos de WhatsApp proporcionados por CANAL EJECUTIVO son solo y exclusivamente para enviar recordatorios y mensajes relacionados al curso. No están destinados para la interacción entre estudiantes.</p>
            <p style={{ marginBottom: '0.5rem' }}>Le recomendamos tomar las siguientes medidas para proteger su privacidad:</p>
            <ul style={{ marginLeft: '1.5rem', marginBottom: '1rem', color: '#cbd5e1' }}>
              <li style={{ marginBottom: '0.5rem' }}>Al unirse al grupo, usted acepta los Términos y Condiciones de WhatsApp, que rigen la plataforma de mensajería y el uso de los grupos creados en la misma.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>Ajustar la configuración de privacidad:</strong> Asegúrese de configurar adecuadamente las opciones de privacidad en WhatsApp para controlar quién puede ver su número de teléfono. Le sugerimos revisar la configuración de visibilidad de su número en los grupos y ajustarla según sus preferencias.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong>No compartir públicamente los enlaces de los grupos de WhatsApp:</strong> Los enlaces a los grupos de WhatsApp no deben ser compartidos públicamente. Estos grupos están disponibles solo para aquellos estudiantes que han dado su consentimiento explícito para unirse.</li>
            </ul>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>15. CAMBIOS A LOS TÉRMINOS Y CONDICIONES</h3>
            <p style={{ marginBottom: '1rem' }}>CANAL EJECUTIVO se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Cualquier cambio será efectivo inmediatamente después de su publicación en esta página, y la fecha de entrada en vigencia será actualizada en consecuencia. Se recomienda a los usuarios revisar periódicamente los términos y condiciones para estar al tanto de cualquier modificación.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>CONTACTO</h3>
            <p style={{ marginBottom: '1rem' }}>Para cualquier consulta relacionada con estos Términos y Condiciones, puede ponerse en contacto con CANAL EJECUTIVO a través del correo electrónico <a href="mailto:contacto@canalejecutivo.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>contacto@canalejecutivo.com</a>.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

const NosotrosPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <Header activePage="nosotros" />

      {/* Main Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        style={{ minHeight: '100vh', paddingTop: '140px', overflow: 'hidden', position: 'relative' }}
      >
        {/* Background glow effects */}
        <div className="hero-bg-glow" style={{ top: '10%', left: '-10%', width: '500px', height: '500px', opacity: 0.15 }}></div>
        <div className="hero-bg-glow" style={{ bottom: '20%', right: '-10%', width: '600px', height: '600px', opacity: 0.15 }}></div>

        {/* Hero Section */}
        <section className="container text-center" style={{ marginBottom: '6rem' }}>
          <motion.div variants={itemVariants}>
            <span style={{
              background: 'rgba(10, 102, 255, 0.1)',
              color: 'var(--accent)',
              padding: '0.5rem 1.5rem',
              borderRadius: '99px',
              fontSize: '0.9rem',
              fontWeight: 600,
              border: '1px solid rgba(10, 102, 255, 0.3)',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              Nuestra Historia & Valores
            </span>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              lineHeight: '1.2',
              marginBottom: '1.5rem',
              letterSpacing: '-1px',
              color: 'white'
            }}>
              Sobre <span className="text-primary">Nosotros</span>
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--text-muted)',
              maxWidth: '800px',
              margin: '0 auto 3rem auto',
              lineHeight: '1.6'
            }}>
              Liderando la transformación educativa para ejecutivos de alta dirección y profesionales de élite que buscan revolucionar su entorno empresarial.
            </p>
          </motion.div>
        </section>

        {/* Quiénes Somos */}
        <section className="container" style={{ marginBottom: '7rem' }}>
          <div className="hero-grid" style={{ gap: '4rem' }}>
            <motion.div variants={itemVariants} style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'white' }}>
                ¿Quiénes <span className="text-accent">Somos</span>?
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                En <strong>Canal Ejecutivo</strong>, somos la plataforma de educación ejecutiva y empresarial de vanguardia diseñada por y para líderes. Desarrollamos planes de capacitación y especialización de nivel premium que responden ágilmente a la transformación y desafíos de las economías dinámicas del mercado global.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Fusionamos la rigurosidad teórica con un enfoque 100% práctico y herramientas de aplicación real e inmediata. Nuestra misión es acortar la brecha educativa de alta gama y brindar competencias clave en áreas de gestión de élite, tecnología, e innovación digital.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#cursos" className="btn btn-primary">Explorar Cursos</a>
                <a href="https://wa.me/51983029039" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Hablar con un Asesor</a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ position: 'relative' }}>
              {/* Stat card showcase */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.9) 0%, rgba(10, 102, 255, 0.1) 100%)',
                border: '1px solid rgba(10, 102, 255, 0.2)',
                borderRadius: '24px',
                padding: '3rem 2.5rem',
                position: 'relative',
                zIndex: 10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
                  <div>
                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>+10</h3>
                    <p style={{ color: 'white', fontWeight: 600 }}>Países de Alcance</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Educación que trasciende fronteras.</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>15K</h3>
                    <p style={{ color: 'white', fontWeight: 600 }}>Estudiantes Capacitados</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Una comunidad sólida y en constante crecimiento.</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>98%</h3>
                    <p style={{ color: 'white', fontWeight: 600 }}>Satisfacción Académica</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Calificación premium en excelencia y soporte.</p>
                  </div>
                  <div>
                    <h3 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.5rem' }}>100%</h3>
                    <p style={{ color: 'white', fontWeight: 600 }}>Formato Flexible</p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Adaptado por completo a tu estilo de vida ejecutivo.</p>
                  </div>
                </div>
              </div>
              <div className="hero-bg-glow" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', opacity: 0.3, zIndex: 1 }}></div>
            </motion.div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section style={{ background: '#0a0f1d', padding: '6rem 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', marginBottom: '6rem' }}>
          <div className="container">
            <div className="hero-grid" style={{ gap: '3rem' }}>
              <motion.div
                variants={itemVariants}
                className="course-card"
                style={{
                  padding: '3.5rem 2.5rem',
                  textAlign: 'left',
                  borderRadius: '24px',
                  background: 'rgba(13, 20, 36, 0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(10, 102, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  marginBottom: '2rem'
                }}>
                  <Target size={32} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Nuestra Misión</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  Empoderar a profesionales, directivos y ejecutivos líderes con conocimientos disruptivos de vanguardia, metodologías ágiles y un ecosistema de networking de alto nivel, permitiéndoles comandar e innovar en entornos competitivos internacionales y corporativos de constante cambio.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="course-card"
                style={{
                  padding: '3.5rem 2.5rem',
                  textAlign: 'left',
                  borderRadius: '24px',
                  background: 'rgba(13, 20, 36, 0.6)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '16px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '2rem'
                }}>
                  <Eye size={32} />
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Nuestra Visión</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7' }}>
                  Liderar la educación ejecutiva en Hispanoamérica, impulsando un estándar mundial en innovación académica virtual y presencial, forjando el ecosistema definitivo donde los futuros gerentes encuentren las claves estratégicas y conexiones definitivas para transformar el futuro de sus organizaciones.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pilares de Excelencia (Calidad, Conveniencia, Certificación) */}
        <section className="container" style={{ marginBottom: '7rem' }}>
          <motion.div variants={itemVariants} className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>
              Los Pilares de nuestra <span className="text-primary">Excelencia</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Nos basamos en estándares de altísima calidad orientados al éxito pragmático de tu carrera.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            <motion.div
              variants={itemVariants}
              className="course-card"
              style={{ padding: '3rem 2rem', textAlign: 'center', alignItems: 'center' }}
            >
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(10, 102, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Calidad Absoluta</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Formación diseñada minuciosamente por directores corporativos en actividad y mentores de prestigio internacional. Contenidos interactivos orientados a la práctica gerencial y la resolución ágil de casos de negocios reales.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="course-card"
              style={{ padding: '3rem 2rem', textAlign: 'center', alignItems: 'center' }}
            >
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(10, 102, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <Clock size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Máxima Conveniencia</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Tu tiempo es invaluable. Accede a nuestro campus virtual ultra optimizado las 24 horas del día. Avanza a tu ritmo, asiste a las sesiones en vivo y ten a tu disposición el material grabado en alta definición de por vida.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="course-card"
              style={{ padding: '3rem 2rem', textAlign: 'center', alignItems: 'center' }}
            >
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'rgba(10, 102, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.5rem'
              }}>
                <Award size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: 'white' }}>Certificación Verificable</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Valida tus competencias de forma indiscutible. Todos nuestros diplomados otorgan certificados con firma digital segura y código QR único, conectados a un registro global de validación académica internacional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nuestros Objetivos */}
        <section className="container" style={{ marginBottom: '8rem' }}>
          <div className="hero-grid" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div variants={itemVariants} style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600"
                alt="Executive Boardroom"
                style={{
                  width: '100%',
                  borderRadius: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 45px rgba(0,0,0,0.6)'
                }}
              />
              <div className="hero-bg-glow" style={{ top: '20%', right: '20%', width: '250px', height: '250px', opacity: 0.25 }}></div>
            </motion.div>

            <motion.div variants={itemVariants} style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', color: 'white' }}>
                Nuestros <span className="text-primary">Objetivos</span>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '0.2rem' }}><CheckCircle size={20} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.25rem' }}>Fomentar el Liderazgo Ágil</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Capacitar en destrezas blandas directivas indispensables para la correcta toma de decisiones estratégicas y gestión de equipos diversos.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '0.2rem' }}><CheckCircle size={20} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.25rem' }}>Democratizar la Alta Calidad</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Acercar y expandir los programas ejecutivos globales de primer nivel mediante un ecosistema digital amigable, accesible y dinámico.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '0.2rem' }}><CheckCircle size={20} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.25rem' }}>Conectar Talento y Negocios</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Construir y sostener la red de contactos ejecutivos más prestigiosa del continente, alimentando bolsas laborales activas de alta rentabilidad.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ color: 'var(--accent)', marginTop: '0.2rem' }}><CheckCircle size={20} /></div>
                  <div>
                    <h4 style={{ color: 'white', fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.25rem' }}>Promover la Innovación Tecnológica</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Garantizar que cada alumno lidere activamente la inteligencia artificial, analítica de datos y herramientas digitales clave dentro de su organización.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final call to action */}
        <section className="container text-center" style={{ marginBottom: '6rem' }}>
          <div className="cta-box">
            <div className="cta-content">
              <h2>¿Listo para acelerar tu carrera gerencial?</h2>
              <p>Únete hoy a la comunidad ejecutiva líder de Latinoamérica y asegura tu éxito corporativo.</p>
              <div className="cta-buttons">
                <a href="#cursos" className="btn btn-primary">Ver Programas de Élite</a>
                <a href="https://wa.me/51983029039" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Contactar Asesor</a>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <Footer />
    </>
  );
};

const CourseDetailsPage = ({ courseId }) => {
  const [activeModule, setActiveModule] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const courseInfo = getCourseById(courseId);

  if (!courseInfo) {
    return (
      <div style={{ minHeight: '100vh', background: '#070b14', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', flexDirection: 'column' }}>
        <h2>Curso no encontrado</h2>
        <a href="#" className="btn btn-primary" style={{ marginTop: '1rem' }}>Volver al Inicio</a>
      </div>
    );
  }

  const isLive = !courseInfo.modality.includes('Grabado');

  return (
    <>
      <Header activePage={isLive ? 'envivo' : 'asincronicos'} />

      <div style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px', background: '#070b14' }}>

        {/* Cover Image */}
        <div style={{ width: '100%', height: '45vh', backgroundImage: `url(${courseInfo.img})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #070b14 0%, rgba(7,11,20,0.6) 100%)' }}></div>
        </div>

        <div className="container" style={{ marginTop: '-12vh', position: 'relative', zIndex: 10 }}>
          <a href={isLive ? '#programas-envivo' : '#programas-asincronicos'} style={{ color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', marginBottom: '1.5rem', fontWeight: 600, background: 'rgba(7,11,20,0.8)', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <ChevronLeft size={20} style={{ marginRight: '0.5rem' }} /> Volver a cursos
          </a>

          <div className="bg-blob bg-blob-1"></div>
          <div className="bg-blob bg-blob-2"></div>

          <motion.div 
            className="course-detail-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >

            {/* Left Column: Info */}
            <div>
              <motion.div variants={itemVariants} className="course-info-card">
                <span className="premium-badge">{isLive ? 'Curso de Extensión Profesional' : 'Curso Grabado Autoinstructivo'}</span>

                <h1 className="course-info-title">{courseInfo.title}</h1>
                <p className="course-info-desc">
                  {courseInfo.description}
                </p>

                {/* Instructor */}
                {courseInfo.instructor && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', width: 'fit-content' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(10, 102, 255, 0.2)' }}>
                      {courseInfo.instructor.charAt(0)}
                    </div>
                    <div style={{ paddingRight: '1rem' }}>
                      <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.1rem', fontWeight: 600 }}>{courseInfo.instructor}</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{courseInfo.instructorTitle}</p>
                    </div>
                  </div>
                )}

                {/* Stats / Social Proof */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '1rem', padding: '1rem', background: 'rgba(10, 102, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(10, 102, 255, 0.1)', marginBottom: '1.5rem' }}>
                  <Users size={24} color="var(--primary)" />
                  <span><strong style={{ color: 'white' }}>{courseInfo.students} alumnos</strong> se inscribieron recientemente.</span>
                </div>

                {/* Course Details (Schedule, Sessions, Frequency) */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Calendar size={20} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Inicio</div>
                      <div style={{ color: 'white', fontWeight: 600 }}>{courseInfo.startDate}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Clock size={20} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{isLive ? 'Horario' : 'Duración'}</div>
                      <div style={{ color: 'white', fontWeight: 600 }}>{isLive ? courseInfo.schedule : courseInfo.duration}</div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Target size={20} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Contenido</div>
                      <div style={{ color: 'white', fontWeight: 600 }}>{courseInfo.sessions}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Calendar size={20} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Frecuencia</div>
                      <div style={{ color: 'white', fontWeight: 600 }}>{courseInfo.frequency}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'rgba(255,255,255,0.03)', padding: '0.8rem 1.2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <Video size={20} color="var(--accent)" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Modalidad</div>
                      <div style={{ color: 'white', fontWeight: 600 }}>{courseInfo.modality}</div>
                    </div>
                  </div>
                </div>

              </motion.div>


              {/* Methodology */}
              {courseInfo.methodology && courseInfo.methodology.length > 0 && (
                <motion.div variants={itemVariants} className="course-section-card">
                  <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>Metodología</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {courseInfo.methodology.map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <Zap size={20} color="var(--accent)" style={{ marginTop: '0.2rem' }} />
                        <span style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Requirements */}
              {courseInfo.requirements && courseInfo.requirements.length > 0 && (
                <motion.div variants={itemVariants} className="course-section-card">
                  <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>¿Qué necesitas para tomar el curso?</h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {courseInfo.requirements.map((req, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                        <CheckCircle size={20} color="var(--accent)" style={{ marginTop: '0.2rem' }} />
                        <span style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6' }}>{req}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Tools */}
              {courseInfo.tools && courseInfo.tools.length > 0 && (
                <motion.div variants={itemVariants} style={{ marginBottom: '3rem' }}>
                  <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>Herramientas utilizadas</h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {courseInfo.tools.map((tool, idx) => (
                      <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(10, 102, 255, 0.1)', color: 'var(--accent)', padding: '0.8rem 1.5rem', borderRadius: '12px', border: '1px solid rgba(10, 102, 255, 0.3)', fontWeight: 600 }}>
                        <Gem size={18} /> {tool}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Syllabus / Temario */}
              {courseInfo.modules && courseInfo.modules.length > 0 && (
                <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
                  <h2 style={{ fontSize: '1.8rem', color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>Temario del curso</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {courseInfo.modules.map((mod, i) => (
                      <div key={i} style={{ background: 'rgba(13, 20, 36, 0.6)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                        <button
                          onClick={() => setActiveModule(activeModule === i ? null : i)}
                          style={{ width: '100%', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'transparent', border: 'none', color: 'white', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', textAlign: 'left' }}
                        >
                          {mod.title}
                          <span style={{ transform: activeModule === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', color: 'var(--primary)' }}>
                            <ChevronRight size={20} />
                          </span>
                        </button>
                        <AnimatePresence>
                          {activeModule === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', whiteSpace: 'pre-line' }}>
                                {mod.content}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>

            {/* Right Column: Pricing Sticky Card */}
            <motion.div variants={itemVariants} className="pricing-sticky-card">
              <div className="pricing-sticky-inner">
                {isLive ? (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(239, 68, 68, 0.15)', color: '#ef4444', padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 auto 1rem auto', width: 'fit-content', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                    <motion.span 
                      animate={{ opacity: [1, 0.2, 1] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Video size={16} />
                    </motion.span>
                    CLASES EN VIVO
                  </div>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent)', padding: '0.4rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px', margin: '0 auto 1rem auto', width: 'fit-content', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                    <motion.span 
                      animate={{ scale: [1, 1.05, 1] }} 
                      transition={{ repeat: Infinity, duration: 2 }}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      <Clock size={16} />
                    </motion.span>
                    CURSO GRABADO
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.8rem', marginBottom: 'clamp(0.5rem, 2vh, 1.5rem)' }}>
                  <span style={{ background: 'var(--primary)', color: 'white', padding: '0.3rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{courseInfo.discount}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '1rem', textDecoration: 'line-through' }}>{courseInfo.regularPrice}</span>
                </div>

                <div className="pricing-price">{courseInfo.salePrice}</div>

                <a href={`https://wa.me/51983029039?text=${encodeURIComponent(`Hola Canal Ejecutivo quiero separar mi vacante para el curso de ${courseInfo.title}`)}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary pricing-btn btn-glow">
                  <MessageCircle size={20} /> Separar mi vacante
                </a>

                <a href={`https://wa.me/51983029039?text=${encodeURIComponent(`Hola Canal Ejecutivo, quiero mayor información del curso ${courseInfo.title}`)}`} target="_blank" rel="noopener noreferrer" className="pricing-btn-secondary">
                  <MessageCircle size={18} /> Contacta a un asesor
                </a>

                {/* Benefits List */}
                <div className="pricing-benefits">
                  <ul className="pricing-benefits-list">
                    {[
                      { icon: <MessageCircle size={18} />, text: 'Soporte constante' },
                      { icon: <Target size={18} />, text: isLive ? 'Refuerzo en vivo' : 'Acceso de por vida' },
                      { icon: <Award size={18} />, text: 'Certificado Internacional con QR' },
                      { icon: <ShieldCheck size={18} />, text: 'Garantía de aprendizaje' }
                    ].map((benefit, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: 'clamp(0.9rem, 1.5vh, 1.05rem)', lineHeight: '1.2' }}>
                        <span style={{ color: 'var(--primary)', background: 'rgba(10, 102, 255, 0.1)', padding: '0.5rem', borderRadius: '8px', display: 'flex' }}>
                          {benefit.icon}
                        </span>
                        <span>{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const ProgramasEnVivoPage = () => {
  const liveCourses = coursesData.filter(course => !course.modality.includes('Grabado'));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <Header activePage="envivo" />
      <div style={{ minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px', background: '#070b14', position: 'relative' }}>
        <div className="hero-bg-glow" style={{ top: '10%', left: '-10%', width: '500px', height: '500px', opacity: 0.15 }}></div>
        
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{
              background: 'rgba(10, 102, 255, 0.1)',
              color: 'var(--accent)',
              padding: '0.5rem 1.5rem',
              borderRadius: '99px',
              fontSize: '0.9rem',
              fontWeight: 600,
              border: '1px solid rgba(10, 102, 255, 0.3)',
              display: 'inline-block',
              marginBottom: '1.5rem'
            }}>
              Clases Virtuales en Tiempo Real
            </span>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1.5rem' }}>
              Programas <span className="text-primary">En Vivo</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Interactúa directamente con ponentes expertos y profesionales de la región a través de videoconferencias en vivo por Meet.
            </p>
          </motion.div>

          <motion.div 
            className="courses-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {liveCourses.map((course, i) => (
              <motion.div key={i} className="course-card" variants={itemVariants}>
                <div className="course-image-wrapper">
                  <span className={`course-badge ${course.badgeClass}`}>{course.category}</span>
                  <img src={course.img} alt={course.title} className="course-image" loading="lazy" />
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta-grid" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div className="course-meta-item" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={14} className="course-meta-icon" />
                      <span>{course.date}</span>
                    </div>
                    <div className="course-meta-item" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Video size={14} className="course-meta-icon" />
                      <span>{course.modality}</span>
                    </div>
                  </div>
                  <div style={{ margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1rem' }}>{course.regularPrice}</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.4rem' }}>{course.salePrice}</span>
                  </div>
                  <a href={`#curso-${course.id}`} className="btn btn-primary course-btn-primary" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>
                    VER DETALLES DEL CURSO
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const COURSES_PER_PAGE = 12;

const ProgramasAsincronicosPage = () => {
  const allAsyncCourses = coursesData.filter(course => course.modality.includes('Grabado'));
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = [...new Set(allAsyncCourses.map(c => c.category))];

  // Filter by category and search
  const filteredCourses = allAsyncCourses.filter(c => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' || 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const startIdx = (currentPage - 1) * COURSES_PER_PAGE;
  const paginatedCourses = filteredCourses.slice(startIdx, startIdx + COURSES_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  // Render star rating
  const renderStars = (rating) => {
    const stars = [];
    const full = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className="star" style={{ opacity: i < full ? 1 : 0.3 }}>★</span>
      );
    }
    return stars;
  };

  return (
    <>
      <Header activePage="asincronicos" />
      <div className="async-catalog">
        <div className="hero-bg-glow" style={{ top: '5%', left: '-10%', width: '500px', height: '500px', opacity: 0.12 }}></div>
        <div className="hero-bg-glow" style={{ top: '40%', right: '-10%', width: '400px', height: '400px', opacity: 0.08, background: 'radial-gradient(circle, rgba(56,189,248,0.4), transparent 70%)' }}></div>

        <div className="container">
          {/* Header */}
          <motion.div
            className="async-catalog-header"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span style={{
              background: 'rgba(56, 189, 248, 0.1)',
              color: 'var(--accent)',
              padding: '0.5rem 1.5rem',
              borderRadius: '99px',
              fontSize: '0.9rem',
              fontWeight: 600,
              border: '1px solid rgba(56, 189, 248, 0.3)',
              display: 'inline-block',
              marginBottom: '1rem'
            }}>
              📚 Estudia a tu Propio Ritmo
            </span>
            <h1>
              Cursos <span className="text-accent">Online</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
              Accede a contenido grabado de alta calidad y estudia cuando quieras, donde quieras.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            className="async-filter-bar"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="async-filter-select">
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
              >
                <option value="all">Ver todas las categorías</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="async-filter-search">
              <Search size={16} />
              <input
                type="text"
                placeholder="Buscar curso..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
              />
            </div>

            {(selectedCategory !== 'all' || searchQuery.trim() !== '') && (
              <button className="async-filter-reset" onClick={handleResetFilters}>
                Restablecer filtros
              </button>
            )}
          </motion.div>

          {/* Pagination Info */}
          <motion.div
            className="async-pagination-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <span>Pag {currentPage} de {totalPages || 1}</span>
            <button
              className="pagination-arrow"
              onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage >= totalPages}
              style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'var(--primary)', border: 'none', color: 'white',
                cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                opacity: currentPage >= totalPages ? 0.3 : 1,
                transition: 'all 0.3s ease'
              }}
            >
              <ChevronRight size={16} />
            </button>
          </motion.div>

          {/* Courses Grid - 4 columns */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedCategory}-${currentPage}`}
              className="async-courses-grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
            >
              {paginatedCourses.length > 0 ? (
                paginatedCourses.map((course) => (
                  <motion.a
                    key={course.id}
                    href={`#curso-${course.id}`}
                    className="async-card"
                    variants={itemVariants}
                    style={{ textDecoration: 'none' }}
                  >
                    {/* Image with play button */}
                    <div className="async-card-img-wrapper">
                      <img src={course.img} alt={course.title} loading="lazy" />
                      <div className="async-card-play">
                        <Play size={22} fill="white" />
                      </div>
                    </div>

                    {/* Body */}
                    <div className="async-card-body">
                      {/* Category badge */}
                      <div className="async-card-category-row">
                        <span className={`async-card-badge ${course.badgeClass}`}>{course.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className="async-card-title">{course.title}</h3>

                      {/* Meta: duration, rating, students */}
                      <div className="async-card-meta">
                        <div className="async-card-meta-item">
                          <Clock size={13} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="async-card-rating">
                          <span className="rating-value">{course.rating || '4.5'}</span>
                          {renderStars(course.rating || 4.5)}
                        </div>
                        <div className="async-card-meta-item">
                          <Users size={13} />
                          <span>{course.students}</span>
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="async-card-pricing">
                        <div>
                          <span className="original-price">{course.regularPrice}</span>
                          {' '}
                          <span className="discount-tag">{course.discount}</span>
                        </div>
                        <div className="sale-price">
                          <span className="price-value">
                            <ShoppingCart size={14} />
                            {course.salePrice}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))
              ) : (
                <div className="async-no-results">
                  <h3>No se encontraron cursos</h3>
                  <p>Intenta con otra categoría o restablece los filtros.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              className="async-pagination"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <button
                className="pagination-arrow"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage <= 1}
              >
                <ChevronLeft size={18} />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  className={currentPage === page ? 'active' : ''}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </button>
              ))}

              <button
                className="pagination-arrow"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
              >
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash);
  const [isLoading, setIsLoading] = useState(true);


  const testimonialsData = [
    {
      name: 'Catalina Navarrete',
      flag: '🇲🇽',
      text: 'Voy a la mitad de mi carrera y en todos estos años jamás aprendí todo lo que se enseñó en este programa. Realmente es algo que se necesita saber, es la base para...',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    },
    {
      name: 'Pablo Fonseca',
      flag: '🇦🇷',
      text: 'Me encantó, jamás había aprendido tanto tan rápido y con una calidad tan asombrosa. Muchísimas gracias Canal Ejecutivo, gracias a ustedes podré progresar mucho más...',
      img: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
    },
    {
      name: 'Sam Rojas',
      flag: '🇨🇴',
      text: 'Vengo de ver otras opciones de educación, y definitivamente para mí es mejor Canal Ejecutivo. Me gusta la forma de explicar al detalle las cosas, con un enfoque práctico...',
      img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
    }
  ];

  const extendedTestimonials = Array(10).fill(testimonialsData).flat(); // 30 items for infinite sliding feel
  const [activeTestimonial, setActiveTestimonial] = useState(15);

  const nextTestimonial = () => {
    if (activeTestimonial < extendedTestimonials.length - 1) setActiveTestimonial(p => p + 1);
  };
  const prevTestimonial = () => {
    if (activeTestimonial > 0) setActiveTestimonial(p => p - 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentPath(hash);
      if (!['#cursos', '#aliados', '#testimonios'].includes(hash)) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPath === '#contacto') {
    return <><ContactPage /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#privacidad') {
    return <><PrivacyPage /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#terminos') {
    return <><TermsPage /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#nosotros') {
    return <><NosotrosPage /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#programas-envivo') {
    return <><ProgramasEnVivoPage /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#programas-asincronicos') {
    return <><ProgramasAsincronicosPage /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#escuelas') {
    return <><Header activePage="escuelas" isScrolledExternal={true} /><EscuelasPage /><Footer /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#escuela-ia') {
    return <><Header activePage="escuelas" isScrolledExternal={true} /><EscuelaIAPage /><Footer /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#escuela-redes') {
    return <><Header activePage="escuelas" isScrolledExternal={true} /><EscuelaRedesPage /><Footer /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath === '#escuela-ejecutivo') {
    return <><Header activePage="escuelas" isScrolledExternal={true} /><EscuelaEjecutivoPage /><Footer /><ScrollToTop /><WhatsAppFloat /></>;
  } else if (currentPath.startsWith('#curso-')) {
    return <><CourseDetailsPage courseId={currentPath.replace('#curso-', '')} /><ScrollToTop /><WhatsAppFloat /></>;
  }

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Header activePage="inicio" isScrolledExternal={isScrolled} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="container hero-grid">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
          >
            <h1>Eleva tu Potencial <span>Ejecutivo</span></h1>
            <p className="hero-subtitle">
              Formación de élite, estrategias de vanguardia y networking de alto nivel.
              El canal definitivo para líderes y profesionales que buscan transformar el futuro.
            </p>
            <div className="hero-cta">
              <a href="#cursos" className="btn btn-primary">
                Ver Programas <ChevronRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="spline-container">
              <iframe
                src="https://my.spline.design/genkubgreetingrobot-MthtyBSEI0UEHadnYdxoN5lg/"
                frameBorder="0"
                title="Canal Ejecutivo Robot 3D"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '-15%',
                  width: '130%',
                  height: 'calc(100% + 80px)',
                  border: 'none',
                  pointerEvents: 'auto'
                }}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="aliados" className="partners">
        <div className="container">
          <h3>Nuestros aliados</h3>
          <motion.div
            className="partners-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {[
              { name: 'Proyectos San Marcos', img: '/aliado2.png' },
              { name: 'Fundación San Marcos', img: '/aliado1.png' },
              { name: 'IEEE ComSoc UPC', img: '/aliado3.png' }
            ].map((partner, i) => (
              <motion.div key={i} className="partner-logo" variants={fadeUpVariant}>
                <img src={partner.img} alt={partner.name} style={{ height: '140px', objectFit: 'contain' }} loading="lazy" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeUpVariant}>
              <StatItem number={15000} suffix="+" label="Estudiantes capacitados" />
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <StatItem number={50} suffix="+" label="Cursos disponibles" />
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <StatItem number={10} suffix="+" label="Países alcanzados" />
            </motion.div>
            <motion.div variants={fadeUpVariant}>
              <StatItem number={98} suffix="%" label="Satisfacción" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="section-title">¿Por qué elegir <span className="text-primary">Canal Ejecutivo</span>?</h2>
            <p className="section-subtitle">Nos diferenciamos por ofrecer una experiencia educativa integral, práctica y orientada a resultados reales.</p>
          </motion.div>

          <motion.div
            className="why-us-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              { icon: <GraduationCap size={28} />, title: 'Certificación Profesional', desc: 'Obtén certificados con valor curricular respaldados por instituciones aliadas de prestigio.' },
              { icon: <Globe size={28} />, title: 'Alcance Internacional', desc: 'Accede a nuestros programas desde cualquier parte del mundo, 100% en línea y a tu ritmo.' },
              { icon: <ShieldCheck size={28} />, title: 'Contenido de Calidad', desc: 'Cursos diseñados por expertos con años de experiencia en el sector empresarial y académico.' },
              { icon: <Zap size={28} />, title: 'Aprendizaje Práctico', desc: 'Metodología orientada a casos reales y herramientas que puedes aplicar de inmediato en tu trabajo.' }
            ].map((item, i) => (
              <motion.div key={i} className="why-card" variants={fadeUpVariant}>
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="section-title">Próximos <span className="text-primary">Programas</span></h2>
            <p className="section-subtitle">
              Capacitación especializada diseñada por expertos de la industria para llevar tu carrera al siguiente nivel.
            </p>
          </motion.div>

          <motion.div
            className="courses-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {coursesData.filter(course => !course.modality.includes('Grabado')).map((course, i) => (
              <motion.div key={i} className="course-card" variants={fadeUpVariant}>
                <div className="course-image-wrapper">
                  <span className={`course-badge ${course.badgeClass}`}>{course.category}</span>
                  <img src={course.img} alt={course.title} className="course-image" loading="lazy" />
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <div className="course-meta-grid" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    <div className="course-meta-item" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Calendar size={14} className="course-meta-icon" />
                      <span>{course.date}</span>
                    </div>
                    <div className="course-meta-item" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Video size={14} className="course-meta-icon" />
                      <span>{course.modality}</span>
                    </div>
                  </div>
                  <div style={{ margin: '1rem 0', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)', fontSize: '1rem' }}>{course.regularPrice}</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold', fontSize: '1.4rem' }}>{course.salePrice}</span>
                  </div>
                  <a href={`#curso-${course.id}`} className="btn btn-primary course-btn-primary" style={{ width: '100%', display: 'inline-block', textAlign: 'center' }}>VER DETALLES DEL CURSO</a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Testimonials */}
      <section id="testimonios" className="section testimonials-new">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
          >
            <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '3rem', lineHeight: '1.2' }}>
              Tu puedes ser la próxima<br />historia de éxito
            </h2>
          </motion.div>

          <div className="testimonials-carousel-wrapper">
            <button className="carousel-arrow arrow-left" onClick={prevTestimonial} aria-label="Anterior">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-arrow arrow-right" onClick={nextTestimonial} aria-label="Siguiente">
              <ChevronRight size={24} />
            </button>

            <div className="testimonials-carousel">
              <motion.div
                className="testimonials-track"
                animate={{ x: `calc(50% - 170px - ${activeTestimonial * 364}px)` }}
                transition={{ type: "tween", ease: "easeInOut", duration: 0.6 }}
              >
                {extendedTestimonials.map((t, i) => {
                  const isActive = i === activeTestimonial;

                  return (
                    <div
                      key={i}
                      className={`test-card ${isActive ? 'active' : ''}`}
                    >
                      <div className="test-header">
                        <div className="stars">
                          {[...Array(5)].map((_, index) => <Star key={index} size={18} fill="#eab308" color="#eab308" />)}
                        </div>
                        <Quote size={40} color="rgba(10, 102, 255, 0.2)" />
                      </div>

                      <div className="test-body">
                        <p>{t.text}</p>
                      </div>

                      <div className="test-footer">
                        <img src={t.img} alt={t.name} className="test-avatar" loading="lazy" />
                        <div className="test-author">
                          <span className="test-name">{t.name}</span>
                          <span className="test-flag">{t.flag}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section container">
        <motion.div
          className="cta-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="cta-content">
            <h2>¿Listo para el siguiente nivel?</h2>
            <p>Únete a la comunidad de líderes que están definiendo el futuro de los negocios. Obtén acceso anticipado a nuestros próximos programas y eventos exclusivos.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/51983029039" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', display: 'inline-block' }}>
                Agenda una Consulta
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </>
  );
}

export default App;
