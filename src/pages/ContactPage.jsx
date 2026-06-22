import React from 'react';
import Footer from '../components/Footer';

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

export default ContactPage;
