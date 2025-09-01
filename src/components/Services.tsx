import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Users, Zap, PenTool, TrendingUp, MessageSquare, Lightbulb } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      title: "Brand & Content",
      services: [
        "Content marketing that actually connects",
        "Social media strategy with cultural edge",
        "Campaign concepts that break through the noise",
        "Brand narratives that stick"
      ]
    },
    {
      title: "Creative & Production",
      services: [
        "Video production with impact",
        "Creative direction that drives results",
        "Visual storytelling across all touchpoints",
        "Design that disrupts the ordinary"
      ]
    },
    {
      title: "Growth & Performance",
      services: [
        "Influencer marketing with authentic reach",
        "Performance marketing that scales",
        "Thought leadership that builds authority",
        "Community building that lasts"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just create campaigns—we craft experiences. Our integrated approach combines creativity with strategy, ensuring every touchpoint delivers impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="text-primary font-bold mr-3 mt-1">•</span>
                      {service}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;