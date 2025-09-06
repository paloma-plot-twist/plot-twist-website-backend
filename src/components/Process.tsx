import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Target, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "We dig deep into your brand, audience, and business goals"
    },
    {
      icon: Target,
      title: "Strategise",
      description: "We plot the twist that will change your narrative"
    },
    {
      icon: Lightbulb,
      title: "Create",
      description: "We bring ideas to life with obsessive attention to detail"
    },
    {
      icon: Rocket,
      title: "Deliver",
      description: "We execute flawlessly and measure what matters"
    },
    {
      icon: TrendingUp,
      title: "Optimise",
      description: "We adapt and evolve based on real-world results"
    }
  ];

  return (
    <section id="process" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We Do It
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proven process that turns your brand challenges into breakthrough results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;