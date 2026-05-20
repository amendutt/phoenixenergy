import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Mail,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
} from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const industries = [
    { name: "Oil & Gas / Marine", path: "/industries/oil-gas-marine" },
    { name: "Construction Equipment", path: "/industries/construction" },
    { name: "Industrial Equipment", path: "/industries/industrial" },
    { name: "Heavy-Duty Fabrications", path: "/industries/fabrications" },
    { name: "HVAC", path: "/industries/hvac" },
    { name: "General Maintenance", path: "/industries/general-maintenance" },
    { name: "Eco-Matrix Systems", path: "/industries/eco-matrix" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries", dropdown: industries },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full z-50 relative">
      {/* Top Bar */}
      <div style={{ backgroundColor: "hsl(var(--topbar-bg))" }}>
        <div className="container mx-auto flex items-center justify-between py-2.5 text-sm">
          <div className="flex items-center gap-1">
            <a
              href="mailto:sales@phoenixenergyglobal.com"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80"
              style={{ color: "hsl(var(--topbar-foreground))" }}
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span className="hidden sm:inline">
                sales@phoenixenergyglobal.com
              </span>
            </a>
          </div>
          <div
            className="flex items-center gap-4"
            style={{ color: "hsl(var(--topbar-foreground))" }}
          >
            <a
              href="tel:+97477786920"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80 hover:text-primary"
              style={{ color: "hsl(var(--topbar-foreground))" }}
            >
              <span className="text-primary text-xs">📞</span>
              <span className="hidden sm:inline text-xs">+974 7778 6920</span>
            </a>
            <span
              className="hidden sm:inline mx-1"
              style={{ color: "hsl(var(--topbar-foreground))" }}
            >
              |
            </span>
            <a
              href="https://wa.me/97477786920"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80 hover:text-primary"
              style={{ color: "hsl(var(--topbar-foreground))" }}
            >
              <MessageCircle className="w-3.5 h-3.5 text-primary" />
              <span className="hidden sm:inline text-xs">WhatsApp</span>
            </a>
            <span
              className="hidden sm:inline mx-1"
              style={{ color: "hsl(var(--topbar-foreground))" }}
            >
              |
            </span>
            <a
              href="https://wa.me/97477786920"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline text-xs transition-opacity hover:opacity-80 hover:text-primary"
              style={{ color: "hsl(var(--topbar-foreground))" }}
            >
              24/7 Technical Support
            </a>
          </div>
        </div>
      </div>

      {/* Logo Bar */}
      <div className="bg-background border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/images/phoenix-logo.png"
              alt="Phoenix Energy Group"
              className="h-14 md:h-16 w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-3">
              <img
                src="/images/iso-certified.jpg"
                alt="ISO Certified"
                className="w-12 h-12 object-contain"
              />
              <div>
                <p className="text-foreground text-sm font-bold">
                  Certified Company
                </p>
                <p className="text-muted-foreground text-xs">
                  Quality • Environment • Safety
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img
                src="/images/badge-20-years.jpg"
                alt="20 Years of Experience"
                className="w-20 h-20 object-contain -mr-6"
              />
              <div>
                <p className="text-foreground text-sm font-bold">
                  Leading Industry
                </p>
                <p className="text-muted-foreground text-xs">
                  20+ Years of Industry Excellence
                </p>
              </div>
            </div>
          </div>

          <Link to="/contact" className="btn-primary hidden md:inline-flex">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Nav Bar */}
      <nav
        className={`bg-background border-b border-border transition-shadow duration-300 ${scrolled ? "sticky top-0 z-50 shadow-lg" : ""}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="hidden lg:flex">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.dropdown && setIndustriesOpen(true)}
                onMouseLeave={() => link.dropdown && setIndustriesOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 px-6 py-4 text-sm font-semibold uppercase tracking-wider transition-colors relative ${
                    isActive(link.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </Link>
                {link.dropdown && industriesOpen && (
                  <div className="absolute top-full left-0 w-64 bg-background shadow-2xl z-50 border-t-2 border-primary">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors border-b border-border"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Social icons */}
          <div className="hidden lg:flex items-center gap-2 py-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-4 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  className="block px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground hover:text-primary transition-colors border-b border-border"
                  onClick={() => !link.dropdown && setMobileOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="bg-secondary">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-10 py-2.5 text-xs uppercase text-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
