import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const industries = [
    { name: "Oil & Gas / Marine", path: "/industries/oil-gas-marine" },
    { name: "Construction Equipment", path: "/industries/construction" },
    { name: "Industrial Equipment", path: "/industries/industrial" },
    { name: "Heavy-Duty Fabrications", path: "/industries/fabrications" },
    { name: "HVAC", path: "/industries/hvac" },
    { name: "General Maintenance", path: "/industries/general-maintenance" },
    { name: "Eco-Matrix Systems", path: "/industries/eco-matrix" },
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer style={{ backgroundColor: "hsl(var(--footer-bg))" }}>
      {/* CTA Strip */}
      <div className="bg-primary">
        <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
            Get Solutions for All Industries
          </h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="mb-6">
              <img
                src="/images/phoenix-logo.png"
                alt="Phoenix Energy Group"
                className="h-14 w-auto"
              />
            </div>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "hsl(var(--footer-foreground))" }}
            >
              Phoenix Energy Group delivers reliable and effective solutions
              across Oil & Gas, Industrial, Marine, Heavy-Duty Fabrication, and
              HVAC sectors.
            </p>
            <div className="flex gap-2">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-primary/30 flex items-center justify-center text-primary/60 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div>
            <h4
              className="font-heading text-lg font-bold mb-6 pb-3 border-b border-primary/30"
              style={{ color: "hsl(0, 0%, 95%)" }}
            >
              Our Industries
            </h4>
            <ul className="space-y-3">
              {industries.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm flex items-center gap-2 hover:text-primary transition-colors"
                    style={{ color: "hsl(var(--footer-foreground))" }}
                  >
                    <ArrowRight className="w-3 h-3 text-primary" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-heading text-lg font-bold mb-6 pb-3 border-b border-primary/30"
              style={{ color: "hsl(0, 0%, 95%)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-sm flex items-center gap-2 hover:text-primary transition-colors"
                    style={{ color: "hsl(var(--footer-foreground))" }}
                  >
                    <ArrowRight className="w-3 h-3 text-primary" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-heading text-lg font-bold mb-6 pb-3 border-b border-primary/30"
              style={{ color: "hsl(0, 0%, 95%)" }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p
                    className="text-sm"
                    style={{ color: "hsl(var(--footer-foreground))" }}
                  >
                    +974 7778 6920
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "hsl(var(--footer-foreground))" }}
                  >
                    +974 7175 6000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                </div>
                <a
                  href="mailto:sales@phoenixenergy.co.in"
                  className="text-sm hover:text-primary transition-colors"
                  style={{ color: "hsl(var(--footer-foreground))" }}
                >
                  sales@phoenixenergyglobal.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                </div>
                <p
                  className="text-sm"
                  style={{ color: "hsl(var(--footer-foreground))" }}
                >
                  Sayer Tower, Barwa Commercial Avenue, Doha - Qatar
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-primary" />
                </div>
                <p
                  className="text-sm"
                  style={{ color: "hsl(var(--footer-foreground))" }}
                >
                  Sun - Thu: 8am - 6pm
                  <br />
                  24/7 Technical Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-primary/10">
        <div className="container mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-xs"
            style={{ color: "hsl(var(--footer-foreground))" }}
          >
            © {new Date().getFullYear()} Phoenix Energy Group. All Rights
            Reserved.
          </p>
          <p
            className="text-xs"
            style={{ color: "hsl(var(--footer-foreground))" }}
          >
            Your Trusted Partner for Operational Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
