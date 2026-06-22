import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ activePage, isScrolledExternal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolledInternal, setIsScrolledInternal] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledInternal(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = isScrolledExternal !== undefined ? isScrolledExternal : isScrolledInternal;

  return (
    <header style={{ 
      background: isScrolled ? 'rgba(7, 11, 20, 0.95)' : 'transparent', 
      boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.5)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease'
    }}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Canal Ejecutivo" style={{ height: '40px', objectFit: 'contain' }} />
          </a>
        </div>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <a 
            href="#" 
            className={activePage === 'inicio' ? 'active' : ''} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#nosotros" 
            className={activePage === 'nosotros' ? 'active' : ''} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </a>
          
          {/* Dropdown for Programas */}
          <div className="nav-dropdown">
            <button 
              className={`nav-dropdown-trigger ${activePage === 'envivo' || activePage === 'asincronicos' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                setMobileSubmenuOpen(!mobileSubmenuOpen);
              }}
            >
              Programas <ChevronDown size={14} />
            </button>
            <div className={`nav-dropdown-menu ${mobileSubmenuOpen ? 'mobile-show' : ''}`}>
              <a 
                href="#programas-envivo" 
                className={activePage === 'envivo' ? 'active' : ''} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileSubmenuOpen(false);
                }}
              >
                En vivo
              </a>
              <a 
                href="#programas-asincronicos" 
                className={activePage === 'asincronicos' ? 'active' : ''} 
                onClick={() => {
                  setMobileMenuOpen(false);
                  setMobileSubmenuOpen(false);
                }}
              >
                Asincrónicos
              </a>
            </div>
          </div>

          <a href="#aliados" onClick={() => setMobileMenuOpen(false)}>Aliados</a>
          <a href="#testimonios" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
          <a href="https://campus.canalejecutivo.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem' }}>Aula virtual</a>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
