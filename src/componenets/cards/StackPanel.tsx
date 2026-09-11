import type { Id } from "react-toastify";
import type { Technology } from "../Type/types";
import { DiVim } from "react-icons/di";
import { ImCross } from "react-icons/im";

interface  StackPanelProps{
    selectedTecnology : Technology[];
    onRemove :(id:string) => void
    onRemoveAll : ()=> void
}

const StackPanel = ({selectedTecnology, onRemove, onRemoveAll}:StackPanelProps) => {
    return (
        <div>
            <h2>Your Stack</h2>

            {/* SelectedTecnology */}

            <p>{selectedTecnology.length}Technology
                {selectedTecnology.length !== 1 && "ies"} Selected 
            </p>
            {selectedTecnology.length === 0 ?(
                <div>
                    <p>
                       Your stack is empty.
                    </p>
                </div>
            ):(
                <div>
                    {selectedTecnology.map((technology) => (<div key={technology.id}>
                        <div>
                            <img src={technology.icon} alt={technology.name} />
                            <div>
                                <h3>{technology.name}</h3>
                                <p>{technology.category}</p>
                            </div>
                        </div>

                        {/* Remove Button  */}
                        <button onClick={()=>onRemove(technology.id)}><ImCross/></button>
                    </div>))}
                </div>
            )}
            {/* Remove All */}
            {selectedTecnology.length > 0 && (
                <button onClick={onRemoveAll}>Remove All</button>
            )}
        </div>
    );
};

export default StackPanel;