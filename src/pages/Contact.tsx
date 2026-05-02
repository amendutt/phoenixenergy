import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Globe } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

interface Office {
  id: string;
  name: string;
  country: string;
  status: "active" | "coming_soon";
  phone?: string[];
  email?: string[];
  address?: string[];
  whatsapp?: string;
  hours?: string;
  mapSrc?: string;
}

const offices: Office[] = [
  {
    id: "qatar",
    name: "Qatar Office",
    country: "Qatar",
    status: "active",
    phone: ["+974 7778 6920 (Sales & Operations)", "+974 7175 6000 (Accounts & Finance)"],
    email: ["sales@ppsqatar.com"],
    address: ["Sayer Tower, Barwa Commercial Avenue", "Doha - Qatar"],
    whatsapp: "97477786920",
    hours: "Saturday to Thursday, 8:30 AM - 5:30 PM | 24/7 Technical Support",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.6!2d51.45!3d25.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzQ4LjAiTiA1McKwMjcnMDAuMCJF!5e0!3m2!1sen!2sqa!4v1234567890",
  },
  {
    id: "india",
    name: "India Office",
    country: "India",
    status: "coming_soon",
    address: ["Details will be provided soon"],
  },
  {
    id: "uae",
    name: "UAE Office",
    country: "UAE",
    status: "coming_soon",
    address: ["Dubai, United Arab Emirates — Details will be provided soon"],
  },
];

const Contact = () => {
  const [activeOffice, setActiveOffice] = useState("qatar");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const office = offices.find((o) => o.id === activeOffice)!;

  return (
    <div>
      <PageBanner
        title="Contact Us"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Contact" }]}
      />

      {/* Office Selector Tabs */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-10">
              <p className="section-title">Our Offices</p>
              <div className="section-divider-center" />
              <h2 className="section-heading mb-8">Select Your Region</h2>
            </div>
          </ScrollReveal>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {offices.map((o) => (
              <button
                key={o.id}
                onClick={() => setActiveOffice(o.id)}
                className={`px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 border-2 relative ${
                  activeOffice === o.id
                    ? "bg-primary border-primary text-primary-foreground"
                    : "border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {o.country}
                  {o.status === "coming_soon" && (
                    <span className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full uppercase">Soon</span>
                  )}
                </span>
              </button>
            ))}
          </div>

          {/* Office Content */}
          {office.status === "coming_soon" ? (
            <ScrollReveal>
              <div className="text-center py-20 max-w-lg mx-auto">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-4">Coming Soon</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our {office.country} office is opening soon. Stay tuned for updates. In the meantime, feel free to reach us through our other offices.
                </p>
              </div>
            </ScrollReveal>
          ) : (
            <>
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {[
                  { icon: <Phone className="w-6 h-6" />, title: "Call Us", lines: office.phone || [] },
                  { icon: <Mail className="w-6 h-6" />, title: "Email Us", lines: office.email || [] },
                  { icon: <MapPin className="w-6 h-6" />, title: "Visit Us", lines: office.address || [] },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Working Hours",
                    lines: office.hours ? [office.hours] : [],
                  },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="text-center p-8 border border-border hover:shadow-xl transition-all duration-300 group hover:border-primary relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        {item.icon}
                      </div>
                      <h3 className="font-heading text-lg font-bold mb-3">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-muted-foreground text-sm">{line}</p>
                      ))}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* WhatsApp CTA */}
              {office.whatsapp && (
                <ScrollReveal>
                  <div className="text-center mb-16">
                    <a
                      href={`https://wa.me/${office.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-semibold text-sm uppercase tracking-wider hover:brightness-110 transition-all shadow-lg hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </ScrollReveal>
              )}

              {/* Form + Map */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <ScrollReveal direction="left">
                  <p className="section-title">Get In Touch</p>
                  <div className="section-divider" />
                  <h2 className="section-heading mb-6">Send Us a Message</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Ready to discuss your requirements? Our team is here to provide tailored solutions for your oil & gas, industrial, marine, or HVAC needs. Our mission is clear and simple – We Get it Done.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" placeholder="Your Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors" />
                      <input type="email" placeholder="Your Email *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors" />
                      <input type="text" placeholder="Subject *" required value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <textarea placeholder="Your Message *" required rows={6} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3.5 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                    <button type="submit" className="btn-primary">
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </form>
                </ScrollReveal>

                <ScrollReveal direction="right">
                  <div className="h-full min-h-[400px] overflow-hidden shadow-xl">
                    {office.mapSrc && (
                      <iframe
                        src={office.mapSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: 500 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={`${office.name} Location`}
                      />
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Contact;
