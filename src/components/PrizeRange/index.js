// PriceRangeFilter.js
import { Controller } from "react-hook-form";
import { Range } from "react-range";

const PriceRangeFilter = ({ control, prize_range }) => (
    <div>
        <p className="text-subtitle1 font-semibold text-info_main mb-2 pb-1">Price Range</p>
        <Controller
            name="priceRange"
            control={control}
            render={({ field }) => (
                <Range
                    {...field}
                    step={1.2}
                    key={field.name}
                    min={1}
                    max={prize_range.max}
                    values={field.value}
                    onChange={(values) => field.onChange(values)}
                    aria-labelledby="price-range-label"
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "4px",
                                width: "100%",
                                backgroundColor: "#dbdde0",
                            }}
                        >
                            {children}
                        </div>
                    )}
                    renderThumb={({ props }) => (
                        <div
                            {...props}
                            key={props.key}
                            style={{
                                ...props.style,
                                height: "14px",
                                width: "14px",
                                backgroundColor: "#00026e",
                                borderRadius: "50%",
                            }}
                        />
                    )}
                />
            )}
        />
        <div className="flex items-center justify-between text-info_main font-serif uppercase pt-4">
            <p className="font-poppins">{`BDT ${prize_range.min}`}</p>
            <p className="font-poppins">{`BDT ${prize_range.max || prize_range.min}`}</p>
        </div>
    </div>
);

export default PriceRangeFilter;
