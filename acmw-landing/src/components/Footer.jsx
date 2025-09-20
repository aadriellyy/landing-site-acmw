import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© 2025 ACM-W UnB | Todos os direitos reservados</p>

        <div className="footer-links">
          <a href="mailto:contato@meninascomp.com">📧 Contato</a>
          <a href="https://www.instagram.com/acmw.unb?utm_source=ig_web_button_share_sheet&igsh=MW5xM3poYzlzZWJvbQ==" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          <a href="https://www.linkedin.com/company/acmwunb/posts/?feedView=all" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
