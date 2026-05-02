import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

const industries = [
  { name: "Oil & Gas / Marine", desc: "Equipment, spare Parts, service & maintenance for oil & gas and marine industry. We provide comprehensive support including procurement, installation, and after-sales service.", image: "/images/oil-gas.jpg", path: "/industries/oil-gas-marine" },
  { name: "Construction Equipment", desc: "Service, maintenance & Spare parts for the construction equipment and machinery. From earthmoving to lifting equipment, we offer complete solutions.", image: "/images/construction.jpg", path: "/industries/construction" },
  { name: "Industrial & Workshop Equipment", desc: "Industrial & Workshop Equipment, Machinery — Spare parts, Service & Maintenance. Supporting manufacturing, processing, and production facilities.", image: "/images/industrial-new.jpg", path: "/industries/industrial" },
  { name: "Heavy-Duty Fabrications", desc: "Whether for Oil & Gas, construction, industrial, or marine applications, our advanced fabrication capabilities enable us to deliver custom heavy-duty and precision components engineered to meet the highest industry standards.", image: "/images/fabrication.jpg", path: "/industries/fabrications" },
  { name: "HVAC Solutions & Climate Control", desc: "HVAC Spares, Service, Maintenance for the Heating, ventilation and air conditioning systems.", image: "/images/hvac.jpg", path: "/industries/hvac" },
  { name: "General Maintenance", desc: "Building maintenance, MEP Services, fire protection systems, Water proofing, flooring solutions and fit out jobs.", image: "/images/general-maintenance.jpg", path: "/industries/general-maintenance" },
  { name: "Eco-Matrix Systems", desc: "Modern technology for waste management, premium composting, cooling systems, thermal bank solutions for agricultural, live stock, diary farms, malls, hospitals, industrial plants etc.", image: "/images/eco-matrix.jpg", path: "/industries/eco-matrix" },
];

const Industries = () => {
  return (
    <div>
      <PageBanner
        title="Our Industries"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Industries" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-title">What We Offer</p>
              <div className="section-divider-center" />
              <h2 className="section-heading">Comprehensive Industrial Solutions</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Comprehensive solutions across multiple industries, delivering excellence through world-renowned brands and unmatched expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-20">
            {industries.map((item, i) => (
              <ScrollReveal key={item.name} delay={100}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative group overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 border-4 border-primary/20 translate-x-4 translate-y-4 -z-10" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="section-divider" />
                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{item.name}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{item.desc}</p>
                    <Link to={item.path} className="btn-primary">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
