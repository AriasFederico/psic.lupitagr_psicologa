import { useEffect, useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import { iconMap } from '../../../data/iconMap';
import { ButtonCta } from '../../ui/button_cta/ButtonCta'; // importar donde esté
import styles from './Header.module.scss';

export const Header = ({ data }) => {
  const { nav_links, logo, cta } = data;
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const BurgerIcon = isOpen ? BsX : BsList;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        // cambiar el tamaño del maxwidth del header
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* ------------------------- */}
        <a href={'/'} className={styles.logo} onClick={() => setIsOpen(false)}>
          <img src={logo.src} alt={logo.alt} className={styles.logoImage} />
          <div className={styles.flex}>
            <p>{logo.text}</p>
            <span>{logo.span}</span>
          </div>
        </a>
        {/* ------------------------- */}

        {/* ------------------------- */}
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          {nav_links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className={styles.ctaMobile}>
            <ButtonCta
              size={cta.size}
              icon={cta.icon}
              onClick={() => setIsOpen(false)}
              label={cta.label}
              variant={cta.variant}
            />
          </div>
        </nav>
        {/* ------------------------- */}

        {/* -------------cta header------------ */}
        <div className={styles.cta}>
          <ButtonCta
            size={cta.size}
            icon={cta.icon}
            label={cta.label}
            variant={cta.variant}
          />
        </div>
        {/* ------------------------- */}

        {/* ----------burguer--------------- */}
        <button
          className={styles.burger}
          onClick={toggleMenu}
          aria-label='Menu'
          type='button'
        >
          <BurgerIcon size={32} />
        </button>
        {/* ------------------------- */}
      </div>
    </header>
  );
};
