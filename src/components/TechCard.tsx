type Tech = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type Props = {
  tech: Tech;
  isAdded: boolean;
  onAdd: (tech: Tech) => void;
};

export default function TechCard({ tech, isAdded, onAdd }: Props) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition bg-white">
      <div className="flex items-start justify-between mb-3">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
        <span className="text-xs font-semibold px-2 py-1 rounded-full bg-pink-50 text-pink-600">
          {tech.badge}
        </span>
      </div>

      <h3 className="font-bold text-gray-900">{tech.name}</h3>
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{tech.description}</p>

      <div className="flex items-center gap-2 mt-3">
        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
          {tech.category}
        </span>
        <span className="text-xs text-gray-500">{tech.difficulty}</span>
      </div>

      <div className="flex items-center gap-1 mt-2 text-sm text-yellow-500">
        ⭐ <span className="text-gray-700 font-medium">{tech.rating}</span>
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-4 w-full py-2 rounded-lg text-sm font-semibold transition ${
          isAdded
            ? "bg-gray-200 text-gray-500 cursor-not-allowed"
            : "bg-gray-900 text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}