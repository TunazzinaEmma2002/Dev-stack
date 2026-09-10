import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
import techData from "./data/technologies.json";

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
      toast.warning(`${tech.name} is already in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  const handleRemove = (id: string) => {
    const removed = stack.find((t) => t.id === id);
    setStack(stack.filter((t) => t.id !== id));
    if (removed) toast.info(`${removed.name} removed from stack.`);
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("All technologies removed from stack.");
  };

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer position="top-right" autoClose={2000} />
      <Navbar />
      <Hero />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

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
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default App;