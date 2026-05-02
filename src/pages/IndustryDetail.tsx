import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

const industryData: Record<string, { title: string; image: string; desc: string; features: string[]; services: string[] }> = {
  "oil-gas-marine": {
    title: "Oil & Gas / Marine",
    image: "/images/oil-gas.jpg",
    desc: "Equipment, spare Parts, service & maintenance for oil & gas and marine industry. Our solutions cover upstream, midstream, and downstream operations with a focus on reliability and safety.",
    features: ["Equipment Supply & Procurement", "Spare Parts Management", "Preventive Maintenance Programs", "Emergency Breakdown Support", "Marine Vessel Equipment", "Offshore Platform Solutions"],
    services: ["Valve & Actuator Solutions", "Pumping Systems", "Pipeline Equipment", "Safety Systems", "Marine Engine Parts", "Deck Equipment"],
  },
  construction: {
    title: "Construction Equipment",
    image: "/images/construction.jpg",
    desc: "Service, maintenance & Spare parts for the construction equipment and machinery. From earthmoving to lifting equipment, our comprehensive portfolio ensures your projects stay on schedule and within budget.",
    features: ["Earthmoving Equipment", "Lifting & Crane Solutions", "Concrete & Paving Equipment", "Power Generation", "Site Safety Equipment", "Equipment Rental Services"],
    services: ["Excavators & Loaders", "Tower Cranes", "Concrete Mixers", "Generators", "Safety Barriers", "Material Handling"],
  },
  industrial: {
    title: "Industrial & Workshop Equipment",
    image: "/images/industrial-new.jpg",
    desc: "Industrial & Workshop Equipment, Machinery — Spare parts, Service & Maintenance. We support manufacturing, processing, and production facilities with cutting-edge equipment and expert technical services.",
    features: ["Manufacturing Equipment", "Process Automation", "Material Handling Systems", "Industrial Safety", "Maintenance & Repair", "Technical Consultancy"],
    services: ["CNC Machines", "Conveyor Systems", "Robotic Solutions", "PPE & Safety Gear", "Predictive Maintenance", "Process Optimization"],
  },
  fabrications: {
    title: "Heavy-Duty Fabrications",
    image: "/images/fabrication.jpg",
    desc: "Whether for Oil & Gas, construction, industrial, or marine applications, our advanced fabrication capabilities enable us to deliver custom heavy-duty and precision components engineered to meet the highest industry standards.",
    features: ["Structural Steel Fabrication", "Pressure Vessel Manufacturing", "Tank Construction", "Piping Systems", "Custom Equipment", "Quality Testing & Certification"],
    services: ["Welding Services", "CNC Cutting", "Surface Treatment", "NDT Testing", "Assembly & Installation", "Design Engineering"],
  },
  hvac: {
    title: "HVAC Solutions & Climate Control",
    image: "/images/hvac.jpg",
    desc: "HVAC Spares, Service, Maintenance for the Heating, ventilation and air conditioning systems. We provide commercial and industrial heating, ventilation, and air conditioning solutions tailored to your specific requirements.",
    features: ["Commercial HVAC Systems", "Industrial Ventilation", "Chiller Solutions", "Air Handling Units", "Ductwork Design", "Energy-Efficient Systems"],
    services: ["System Design", "Installation", "Preventive Maintenance", "Repair Services", "Indoor Air Quality", "Energy Audits"],
  },
  "general-maintenance": {
    title: "General Maintenance",
    image: "/images/general-maintenance.jpg",
    desc: "Building maintenance, MEP Services, fire protection systems, Water proofing, flooring solutions and fit out jobs. We deliver comprehensive facility management and maintenance solutions for commercial and industrial properties.",
    features: ["Building Maintenance", "MEP Services", "Fire Protection Systems", "Water Proofing", "Flooring Solutions", "Fit Out Jobs"],
    services: ["Electrical Maintenance", "Plumbing Services", "Fire Alarm Systems", "Painting & Coating", "Civil Works", "Annual Maintenance Contracts"],
  },
  "eco-matrix": {
    title: "Eco-Matrix Systems",
    image: "/images/eco-matrix.jpg",
    desc: "Modern technology for waste management, premium composting, cooling systems, thermal bank solutions for agricultural, live stock, diary farms, malls, hospitals, industrial plants etc.",
    features: ["Waste Management Systems", "Premium Composting", "Cooling Systems", "Thermal Bank Solutions", "Agricultural Solutions", "Hospital & Mall Systems"],
    services: ["System Design", "Installation & Commissioning", "O&M Services", "Water Quality Testing", "Compliance Consulting", "Upgrade Solutions"],
  },
};

const IndustryDetail = () => {
  const { slug } = useParams();
  const industry = industryData[slug || ""];

  if (!industry) {
    return (
      <div className="section-padding text-center">
        <h2 className="section-heading">Industry Not Found</h2>
        <Link to="/industries" className="btn-primary mt-8 inline-flex">Back to Industries</Link>
      </div>
    );
  }

  return (
    <div>
      <PageBanner
        title={industry.title}
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }, { name: industry.title }]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="relative">
                <img src={industry.image} alt={industry.title} className="w-full shadow-2xl" />
                <div className="absolute inset-0 border-4 border-primary/20 translate-x-4 translate-y-4 -z-10" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="section-title">Industry Overview</p>
              <div className="section-divider" />
              <h2 className="section-heading mb-6">{industry.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{industry.desc}</p>

              <h3 className="font-heading text-xl font-bold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {industry.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-heading text-xl font-bold mb-4">Products & Services</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {industry.services.map((s) => (
                  <div key={s} className="bg-secondary p-3 text-center text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    {s}
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
            Need {industry.title} Solutions?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us today for a customized quote and expert consultation.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground hover:text-primary">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
