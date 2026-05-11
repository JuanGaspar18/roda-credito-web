const SummaryCard = ({ label, value }) => {
    return (
        <div className=" rounded-3xl border p-5 " style={{ borderColor: "var(--color-border)", background: "var(--color-surface-secondary)"}}>
            <p className="text-sm" style={{ color:"var(--color-text-secondary)" }}>
                {label}
            </p>
            <h4 className="mt-3 text-xl font-semibold">
                ${" "}{Number(value || 0).toLocaleString("es-CO")}
            </h4>
        </div>
    );
};

export default SummaryCard;