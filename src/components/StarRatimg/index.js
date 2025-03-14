"use client";
import { FaStar } from "react-icons/fa";

const StarRating = ({ selected, onSelect, options, service = "hotel", label }) => {
    const handleClick = (id) => {
        onSelect(
            (prevSelected) =>
                prevSelected.includes(id)
                    ? prevSelected.filter((starId) => starId !== id) // Unselect if already selected
                    : [...prevSelected, id] // Select if not selected
        );
    };

    return (
        <div className={`flex  gap-2 ${service == "flight" ? "flex-row items-center" : "flex-col items-start"}`}>
            <h2 className=" capitalize font-semibold text-info_main">{label}</h2>
            <div className="flex gap-2 flex-wrap">
                {options.map((star) => (
                    <div key={star.id} onClick={() => handleClick(star.id)} className={`cursor-pointer  flex items-center px-[10px] py-[5px] text-body2 gap-1 border  rounded-md ${selected.includes(star.id) ? " bg-info_main text-white border-info_main" : " text-secondary border-secondary"}`}>
                        <FaStar className={`${service == "flight" && " hidden"}`} />
                        {star.label}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StarRating;
