import { motion } from 'framer-motion';
import { 
  Briefcase, Award, Users, Crown, TrendingUp,
  BarChart3, Handshake, Rocket, ChevronRight,
  CheckCircle, Sparkles, Target, Zap
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
    icon: Crown,
    title: 'Liderazgo Transformacional',
    desc: 'El 85% de las empresas Fortune 500 invierten en desarrollo ejecutivo. Los líderes que se capacitan continuamente tienen 3x más probabilidad de llevar a sus organizaciones al éxito sostenible.'
  },
  {
    icon: BarChart3,
    title: 'Visión Estratégica',
    desc: 'En un entorno empresarial volátil e incierto, la capacidad de pensar estratégicamente y anticipar tendencias no es un lujo: es una necesidad. Nuestros programas te dan esa ventaja competitiva.'
  },
  {
    icon: Handshake,
    title: 'Networking de Alto Nivel',
    desc: 'El 70% de las oportunidades de negocio surgen a través de conexiones profesionales. Nuestra comunidad ejecutiva te conecta con líderes, directivos e innovadores de toda Latinoamérica.'
  },
  {
    icon: Award,
    title: 'Resultados Medibles',
    desc: 'Los ejecutivos con formación especializada logran un 25% más de crecimiento en sus organizaciones. Cada programa está diseñado para generar impacto real e inmediato en tu carrera y empresa.'
  }
];

const perfilItems = [
  'Liderar equipos multidisciplinarios de alto rendimiento',
  'Diseñar estrategias de crecimiento y expansión empresarial',
  'Negociar y comunicar con impacto a nivel ejecutivo',
  'Gestionar el cambio organizacional y la innovación',
  'Tomar decisiones basadas en análisis financiero estratégico',
  'Construir una marca personal de liderazgo influyente'
];

const EscuelaEjecutivoPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="escuela-detail"
    >
      {/* Background Orbs */}
      <div className="escuela-detail-orb" style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, transparent 70%)', top: '5%', right: '-10%', width: '600px', height: '600px' }}></div>
      <div className="escuela-detail-orb" style={{ background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 70%)', bottom: '10%', left: '-10%', width: '500px', height: '500px' }}></div>

      {/* Hero */}
      <section className="escuela-detail-hero" style={{ '--school-color': '#f59e0b', '--school-gradient': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' }}>
        <div className="container">
          <motion.div variants={itemVariants} className="escuela-detail-hero-content">
            <a href="#escuelas" className="escuela-detail-back">
              <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
              Volver a Escuelas
            </a>
            <span className="escuela-detail-badge" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <Briefcase size={16} style={{ marginRight: '0.5rem' }} />
              Escuela de Desarrollo Ejecutivo
            </span>
            <h1 className="escuela-detail-title">
              Potencia tu <span style={{ background: 'linear-gradient(90deg, #f59e0b, #ef4444)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Desarrollo Ejecutivo</span>
            </h1>
            <p className="escuela-detail-subtitle">
              Eleva tu liderazgo al siguiente nivel con programas diseñados para ejecutivos, directores y 
              emprendedores de alto impacto. Estrategia, innovación y visión de negocio para transformar organizaciones.
            </p>
          </motion.div>

          {/* Floating Icon */}
          <motion.div 
            variants={itemVariants}
            className="escuela-detail-hero-visual"
          >
            <div className="escuela-floating-icon" style={{ '--school-color': '#f59e0b', '--school-gradient': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' }}>
              <Crown size={80} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Importancia Section */}
      <section className="escuela-detail-section">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="escuela-section-title">
              ¿Por qué invertir en <span style={{ color: '#f59e0b' }}>Desarrollo Ejecutivo</span>?
            </h2>
            <p className="escuela-section-subtitle">
              El talento sin formación es como un diamante sin pulir. Los mejores líderes del mundo nunca dejan de aprender y evolucionar.
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
                  style={{ '--school-color': '#f59e0b' }}
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
      <section className="escuela-detail-section" style={{ background: 'rgba(245, 158, 11, 0.02)', borderTop: '1px solid rgba(245, 158, 11, 0.08)', borderBottom: '1px solid rgba(245, 158, 11, 0.08)' }}>
        <div className="container">
          <div className="escuela-perfil-grid">
            <motion.div variants={itemVariants}>
              <h2 className="escuela-section-title" style={{ textAlign: 'left' }}>
                Perfil del <span style={{ color: '#f59e0b' }}>Egresado</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Al completar los programas de nuestra Escuela de Desarrollo Ejecutivo, serás capaz de:
              </p>
              <div className="escuela-perfil-list">
                {perfilItems.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="escuela-perfil-item" style={{ '--school-color': '#f59e0b' }}>
                    <CheckCircle size={20} style={{ color: '#f59e0b', flexShrink: 0 }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="escuela-perfil-visual">
              <div className="escuela-perfil-stats">
                <div className="escuela-perfil-stat" style={{ '--school-color': '#f59e0b' }}>
                  <Users size={24} />
                  <span className="escuela-perfil-stat-number">85%</span>
                  <span className="escuela-perfil-stat-label">Fortune 500 invierte en capacitación</span>
                </div>
                <div className="escuela-perfil-stat" style={{ '--school-color': '#f59e0b' }}>
                  <TrendingUp size={24} />
                  <span className="escuela-perfil-stat-number">3x</span>
                  <span className="escuela-perfil-stat-label">Mayor probabilidad de éxito</span>
                </div>
                <div className="escuela-perfil-stat" style={{ '--school-color': '#f59e0b' }}>
                  <Award size={24} />
                  <span className="escuela-perfil-stat-number">25%</span>
                  <span className="escuela-perfil-stat-label">Más crecimiento organizacional</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="escuela-detail-section">
        <div className="container">
          <motion.div variants={itemVariants} className="coming-soon-section" style={{ '--school-color': '#f59e0b', '--school-gradient': 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)' }}>
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
                Estamos diseñando programas ejecutivos de alto impacto con mentores de trayectoria 
                internacional y metodologías probadas por las mejores escuelas de negocios del mundo.
              </p>
              <div className="coming-soon-features">
                <div className="coming-soon-feature">
                  <Zap size={18} />
                  <span>Liderazgo & Gestión de Equipos</span>
                </div>
                <div className="coming-soon-feature">
                  <Sparkles size={18} />
                  <span>Estrategia & Innovación Empresarial</span>
                </div>
                <div className="coming-soon-feature">
                  <Target size={18} />
                  <span>Negociación & Comunicación Ejecutiva</span>
                </div>
              </div>
              <a 
                href="https://wa.me/51983029039?text=Hola%2C%20me%20interesa%20la%20Escuela%20de%20Desarrollo%20Ejecutivo" 
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

export default EscuelaEjecutivoPage;
