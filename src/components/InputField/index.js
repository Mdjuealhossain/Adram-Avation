const InputField = ({ label, name, type = "text", register, validation, errors, textAreaClass, inputClass, placeholder = "" }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className=" text-body2 font-light mb-1">
                {label}
            </label>
            {type === "textarea" ? (
                <textarea placeholder={placeholder} {...register(name, validation)} className={`focus:ring-1  focus:ring-primary/50 hover:ring-primary/50 text-body2 placeholder:text-body2 hover:shadow-input focus:shadow-input px-[14px] py-2 bg-white rounded focus:outline-none ring-1 ring-primary/50 focus:border-transparent ${textAreaClass}`} />
            ) : (
                <input {...register(name, validation)} placeholder={placeholder} type={type} className={`focus:ring-1 focus:ring-primary/50 hover:ring-primary/50 text-body2 placeholder:text-body2 hover:shadow-input focus:shadow-input px-[14px] py-2 bg-white rounded focus:outline-none ring-1 ring-primary/50 focus:border-transparent ${inputClass}`} />
            )}
            {errors[name] && <div className="opacity-100 text-body2 mt-1 text-error_main">{errors[name].message}</div>}
        </div>
    );
};
export default InputField;
