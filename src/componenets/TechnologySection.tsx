import { use, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./cards/TechnologyCard";
import StackPanel from "./cards/StackPanel";

import type { Technology } from "./Type/types";

interface TechnologySectionProps {
  technologiesPromise: Promise<Technology[]>;
}

const TechnologySection = ({
  technologiesPromise,
}: TechnologySectionProps) => {
  const technologies = use(technologiesPromise);

  const [selectedTecnology, setSelectedTecnology] =
    useState<Technology[]>([]);

  // Add Technology
  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTecnology.some(
      (item) => item.id === technology.id,
    );

    if (alreadyAdded) {
      toast.error(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTecnology([
      ...selectedTecnology,
      technology,
    ]);
  };

  // Remove Single Technology
  const handleRemove = (id: string) => {
    setSelectedTecnology(
      selectedTecnology.filter(
        (technology) => technology.id !== id,
      ),
    );
  };

  // Remove All Technologies
  const handleRemoveAll = () => {
    setSelectedTecnology([]);
  };

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-7">
          <h2 className="text-4xl font-extrabold text-[#0F172A]">
            Explore the{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  onAddToStack={handleAddToStack}
                  isAdded={selectedTecnology.some(
                    (item) => item.id === technology.id,
                  )}
                />
              ))}
            </div>
          </div>

          {/* Your Stack */}
          <div className="lg:col-span-1">
            <StackPanel
              selectedTecnology={selectedTecnology}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologySection;