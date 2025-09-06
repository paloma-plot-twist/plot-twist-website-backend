import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[0.9]">
            Your brand deserves better than{" "}
            <span className="italic text-white/70">boring</span>.
          </h2>
          <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
            Reach out, let's get plotting.
          </p>
          <Button 
            size="lg" 
            className="text-xl px-12 py-8 bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-elegant transition-smooth border-0 h-auto"
            asChild
          >
            <a href="https://calendly.com/paloma-findyourplottwist/30min" target="_blank" rel="noopener noreferrer">
              Find Your Plot Twist Today
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;