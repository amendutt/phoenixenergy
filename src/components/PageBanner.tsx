import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface PageBannerProps {
  title: string;
  breadcrumb: { name: string; path?: string }[];
  children?: ReactNode;
}

const PageBanner = ({ title, breadcrumb }: PageBannerProps) => {
  return (
    <div
      className="page-banner"
      style={{ backgroundImage: "url('/images/dark-bg.jpg')" }}
    >
      <div className="relative z-10 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm">
          {breadcrumb.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-primary">/</span>}
              {item.path ? (
                <Link to={item.path} className="text-primary-foreground hover:text-primary transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-primary">{item.name}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
