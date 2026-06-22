import { motion } from 'framer-motion';
import { 
  Brain, Cpu, Briefcase, ChevronRight, Sparkles, 
  Rocket, Globe, Zap 
} from 'lucide-react';

const escuelas = [
  {
    id: 'ia',
    slug: 'escuela-ia',
    title: 'Inteligencia Artificial',
    icon: Brain,
    color: '#00e5ff',
    gradient: 'linear-gradient(135deg, #00e5ff 0%, #0a66ff 100%)',
    glowColor: 'rgba(0, 229, 255, 0.15)',
    borderColor: 'rgba(0, 229, 255, 0.3)',
    description: 'Domina las tecnologías que están redefiniendo el futuro. Desde Machine Learning hasta IA Generativa, prepárate para liderar la revolución tecnológica más importante de nuestra era.',
    stats: [
      { icon: Sparkles, label: 'IA Generativa' },
      { icon: Cpu, label: 'Machine Learning' },
      { icon: Globe, label: 'Automatización' },
    ]
  },
  {
    id: 'redes',
    slug: 'escuela-redes',
    title: 'Redes y Electrónica',
    icon: Cpu,
    color: '#34d399',
    gradient: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
    glowColor: 'rgba(52, 211, 153, 0.15)',
    borderColor: 'rgba(52, 211, 153, 0.3)',
    description: 'Construye y gestiona la infraestructura digital del mañana. Desde redes empresariales hasta IoT y sistemas embebidos, conviértete en el arquitecto de la conectividad.',
    stats: [
      { icon: Globe, label: 'Networking' },
      { icon: Zap, label: 'IoT & Embedded' },
      { icon: Cpu, label: 'Ciberseguridad' },
    ]
  },
  {
    id: 'ejecutivo',
    slug: 'escuela-ejecutivo',
    title: 'Desarrollo Ejecutivo',
    icon: Briefcase,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    borderColor: 'rgba(245, 158, 11, 0.3)',
    description: 'Potencia tu liderazgo y visión estratégica al más alto nivel. Programas diseñados para ejecutivos que buscan transformar organizaciones y alcanzar resultados excepcionales.',
    stats: [
      { icon: Briefcase, label: 'Liderazgo' },
      { icon: Rocket, label: 'Estrategia' },
      { icon: Sparkles, label: 'Innovación' },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const EscuelasPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="escuelas-page"
    >
      {/* Background Effects */}
      <div className="escuelas-bg-orb escuelas-bg-orb-1"></div>
      <div className="escuelas-bg-orb escuelas-bg-orb-2"></div>
      <div className="escuelas-bg-orb escuelas-bg-orb-3"></div>

      {/* Hero Section */}
      <section className="escuelas-hero">
        <div className="container text-center">
          <motion.div variants={itemVariants}>
            <span className="escuelas-badge">
              <Rocket size={16} style={{ marginRight: '0.5rem' }} />
              Formación Especializada
            </span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="escuelas-hero-title">
            Nuestras <span>Escuelas</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="escuelas-hero-subtitle">
            Tres centros de excelencia diseñados para formar a los líderes del mañana. 
            Elige tu camino y transforma tu futuro profesional con formación de clase mundial.
          </motion.p>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <div className="escuelas-grid">
          {escuelas.map((escuela, index) => {
            const IconComponent = escuela.icon;
            return (
              <motion.a
                key={escuela.id}
                href={`#${escuela.slug}`}
                className="escuela-card"
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  '--school-color': escuela.color,
                  '--school-gradient': escuela.gradient,
                  '--school-glow': escuela.glowColor,
                  '--school-border': escuela.borderColor,
                }}
              >
                {/* Glow effect behind card */}
                <div className="escuela-card-glow"></div>
                
                {/* Card number */}
                <span className="escuela-card-number">0{index + 1}</span>

                {/* Icon */}
                <div className="escuela-card-icon">
                  <IconComponent size={40} />
                </div>

                {/* Content */}
                <h3 className="escuela-card-title">{escuela.title}</h3>
                <p className="escuela-card-desc">{escuela.description}</p>

                {/* Tags */}
                <div className="escuela-card-tags">
                  {escuela.stats.map((stat, i) => {
                    const StatIcon = stat.icon;
                    return (
                      <span key={i} className="escuela-card-tag">
                        <StatIcon size={14} />
                        {stat.label}
                      </span>
                    );
                  })}
                </div>

                {/* CTA */}
                <div className="escuela-card-cta">
                  <span>Explorar Escuela</span>
                  <ChevronRight size={18} />
                </div>
              </motion.a>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <motion.div 
          variants={itemVariants}
          className="escuelas-bottom-cta"
        >
          <div className="escuelas-bottom-cta-glow"></div>
          <Sparkles size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
          <h2>¿No sabes por dónde empezar?</h2>
          <p>Nuestro equipo académico te ayudará a elegir la escuela perfecta según tu perfil y objetivos profesionales.</p>
          <a 
            href="https://wa.me/51983029039" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}
          >
            Solicitar Asesoría Gratuita
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default EscuelasPage;
