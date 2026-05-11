const formatCurrency = (value) => { return `$ ${ Number(value || 0) .toLocaleString("es-CO") }`; };

const AmortizationSummary = ({ totalInstallments, totalInterest, totalCapital, totalPaid }) => {
    return (
        <div className="mt-10 grid grid-cols-2 gap-4">
            <SummaryItem label="Total cuotas" value={ Number( totalInstallments || 0 ) } />
            <SummaryItem label="Total intereses" value={ formatCurrency(totalInterest) } />
            <SummaryItem label="Total capital" value={ formatCurrency(totalCapital) } />
            <SummaryItem label="Total pagado" value={ formatCurrency(totalPaid) } />
        </div>
    );
};

const SummaryItem = ({ label, value }) => {
    return (
        <div className=" rounded-3xl border p-5 " style={{ borderColor: "var(--color-border)", background: "var(--color-surface-secondary)" }}>
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                {label}
            </p>
            <h4 className="mt-3 text-2xl font-bold">
                {value}
            </h4>
        </div>
    );
};

export default AmortizationSummary;