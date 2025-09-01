const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-secondary-foreground mb-4">
                plot<span className="text-primary">.</span>twist
              </h3>
              <p className="text-secondary-foreground/80 max-w-md leading-relaxed">
                APAC's most reliable creative marketing agency. We're the plot twist in your brand's story—turning consumers into loyal fans through wit, wisdom, and proven execution.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#portfolio" className="hover:text-primary transition-colors">Our Work</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Brand Resources</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Email: hello@plottwist.agency</li>
                <li>Phone: +91 [Number]</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-secondary-foreground/60 text-sm">
                © 2024 Plot Twist. All rights reserved.
              </p>
              <p className="text-secondary-foreground/60 text-sm mt-4 md:mt-0">
                Your marketing bestie who gets shit done. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;