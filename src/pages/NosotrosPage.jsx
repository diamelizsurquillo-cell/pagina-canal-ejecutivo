import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Sparkles, Clock, Award, CheckCircle } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

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

        {/* Pilares de Excelencia */}
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

export default NosotrosPage;
