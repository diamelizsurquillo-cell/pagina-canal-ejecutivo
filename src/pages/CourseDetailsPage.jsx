import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Calendar, Clock, Target, Video, Zap, CheckCircle, Gem, MessageCircle, Award, ShieldCheck } from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCourseById } from '../data/courses';

const CourseDetailsPage = ({ courseId }) => {
  const [activeModule, setActiveModule] = useState(null);

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', width: 'fit-content' }}>
                  <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', color: 'white', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(10, 102, 255, 0.2)' }}>
                    {courseInfo.instructor ? courseInfo.instructor.charAt(0) : '?'}
                  </div>
                  <div style={{ paddingRight: '1rem' }}>
                    <h3 style={{ color: 'white', fontSize: '1.1rem', marginBottom: '0.1rem', fontWeight: 600 }}>{courseInfo.instructor}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{courseInfo.instructorTitle}</p>
                  </div>
                </div>

                {/* Stats / Social Proof */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '1rem', padding: '1rem', background: 'rgba(10, 102, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(10, 102, 255, 0.1)', marginBottom: '1.5rem' }}>
                  <Users size={24} color="var(--primary)" />
                  <span><strong style={{ color: 'white' }}>{courseInfo.students} alumnos</strong> se inscribieron en las últimas 24 horas.</span>
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
                      <div style={{ color: 'white', fontWeight: 600 }}>{courseInfo.modality.replace('Grabado - ', '')}</div>
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

export default CourseDetailsPage;
