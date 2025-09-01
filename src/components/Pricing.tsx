import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const tiers = [
    {
      name: "Anchor",
      subtitle: "Basic Tier",
      description: "Foundational engagement for startups and growing brands",
      features: [
        "Brand/Marketing or Social Media Audit",
        "Campaign Concept with 2-3 deliverables",
        "Basic content strategy (one-time)",
        "Creative direction by seniors",
        "Weekly check-ins",
        "High-value essentials"
      ],
      cta: "Start with Anchor"
    },
    {
      name: "Bold",
      subtitle: "Signature Tier",
      description: "Deep partnership for mid-large brands needing strategic firepower",
      features: [
        "End-to-end campaign planning & production",
        "Monthly content & performance strategy",
        "Thought leadership content",
        "Community marketing",
        "Cultural insight reports",
        "Bi-weekly check-ins",
        "Stakeholder business reviews"
      ],
      cta: "Go Bold",
      popular: true
    },
    {
      name: "Cult Status",
      subtitle: "Premium Tier",
      description: "Legacy building for visionary brands wanting iconic work",
      features: [
        "Brand transformation strategy",
        "Integrated marketing campaigns",
        "Creative & growth advisory",
        "C-suite thought leadership",
        "Influencer marketing strategy",
        "Dedicated senior team",
        "White-glove project management"
      ],
      cta: "Achieve Cult Status"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Choose Your Plot Twist
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three tiers designed to meet you where you are and take you where you want to be.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${tier.popular ? 'ring-2 ring-primary scale-105' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                <p className="text-primary font-medium">{tier.subtitle}</p>
                <p className="text-muted-foreground mt-4">{tier.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;