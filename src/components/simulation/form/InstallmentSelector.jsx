import { useState } from "react";

const options = [12, 24, 36, 48, 60];

const InstallmentSelector = ({ value, onChange }) => {

    const [customValue, setCustomValue] = useState("");

    const [error, setError] = useState("");

    const handleCustomInstallments = (e) => {
        const inputValue = e.target.value;
        setCustomValue(inputValue);
        if (inputValue === "") { setError(""); return; }
        const numericValue = Number(inputValue);
        if (numericValue < 6) {
            setError(
                "El plazo mínimo es de 6 meses."
            );
            return;
        }
        setError("");
        onChange(numericValue);
    };

    const handleOptionClick = (option) => {
        setCustomValue("");
        setError("");
        onChange(option);
    };

    return (
        <div className="space-y-4">
            <label className="text-sm font-medium">
                Plazo en meses
            </label>
            <div className="flex flex-wrap gap-3">
                {
                    options.map((option) => {
                        const isCustomActive = customValue !== "";
                        const isActive = !isCustomActive && value === option;
                        return (
                            <button key={option} type="button" onClick={() => handleOptionClick(option) } className=" rounded-2xl border px-5 py-3 font-medium transition-all " style={{ background: isActive ? "var(--color-primary)" : "var(--color-surface-secondary)", color: isActive ? "#000" : "var(--color-text)", borderColor: isActive ? "var(--color-primary)" : "var(--color-border)" }}>
                                {option}
                            </button>
                        );
                    })
                }
                <input type="number" min={6} placeholder="Otro" value={customValue} onChange={handleCustomInstallments} className=" w-24 rounded-2xl border px-4 py-3 outline-none " style={{ background: "var(--color-surface-secondary)", borderColor: error ? "#ef4444" : customValue !== "" ? "var(--color-primary)" : "var(--color-border)" }}/>
            </div>
            {
                error && (
                    <p className="text-sm" style={{ color: "#ef4444" }} >
                        {error}
                    </p>
                )
            }
        </div>
    );
};

export default InstallmentSelector;