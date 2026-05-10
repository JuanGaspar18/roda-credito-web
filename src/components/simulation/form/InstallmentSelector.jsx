const options = [ 12, 24, 36, 48, 60 ];

const InstallmentSelector = ({ value, onChange }) => {
    return (
        <div className="space-y-4">
            <label className="text-sm font-medium">
                Plazo en meses
            </label>
            <div className="flex flex-wrap gap-3">
                {options.map((option) => {
                    const isActive = value === option;
                        return (
                            <button key={option} type="button" onClick={() => onChange(option)} className="rounded-2xl border px-5 py-3 font-medium transition-all" style={{background: isActive ? "var(--color-primary)" : "var(--color-surface-secondary)", color: isActive ? "#000" : "var(--color-text)", borderColor: isActive ? "var(--color-primary)" : "var(--color-border)"}}>
                                { option }
                            </button>
                        );
                    })
                }
                <input type="number" placeholder="Otro" onChange={(e) => onChange(Number(e.target.value))} className="w-24 rounded-2xl border px-4 py-3 outline-none" style={{background: "var(--color-surface-secondary)", borderColor: "var(--color-border)"}} />
            </div>
        </div>
    );
};

export default InstallmentSelector;