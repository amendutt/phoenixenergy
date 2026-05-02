import { Link } from "react-router-dom";
import { ArrowRight, Settings, Truck, Wrench, HeadphonesIcon, ClipboardCheck, Leaf, CheckCircle, Briefcase } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Equipment & Machinery Supply",
    desc: "We supply a wide range of equipment and machinery across the industries we serve—both new and certified pre-owned—ensuring complete peace of mind through comprehensive warranty coverage, spare parts availability, and reliable after-sales service.",
    image: "/images/phoenix-products.jpg",
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: "Spare Parts & Consumables",
    desc: "We are partnered with world-leading manufacturers of genuine and OEM spare parts, along with high-quality consumables, to ensure extended asset life. All products we supply are backed by warranty, giving you complete confidence and peace of mind in your operations.",
    image: "/images/industrial-new.jpg",
  },
  {
    icon: <HeadphonesIcon className="w-10 h-10" />,
    title: "Service & Maintenance",
    desc: "Our industry-specialized technical teams, each with over 20 years of experience, are equipped to manage preventive and corrective maintenance programs, ensuring maximum uptime and optimal operational efficiency of your equipment. Our technical team is available 24/7 to promptly respond to your calls and messages, ensuring minimal downtime and preventing unexpected breakdowns.",
    image: "/images/phoenix-service.jpg",
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Logistics & Delivery",
    desc: "Through partnerships with leading logistics providers across air, sea, and road, Phoenix Energy can deliver a wide range of industry products worldwide. Once your order is confirmed, we ensure seamless, hassle-free delivery right to your doorstep.",
    image: "/images/fabrication.jpg",
  },
  {
    icon: <Leaf className="w-10 h-10" />,
    title: "Eco-Matrix Systems",
    desc: "In partnership with leading global waste management companies, we offer diversified, industry-specific solutions tailored to sectors ranging from agriculture and livestock farming to heavy industries. Our approach seamlessly integrates ecological responsibility with economic efficiency, delivering sustainable solutions for both solid and liquid waste management.",
    image: "/images/eco-matrix.jpg",
  },
  {
    icon: <Briefcase className="w-10 h-10" />,
    title: "Consultancy Services",
    desc: "At Phoenix Consultancy, we deliver smart solutions that optimize operations, reduce costs, enhance asset reliability, and minimize breakdowns—all without compromising efficiency. From strategic sourcing and maintenance planning to training programs, we equip your business for peak performance. Plus, in partnership with one of Qatar's top law firms, we provide seamless legal support to safeguard and grow your business.",
    image: "/images/phoenix-team.jpg",
  },
];

const Services = () => {
  return (
    <div>
      <PageBanner
        title="Our Services"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Services" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-title">Our Services</p>
              <div className="section-divider-center" />
              <h2 className="section-heading">Perfect Solutions for Industry</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                We offer a comprehensive range of services to support your industrial operations, from equipment supply to expert consultancy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="service-card group h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground -mt-16 relative z-10 mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{service.desc}</p>
                    <Link to="/contact" className="text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Consultancy Details */}
      <section className="dark-section section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src="/images/phoenix-team.jpg" alt="Phoenix Consultancy Team" className="w-full shadow-2xl" />
                <div className="absolute inset-0 border-4 border-primary/20 translate-x-4 translate-y-4 -z-10" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <p className="section-title">Consultancy Services</p>
              <div className="section-divider" />
              <h2 className="section-heading-light mb-4">Maximize Profit, Minimize Cost</h2>
              <p className="text-primary font-heading text-lg font-semibold mb-6">Without Compromising Efficiency</p>
              <p className="leading-relaxed mb-6" style={{ color: "hsl(220, 10%, 70%)" }}>
                With Phoenix Consultancy, efficiency meets strategy. We streamline operations, cut costs, boost asset reliability, and prevent breakdowns—empowering your business to perform at its peak. From strategic sourcing and maintenance planning to targeted training, we deliver results that matter. Backed by one of Qatar's leading law firms, we also provide expert legal support to protect and grow your enterprise.
              </p>
              <div className="space-y-4">
                {[
                  "Operational Management",
                  "Cost Optimization",
                  "Maintenance Planning & Execution",
                  "Strategic Sourcing",
                  "Breakdown Reduction",
                  "Asset Reliability",
                  "Training Programs",
                  "Legal Support (via partner law firm)",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span style={{ color: "hsl(220, 10%, 75%)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Our Expert Services?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us to discuss how we can help optimize your operations.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground hover:text-primary">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;