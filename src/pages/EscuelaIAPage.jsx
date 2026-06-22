import { motion } from 'framer-motion';
import { 
  Brain, Bot, Sparkles, TrendingUp, Globe, 
  Lightbulb, BarChart3, Layers, Rocket, ChevronRight,
  CheckCircle, Zap, Target
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
    icon: TrendingUp,
    title: 'Mercado en Crecimiento Exponencial',
    desc: 'La industria de la IA se proyecta a superar los $1.8 billones para 2030. Los profesionales capacitados en IA son los más demandados y mejor remunerados del mercado tecnológico global.'
  },
  {
    icon: Bot,
    title: 'Automatización Inteligente',
    desc: 'Las empresas están transformando sus operaciones con IA. Desde chatbots hasta sistemas de decisión autónoma, dominar estas herramientas te posiciona como un profesional indispensable.'
  },
  {
    icon: Lightbulb,
    title: 'Innovación sin Límites',
    desc: 'La IA Generativa, el Deep Learning y los modelos de lenguaje están creando industrias completamente nuevas. Ser parte de esta revolución significa liderar el cambio, no solo adaptarse a él.'
  },
  {
    icon: BarChart3,
    title: 'Toma de Decisiones Basada en Datos',
    desc: 'Los líderes del futuro no se basan en intuición. Aprende a utilizar analytics avanzados, modelos predictivos y herramientas de IA para tomar decisiones empresariales con precisión quirúrgica.'
  }
];

const perfilItems = [
  'Diseñar e implementar soluciones basadas en Inteligencia Artificial',
  'Crear modelos de Machine Learning y Deep Learning',
  'Utilizar IA Generativa para innovar en productos y servicios',
  'Automatizar procesos empresariales con inteligencia',
  'Liderar proyectos de transformación digital con IA',
  'Analizar datos masivos para generar insights estratégicos'
];

const EscuelaIAPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="escuela-detail"
    >
      {/* Background Orbs */}
      <div className="escuela-detail-orb" style={{ background: 'radial-gradient(circle, rgba(0, 229, 255, 0.12) 0%, transparent 70%)', top: '5%', right: '-10%', width: '600px', height: '600px' }}></div>
      <div className="escuela-detail-orb" style={{ background: 'radial-gradient(circle, rgba(10, 102, 255, 0.1) 0%, transparent 70%)', bottom: '10%', left: '-10%', width: '500px', height: '500px' }}></div>

      {/* Hero */}
      <section className="escuela-detail-hero" style={{ '--school-color': '#00e5ff', '--school-gradient': 'linear-gradient(135deg, #00e5ff 0%, #0a66ff 100%)' }}>
        <div className="container">
          <motion.div variants={itemVariants} className="escuela-detail-hero-content">
            <a href="#escuelas" className="escuela-detail-back">
              <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
              Volver a Escuelas
            </a>
            <span className="escuela-detail-badge" style={{ background: 'rgba(0, 229, 255, 0.1)', color: '#00e5ff', borderColor: 'rgba(0, 229, 255, 0.3)' }}>
              <Brain size={16} style={{ marginRight: '0.5rem' }} />
              Escuela de Inteligencia Artificial
            </span>
            <h1 className="escuela-detail-title">
              Domina la <span style={{ background: 'linear-gradient(90deg, #00e5ff, #0a66ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Inteligencia Artificial</span>
            </h1>
            <p className="escuela-detail-subtitle">
              Conviértete en un experto en las tecnologías que están transformando cada industria. 
              Desde los fundamentos de Machine Learning hasta las aplicaciones más avanzadas de IA Generativa, 
              nuestra escuela te prepara para liderar la próxima revolución tecnológica.
            </p>
          </motion.div>

          {/* Floating Icon */}
          <motion.div 
            variants={itemVariants}
            className="escuela-detail-hero-visual"
          >
            <div className="escuela-floating-icon" style={{ '--school-color': '#00e5ff', '--school-gradient': 'linear-gradient(135deg, #00e5ff 0%, #0a66ff 100%)' }}>
              <Brain size={80} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Importancia Section */}
      <section className="escuela-detail-section">
        <div className="container">
          <motion.div variants={itemVariants} className="text-center" style={{ marginBottom: '4rem' }}>
            <h2 className="escuela-section-title">
              ¿Por qué estudiar <span style={{ color: '#00e5ff' }}>Inteligencia Artificial</span>?
            </h2>
            <p className="escuela-section-subtitle">
              La IA no es el futuro, es el presente. Y los profesionales que dominen estas tecnologías serán quienes definan las reglas del juego.
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
                  style={{ '--school-color': '#00e5ff' }}
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
      <section className="escuela-detail-section" style={{ background: 'rgba(0, 229, 255, 0.02)', borderTop: '1px solid rgba(0, 229, 255, 0.08)', borderBottom: '1px solid rgba(0, 229, 255, 0.08)' }}>
        <div className="container">
          <div className="escuela-perfil-grid">
            <motion.div variants={itemVariants}>
              <h2 className="escuela-section-title" style={{ textAlign: 'left' }}>
                Perfil del <span style={{ color: '#00e5ff' }}>Egresado</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                Al completar los programas de nuestra Escuela de IA, serás capaz de:
              </p>
              <div className="escuela-perfil-list">
                {perfilItems.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="escuela-perfil-item" style={{ '--school-color': '#00e5ff' }}>
                    <CheckCircle size={20} style={{ color: '#00e5ff', flexShrink: 0 }} />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="escuela-perfil-visual">
              <div className="escuela-perfil-stats">
                <div className="escuela-perfil-stat" style={{ '--school-color': '#00e5ff' }}>
                  <Layers size={24} />
                  <span className="escuela-perfil-stat-number">+500K</span>
                  <span className="escuela-perfil-stat-label">Empleos en IA para 2028</span>
                </div>
                <div className="escuela-perfil-stat" style={{ '--school-color': '#00e5ff' }}>
                  <TrendingUp size={24} />
                  <span className="escuela-perfil-stat-number">40%</span>
                  <span className="escuela-perfil-stat-label">Mayor salario promedio</span>
                </div>
                <div className="escuela-perfil-stat" style={{ '--school-color': '#00e5ff' }}>
                  <Globe size={24} />
                  <span className="escuela-perfil-stat-number">100%</span>
                  <span className="escuela-perfil-stat-label">Demanda global</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="escuela-detail-section">
        <div className="container">
          <motion.div variants={itemVariants} className="coming-soon-section" style={{ '--school-color': '#00e5ff', '--school-gradient': 'linear-gradient(135deg, #00e5ff 0%, #0a66ff 100%)' }}>
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
                Estamos preparando programas de clase mundial en Inteligencia Artificial. 
                Nuestro equipo de expertos está diseñando contenido práctico y actualizado 
                para que seas el primero en dominar estas tecnologías.
              </p>
              <div className="coming-soon-features">
                <div className="coming-soon-feature">
                  <Zap size={18} />
                  <span>Machine Learning & Deep Learning</span>
                </div>
                <div className="coming-soon-feature">
                  <Sparkles size={18} />
                  <span>IA Generativa & Prompt Engineering</span>
                </div>
                <div className="coming-soon-feature">
                  <Target size={18} />
                  <span>Computer Vision & NLP</span>
                </div>
              </div>
              <a 
                href="https://wa.me/51983029039?text=Hola%2C%20me%20interesa%20la%20Escuela%20de%20Inteligencia%20Artificial" 
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

export default EscuelaIAPage;
