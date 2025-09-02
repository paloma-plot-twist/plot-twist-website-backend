import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Users, Zap, PenTool, TrendingUp, MessageSquare, Lightbulb } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Brand & Content",
      description: "Stories that resonate, content that converts",
      services: [
        "Content marketing that actually connects",
        "Social media strategy with cultural edge", 
        "Campaign concepts that break through the noise",
        "Brand narratives that stick"
      ],
      icon: "🎨"
    },
    {
      title: "Creative & Production",
      description: "Visual storytelling that drives results",
      services: [
        "Video production with impact",
        "Creative direction that drives results",
        "Visual storytelling across all touchpoints",
        "Design that disrupts the ordinary"
      ],
      icon: "🎬"
    },
    {
      title: "Growth & Performance",
      description: "Data-driven growth that scales",
      services: [
        "Influencer marketing with authentic reach",
        "Performance marketing that scales",
        "Thought leadership that builds authority", 
        "Community building that lasts"
      ],
      icon: "📊"
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="absolute inset-0 gradient-subtle opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              What We Do
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
              We don't just create campaigns—we craft experiences. Our integrated approach combines creativity with strategy, ensuring every touchpoint delivers impact.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth group relative overflow-hidden">
                <div className="absolute inset-0 gradient-primary opacity-0 group-hover:opacity-5 transition-smooth"></div>
                <CardContent className="p-10 relative">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-smooth">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{category.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 font-medium">{category.description}</p>
                  <ul className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-muted-foreground leading-relaxed flex items-start group/item">
                        <span className="text-primary font-bold mr-4 mt-1 group-hover/item:scale-125 transition-smooth">→</span>
                        <span className="group-hover/item:text-foreground transition-smooth">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;