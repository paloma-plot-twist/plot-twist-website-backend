import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
              Who We Are
            </h2>
            <div className="max-w-4xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed space-y-8 font-light">
              <p className="text-2xl md:text-3xl font-medium text-foreground">
                Plot Twist is an integrated marketing agency for brands across APAC who refuse to blend in.
              </p>
              <p>
                We turn cultural moments into business momentum, delivering campaigns that disrupt the mundane and drive real growth.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-lg font-medium">
                <span className="px-4 py-2 bg-primary/10 rounded-full">Fresh perspectives</span>
                <span className="px-4 py-2 bg-primary/10 rounded-full">Proven execution</span>  
                <span className="px-4 py-2 bg-primary/10 rounded-full">Measurable impact</span>
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Innovation",
                description: "We're not here to reheat yesterday's ideas. Every solution we create is built from scratch to solve your specific challenge.",
                icon: "💡"
              },
              {
                title: "Cultural Intelligence", 
                description: "We don't just follow trends - we understand the cultural currents that move your audience.",
                icon: "🎯"
              },
              {
                title: "Business Impact",
                description: "Pretty campaigns that don't drive results? Not our thing. Every creative decision serves your bottom line.",
                icon: "📈"
              },
              {
                title: "Transparency",
                description: "No black boxes, no mysterious processes. You'll know exactly what we're doing and how it's performing.",
                icon: "🔍"
              },
              {
                title: "Agility",
                description: "The digital world moves fast. We move faster. When strategies need to pivot, we're already three steps ahead.",
                icon: "⚡"
              },
              {
                title: "Ownership",
                description: "Your success is our success. When things go right, we celebrate together. When they don't, we fix them.",
                icon: "🤝"
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-elegant hover:shadow-glow transition-smooth group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-smooth">{value.icon}</div>
                  <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Credentials - Redesigned as impact metrics */}
          <div className="relative">
            <Card className="border-0 shadow-elegant bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold text-center mb-12">Our Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
                  {[
                    { number: "3B+", label: "Press Impressions", sublabel: "Media coverage generated" },
                    { number: "30+", label: "Brands Transformed", sublabel: "Across APAC markets" },
                    { number: "50", label: "Years Experience", sublabel: "Collective team expertise" },
                    { number: "1M+", label: "Followers Grown", sublabel: "Social media growth" },
                    { number: "300+", label: "Creator Partnerships", sublabel: "Authentic collaborations" },
                    { number: "7.3%", label: "Average Uplift", sublabel: "In user engagement" }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-smooth">
                        {stat.number}
                      </div>
                      <div className="text-lg font-semibold text-foreground mb-1">{stat.label}</div>
                      <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;