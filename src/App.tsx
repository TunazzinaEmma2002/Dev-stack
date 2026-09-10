import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import techData from "./data/technologies.json";
import Footer from "./components/Footer";

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

function App() {
  const [technologies, setTechnologies] = useState<Tech[]>([]);
  const [stack, setStack] = useState<Tech[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(techData as Tech[]);
    setLoading(false);
  }, []);

  const handleAdd = (tech: Tech) => {
    if (stack.find((t) => t.id === tech.id)) {
      alert(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
  };

  const handleRemove = (id: string) => {
    setStack(stack.filter((t) => t.id !== id));
  };

  const handleRemoveAll = () => setStack([]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
{/* h2 added */}
        {loading ? (
          <p className="text-gray-500 mt-6">Loading technologies...</p>
        ) : (
          <div className="grid md:grid-cols-[1fr_320px] gap-8 mt-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={!!stack.find((t) => t.id === tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>

            <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
             <Footer />
          </div>
        )}
      </section>
    </div>
  );
}

export default App;