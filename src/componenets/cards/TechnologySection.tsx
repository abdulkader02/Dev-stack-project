import { use } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../Type/types"

type TechnologySectionProps = {
  technologiesPromise: Promise<Technology[]>;
};

const TechnologySection = ({
  technologiesPromise,
}: TechnologySectionProps) => {
  const technologies = use(technologiesPromise);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

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

        {/* Grid section */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnologySection;