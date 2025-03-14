import React from "react";

const TimeFilter = ({ times, isTime, handleTimeSelect, labelClassName, itemClassName, label }) => {
    return (
        <div>
            <p className={`text-subtitle1 font-semibold text-info_main pb-1 capitalize ${labelClassName}`}>{label}</p>
            <div className="grid grid-cols-4 border rounded">
                {times.map((time) => (
                    <div key={time.id} onClick={() => handleTimeSelect(time.id)} className={`${isTime.includes(time.id) ? "bg-info_main text-white" : ""} ${itemClassName} py-1 xl:px-[14px] cursor-pointer text-[10px] font-light whitespace-nowrap border-r gap-1 border-divider_2 flex flex-col items-center justify-center`}>
                        {/* Use the icon dynamically from the time object */}

                        {time.icon && React.createElement(time.icon, { className: `${isTime.includes(time.id) ? "text-white" : "text-info_light"} h-4 w-4` })}
                        <p className="">{time.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeFilter;
