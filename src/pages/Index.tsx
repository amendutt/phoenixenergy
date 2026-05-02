import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Clock, Users, Award, Wrench, ChevronLeft, ChevronRight, Quote, CheckCircle, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const heroSlides = [
  {
    image: "/images/oil-gas.jpg",
    subtitle: "Oil & Gas / Marine",
    title: "Oil & Gas",
    highlight: "& Marine",
    title2: "Solutions",
    desc: "Equipment, spare Parts, service & maintenance for oil & gas and marine industry.",
    link: "/industries/oil-gas-marine",
  },
  {
    image: "/images/construction.jpg",
    subtitle: "Construction Equipment",
    title: "Construction Equipment",
    highlight: "Service",
    title2: "& Maintenance",
    desc: "Service, maintenance & Spare parts for the construction equipment and machinery.",
    link: "/industries/construction",
  },
  {
    image: "/images/industrial-new.jpg",
    subtitle: "Industrial Equipment",
    title: "Industrial & Workshop",
    highlight: "Equipment,",
    title2: "Machinery",
    desc: "Spare parts, Service & Maintenance.",
    link: "/industries/industrial",
  },
  {
    image: "/images/fabrication.jpg",
    subtitle: "Heavy-Duty Fabrications",
    title: "Heavy-Duty",
    highlight: "Fabrications",
    title2: "",
    desc: "Whether for Oil & Gas, construction, industrial, or marine applications, our advanced fabrication capabilities enable us to deliver custom heavy-duty and precision components engineered to meet the highest industry standards.",
    link: "/industries/fabrications",
  },
  {
    image: "/images/hvac.jpg",
    subtitle: "HVAC Solutions",
    title: "HVAC Solutions",
    highlight: "&",
    title2: "Climate Control",
    desc: "HVAC Spares, Service, Maintenance for the Heating, ventilation and air conditioning systems.",
    link: "/industries/hvac",
  },
  {
    image: "/images/general-maintenance.jpg",
    subtitle: "General Maintenance",
    title: "General",
    highlight: "Maintenance",
    title2: "",
    desc: "Building maintenance, MEP Services, fire protection systems, Water proofing, flooring solutions and fit out jobs.",
    link: "/industries/general-maintenance",
  },
  {
    image: "/images/eco-matrix.jpg",
    subtitle: "Eco-Matrix Systems",
    title: "Eco-Matrix",
    highlight: "Systems",
    title2: "",
    desc: "Modern technology for waste management, premium composting, cooling systems, thermal bank solutions for agricultural, live stock, diary farms, malls, hospitals, industrial plants etc.",
    link: "/industries/eco-matrix",
  },
];

const services = [
  { icon: <Shield className="w-10 h-10" />, title: "Equipment & Machinery Supply", desc: "We supply a wide range of equipment and machinery—both new and certified pre-owned—with comprehensive warranty coverage and reliable after-sales service.", image: "/images/phoenix-products.jpg" },
  { icon: <Wrench className="w-10 h-10" />, title: "Service & Maintenance", desc: "Our industry-specialized teams manage preventive and corrective maintenance programs, ensuring maximum uptime and operational efficiency.", image: "/images/phoenix-service.jpg" },
  { icon: <Globe className="w-10 h-10" />, title: "Spare Parts & Consumables", desc: "Partnered with world-leading manufacturers of genuine and OEM spare parts, ensuring extended asset life backed by warranty.", image: "/images/industrial-new.jpg" },
  { icon: <Users className="w-10 h-10" />, title: "Logistics & Delivery", desc: "Through partnerships with leading logistics providers across air, sea, and road, we ensure seamless delivery worldwide.", image: "/images/fabrication.jpg" },
  { icon: <Award className="w-10 h-10" />, title: "Eco-Matrix Systems", desc: "Diversified, industry-specific waste management solutions integrating ecological responsibility with economic efficiency.", image: "/images/eco-matrix.jpg" },
  { icon: <Briefcase className="w-10 h-10" />, title: "Consultancy Services", desc: "Smart solutions that optimize operations, reduce costs, enhance asset reliability, and minimize breakdowns.", image: "/images/phoenix-team.jpg" },
];

const features = [
  { icon: <Clock className="w-8 h-8" />, title: "Industry Experience", desc: "Over 20 years of proven expertise across oil & gas, industrial, marine, and HVAC sectors." },
  { icon: <Shield className="w-8 h-8" />, title: "Quality Assured", desc: "ISO 9001, 14001, and 45001 certified for consistent quality, safety, and environmental standards." },
  { icon: <Globe className="w-8 h-8" />, title: "Global Network", desc: "Strong global partnerships and expanding service infrastructure worldwide." },
  { icon: <Users className="w-8 h-8" />, title: "24/7 Support", desc: "Round-the-clock service and technical support ensuring reliability when it matters most." },
  { icon: <Award className="w-8 h-8" />, title: "Expert Team", desc: "Skilled professionals dedicated to delivering exceptional results and tailored solutions." },
  { icon: <Wrench className="w-8 h-8" />, title: "Trusted Reliability", desc: "A proven track record of success protecting critical assets across all industrial sectors." },
];

