import { useState } from "react";

import HeroSection from "../components/sections/HeroSection";
import SimulationSection from "../components/simulation/SimulationSection";
import AmortizationTable from "../components/amortization/AmortizationTable";
import CreditRequestModal from "../components/request/CreditRequestModal";

const Home = () => {

    const [simulationResult, setSimulationResult] =
        useState(null);

    const [openModal, setOpenModal] =
        useState(false);

    const [requestCompleted, setRequestCompleted] =
        useState(false);

    return (
        <>
            <HeroSection />
            <SimulationSection simulationResult={simulationResult} onSimulate={setSimulationResult}/>
            {
                simulationResult && (
                    <AmortizationTable
                        simulation={simulationResult}
                    />
                )
            }

            {
                simulationResult && (
                    <section className="pb-24">
                        <div className="container-primary">
                            {
                                requestCompleted ? (
                                    <div className=" mx-auto mt-10 max-w-3xl rounded-4xl border p-8 text-center " style={{ borderColor: "rgba(34,197,94,0.25)", background: "rgba(34,197,94,0.08)" }}>
                                        <div className=" mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl " style={{background:"rgba(34,197,94,0.15)"}}>
                                            ✅
                                        </div>
                                        <h3 className=" mt-6 text-title font-bold " style={{color: "#22c55e" }}>
                                            Solicitud registrada
                                        </h3>
                                        <p className=" mt-4 text-body " style={{color:"var(--color-text-secondary)" }}>
                                            Hemos recibido tu solicitud exitosamente. Nuestro equipo revisará la información y se pondrá en contacto contigo próximamente para continuar el proceso.
                                        </p>
                                    </div>
                                ) : (
                                    <div className="container-primary">
                                        <button className=" button-primary mt-10 w-full " onClick={() =>setOpenModal(true) }>
                                            Solicitar crédito
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </section>
                )
            }
            <CreditRequestModal
                open={openModal}
                onClose={() =>
                    setOpenModal(false)
                }
                simulation={simulationResult}
                onSuccess={() => {
                    setRequestCompleted(true);
                }}
            />

        </>
    );
};

export default Home;