import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 lg:pt-32 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Ready for a{" "}
                <span className="text-primary">plot twist</span>{" "}
                in your brand's story?
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Meet the marketing collective that bridges creative thought and reliable results.
              </p>
            </div>
            
            <div className="lg:pl-12">
              <Card className="border-2 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">Drop your deets and let's get plotting</h3>
                  <form className="space-y-4">
                    <Input placeholder="What's your name?" className="w-full" />
                    <Input placeholder="What's your challenge?" className="w-full" />
                    <Input placeholder="Where do you work?" className="w-full" />
                    <Input placeholder="What's your role?" className="w-full" />
                    <Input placeholder="How can we contact you? (Email)" type="email" className="w-full" />
                    <Input placeholder="What's the timeline for getting your project started?" className="w-full" />
                    <Button size="lg" className="w-full text-lg py-6">
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