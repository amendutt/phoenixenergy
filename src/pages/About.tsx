import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, Clock, Users, Award, Wrench, CheckCircle, Quote } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const About = () => {
  return (
    <div>
      <PageBanner
        title="About Us"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "About Us" }]}
      />

      {/* About Content */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src="/images/phoenix-team.jpg" alt="Phoenix Energy Group team" className="w-full shadow-2xl" />
                <div className="absolute -bottom-8 -right-8 hidden md:block">
                  <img src="/images/badge-20-years.jpg" alt="20+ Years of Industry Excellence" className="w-32 h-32 object-contain drop-shadow-2xl" />
                </div>
                <div className="absolute inset-0 border-4 border-primary/20 -translate-x-4 -translate-y-4 -z-10 hidden md:block" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="section-title">About Phoenix Energy Group</p>
              <div className="section-divider" />
              <h2 className="section-heading mb-6">We Have Built an Enviable Reputation</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Phoenix Energy Group is a fast-growing sales and service provider, continuously expanding its global presence across key industrial markets with over 20 years of industry experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We specialize in solutions for the Oil & Gas, Industrial, Marine, Heavy-Duty Fabrication, and HVAC sectors, along with consultancy services focused on operational management, cost optimization, and asset reliability improvement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Supported by a strong global network, extensive resources, and an expanding service infrastructure, Phoenix Energy Group is well positioned to support and protect your critical assets across all industrial sectors.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {["ISO 9001:2015 Certified", "ISO 14001:2015 Certified", "ISO 45001:2018 Certified", "20+ Years Experience", "Global Network", "24/7 Support"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section id="ceo-message" className="dark-section section-padding scroll-mt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <p className="section-title">CEO Message</p>
              <div className="section-divider" />
              <h2 className="section-heading-light mb-6">Driving Industrial Progress</h2>
              <div className="relative mb-8">
                <Quote className="w-12 h-12 text-primary/20 absolute -top-2 -left-2" />
                <p className="leading-relaxed pl-8" style={{ color: "hsl(220, 10%, 75%)" }}>
                  At Phoenix Energy Group, our mission is to drive industrial progress by crossing borders and industries. We believe that true operational excellence is built on the strength of our partnerships—with our customers, our suppliers, and our Joint Venture allies.
                </p>
              </div>
              <p className="leading-relaxed mb-6" style={{ color: "hsl(220, 10%, 70%)" }}>
                As we navigate a complex global landscape, we provide more than just advice; we deliver the machinery, equipment, and technical services essential to the Construction, Industrial, Marine, Oil & Gas, and Environmental Management sectors.
              </p>
              <p className="leading-relaxed mb-8" style={{ color: "hsl(220, 10%, 70%)" }}>
                Our focus remains simple: to combine strategic consultancy with high-performance supply and service. To our partners worldwide, we are committed to transparency, innovation, and shared success. Together, we aren't just serving these vital industries—we are defining their future.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-px h-12 bg-primary" />
                <div>
                  <p className="font-heading font-bold text-lg" style={{ color: "hsl(0, 0%, 95%)" }}>CEO</p>
                  <p className="text-primary text-sm">Phoenix Energy Group</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative">
                <img src="/images/hero-2.jpg" alt="Phoenix Energy leadership" className="w-full shadow-2xl" />
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
              { value: 500, suffix: "+", label: "Projects Completed" },
              { value: 7, suffix: "", label: "Industry Sectors" },
              { value: 20, suffix: "+", label: "Years Experience" },
              { value: 100, suffix: "+", label: "Global Partners" },
            ].map((stat, i) => (
              <div key={i} className="py-10 px-6 text-center border-r border-primary-foreground/10 last:border-r-0">
                <CountUp end={stat.value} suffix={stat.suffix} />
                <p className="text-primary-foreground/80 text-sm uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding gray-section">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-title">Why Choose Us</p>
              <div className="section-divider-center" />
              <h2 className="section-heading">Check What We Offer</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Industry Experience", desc: "Over 20 years of proven expertise across oil & gas, industrial, marine, and HVAC sectors." },
              { icon: <Shield className="w-8 h-8" />, title: "Quality Assured", desc: "ISO 9001, 14001, and 45001 certified for consistent quality, safety, and environmental standards." },
              { icon: <Globe className="w-8 h-8" />, title: "Global Network", desc: "Strong global partnerships and expanding service infrastructure worldwide." },
              { icon: <Users className="w-8 h-8" />, title: "24/7 Support", desc: "Round-the-clock service and technical support ensuring reliability when it matters most." },
              { icon: <Award className="w-8 h-8" />, title: "Expert Team", desc: "Skilled professionals dedicated to delivering exceptional results." },
              { icon: <Wrench className="w-8 h-8" />, title: "Trusted Reliability", desc: "A proven track record of success protecting critical assets across all industrial sectors." },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="bg-background p-8 shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
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

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us today to discuss your requirements.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground hover:text-primary">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;