'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="nav-inner section-wrap">
        <a className="brand-mark" href="/" onClick={closeMenu}>Opeyemi<span>.</span></a>
        <button
          className={`menu-toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav className={`nav-links${open ? ' is-open' : ''}`}>
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/projects" onClick={closeMenu}>Projects</a>
          {/* <a href="/#skills" onClick={closeMenu}>Skills</a> */}
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
