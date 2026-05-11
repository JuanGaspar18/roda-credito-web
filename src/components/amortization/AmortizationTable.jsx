import { useMemo, useState } from "react";

import AmortizationRow from "./AmortizationRow";
import AmortizationPagination from "./AmortizationPagination";
import AmortizationSummary from "./AmortizationSummary";

const ITEMS_PER_PAGE = 6;

const AmortizationTable = ({ simulation }) => {
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const amortizationData = simulation?.amortization_schedule || [];
    const totalPages = Math.ceil(amortizationData.length / ITEMS_PER_PAGE);
    const paginatedData = useMemo(() => {
            const start = (currentPage - 1) * ITEMS_PER_PAGE;
            return amortizationData.slice(
                start, start + ITEMS_PER_PAGE
            );
        }, [amortizationData, currentPage]);

    return (
        <section className=" mt-12 card-primary p-8 lg:p-10 ">
            <div className="mb-8">
                <h3 className="text-2xl font-semibold">
                    Tabla de amortización
                </h3>
                <p className="mt-3 text-sm" style={{color: "var(--color-text-secondary)" }}>
                    Visualiza el detalle de cada cuota y la evolución de tu financiamiento.
                </p>
            </div>
            <div className=" overflow-hidden rounded-[28px] border " style={{ borderColor:"var(--color-border)" }}>
                <div className=" w-full grid grid-cols-[0.6fr_1fr_1fr_1fr_1.2fr] gap-4 border-b px-6 py-5 text-sm font-semibold text-center" style={{ borderColor: "var(--color-border)" }}>
                    <p>Cuota</p>
                    <p>Valor cuota</p>
                    <p>Interés</p>
                    <p>Capital</p>
                    <p>Saldo restante</p>
                </div>
                <div>
                    {
                        paginatedData.map((item) => (

                            <AmortizationRow
                                key={item.installment}
                                item={item}
                            />

                        ))
                    }
                </div>
            </div>
            <AmortizationPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
            <AmortizationSummary totalInstallments={ simulation.installments } totalInterest={ simulation.total_interest } totalCapital={ simulation.financed_amount } totalPaid={ simulation.total_payment }
/>
        </section>
    );
};

export default AmortizationTable