const Portfolio = () => {
  const brands = [
    "Bumble", "Marvel", "Disney", "Thrive", "PTT", "Impassion Afghanistan",
    "IBM", "Spotify", "Reliance Digital", "D'Decor", "ScoopWhoop"
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Brands We've Transformed
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            From startups to global giants, we've helped brands across industries find their voice and amplify their impact.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {brands.map((brand, index) => (
              <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-lg font-bold text-foreground">{brand}</div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground">
            More portfolio samples coming soon. Let's add your brand to this list.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;