import { motion } from 'framer-motion';
import { 
  Cpu, Wifi, Shield, Server, Globe, Zap,
  Radio, Network, Rocket, ChevronRight,
  CheckCircle, TrendingUp, Sparkles, Target
} from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const importanceItems = [
  {
    icon: Globe,
    title: 'Conectividad Global',
    desc: 'Más de 30 mil millones de dispositivos estarán conectados para 2030. Los profesionales en redes y electrónica son los arquitectos invisibles que hacen posible el mundo digital en el que vivimos.'
  },
  {
    icon: Shield,
    title: 'Ciberseguridad Crítica',
    desc: 'Los ciberataques cuestan más de $8 billones anuales a nivel mundial. Proteger la infraestructura de red es una de las habilidades más valoradas y urgentes en el mercado laboral actual.'
  },
  {
    icon: Radio,
    title: 'Internet de las Cosas (IoT)',
    desc: 'El IoT está revolucionando industrias desde la manufactura hasta la salud. Diseñar y gestionar ecosistemas de dispositivos conectados es una competencia clave para el profesional del futuro.'
  },
  {
    icon: Server,
    title: 'Infraestructura Cloud & Data Centers',
    desc: 'La nube no existe sin hardware y redes. Comprender la capa física de la tecnología te da una ventaja competitiva única para diseñar soluciones robustas, escalables y de alto rendimiento.'
  }
];

const perfilItems = [
  'Diseñar y administrar redes empresariales de alta disponibilidad',
  'Implementar soluciones de seguridad perimetral y monitoreo',
  'Desarrollar proyectos de IoT y sistemas embebidos',
  'Configurar infraestructura cloud y virtualización',
  'Diagnosticar y resolver problemas complejos de conectividad',
  'Liderar equipos de soporte y operaciones de red'
];

const EscuelaRedesPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="escuela-detail"
    >
      {/* Background Orbs */}
      <div className="escuela-detail-orb" style={{ background: 'radial-gradient(circle, rgba(52, 211, 153, 0.12) 0%, transparent 70%)', top: '5%', right: '-10%', width: '600px', height: '600px' }}></div>
      <div className="escuela-detail-orb" style={{ background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)', bottom: '10%', left: '-10%', width: '500px', height: '500px' }}></div>

      {/* Hero */}
      <section className="escuela-detail-hero" style={{ '--school-color': '#34d399', '--school-gradient': 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)' }}>
        <div className="container">
          <motion.div variants={itemVariants} className="escuela-detail-hero-content">
            <a href="#escuelas" className="escuela-detail-back">
              <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
              Volver a Escuelas
            </a>
            <span className="escuela-detail-badge" style={{ background: 'rgba(52, 211, 153, 0.1)', color: '#34d399', borderColor: 'rgba(52, 211, 153, 0.3)' }}>
              <Cpu size={16} style={{ marginRight: '0.5rem' }} />
              Escuela de Redes y Electrónica
            </span>
            <h1 className="escuela-detail-title">
              Domina las <span style={{ background: 'linear-gradient(90deg, #34d399, #14b8a6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Redes y Electrónica</span>
            </h1>
            <p className="escuela-detail-subtitle">
              Construye la columna vertebral del mundo digital. Desde redes corporativas de alta disponibilidad 
              hasta dispositivos IoT y sistemas electrónicos avanzados, conviértete en el ingeniero que las empresas necesitan.
            </p>
          </motion.div>

          {/* Floating Icon */}
          <motion.div 
            variants={itemVariants}
            className="escuela-detail-hero-visual"
          >
            <div className="escuela-floating-icon" style={{ '--school-color': '#34d399', '--school-gradient': 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)' }}>
              <Network size={80} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Importancia Section */}
      <section className="escuela-detail-section">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="escuela-section-title">
              ¿Por qué estudiar <span style={{ color: '#34d399' }}>Redes y Electrónica</span>?
            </h2>
            <p className="escuela-section-subtitle">
              Sin redes, no hay internet. Sin electrónica, no hay tecnología. Los profesionales que dominan la infraestructura son los cimientos de toda transformación digital.
            </p>
          </motion.div>

          <div className="escuela-importance-grid">
            {importanceItems.map((item, i) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="escuela-importance-card"
                  style={{ '--school-color': '#34d399' }}
                >
                  <div className="escuela-importance-icon">
                    <IconComp size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perfil del Egresado */}
      <section className="escuela-detail-section" style={{ background: 'rgba(52, 211, 153, 0.02)', borderTop: '1px solid rgba(52, 211, 153, 0.08)', borderBottom: '1px solid rgba(52, 211, 153, 0.08)' }}>
        <div className="container">
          <div className="escuela-perfil-grid">
            <motion.div variants={itemVariants}>
              <h2 className="escuela-section-title" style={{ textAlign: 'left' }}>
                Perfil del <span style={{ color: '#34d399' }}>Egresado</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Al completar los programas de nuestra Escuela de Redes y Electrónica, serás capaz de:
              </p>
              <div className="escuela-perfil-list">
                {perfilItems.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="escuela-perfil-item" style={{ '--school-color': '#34d399' }}>
                    <CheckCircle size={20} style={{ color: '#34d399', flexShrink: 0 }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="escuela-perfil-visual">
              <div className="escuela-perfil-stats">
                <div className="escuela-perfil-stat" style={{ '--school-color': '#34d399' }}>
                  <Wifi size={24} />
                  <span className="escuela-perfil-stat-number">30B+</span>
                  <span className="escuela-perfil-stat-label">Dispositivos conectados 2030</span>
                </div>
                <div className="escuela-perfil-stat" style={{ '--school-color': '#34d399' }}>
                  <TrendingUp size={24} />
                  <span className="escuela-perfil-stat-number">35%</span>
                  <span className="escuela-perfil-stat-label">Crecimiento anual en IoT</span>
                </div>
                <div className="escuela-perfil-stat" style={{ '--school-color': '#34d399' }}>
                  <Shield size={24} />
                  <span className="escuela-perfil-stat-number">$8T</span>
                  <span className="escuela-perfil-stat-label">Costo anual de ciberataques</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="escuela-detail-section">
        <div className="container">
          <motion.div variants={itemVariants} className="coming-soon-section" style={{ '--school-color': '#34d399', '--school-gradient': 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)' }}>
            <div className="coming-soon-particles">
              <div className="coming-soon-particle"></div>
              <div className="coming-soon-particle"></div>
              <div className="coming-soon-particle"></div>
              <div className="coming-soon-particle"></div>
              <div className="coming-soon-particle"></div>
              <div className="coming-soon-particle"></div>
            </div>
            <div className="coming-soon-content">
              <div className="coming-soon-icon-wrapper">
                <Rocket size={48} />
              </div>
              <span className="coming-soon-badge">Muy Pronto</span>
              <h2>Cursos en Desarrollo</h2>
              <p>
                Estamos creando programas especializados en Redes y Electrónica con contenido 
                práctico, laboratorios virtuales y certificaciones reconocidas por la industria.
              </p>
              <div className="coming-soon-features">
                <div className="coming-soon-feature">
                  <Zap size={18} />
                  <span>Redes Empresariales & CCNA</span>
                </div>
                <div className="coming-soon-feature">
                  <Sparkles size={18} />
                  <span>IoT & Sistemas Embebidos</span>
                </div>
                <div className="coming-soon-feature">
                  <Target size={18} />
                  <span>Ciberseguridad & Ethical Hacking</span>
                </div>
              </div>
              <a 
                href="https://wa.me/51983029039?text=Hola%2C%20me%20interesa%20la%20Escuela%20de%20Redes%20y%20Electr%C3%B3nica" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary coming-soon-btn"
              >
                Quiero ser notificado al lanzamiento
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default EscuelaRedesPage;
