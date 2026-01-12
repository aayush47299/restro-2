import { Award, Heart, Users, TrendingUp } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

export default function About() {
  return (
    <div className="bg-black text-white pt-20">
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4">
            Our Story
          </h1>
          <p className="text-xl text-gray-300">
            A legacy of culinary excellence since 2010
          </p>
        </div>
      </section>

      <SectionWrapper dark>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-amber-500 mb-6">
              Welcome to La Maison Dorée
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Founded with a vision to redefine fine dining, La Maison Dorée represents the perfect marriage of tradition and innovation. Our name, which translates to "The Golden House," reflects our commitment to providing a golden experience in every aspect of your visit.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              What started as a small family restaurant has grown into one of the city's most beloved culinary destinations. Our journey has been marked by unwavering dedication to quality, authenticity, and the art of hospitality.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-amber-500 mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At La Maison Dorée, we believe that dining is not just about food—it's about creating memories. Every dish that leaves our kitchen is a testament to our commitment to excellence, crafted with passion and presented with pride.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              We source our ingredients from carefully selected local farms and international suppliers who share our values of sustainability and quality. Our chefs combine classical French techniques with contemporary innovation to create dishes that are both familiar and exciting.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From the moment you step through our doors, we strive to make you feel like part of our family. Whether you're celebrating a special occasion or enjoying an intimate dinner, we're here to ensure your experience is exceptional.
            </p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/4253320/pexels-photo-4253320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Chef in kitchen"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-amber-500 mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition earned through dedication and excellence
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-amber-500 mb-2">15+</div>
            <p className="text-gray-400">Culinary Awards</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-amber-500 mb-2">50K+</div>
            <p className="text-gray-400">Happy Guests</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-amber-500 mb-2">30+</div>
            <p className="text-gray-400">Expert Team</p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-amber-500 mb-2">14</div>
            <p className="text-gray-400">Years of Excellence</p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Restaurant ambiance"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-amber-500 mb-6">
              The Experience
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Step into a world where every detail matters. Our elegant dining room features warm lighting, sophisticated decor, and comfortable seating designed to create the perfect ambiance for your meal.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our attentive staff is trained to anticipate your needs while respecting your privacy. We believe that great service is invisible—present when you need it, unobtrusive when you don't.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're here for a romantic dinner for two, a family celebration, or a business lunch, we have the perfect setting to make your occasion memorable.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper dark>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-amber-500 mb-6">
            Meet Our Chef
          </h2>
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Executive Chef"
              className="w-64 h-64 object-cover rounded-full mx-auto mb-6 border-4 border-amber-600"
            />
            <h3 className="text-2xl font-bold text-white mb-2">Chef Alexandre Rousseau</h3>
            <p className="text-amber-500 mb-6">Executive Chef & Founder</p>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            With over 20 years of culinary experience across Europe and Asia, Chef Alexandre brings a wealth of knowledge and creativity to every dish. Trained in classical French cuisine and inspired by global flavors, he has created a menu that celebrates both tradition and innovation.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            His philosophy is simple: use the best ingredients, treat them with respect, and let their natural flavors shine. This approach has earned him numerous accolades and the loyalty of discerning diners who appreciate authentic, expertly prepared cuisine.
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
