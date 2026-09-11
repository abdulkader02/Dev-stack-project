import type { Technology } from "../Type/types";
import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
  technology: Technology;
  onAddToStack: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAddToStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div className="flex min-h-61.25 flex-col rounded-xl border border-[#F1F5F9] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-[#F0F9FF] px-3 py-1 text-[10px] font-semibold text-[#0EA5E9]">
          {technology.badge}
        </span>
      </div>
      <h3 className="font-bold text-[#0F172A] mt-4">{technology.name}</h3>
      <p className="mt-2 max-w-57.5 leading-5 text-[#64748B]">
        {technology.description}
      </p>

      <div className="mt-auto pt-4">
        <div className="flex justify-between items-center text-[14px]">
          <span className="rounded bg-[#F1F5F9] px-2 py-1 font-medium text-[#475569]">
            {technology.category}
          </span>
          <span className="font-medium text-[#64748B]">
            {technology.difficulty}
          </span>
          <span className="flex items-center gap-0.5 font-medium">
            <FaStar className="text-[#FBBF24]" />
            {technology.rating}
          </span>
        </div>
        <button
          onClick={() => onAddToStack(technology)}
          disabled={isAdded}
          className={`mt-3 w-full items-center rounded-md py-2 font-medium text-white ${
            isAdded
              ? "cursor-not-allowed bg-[#99a1af]"
              : "bg-[#0F172A] hover:bg-[#1e2939]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
