import PropTypes from "prop-types";
import { FiPlus, FiX } from "react-icons/fi";

export default function NoteItems({ isNew, value, onClick, ...rest }) {
    return (
        <div className={`flex items-center mb-2 rounded-xl pr-4
        ${isNew ? "border-dashed border-2 border-zinc-500" : "bg-zinc-900 border-none"} 
        `}>
            <input
                className="h-14 p-3 border-none bg-transparent w-full"
                value={value}
                type="text"
                readOnly={!isNew}
                {...rest}
            />
            <button
                className={isNew ? "text-orange-400" : "text-red-500"}
                type="button"
                onClick={onClick}
            >
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </div>
    );
}

NoteItems.propTypes = {
    isNew: PropTypes.bool,
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func
};
