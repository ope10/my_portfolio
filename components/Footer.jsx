export default function Footer() {
  return (
    <footer className="footer content-width">
      <div className="footer-nav">
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="footer-socials">
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://linkedin.com/in/falana-opeyemi-7b70a8426" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/ope10" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Opeyemi Falana. All Rights Reserved.</span>
        <span>Made with <strong>love</strong> by Opeyemi</span>
      </div>
    </footer>
  );
}
