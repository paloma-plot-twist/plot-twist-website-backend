import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const criteria = [
    "You can explain your business problem to us",
    "You have a clear idea of what you want from us",
    "You're open to recommendations from our experts",
    "You bring the decision-maker to the table",
    "You believe in honoring timelines",
    "You value both creativity and reliability"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We Can Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We love to work with bold, process-driven brands that value originality and results. If that sounds like you, let's talk about turning spectators into fans.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">We'll Work Well Together If:</h3>
              <ul className="space-y-4 mb-8">
                {criteria.map((criterion, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-bold mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{criterion}</span>
                  </li>
                ))}
              </ul>

              <Card className="border-0 bg-primary/5">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-foreground">Our Promise</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We are the marketing experts you can trust to carry out whatever challenge you bring us. No matter what, we deliver on promises—not just pretty presentations.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Let's Start the Conversation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">hello@plottwist.agency</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+91 [Number]</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">India & APAC</p>
                    </div>
                  </div>

                  <Button size="lg" className="w-full text-lg py-6">
                    Start Your Plot Twist Today
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Response within 24 hours. Let's get shit done.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;