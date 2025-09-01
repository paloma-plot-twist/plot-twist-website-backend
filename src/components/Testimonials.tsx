import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Building Trust, One Success at a Time
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            We're just getting started, but our results speak volumes. Stay tuned for testimonials from the brands we're transforming.
          </p>
          
          <Card className="border-0 bg-primary/5">
            <CardContent className="p-12">
              <p className="text-2xl text-muted-foreground italic mb-6">
                "Results coming soon. We're busy making magic happen for our clients."
              </p>
              <p className="text-primary font-bold">
                - The Plot Twist Team
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;