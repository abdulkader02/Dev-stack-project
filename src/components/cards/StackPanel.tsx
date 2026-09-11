import type { Technology } from "../Type/types";
import { ImCross } from "react-icons/im";

interface StackPanelProps {
  selectedTechnology: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackPanel = ({
  selectedTechnology,
  onRemove,
  onRemoveAll,
}: StackPanelProps) => {
  return (
    <div className="rounded-xl border border-[#F1F5F9] bg-white p-5 shadow-sm">
      
      {/* Heading */}
      <h2 className="font-bold text-[#0F172A]">
        Your Stack
      </h2>

      {/* Selected Technology Count */}
      <p className="mt-2 text-sm text-[#94A3B8]">
        {selectedTechnology.length}{" "}
        {selectedTechnology.length === 1
          ? "Technology"
          : "Technologies"}{" "}
        Selected
      </p>

      {/* Empty State */}
      {selectedTechnology.length === 0 ? (
        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-[#E2E8F0] text-[#94A3B8]">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {selectedTechnology.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border border-[#E2E8F0] px-3 py-2"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div>
                  <h3 className="text-[12px] font-bold text-[#0F172A]">
                    {technology.name}
                  </h3>

                  <p className="text-[9px] text-[#94A3B8]">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-xl font-light text-[#94A3B8] hover:text-[#0F172A]"
              >
                <ImCross />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}
      {selectedTechnology.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-6 w-full rounded-md border border-[#ED8C85] py-2 font-semibold text-[#D82C20] hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackPanel;