import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChefHat, Utensils } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import MenuCard from '../components/MenuCard';

export default function Home() {
  const featuredDishes = [
    {
      name: 'Truffle Risotto',
      description: 'Creamy arborio rice infused with black truffle oil and parmesan',
      price: 1250,
      image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Grilled Salmon',
      description: 'Fresh Atlantic salmon with herb butter and seasonal vegetables',
      price: 1450,
      image: 'https://images.pexels.com/photos/3662136/pexels-photo-3662136.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Chocolate Soufflé',
      description: 'Rich dark chocolate soufflé with vanilla bean ice cream',
      price: 650,
      image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Beef Wellington',
      description: 'Tender beef fillet wrapped in puff pastry with mushroom duxelles',
      price: 2200,
      image: 'https://images.pexels.com/photos/3535383/pexels-photo-3535383.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const galleryImages = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2788792/pexels-photo-2788792.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  return (
    <div className="bg-black text-white">
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-amber-500">
            La Maison Dorée
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4">
            Where Culinary Artistry Meets Elegance
          </p>
          <p className="text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Indulge in an unforgettable dining experience crafted with passion, precision, and the finest ingredients from around the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              View Our Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-amber-600 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">
              Our Story
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Established in 2010, La Maison Dorée has become a beacon of fine dining excellence. Our journey began with a simple philosophy: create extraordinary culinary experiences that touch the soul.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Each dish is a masterpiece, carefully crafted by our award-winning chefs who blend traditional techniques with innovative flavors. We source only the freshest, locally-sourced ingredients to ensure every bite is memorable.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center text-amber-500 hover:text-amber-400 font-semibold text-lg transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef preparing food"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">
            Featured Selections
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our chef's signature creations, carefully curated to delight your palate
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, index) => (
            <MenuCard key={index} {...dish} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Explore Full Menu
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the difference that passion and dedication make
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-black rounded-lg border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Fresh Ingredients</h3>
            <p className="text-gray-400 leading-relaxed">
              We partner with local farms and suppliers to bring you the freshest, seasonal ingredients daily.
            </p>
          </div>

          <div className="text-center p-8 bg-black rounded-lg border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <ChefHat className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Signature Recipes</h3>
            <p className="text-gray-400 leading-relaxed">
              Our award-winning chefs create unique dishes that blend tradition with contemporary innovation.
            </p>
          </div>

          <div className="text-center p-8 bg-black rounded-lg border border-amber-600/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-6">
              <Utensils className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Cozy Ambience</h3>
            <p className="text-gray-400 leading-relaxed">
              Elegant decor and warm lighting create the perfect atmosphere for any occasion.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">
            Gallery
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into our culinary world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative h-64 overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
