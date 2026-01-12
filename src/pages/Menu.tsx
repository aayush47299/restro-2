import SectionWrapper from '../components/SectionWrapper';
import MenuCard from '../components/MenuCard';
import { menuData } from '../data/menuData';

export default function Menu() {
  return (
    <div className="bg-black text-white pt-20">
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Food presentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-500 mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-gray-300">
            Culinary masterpieces crafted with passion
          </p>
        </div>
      </section>

      {menuData.map((section, sectionIndex) => (
        <SectionWrapper key={sectionIndex} dark={sectionIndex % 2 === 0}>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-500 text-center mb-4">
              {section.category}
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {section.items.map((item, itemIndex) => (
              <MenuCard key={itemIndex} {...item} />
            ))}
          </div>
        </SectionWrapper>
      ))}

      <SectionWrapper>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-amber-500 mb-6">
            Special Dietary Requirements?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            We are happy to accommodate vegetarian, vegan, gluten-free, and other dietary preferences. Please inform our staff when placing your order, and our chefs will be delighted to customize your meal.
          </p>
          <p className="text-amber-500 font-semibold text-lg">
            All prices are in Indian Rupees and inclusive of taxes
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
