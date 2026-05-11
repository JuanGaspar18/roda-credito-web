import SummaryCard from "./SummaryCard";

const CreditSummary = ({ summary }) => {

    if (!summary) {
        return (
            <div className="card-primary p-8 flex items-center justify-center opacity-60">
                Ejecuta una simulación para ver el resumen
            </div>
        );
    }

    return (
        <div className="card-primary p-8 lg:p-10">
            <div className="mb-10">
                <h3 className="text-2xl font-semibold">
                    Resumen de tu crédito
                </h3>
                <p className="mt-3 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    Detalles de tu simulación de financiamiento.
                </p>
            </div>
            <div className=" rounded-4xl border p-8 flex flex-col items-center justify-center text-center" style={{ borderColor: "var(--color-primary)", background: "var(--gradient-primary)", boxShadow: "var(--glow-primary)" }}>
                <p className=" text-sm uppercase tracking-[0.2em]">
                    Tu cuota mensual sería
                </p>
                <h2 className=" mt-4 text-5xl font-bold " style={{ color: "var(--color-primary)" }}>
                    $ {summary.monthly_payment.toLocaleString("es-CO")}
                </h2>
                <p className="mt-4 text-sm">
                    Tasa de interés:
                    {" "}
                    {summary.interest_rate}%
                    mensual
                </p>
            </div>
            <div className=" mt-8 grid grid-cols-2 gap-4 ">
                <SummaryCard
                    label="Valor del vehículo"
                    value={summary.vehicle_value}
                />
                <SummaryCard
                    label="Cuota inicial"
                    value={summary.down_payment}
                />
                <SummaryCard
                    label="Valor financiado"
                    value={summary.financed_amount}
                />
                <SummaryCard
                    label="Total intereses"
                    value={summary.total_interest}
                />
            </div>
            <div className=" mt-8 flex items-center justify-between rounded-[28px] border p-6 " style={{ borderColor: "var(--color-border)", background: "var(--color-surface-secondary)" }}>
                <div>
                    <p className="text-sm">
                        Total a pagar
                    </p>
                    <p className=" mt-2 text-xs " style={{ color: "var(--color-text-secondary)" }}>
                        Cuota inicial + financiamiento
                    </p>
                </div>
                <h3 className=" text-3xl font-bold ">
                    $ {summary.total_payment.toLocaleString("es-CO")}
                </h3>
            </div>
            <p className=" mt-6 text-xs leading-relaxed " style={{ color: "var(--color-text-secondary)" }}>
                *Los valores son aproximados y pueden variar según tu perfil crediticio.
            </p>
        </div>
    );
};

export default CreditSummary;