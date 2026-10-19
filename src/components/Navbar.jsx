import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top && window.scrollY < top + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-inner">
        <a href="#home" className="logo">
          Learn<span>Hub</span>
        </a>

        <nav>
          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`} id="navLinks">
            {[
              { href: "#home", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#courses", label: "Courses" },
              { href: "#projects", label: "Projects" },
              { href: "#reviews", label: "Reviews" },
              { href: "#pricing", label: "Paid Courses" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.slice(1) ? "active" : ""}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="btn btn-small" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}