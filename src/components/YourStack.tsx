type Tech = {
  id: string;
  name: string;
  category: string;
  icon: string;
};

type Props = {
  stack: Tech[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

export default function YourStack({ stack, onRemove, onRemoveAll }: Props) {
  return (
    <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white h-fit">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-900">Your Stack</h3>
        {stack.length > 0 && (
          <button onClick={onRemoveAll} className="text-xs text-red-500 hover:underline">
            Remove All
          </button>
        )}
      </div>

      <p className="text-sm text-gray-500 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-8">
          No technologies added yet.
        </p>
      ) : (
        <div className="flex flex-col gap-3">
          {stack.map((item) => (
            <div key={item.id} className="flex items-center justify-between border border-gray-100 rounded-lg p-3">
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>
                </div>
              </div>
              <button onClick={() => onRemove(item.id)} className="text-gray-400 hover:text-red-500">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}