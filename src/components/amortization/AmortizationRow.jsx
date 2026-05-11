const formatCurrency = (value) => { return `$ ${ Number(value || 0) .toLocaleString("es-CO") }`; };

const AmortizationRow = ({ item }) => {
    return (
        <div className=" w-full grid grid-cols-[0.6fr_1fr_1fr_1fr_1.2fr] gap-4 border-b px-6 py-5 text-sm items-center text-center " style={{ borderColor: "var(--color-border)" }}>
            <p className="font-semibold" style={{ color: "var(--color-accent)" }} >
                {item.installment}
            </p>
            <p className="text-xs md:text-sm lg:text-base font-medium" style={{color:"var(--color-table-primary)"}}>
                { formatCurrency( item.monthly_payment ) }
            </p>
            <p className="text-xs md:text-sm lg:text-base font-medium" style={{ color: "var(--color-warning)" }}>
                { formatCurrency( item.interest )}
            </p>
            <p className="text-xs md:text-sm lg:text-base font-medium" style={{ color: "var(--color-success)" }} >
                { formatCurrency( Math.max( item.capital_payment, 0 ) ) }
            </p>
            <p className="text-xs md:text-sm lg:text-base" style={{ color: "var(--color-text-secondary)" }} >
                { formatCurrency( Math.max( item.remaining_balance, 0 ) ) }
            </p>
        </div>
    );
};

export default AmortizationRow;