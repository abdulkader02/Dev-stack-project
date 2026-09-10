import type { Technology } from "../Type/types";
import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <div className="flex min-h-61.25 flex-col rounded-xl border border-[#F1F5F9] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-8 w-8 object-contain"
        />

        <span className="rounded-full bg-[#F0F9FF] px-3 py-1 text-[10px] font font-semibold text-[#0EA5E9]">
          {technology.badge}
        </span>
      </div>
      <h3 className="font-bold text-[#0F172A] mt-4">{technology.name}</h3>
      <p className="mt-2 max-w-57.5 leading-5 text-[#64748B]">{technology.description}</p>

      <div className="mt-auto pt-4">
        <div className="flex justify-between items-center text-bold text-[14px]">
          <span className="rounded bg-[#F1F5F9] px-2 py-1 font-medium text-[#475569]">
            {technology.category}
          </span>
          <span className="font-medium text-[#64748B]">
            {technology.difficulty}
          </span>
          <span className="flex justify-between items-center gap-0.5 font-medium">
            <FaStar className="text-[#FBBF24]" />
            {technology.rating}
          </span>
        </div>
        <button className="mt-3 w-full rounded-md bg-[#0A0F1D] font-medium  text-white py-2 transition-opacity hover:bg-[#0F172A]">
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
