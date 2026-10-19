
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="logo">
          Learn<span>Hub</span>
        </a>
        <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
      </div>
    </footer>
  );
}