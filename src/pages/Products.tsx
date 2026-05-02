import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageBanner from "@/components/PageBanner";
import ScrollReveal from "@/components/ScrollReveal";

const productCategories = [
  { name: "Oil & Gas Equipment", image: "/images/oil-gas.jpg", items: ["Valves & Actuators", "Pumps & Compressors", "Pipeline Equipment", "Safety Systems", "Instrumentation", "Wellhead Equipment"] },
  { name: "Marine Equipment", image: "/images/marine.jpg", items: ["Marine Engines", "Deck Machinery", "Navigation Systems", "Safety Equipment", "Mooring Systems", "Communication Devices"] },
  { name: "Construction Machinery", image: "/images/construction.jpg", items: ["Excavators", "Loaders", "Cranes", "Concrete Equipment", "Generators", "Compactors"] },
  { name: "Industrial Machinery", image: "/images/industrial-new.jpg", items: ["CNC Machines", "Conveyor Systems", "Welding Equipment", "Air Compressors", "Material Handling", "Power Tools"] },
  { name: "HVAC Systems", image: "/images/hvac.jpg", items: ["Chillers", "Air Handling Units", "Fan Coil Units", "Ductwork", "Controls & BMS", "Heat Exchangers"] },
  { name: "Fabrication Equipment", image: "/images/fabrication.jpg", items: ["Welding Machines", "CNC Plasma Cutters", "Press Brakes", "Rolling Machines", "NDT Equipment", "Blasting Equipment"] },
];

const Products = () => {
  return (
    <div>
      <PageBanner
        title="Our Products"
        breadcrumb={[{ name: "Home", path: "/" }, { name: "Products" }]}
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="section-title">Product Range</p>
              <div className="section-divider-center" />
              <h2 className="section-heading">World-Class Equipment & Products</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                By aligning with global industry leaders, we ensure our clients' most demanding requirements are met with precision. Our division-specific leadership brings decades of experience to managing comprehensive product portfolios.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, i) => (
              <ScrollReveal key={category.name} delay={i * 100}>
                <div className="service-card group">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 font-heading text-xl font-bold" style={{ color: "hsl(0, 0%, 100%)" }}>
                      {category.name}
                    </h3>
                  </div>
                  <div className="p-7">
                    <ul className="space-y-2.5">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="mt-5 text-primary text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all uppercase tracking-wider">
                      Contact Us <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
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
            Looking for Specific Products?
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Contact us with your requirements and our team will find the right solution for you.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-primary-foreground hover:text-primary">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;