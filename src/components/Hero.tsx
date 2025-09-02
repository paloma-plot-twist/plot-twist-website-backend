import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Content - Takes up more space */}
            <div className="lg:col-span-3 text-left">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[0.9]">
                Ready for a{" "}
                <span className="text-primary relative">
                  plot twist
                  <div className="absolute -inset-2 gradient-primary opacity-10 blur-xl"></div>
                </span>{" "}
                in your brand's story?
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-12 leading-relaxed font-light max-w-2xl">
                Meet the marketing collective that bridges creative thought and reliable results.
              </p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">3B+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Press Impressions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">30+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Brands Transformed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
                </div>
              </div>
            </div>
            
            {/* Form - More compact */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-elegant backdrop-blur-sm bg-card/90">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Drop your deets and let's get plotting</h3>
                  <form className="space-y-4">
                    <Input placeholder="What's your name?" className="h-12 border-0 bg-muted/50" />
                    <Input placeholder="What's your challenge?" className="h-12 border-0 bg-muted/50" />
                    <Input placeholder="Where do you work?" className="h-12 border-0 bg-muted/50" />
                    <Input placeholder="What's your role?" className="h-12 border-0 bg-muted/50" />
                    <Input placeholder="How can we contact you? (Email)" type="email" className="h-12 border-0 bg-muted/50" />
                    <Input placeholder="What's the timeline for getting your project started?" className="h-12 border-0 bg-muted/50" />
                    <Button size="lg" className="w-full text-lg h-14 gradient-primary border-0 shadow-glow hover:shadow-elegant transition-smooth">
                      Start Your Plot Twist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;