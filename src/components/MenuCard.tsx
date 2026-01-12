interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function MenuCard({ name, description, price, image }: MenuCardProps) {
  return (
    <div className="group bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-600/20 hover:border-amber-500/40">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white group-hover:text-amber-500 transition-colors">
            {name}
          </h3>
          <span className="text-amber-500 font-bold text-lg">₹{price}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
