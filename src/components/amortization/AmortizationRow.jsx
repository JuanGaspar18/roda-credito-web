const formatCurrency = (value) => { return `$ ${ Number(value || 0) .toLocaleString("es-CO") }`; };

const AmortizationRow = ({ item }) => {
    return (
        <div className=" w-full grid grid-cols-[0.6fr_1fr_1fr_1fr_1.2fr] gap-4 border-b px-6 py-5 text-sm items-center text-center " style={{ borderColor: "var(--color-border)" }}>
            <p className="font-semibold" style={{ color: "#D4FF00" }} >
                #{item.installment}
            </p>
            <p className="font-medium" style={{ color: "#FFFFFF" }}>
                { formatCurrency( item.monthly_payment ) }
            </p>
            <p className="font-medium" style={{ color: "#FF8A00" }}>
                { formatCurrency( item.interest )}
            </p>
            <p className="font-medium" style={{ color: "#22c55e" }} >
                { formatCurrency( Math.max( item.capital_payment, 0 ) ) }
            </p>
            <p style={{ color: "var(--color-text-secondary)" }} >
                { formatCurrency( Math.max( item.remaining_balance, 0 ) ) }
            </p>
        </div>
    );
};

export default AmortizationRow;