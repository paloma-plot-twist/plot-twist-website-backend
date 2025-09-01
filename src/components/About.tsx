import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    { title: "Innovation", description: "We're not here to reheat yesterday's ideas. Every solution we create is built from scratch to solve your specific challenge." },
    { title: "Cultural Intelligence", description: "We don't just follow trends - we understand the cultural currents that move your audience. We speak their language, not marketing jargon." },
    { title: "Business Impact", description: "Pretty campaigns that don't drive results? Not our thing. Every creative decision we make serves your bottom line." },
    { title: "Transparency", description: "No black boxes, no mysterious processes. You'll know exactly what we're doing, why we're doing it, and how it's performing." },
    { title: "Agility", description: "The digital world moves fast. We move faster. When strategies need to pivot, we're already three steps ahead." },
    { title: "Ownership", description: "Your success is our success. When things go right, we celebrate together. When they don't, we fix them - no finger pointing, just solutions." },
  ];

  const personality = [
    "Witty & Irreverent",
    "Pop-Culture Savvy",
    "Maximalist & Bold",
    "Dependable & Trustworthy",
    "Solution-Oriented",
    "Culturally Aware"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Plot Twist is an integrated marketing agency for brands across APAC who refuse to blend in. We turn cultural moments into business momentum, delivering campaigns that disrupt the mundane and drive real growth.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                <strong>What we bring to the table:</strong> Fresh perspectives, proven execution, measurable impact.
              </p>
              <div className="mt-8 space-y-4 text-muted-foreground max-w-4xl mx-auto text-left">
                <p>Need content strategy that appeals to humans, not just the algo?</p>
                <p>Want performance marketing that performs and influencers who... well, influence?</p>
                <p>Need video production that actually drives results?</p>
                <p className="font-semibold">Bring us the marketing challenges that keep you up at night. We live to solve.</p>
                <p>With five decades of cumulative marketing experience, we know that great marketing isn't just creative — it's effective.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Credentials</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• 50 years of collective hands-on marketing experience</li>
                  <li>• 30+ brands transformed across APAC markets by team Plot Twist</li>
                  <li>• 3 billion+ press impressions achieved for our team's work</li>
                  <li>• 1 million+ social media followers growth for brands we've worked on</li>
                  <li>• 300+ creator partnerships launched across multiple markets</li>
                  <li>• 7.3% average uplift in DAU/MAU through in-platform marketing activations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Our Personality</h3>
                <div className="flex flex-wrap gap-2">
                  {personality.map((trait, index) => (
                    <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                      {trait}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center mb-12">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-0 bg-card/50">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-primary">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;