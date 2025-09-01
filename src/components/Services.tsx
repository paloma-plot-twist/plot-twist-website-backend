import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, Users, Zap, PenTool, TrendingUp, MessageSquare, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Stories that stick, content that converts. We craft narratives that resonate with your audience and drive action.",
    },
    {
      icon: Lightbulb,
      title: "Conceptualisation & Scripting",
      description: "Big ideas, bigger impact. From concept to script, we develop campaigns that break through the noise.",
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Moving pictures that move people. Full-service video production that brings your brand to life.",
    },
    {
      icon: MessageSquare,
      title: "Social Media Marketing",
      description: "Where culture meets commerce. We create social strategies that build communities and drive engagement.",
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Authentic voices, amplified reach. We connect you with the right creators for meaningful partnerships.",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Data-driven, results-focused. We optimize campaigns for maximum ROI and measurable growth.",
    },
    {
      icon: Zap,
      title: "Thought Leadership",
      description: "Position your brand as the authority. Strategic content that establishes expertise and builds trust.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Content & Culture Marketing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just create campaigns—we craft experiences. Our integrated approach combines creativity with strategy, ensuring every touchpoint delivers impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;