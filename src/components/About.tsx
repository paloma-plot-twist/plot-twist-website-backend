import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    { title: "Reliability", description: "We honor our commitments and deliver what we promise, when we promise it." },
    { title: "Innovation", description: "We're not here to do what's already been done." },
    { title: "Agility", description: "Things change fast in digital. We adapt, decide quickly, and keep moving forward." },
    { title: "Passion", description: "If 'enthu-cutlet' were in the dictionary, our picture would be under it." },
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
              Meet Your Marketing Bestie
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're the reliable creative powerhouse that moves commerce. Think of us as that 3 AM friend who always gets shit done.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6">Who We Are</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A non-binary, colorful maximalist with a flair for the flamboyant and a deep love for pop culture. Armed with irreverent humor, sharp marketing insight, and a bold design sensibility, we blend storytelling and strategy to craft content that disrupts the mundane and delights with the unexpected.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're not quirky for the sake of making a statement. We optimize your brand guidelines to deliver solutions that connect with your consumers while helping you achieve your business goals.
              </p>
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

          <div>
            <h3 className="text-2xl font-bold text-center mb-12">Our Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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