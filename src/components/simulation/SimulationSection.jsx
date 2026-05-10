import SimulationForm from "./SimulationForm";
import CreditSummary from "./CreditSummary";

const SimulationSection = () => {

    return (
        <section className="py-28">
            <div className="container-primary">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-6 inline-flex rounded-full border px-5 py-2 text-sm font-medium" style={{background: "var(--gradient-primary)", borderColor: "rgba(212,255,0,0.15)", color: "#D4FF00"}}>
                        ⚡ Simulador de crédito
                    </div>
                    <h2 className="section-subtitle">
                        Calcula tu <span style={{color: "var(--color-primary)"}}>financiamiento</span>
                    </h2>
                    <p className="section-description mt-6">
                        Configura los parámetros de tu crédito y conoce tu cuota mensual al instante.
                    </p>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Formulario de simulacion de credito */}
                    <SimulationForm />
                    {/* Resumen de credito simulado */}
                    <CreditSummary />
                </div>
            </div>
        </section>
    );
};

export default SimulationSection;