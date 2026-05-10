const RangeSlider = ({ label, value, min, max, step, onChange, }) => {

    const safeValue =
        Math.min(value, max);

    const percentage =
        ((safeValue - min) / (max - min)) * 100;

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <label className="text-sm font-medium">
                    {label}
                </label>
                <span className="text-sm font-semibold">
                    $ {Number(value).toLocaleString("es-CO")}
                </span>
            </div>
            <input type="range" min={min} max={max} step={step} value={safeValue} onChange={onChange} className="slider w-full" style={{ "--range-progress": `${percentage}%` }} />
        </div>
    );
};

export default RangeSlider;