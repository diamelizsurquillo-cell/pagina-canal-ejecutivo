import React from 'react';
import Footer from '../components/Footer';

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
            <p style={{ marginBottom: '1rem' }}>CANA EJECUTIVO S.A.C.S. (en adelante, "CANAL EJECUTIVO") se compromete a proteger la privacidad y seguridad de los datos personales de los usuarios que utilizan nuestros servicios. Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y compartimos su información personal, así como los derechos que usted tiene sobre su información.</p>
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

export default PrivacyPage;
