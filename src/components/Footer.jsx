import React from 'react';

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

export default Footer;
