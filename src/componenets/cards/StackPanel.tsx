import type { Id } from "react-toastify";
import type { Technology } from "../Type/types";
import { DiVim } from "react-icons/di";
import { ImCross } from "react-icons/im";

interface StackPanelProps {
  selectedTecnology: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackPanel = ({
  selectedTecnology,
  onRemove,
  onRemoveAll,
}: StackPanelProps) => {
  return (
    <div className="rounded-xl border border-[#F1F5F9] bg-white p-5 shadow-sm">
      <h2 className="font-bold text-[#0F172A]">Your Stack</h2>

      {/* SelectedTecnology */}

      <p className="mt-2 text-[#94A3B8] text-sm">
        {selectedTecnology.length}Technology
        {selectedTecnology.length !== 1 && "ies"} Selected
      </p>
      {selectedTecnology.length === 0 ? (
        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-[#E2E8F0] text-[#94A3B8]">
          <p>Your stack is empty.</p>
        </div>
      ) : (
        <div className="mt-4 space-y-2">
          {selectedTecnology.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between  rounded-lg border border-[#E2E8F0] px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />
                <div>
                  <h3 className="text-xs font-semibold text-[#0F172A]">
                    {technology.name}
                  </h3>
                  <p className="text-[9px] text-[#94A3B8]">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove Button  */}
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
      {selectedTecnology.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-6 w-full rounded-md border border-[#ED8C85] py-2 text-xs font-semibold text-[#D82C20] hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default StackPanel;
