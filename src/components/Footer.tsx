const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gradient-gold mb-4">
              Poonam Sugandh Mandir
            </h3>
            <p className="font-body text-secondary-foreground/70 text-sm leading-relaxed">
              Premium quality incense and dhoop products crafted with devotion and purity. Trusted by thousands across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <div className="space-y-3">
              {["Home", "Products", "Gallery", "Dealer", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block font-body text-sm text-secondary-foreground/70 hover:text-gold transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-gold mb-4">Contact</h4>
            <div className="space-y-3 font-body text-sm text-secondary-foreground/70">
              <p>📞 +91 7869083344</p>
              <p>📧 poonam16.mandir@rediffmail.com</p>
              <p>💬 WhatsApp: wa.me/917869083344</p>
              <p>📍 P.O.B NO. 07, M.G ROAD, INDORE 452 001, MP, INDIA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 text-center">
          <p className="font-body text-xs text-secondary-foreground/50">
            © {new Date().getFullYear()} Poonam Sugandh Mandir (PSM). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
