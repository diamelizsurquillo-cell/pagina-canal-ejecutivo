import React from 'react';
import Footer from '../components/Footer';

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
            <p style={{ marginBottom: '1rem' }}>Bienvenido a CANAL EJECUTIVO S.A.C.S. (en adelante, "CANAL EJECUTIVO"). Al acceder y utilizar nuestros servicios en línea, ya sea como usuario registrado o visitante, usted (en adelante, "usted" o "el usuario") acepta cumplir con los términos y condiciones establecidos en este documento. Si no está de acuerdo con estos términos, por favor, no acceda ni utilice los servicios de CANAL EJECUTIVO.</p>
            <p style={{ marginBottom: '1rem' }}>CANAL EJECUTIVO ofrece acceso a una variedad de cursos y talleres educativos, tanto gratuitos como de pago, dirigidos a mejorar las habilidades profesionales y personales de los usuarios. Estos términos y condiciones rigen el uso de nuestra plataforma, el acceso a los contenidos educativos, y las relaciones con los usuarios registrados y visitantes.</p>

            <h3 style={{ color: 'white', marginTop: '2rem', marginBottom: '1rem' }}>2. RAZÓN SOCIAL Y DATOS LEGALES</h3>
            <p style={{ marginBottom: '1rem' }}>La razón social de la empresa es "CANAL EJECUTIVO S.A.C.S.", con RUC 20612995959. Su domicilio legal está ubicado en Jr. Las Begonias Mza. C Lote. 4 Asc. La Esperanza Lima- Los Olivos, Perú. Puede contactarnos a través del teléfono (WhatsApp) +51 904 947 193 o el correo electrónico <a href="mailto:contacto@canalejecutivo.com" style={{ color: 'var(--primary)', textDecoration: 'none' }}>contacto@canalejecutivo.com</a>. Nuestro sitio web es <a href="https://www.canalejecutivo.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'none' }}>www.canalejecutivo.com</a>.</p>

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
            <p style={{ marginBottom: '1rem' }}>Los estudiantes pueden darse de baja de la plataforma en cualquier momento desde la opción "Configuración de cuenta" en su perfil. Esto eliminará su acceso a los cursos y les enviará una notificación de confirmación de baja.</p>

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

export default TermsPage;