const testimonials = [
  { name: "Ahmed Al-Rashid", role: "Operations Director", company: "Gulf Petroleum", text: "Phoenix Energy Group has been our trusted partner for over 5 years. Their expertise in oil & gas equipment and 24/7 support is unmatched in the region." },
  { name: "Sarah Mitchell", role: "Project Manager", company: "Qatar Construction Co.", text: "The quality of equipment and the reliability of their service has significantly improved our project timelines. Highly recommended for construction needs." },
  { name: "Mohammed Hassan", role: "Plant Manager", company: "Industrial Solutions LLC", text: "Their consultancy services helped us reduce maintenance costs by 30%. The team's expertise and dedication is truly exceptional." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Slider */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[90vh] overflow-hidden">
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, hsla(220, 20%, 8%, 0.88), hsla(220, 20%, 8%, 0.45))" }} />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto">
            <div className="max-w-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-5">
                    ✦ {heroSlides[currentSlide].subtitle}
                  </p>
                  <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-2" style={{ color: "hsl(0, 0%, 100%)" }}>
                    {heroSlides[currentSlide].title}{" "}
                    <span className="text-primary">{heroSlides[currentSlide].highlight}</span>
                  </h2>
                  {heroSlides[currentSlide].title2 && (
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: "hsl(0, 0%, 100%)" }}>
                      {heroSlides[currentSlide].title2}
                    </h2>
                  )}
                  <p className="text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "hsl(220, 10%, 75%)" }}>
                    {heroSlides[currentSlide].desc}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to={heroSlides[currentSlide].link} className="btn-primary">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          <button onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)} className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300" style={{ color: "hsl(0, 0%, 100%)" }}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-3">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${i === currentSlide ? "bg-primary scale-110" : "bg-white/30 hover:bg-white/50"}`} />
            ))}
          </div>
          <button onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)} className="w-12 h-12 rounded-full border-2 border-primary/40 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300" style={{ color: "hsl(0, 0%, 100%)" }}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="section-title">Welcome to Phoenix Energy</p>
              <div className="section-divider" />
              <h2 className="section-heading mb-6">Empowering Progress Across Industries</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Driving Excellence and Efficiency Across Every Area We Touch since 2007, in 10+ countries and 7 critical industrial sectors.
              </p>
              <div className="space-y-5 mb-8">
                {[
                  { title: "Markets & Industries", desc: "Global Reliability for the World's Most Demanding Environments, with precision." },
                  { title: "Products & Services", desc: "Superior Sourcing and Engineering for Uninterrupted Operations." },
                  { title: "Technology-savvy", desc: "Advanced Engineering. Innovative Systems. We Get it Done." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    <div className="w-1 bg-primary/20 group-hover:bg-primary transition-colors shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img src="/images/phoenix-team.jpg" alt="Phoenix Energy Group team" className="w-full shadow-2xl" />
                <Link to="/about#ceo-message" className="absolute -bottom-8 -left-8 bg-primary p-8 shadow-xl hidden md:block hover:bg-primary/90 transition-colors group">
                  <p className="text-primary-foreground text-sm leading-relaxed max-w-xs font-semibold">
                    "Driving Progress Across Borders — The Phoenix Commitment to Operational Excellence and Global Partnerships."
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-px h-8 bg-primary-foreground/30" />
                    <div>
                      <p className="text-primary-foreground font-bold text-sm">Message from our CEO & Founder</p>
                      <p className="text-primary-foreground/80 text-xs group-hover:underline">Phoenix Energy Global →</p>
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="gray-section section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-title">Our Services</p>
              <div className="section-divider-center" />
              <h2 className="section-heading">Perfect Solution for Industry</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="service-card group h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground -mt-16 relative z-10 mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                    <Link to="/services" className="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Phoenix Consultancy Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="section-title">Phoenix Consultancy</p>
              <div className="section-divider" />
              <h2 className="section-heading mb-4">Maximize Profit, Minimize Cost</h2>
              <p className="text-primary font-heading text-lg font-semibold mb-6">Without Compromising Efficiency</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With Phoenix Consultancy, efficiency meets strategy. We streamline operations, cut costs, boost asset reliability, and prevent breakdowns—empowering your business to perform at its peak. From strategic sourcing and maintenance planning to targeted training, we deliver results that matter.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Backed by one of Qatar's leading law firms, we also provide expert legal support to protect and grow your enterprise.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Operational Management",
                  "Cost Optimization",
                  "Maintenance Planning & Execution",
                  "Strategic Sourcing",
                  "Breakdown Reduction",
                  "Asset Reliability",
                  "Training Programs",
                  "Legal Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/services" className="btn-primary">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img src="/images/phoenix-team.jpg" alt="Phoenix Consultancy Team" className="w-full shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-primary p-6 shadow-xl hidden md:block">
                  <p className="text-primary-foreground font-heading text-lg font-bold">Transform Your Business</p>
                  <p className="text-primary-foreground/80 text-sm mt-1">Maximize Profit. Minimize Risk.</p>
                </div>
                <div className="absolute inset-0 border-4 border-primary/20 translate-x-4 translate-y-4 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Get In Touch */}
      <section
        className="relative section-padding bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/dark-bg.jpg')" }}
      >
        <div className="absolute inset-0" style={{ background: "hsla(220, 20%, 8%, 0.92)" }} />
        <div className="relative z-10 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="section-title">Get In Touch</p>
              <div className="section-divider" />
              <h2 className="section-heading-light mb-6">Let's Start Your Project</h2>
              <p className="leading-relaxed mb-6" style={{ color: "hsl(220, 10%, 70%)" }}>
                Ready to discuss your requirements? Our team is here to provide tailored solutions for your oil & gas, industrial, marine, or HVAC needs.
              </p>
              <div className="flex flex-wrap gap-8 mb-8">
                <div>
                  <p className="text-primary font-heading text-lg font-bold">Call Us</p>
                  <p style={{ color: "hsl(220, 10%, 75%)" }}>+974 7778 6920</p>
                </div>
                <div>
                  <p className="text-primary font-heading text-lg font-bold">Email Us</p>
                  <a href="mailto:sales@phoenixenergy.co.in" className="hover:text-primary transition-colors" style={{ color: "hsl(220, 10%, 75%)" }}>
                    sales@phoenixenergy.co.in
                  </a>
                </div>
              </div>
              <Link to="/contact" className="btn-primary">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-background p-8 shadow-2xl">
                <h3 className="font-heading text-xl font-bold mb-6">Quick Enquiry</h3>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We'll get back to you shortly."); }}>
                  <input type="text" placeholder="Your Name *" required className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="email" placeholder="Your Email *" required className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors" />
                  <textarea placeholder="Your Message *" required rows={4} className="w-full px-4 py-3 border border-border bg-background text-foreground focus:outline-none focus:border-primary transition-colors resize-none" />
                  <button type="submit" className="btn-primary w-full justify-center">Submit</button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dark-section section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="section-title">Why Choose Us</p>
              <div className="section-divider" />
              <h2 className="section-heading-light mb-6">Check Visit Our Factory</h2>
              <p className="leading-relaxed mb-8" style={{ color: "hsl(220, 10%, 70%)" }}>
                Phoenix Energy Group is proud to deliver products and services to the highest possible standards, and maintains an ongoing commitment to quality in everything we do.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "hsl(220, 10%, 65%)" }}>
                Supported by a strong global network, extensive resources, and an expanding service infrastructure, we are well positioned to support and protect your critical assets.
              </p>
              <Link to="/about" className="btn-primary">
                View More <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img src="/images/hero-2.jpg" alt="Our facility" className="w-full shadow-2xl" />
                <div className="absolute inset-0 border-4 border-primary/20 translate-x-4 translate-y-4 -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: 250, suffix: "", label: "Engineers" },
              { value: 7, suffix: "", label: "Branch" },
              { value: 500, suffix: "+", label: "Shipped" },
              { value: 100, suffix: "+", label: "Projects" },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center border-r border-primary-foreground/10 last:border-r-0">
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gray-section">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-title">Happy Clients</p>
              <div className="section-divider-center" />
              <h2 className="section-heading">Our Clients Reviews</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="bg-background p-8 shadow-md hover:shadow-xl transition-all duration-300 relative group">
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-heading font-bold text-lg">{t.name[0]}</span>
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm">{t.name}</h4>
                      <p className="text-muted-foreground text-xs">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-title">Why Phoenix Energy</p>
              <div className="section-divider-center" />
              <h2 className="section-heading">Expertise You Can Trust</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="p-8 group hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-border hover:shadow-lg bg-background relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full" />
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              We Are Always at The Forefront of The Industrial Market
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              We provide innovative product solutions for sustainable progress. Our professional team works to increase productivity and cost effectiveness on the market.
            </p>
            <Link to="/contact" className="btn-outline-light">
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;